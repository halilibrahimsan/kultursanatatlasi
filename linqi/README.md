# LINQI — Links, simplified.

*Your links. Shorter. Smarter.*

Linqi, Node.js ile yazılmış, şifreyle korunan bir URL kısaltıcıdır.

## Özellikler

- Uzun bağlantıyı 6 karakterlik kısa koda çevirme (`/gEhwTh`)
- Özel ad desteği (`/kultur-gecesi`)
- Aynı bağlantı tekrar kısaltılınca aynı kod döner
- Tık sayacı ve son tıklama zamanı
- Kopyala, sil, QR kod
- Son bağlantılar listesi
- Yalnızca `http`/`https` kabul edilir; `https://` yazılmazsa otomatik eklenir
- Yönetici şifresiyle giriş; kısa bağlantılara tıklayanlar şifre görmez
- Bağlantılar JSON dosyasında ya da Postgres'te saklanır

## Çalıştırma

```bash
cd linqi
npm install
npm start          # http://localhost:3000
npm test
```

| Ortam değişkeni | Açıklama | Varsayılan |
| --- | --- | --- |
| `PORT` | Sunucu portu | `3000` |
| `BASE_URL` | Kısa bağlantılarda kullanılacak alan adı (ör. `https://lnq.link`) | İstekteki host |
| `ADMIN_PASSWORD` | Yönetici şifresi. Tanımlı değilse giriş istenmez (yalnızca yerelde kullanın) | — |
| `SESSION_SECRET` | Oturum çerezini imzalayan gizli anahtar | Şifreden türetilir |
| `DATABASE_URL` | Postgres bağlantı adresi. Tanımlıysa JSON dosyası yerine kullanılır | — |
| `LINQI_DATA` | Bağlantıların saklandığı JSON dosyası | `data/links.json` |

## API

| İstek | Açıklama |
| --- | --- |
| `GET /api/session` · `POST /api/session` `{ "password": "..." }` · `DELETE /api/session` | Oturum durumu, giriş, çıkış |
| `POST /api/links` `{ "url": "...", "alias": "isteğe-bağlı" }` | Kısa bağlantı oluşturur (201; aynı URL için 200) |
| `GET /api/links` | Son 20 bağlantı |
| `GET /api/links/:code` | Bağlantı istatistikleri |
| `DELETE /api/links/:code` | Bağlantıyı siler |
| `GET /:code` | Hedefe 302 ile yönlendirir |

## Render'a yayınlama

Render'ın ücretsiz planında sunucu diski kalıcı değildir: her yeniden başlatmada dosyalar silinir.
Bu yüzden bağlantılar ücretsiz bir Postgres veritabanında saklanmalıdır.

1. **Veritabanı oluşturun.** [neon.tech](https://neon.tech) (veya Supabase) üzerinde ücretsiz bir proje açın
   ve bağlantı adresini kopyalayın (`postgresql://kullanici:sifre@...neon.tech/neondb?sslmode=require`).
   Tablo, Linqi ilk açıldığında otomatik oluşturulur.
2. **Render'da Blueprint açın.** [dashboard.render.com](https://dashboard.render.com) → **New → Blueprint**
   → GitHub'daki `kultursanatatlasi` deposunu ve dalı seçin. Render, depo kökündeki `render.yaml` dosyasını okur.
3. **İki değeri girin.** Render sizden şunları ister:
   - `ADMIN_PASSWORD`: uzun, tahmin edilmesi zor bir şifre
   - `DATABASE_URL`: 1. adımda kopyaladığınız adres
4. **Apply** deyin. Birkaç dakika sonra `https://linqi-xxxx.onrender.com` gibi bir adres alırsınız.
   Kısa bağlantılar bu alan adıyla otomatik oluşturulur.

**Kendi alan adınız** (ör. `lnq.link`): Render'da servis → **Settings → Custom Domains** bölümünden ekleyin
ve servise `BASE_URL=https://lnq.link` ortam değişkenini tanımlayın.

**Ücretsiz planın sınırı:** 15 dakika istek gelmezse servis uykuya geçer; ilk tıklama 30–60 saniye
gecikebilir. Kampanya veya basılı materyal (afiş, broşür, QR) için ücretli plan önerilir.
