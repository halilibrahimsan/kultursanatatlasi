'use strict';

const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const { Store } = require('./lib/store');
const { generateCode, normalizeUrl, validateAlias } = require('./lib/shortener');
const { createAuth } = require('./lib/auth');

const PUBLIC_DIR = path.join(__dirname, 'public');
const MIME = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.svg': 'image/svg+xml' };

function send(res, status, body, headers = {}) {
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8', ...headers });
  res.end(typeof body === 'string' ? body : JSON.stringify(body));
}

function readJson(req, limit = 16 * 1024) {
  return new Promise((resolve, reject) => {
    let size = 0;
    const chunks = [];
    req.on('data', (chunk) => {
      size += chunk.length;
      if (size > limit) {
        reject(Object.assign(new Error('İstek çok büyük.'), { status: 413 }));
        req.destroy();
      } else chunks.push(chunk);
    });
    req.on('end', () => {
      try {
        resolve(chunks.length ? JSON.parse(Buffer.concat(chunks).toString('utf8')) : {});
      } catch {
        reject(Object.assign(new Error('Geçersiz JSON.'), { status: 400 }));
      }
    });
    req.on('error', reject);
  });
}

function originOf(req, baseUrl) {
  if (baseUrl) return baseUrl.replace(/\/$/, '');
  const proto = req.headers['x-forwarded-proto'] || 'http';
  return `${proto}://${req.headers.host}`;
}

function clientIp(req) {
  // Behind Render's proxy the last X-Forwarded-For entry is the one the proxy added.
  const forwarded = (req.headers['x-forwarded-for'] || '').split(',').map((s) => s.trim()).filter(Boolean);
  return forwarded.at(-1) || req.socket.remoteAddress;
}

function isJson(req) {
  return (req.headers['content-type'] || '').startsWith('application/json');
}

function serveStatic(res, file) {
  const resolved = path.join(PUBLIC_DIR, file);
  if (!resolved.startsWith(PUBLIC_DIR) || !fs.existsSync(resolved) || fs.statSync(resolved).isDirectory()) return false;
  res.writeHead(200, { 'Content-Type': MIME[path.extname(resolved)] || 'application/octet-stream' });
  fs.createReadStream(resolved).pipe(res);
  return true;
}

