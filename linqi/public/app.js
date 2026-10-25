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
      const res = await fetch('/api/links', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
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
    const res = await fetch('/api/links');
    if (!res.ok) return;
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
      await fetch(`/api/links/${encodeURIComponent(link.code)}`, { method: 'DELETE' });
      loadRecent();
    });
    meta.append(clicks, copyItem, del);

    li.append(a, meta, long);
    return li;
  }

  loadRecent();
})();
