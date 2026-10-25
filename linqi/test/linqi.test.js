'use strict';

const { test, before, after } = require('node:test');
const assert = require('node:assert/strict');
const http = require('node:http');
const { createApp } = require('../server');
const { normalizeUrl } = require('../lib/shortener');

let server;
let base;

before(async () => {
  server = http.createServer(createApp());
  await new Promise((r) => server.listen(0, r));
  base = `http://localhost:${server.address().port}`;
});

after(() => server.close());

const post = (body) => fetch(`${base}/api/links`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });

test('normalizeUrl adds https and rejects bad schemes', () => {
  assert.equal(normalizeUrl('ornek.com/a'), 'https://ornek.com/a');
  assert.throws(() => normalizeUrl('javascript:alert(1)'));
  assert.throws(() => normalizeUrl('ftp://ornek.com'));
  assert.throws(() => normalizeUrl(''));
});

test('shortens a URL and redirects, counting clicks', async () => {
  const res = await post({ url: 'https://example.com/very/long/path?x=1' });
  assert.equal(res.status, 201);
  const link = await res.json();
  assert.match(link.code, /^[A-Za-z0-9]{6}$/);
  assert.equal(link.shortUrl, `${base}/${link.code}`);

  const redirect = await fetch(link.shortUrl, { redirect: 'manual' });
  assert.equal(redirect.status, 302);
  assert.equal(redirect.headers.get('location'), 'https://example.com/very/long/path?x=1');

  const stats = await (await fetch(`${base}/api/links/${link.code}`)).json();
  assert.equal(stats.clicks, 1);
});

test('reuses the code for the same URL', async () => {
  const a = await (await post({ url: 'https://reuse.example.com' })).json();
  const b = await post({ url: 'https://reuse.example.com' });
  assert.equal(b.status, 200);
  assert.equal((await b.json()).code, a.code);
});

test('custom alias: created, duplicate rejected, reserved rejected', async () => {
  assert.equal((await post({ url: 'https://example.com', alias: 'kultur-gecesi' })).status, 201);
  assert.equal((await post({ url: 'https://example.org', alias: 'kultur-gecesi' })).status, 409);
  assert.equal((await post({ url: 'https://example.org', alias: 'api' })).status, 400);
  assert.equal((await post({ url: 'https://example.org', alias: 'a b' })).status, 400);
});

test('invalid URL returns 400 with a message', async () => {
  const res = await post({ url: 'not a url' });
  assert.equal(res.status, 400);
  assert.ok((await res.json()).error);
});

test('delete removes a link; unknown code is 404', async () => {
  const { code } = await (await post({ url: 'https://delete.example.com' })).json();
  assert.equal((await fetch(`${base}/api/links/${code}`, { method: 'DELETE' })).status, 204);
  assert.equal((await fetch(`${base}/${code}`, { redirect: 'manual' })).status, 404);
});

test('serves the app and lists recent links', async () => {
  const page = await fetch(base);
  assert.equal(page.status, 200);
  assert.match(await page.text(), /LINQI/);
  const { links } = await (await fetch(`${base}/api/links`)).json();
  assert.ok(links.length >= 1);
});
