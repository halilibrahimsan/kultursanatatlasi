'use strict';

// Runs only when TEST_DATABASE_URL points at a disposable Postgres database.
const { test } = require('node:test');
const assert = require('node:assert/strict');
const { PgStore } = require('../lib/pg-store');

const url = process.env.TEST_DATABASE_URL;

test('PgStore persists links across reconnects', { skip: !url && 'TEST_DATABASE_URL tanımlı değil' }, async () => {
  const first = await PgStore.connect(url);
  await first.pool.query('DELETE FROM links');
  first.add({ code: 'abc123', url: 'https://example.com', custom: false, clicks: 0, createdAt: new Date().toISOString(), lastClickedAt: null });
  first.hit('abc123');
  first.hit('abc123');
  first.add({ code: 'silinecek', url: 'https://example.org', custom: true, clicks: 0, createdAt: new Date().toISOString(), lastClickedAt: null });
  first.remove('silinecek');
  await new Promise((r) => setTimeout(r, 200));
  await first.close();

  const second = await PgStore.connect(url);
  const link = second.get('abc123');
  assert.equal(link.url, 'https://example.com');
  assert.equal(link.clicks, 2);
  assert.ok(link.lastClickedAt);
  assert.equal(second.has('silinecek'), false);
  await second.close();
});
