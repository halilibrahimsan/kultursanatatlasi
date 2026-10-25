'use strict';

const { test, before, after } = require('node:test');
const assert = require('node:assert/strict');
const http = require('node:http');
const { createApp } = require('../server');
const { createAuth } = require('../lib/auth');

let server;
let base;

before(async () => {
  server = http.createServer(createApp({ auth: createAuth({ password: 'gizli-sifre', secret: 'test' }) }));
  await new Promise((r) => server.listen(0, r));
  base = `http://localhost:${server.address().port}`;
});

after(() => server.close());

const json = { 'Content-Type': 'application/json' };
const login = (password) => fetch(`${base}/api/session`, { method: 'POST', headers: json, body: JSON.stringify({ password }) });

test('API is locked without a session, redirects stay public', async () => {
  assert.equal((await fetch(`${base}/api/links`)).status, 401);
  const res = await fetch(`${base}/api/links`, { method: 'POST', headers: json, body: JSON.stringify({ url: 'https://example.com' }) });
  assert.equal(res.status, 401);
  assert.deepEqual(await (await fetch(`${base}/api/session`)).json(), { authRequired: true, authed: false });
});

test('wrong password is rejected, right password grants a session', async () => {
  assert.equal((await login('yanlis')).status, 401);

  const res = await login('gizli-sifre');
  assert.equal(res.status, 200);
  const cookie = res.headers.get('set-cookie').split(';')[0];
  assert.match(res.headers.get('set-cookie'), /HttpOnly/);

  const created = await fetch(`${base}/api/links`, { method: 'POST', headers: { ...json, cookie }, body: JSON.stringify({ url: 'https://example.com/a' }) });
  assert.equal(created.status, 201);
  const { code } = await created.json();

  // Visitors without a session can still follow the short link.
  const redirect = await fetch(`${base}/${code}`, { redirect: 'manual' });
  assert.equal(redirect.status, 302);
});

test('tampered cookie is rejected', async () => {
  const res = await fetch(`${base}/api/links`, { headers: { cookie: `linqi_session=9999999999.forged` } });
  assert.equal(res.status, 401);
});

test('non-JSON writes are refused', async () => {
  const res = await fetch(`${base}/api/session`, { method: 'POST', headers: { 'Content-Type': 'text/plain' }, body: '{"password":"x"}' });
  assert.equal(res.status, 415);
});

test('login is rate limited after repeated failures', async () => {
  const auth = createAuth({ password: 'p' });
  for (let i = 0; i < 10; i++) assert.equal(auth.login('1.2.3.4', 'x').status, 401);
  assert.equal(auth.login('1.2.3.4', 'p').status, 429);
  assert.equal(auth.login('5.6.7.8', 'p').ok, true);
});