function createApp({ store = new Store(null), baseUrl, auth = createAuth({}) } = {}) {
  const view = (req, link) => ({ ...link, shortUrl: `${originOf(req, baseUrl)}/${link.code}` });

  return async function handler(req, res) {
    const { pathname } = new URL(req.url, 'http://localhost');

    try {
      if (pathname.startsWith('/api/') && req.method === 'POST' && !isJson(req)) {
        return send(res, 415, { error: 'İstek JSON olmalı.' });
      }

      if (pathname === '/api/session' && req.method === 'GET') {
        return send(res, 200, { authRequired: auth.enabled, authed: auth.isAuthed(req) });
      }

      if (pathname === '/api/session' && req.method === 'POST') {
        const body = await readJson(req);
        const result = auth.login(clientIp(req), body.password);
        if (!result.ok) return send(res, result.status, { error: result.error });
        const secure = originOf(req, baseUrl).startsWith('https:');
        return send(res, 200, { authed: true }, auth.enabled ? { 'Set-Cookie': auth.cookie(result.token, secure) } : {});
      }

      if (pathname === '/api/session' && req.method === 'DELETE') {
        res.writeHead(204, { 'Set-Cookie': auth.cookie('', originOf(req, baseUrl).startsWith('https:')) });
        return res.end();
      }

      if (pathname.startsWith('/api/') && !auth.isAuthed(req)) {
        return send(res, 401, { error: 'Giriş yapmanız gerekiyor.' });
      }

      if (pathname === '/api/links' && req.method === 'POST') {
        const body = await readJson(req);
        const url = normalizeUrl(body.url);
        const alias = typeof body.alias === 'string' ? body.alias.trim() : '';

        if (alias) {
          validateAlias(alias);
          if (store.has(alias)) return send(res, 409, { error: 'Bu özel ad zaten kullanılıyor.' });
          return send(res, 201, view(req, store.add(newLink(alias, url, true))));
        }

        const existing = store.findByUrl(url);
        if (existing) return send(res, 200, view(req, existing));

        let code;
        do code = generateCode(); while (store.has(code));
        return send(res, 201, view(req, store.add(newLink(code, url, false))));
      }

      if (pathname === '/api/links' && req.method === 'GET') {
        return send(res, 200, { links: store.recent().map((l) => view(req, l)) });
      }

      const apiMatch = pathname.match(/^\/api\/links\/([A-Za-z0-9_-]+)$/);
      if (apiMatch) {
        const link = store.get(apiMatch[1]);
        if (!link) return send(res, 404, { error: 'Bağlantı bulunamadı.' });
        if (req.method === 'GET') return send(res, 200, view(req, link));
        if (req.method === 'DELETE') {
          store.remove(link.code);
          res.writeHead(204);
          return res.end();
        }
        return send(res, 405, { error: 'Desteklenmeyen işlem.' });
      }

      if (pathname === '/health') return send(res, 200, { ok: true });

      if (req.method === 'GET' || req.method === 'HEAD') {
        if (pathname === '/') return serveStatic(res, 'index.html');
        if (serveStatic(res, pathname.slice(1))) return;

        const code = pathname.slice(1);
        const link = /^[A-Za-z0-9_-]+$/.test(code) && store.hit(code);
        if (link) {
          res.writeHead(302, { Location: link.url, 'Cache-Control': 'no-store' });
          return res.end();
        }
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        return res.end(notFoundPage());
      }

      return send(res, 405, { error: 'Desteklenmeyen işlem.' });
    } catch (err) {
      return send(res, err.status || 400, { error: err.message || 'Bir hata oluştu.' });
    }
  };
}

function newLink(code, url, custom) {
  return { code, url, custom, clicks: 0, createdAt: new Date().toISOString(), lastClickedAt: null };
}

function notFoundPage() {
  return `<!doctype html><html lang="tr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Linqi — Bulunamadı</title><link rel="stylesheet" href="/styles.css"></head>
<body><main class="shell"><section class="card"><header class="brand"><h1>LINQI</h1><p class="tagline">LINKS, SIMPLIFIED.</p></header><hr>
<p class="muted center">Bu kısa bağlantı bulunamadı ya da silinmiş.</p><p class="center"><a class="btn" href="/">Yeni bağlantı oluştur</a></p></section></main></body></html>`;
}

async function main() {
  const env = process.env;
  const port = Number(env.PORT) || 3000;

  let store;
  if (env.DATABASE_URL) {
    const { PgStore } = require('./lib/pg-store');
    store = await PgStore.connect(env.DATABASE_URL);
    console.log(`Depolama: Postgres (${store.links.size} bağlantı yüklendi)`);
  } else {
    store = new Store(env.LINQI_DATA || path.join(__dirname, 'data', 'links.json'));
    console.log(`Depolama: JSON dosyası (${store.file})`);
    if (env.RENDER) console.warn('UYARI: Render diski kalıcı değil; DATABASE_URL tanımlanmazsa bağlantılar yeniden başlatmada silinir.');
  }

  const auth = createAuth({ password: env.ADMIN_PASSWORD, secret: env.SESSION_SECRET });
  if (!auth.enabled) console.warn('UYARI: ADMIN_PASSWORD tanımlı değil; yönetim ekranı herkese açık.');

  const baseUrl = env.BASE_URL || env.RENDER_EXTERNAL_URL;
  const server = http.createServer(createApp({ store, baseUrl, auth }));
  server.listen(port, () => console.log(`Linqi çalışıyor → http://localhost:${port}`));
  for (const sig of ['SIGINT', 'SIGTERM']) process.on(sig, () => { store.flush(); process.exit(0); });
}

if (require.main === module) {
  main().catch((err) => {
    console.error('Linqi başlatılamadı:', err.message);
    process.exit(1);
  });
}

module.exports = { createApp };
