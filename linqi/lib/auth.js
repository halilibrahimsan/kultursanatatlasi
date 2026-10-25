'use strict';

const crypto = require('node:crypto');

const COOKIE = 'linqi_session';
const MAX_AGE = 60 * 60 * 24 * 30; // 30 days
const MAX_ATTEMPTS = 10;
const WINDOW_MS = 15 * 60 * 1000;

// Single-admin password auth with an HMAC-signed session cookie.
// When no password is configured, auth is disabled (local development).
function createAuth({ password, secret }) {
  const enabled = Boolean(password);
  const key = secret || crypto.createHash('sha256').update(`linqi:${password || ''}`).digest('hex');
  const attempts = new Map();

  const sign = (value) => crypto.createHmac('sha256', key).update(value).digest('base64url');

  function safeEqual(a, b) {
    const ha = crypto.createHash('sha256').update(a).digest();
    const hb = crypto.createHash('sha256').update(b).digest();
    return crypto.timingSafeEqual(ha, hb);
  }

  function readCookie(req) {
    const header = req.headers.cookie || '';
    for (const part of header.split(';')) {
      const [name, ...rest] = part.trim().split('=');
      if (name === COOKIE) return rest.join('=');
    }
    return null;
  }

  function isAuthed(req) {
    if (!enabled) return true;
    const token = readCookie(req);
    if (!token) return false;
    const [expires, sig] = token.split('.');
    if (!expires || !sig || Number(expires) < Date.now() / 1000) return false;
    return safeEqual(sig, sign(expires));
  }

  // Failed logins are counted per client IP; past the limit, logins are refused until the window resets.
  function tooManyAttempts(ip) {
    const now = Date.now();
    const entry = attempts.get(ip);
    if (!entry || now - entry.start > WINDOW_MS) return false;
    return entry.count >= MAX_ATTEMPTS;
  }

  function recordFailure(ip) {
    const now = Date.now();
    const entry = attempts.get(ip);
    if (!entry || now - entry.start > WINDOW_MS) attempts.set(ip, { start: now, count: 1 });
    else entry.count += 1;
  }

  function login(ip, candidate) {
    if (!enabled) return { ok: true };
    if (tooManyAttempts(ip)) return { ok: false, status: 429, error: 'Çok fazla deneme. Lütfen 15 dakika sonra tekrar deneyin.' };
    if (typeof candidate !== 'string' || !safeEqual(candidate, password)) {
      recordFailure(ip);
      return { ok: false, status: 401, error: 'Şifre hatalı.' };
    }
    attempts.delete(ip);
    const expires = String(Math.floor(Date.now() / 1000) + MAX_AGE);
    return { ok: true, token: `${expires}.${sign(expires)}` };
  }

  function cookie(token, secure) {
    const attrs = [`${COOKIE}=${token}`, 'Path=/', 'HttpOnly', 'SameSite=Lax', `Max-Age=${token ? MAX_AGE : 0}`];
    if (secure) attrs.push('Secure');
    return attrs.join('; ');
  }

  return { enabled, isAuthed, login, cookie };
}

module.exports = { createAuth };
