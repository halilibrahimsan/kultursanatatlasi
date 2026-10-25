(() => {
  const $ = (id) => document.getElementById(id);
  const form = $('shorten-form');
  const urlInput = $('url');
  const aliasInput = $('alias');
  const submit = $('submit');
  const errorEl = $('error');
  const result = $('result');
  const shortUrl = $('short-url');
  const longUrl = $('long-url');
  const copyBtn = $('copy');
  const qr = $('qr');

  $('prefix').textContent = `${location.host}/`;

  const loginForm = $('login-form');
  const loginError = $('login-error');
  const logoutBtn = $('logout');

  function showLogin(message = '') {
    loginForm.hidden = false;
    form.hidden = true;
    result.hidden = true;
    $('recent-card').hidden = true;
    logoutBtn.hidden = true;
    loginError.textContent = message;
    loginError.hidden = !message;
    $('password').focus();
  }

  function showApp(authRequired) {
    loginForm.hidden = true;
    form.hidden = false;
    logoutBtn.hidden = !authRequired;
    loadRecent();
  }

  async function api(path, options = {}) {
    const res = await fetch(path, { ...options, headers: { 'Content-Type': 'application/json', ...options.headers } });
    if (res.status === 401 && path !== '/api/session') {
      showLogin('Oturumunuz sona erdi, lütfen tekrar giriş yapın.');
      throw new Error('Giriş yapmanız gerekiyor.');
    }
    return res;
  }

  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const button = $('login-submit');
    button.disabled = true;
    try {
      const res = await api('/api/session', { method: 'POST', body: JSON.stringify({ password: $('password').value }) });
      const data = await res.json();
      if (!res.ok) return showLogin(data.error || 'Giriş yapılamadı.');
      $('password').value = '';
      showApp(true);
    } finally {
      button.disabled = false;
    }
  });

  logoutBtn.addEventListener('click', async () => {
    await api('/api/session', { method: 'DELETE' });
    showLogin();
  });

  function showError(message) {
    errorEl.textContent = message;
    errorEl.hidden = !message;
  }

  async function copy(text, button) {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = Object.assign(document.createElement('textarea'), { value: text });
      document.body.append(ta);
      ta.select();
      document.execCommand('copy');
      ta.remove();
    }
    const label = button.textContent;
    button.textContent = 'Kopyalandı ✓';
    setTimeout(() => (button.textContent = label), 1500);
  }

  function renderQr(text) {
    qr.replaceChildren();
    if (typeof window.qrcode !== 'function') return;
    const code = window.qrcode(0, 'M');
    code.addData(text);
    code.make();
    qr.innerHTML = code.createImgTag(5, 0);
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    showError('');
    submit.disabled = true;
    submit.textContent = 'Kısaltılıyor…';
    try {
      const res = await api('/api/links', {
        method: 'POST',
        body: JSON.stringify({ url: urlInput.value, alias: aliasInput.value }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Bir hata oluştu.');

      shortUrl.href = shortUrl.textContent = data.shortUrl;
      longUrl.textContent = data.url;
      longUrl.title = data.url;
      result.hidden = false;
      renderQr(data.shortUrl);
      aliasInput.value = '';
      loadRecent();
    } catch (err) {
      showError(err.message);
    } finally {
      submit.disabled = false;
      submit.textContent = 'Kısalt';
    }
  });

  copyBtn.addEventListener('click', () => copy(shortUrl.textContent, copyBtn));

  async function loadRecent() {
    const res = await api('/api/links').catch(() => null);
    if (!res || !res.ok) return;
    const { links } = await res.json();
    const list = $('recent');
    list.replaceChildren(...links.map(renderItem));
    $('recent-card').hidden = links.length === 0;
  }

  function renderItem(link) {
    const li = document.createElement('li');

    const a = Object.assign(document.createElement('a'), { href: link.shortUrl, target: '_blank', rel: 'noopener', textContent: link.shortUrl.replace(/^https?:\/\//, '') });
    const long = Object.assign(document.createElement('span'), { className: 'long', textContent: link.url, title: link.url });

    const meta = Object.assign(document.createElement('div'), { className: 'meta' });
    const clicks = Object.assign(document.createElement('span'), { className: 'clicks', textContent: `${link.clicks} tık` });
    const copyItem = Object.assign(document.createElement('button'), { className: 'btn', type: 'button', textContent: 'Kopyala' });
    copyItem.addEventListener('click', () => copy(link.shortUrl, copyItem));
    const del = Object.assign(document.createElement('button'), { className: 'btn', type: 'button', textContent: 'Sil', title: 'Bağlantıyı sil' });
    del.addEventListener('click', async () => {
      if (!confirm(`${link.code} silinsin mi?`)) return;
      await api(`/api/links/${encodeURIComponent(link.code)}`, { method: 'DELETE' });
      loadRecent();
    });
    meta.append(clicks, copyItem, del);

    li.append(a, meta, long);
    return li;
  }

  fetch('/api/session')
    .then((res) => res.json())
    .then(({ authRequired, authed }) => (authed ? showApp(authRequired) : showLogin()))
    .catch(() => showLogin('Sunucuya ulaşılamadı.'));
})();
