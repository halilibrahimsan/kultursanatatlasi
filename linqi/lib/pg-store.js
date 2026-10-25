'use strict';

const { Store } = require('./store');

// Postgres-backed store. All links are kept in memory (loaded once at startup)
// so reads stay synchronous; every change is written through to the database.
class PgStore extends Store {
  static async connect(connectionString) {
    const { Pool } = require('pg');
    const ssl = /localhost|127\.0\.0\.1/.test(connectionString) ? false : { rejectUnauthorized: false };
    const pool = new Pool({ connectionString, ssl, max: 3 });
    await pool.query(`CREATE TABLE IF NOT EXISTS links (
      code TEXT PRIMARY KEY,
      url TEXT NOT NULL,
      custom BOOLEAN NOT NULL DEFAULT FALSE,
      clicks INTEGER NOT NULL DEFAULT 0,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
      last_clicked_at TIMESTAMPTZ
    )`);
    const store = new PgStore(null);
    store.pool = pool;
    const { rows } = await pool.query('SELECT * FROM links');
    for (const r of rows) {
      store.links.set(r.code, {
        code: r.code,
        url: r.url,
        custom: r.custom,
        clicks: r.clicks,
        createdAt: r.created_at.toISOString(),
        lastClickedAt: r.last_clicked_at ? r.last_clicked_at.toISOString() : null,
      });
    }
    return store;
  }

  run(sql, params) {
    this.pool.query(sql, params).catch((err) => console.error('[linqi] veritabanı hatası:', err.message));
  }

  add(link) {
    super.add(link);
    this.run('INSERT INTO links (code, url, custom, clicks, created_at) VALUES ($1, $2, $3, $4, $5) ON CONFLICT (code) DO NOTHING',
      [link.code, link.url, link.custom, link.clicks, link.createdAt]);
    return link;
  }

  remove(code) {
    const removed = super.remove(code);
    if (removed) this.run('DELETE FROM links WHERE code = $1', [code]);
    return removed;
  }

  hit(code) {
    const link = super.hit(code);
    if (link) this.run('UPDATE links SET clicks = clicks + 1, last_clicked_at = $2 WHERE code = $1', [code, link.lastClickedAt]);
    return link;
  }

  async close() {
    await this.pool.end();
  }
}

module.exports = { PgStore };
