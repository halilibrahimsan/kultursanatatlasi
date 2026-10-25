'use strict';

const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const { Store } = require('./lib/store');
const { generateCode, normalizeUrl, validateAlias } = require('./lib/shortener');

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

function serveStatic(res, file) {
  const resolved = path.join(PUBLIC_DIR, file);
  if (!resolved.startsWith(PUBLIC_DIR) || !fs.existsSync(resolved) || fs.statSync(resolved).isDirectory()) return false;
  res.writeHead(200, { 'Content-Type': MIME[path.extname(resolved)] || 'application/octet-stream' });
  fs.createReadStream(resolved).pipe(res);
  return true;
}

function createApp({ store = new Store(null), baseUrl } = {}) {
  const view = (req, link) => ({ ...link, shortUrl: `${originOf(req, baseUrl)}/${link.code}` });

  return async function handler(req, res) {
    const { pathname } = new URL(req.url, 'http://localhost');

    try {
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

if (require.main === module) {
  const port = Number(process.env.PORT) || 3000;
  const store = new Store(process.env.LINQI_DATA || path.join(__dirname, 'data', 'links.json'));
  const server = http.createServer(createApp({ store, baseUrl: process.env.BASE_URL }));
  server.listen(port, () => console.log(`Linqi çalışıyor → http://localhost:${port}`));
  for (const sig of ['SIGINT', 'SIGTERM']) process.on(sig, () => { store.flush(); process.exit(0); });
}

module.exports = { createApp };
