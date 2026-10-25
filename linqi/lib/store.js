'use strict';

const fs = require('node:fs');
const path = require('node:path');

// A small JSON-file store. Writes are atomic (temp file + rename) and debounced
// so that click counting doesn't hit the disk on every redirect.
class Store {
  constructor(file) {
    this.file = file;
    this.links = new Map();
    this.timer = null;
    if (file && fs.existsSync(file)) {
      const data = JSON.parse(fs.readFileSync(file, 'utf8'));
      for (const link of data.links || []) this.links.set(link.code, link);
    }
  }

  has(code) {
    return this.links.has(code);
  }

  get(code) {
    return this.links.get(code);
  }

  findByUrl(url) {
    for (const link of this.links.values()) if (link.url === url && !link.custom) return link;
    return undefined;
  }

  add(link) {
    this.links.set(link.code, link);
    this.save();
    return link;
  }

  remove(code) {
    const removed = this.links.delete(code);
    if (removed) this.save();
    return removed;
  }

  hit(code) {
    const link = this.links.get(code);
    if (!link) return undefined;
    link.clicks += 1;
    link.lastClickedAt = new Date().toISOString();
    this.save();
    return link;
  }

  recent(limit = 20) {
    return [...this.links.values()]
      .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
      .slice(0, limit);
  }

  save() {
    if (!this.file || this.timer) return;
    this.timer = setTimeout(() => this.flush(), 250);
    this.timer.unref?.();
  }

  flush() {
    clearTimeout(this.timer);
    this.timer = null;
    if (!this.file) return;
    fs.mkdirSync(path.dirname(this.file), { recursive: true });
    const tmp = `${this.file}.tmp`;
    fs.writeFileSync(tmp, JSON.stringify({ links: [...this.links.values()] }, null, 2));
    fs.renameSync(tmp, this.file);
  }
}

module.exports = { Store };
