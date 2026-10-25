'use strict';

const crypto = require('node:crypto');

const ALPHABET = 'abcdefghijkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789';
const CODE_LENGTH = 6;
const ALIAS_PATTERN = /^[A-Za-z0-9_-]{3,32}$/;
const RESERVED = new Set(['api', 'assets', 'static', 'admin', 'stats', 'health', 'favicon.ico', 'index.html', 'app.js', 'styles.css']);
const MAX_URL_LENGTH = 2048;

function generateCode(length = CODE_LENGTH) {
  const bytes = crypto.randomBytes(length);
  let code = '';
  for (let i = 0; i < length; i++) code += ALPHABET[bytes[i] % ALPHABET.length];
  return code;
}

// Returns a normalized URL string, or throws with a user-facing message.
function normalizeUrl(input) {
  if (typeof input !== 'string' || !input.trim()) throw new Error('Lütfen bir bağlantı girin.');
  let raw = input.trim();
  if (raw.length > MAX_URL_LENGTH) throw new Error('Bağlantı çok uzun.');
  if (!/^[a-z][a-z0-9+.-]*:\/\//i.test(raw)) raw = `https://${raw}`;

  let url;
  try {
    url = new URL(raw);
  } catch {
    throw new Error('Geçerli bir bağlantı girin.');
  }
  if (url.protocol !== 'http:' && url.protocol !== 'https:') throw new Error('Yalnızca http ve https bağlantıları kısaltılabilir.');
  if (!url.hostname.includes('.') && url.hostname !== 'localhost') throw new Error('Geçerli bir alan adı girin.');
  return url.toString();
}

function validateAlias(alias) {
  if (!ALIAS_PATTERN.test(alias)) throw new Error('Özel ad 3–32 karakter olmalı; yalnızca harf, rakam, - ve _ içerebilir.');
  if (RESERVED.has(alias.toLowerCase())) throw new Error('Bu ad sistem tarafından ayrılmış.');
  return alias;
}

module.exports = { generateCode, normalizeUrl, validateAlias, ALIAS_PATTERN };
