# LINQI — Links, simplified.

*Your links. Shorter. Smarter.*

Linqi, bağımlılık gerektirmeyen (yalnızca Node.js) bir URL kısaltıcıdır.

## Özellikler

- Uzun bağlantıyı 6 karakterlik kısa koda çevirme (`/gEhwTh`)
- Özel ad desteği (`/kultur-gecesi`)
- Aynı bağlantı tekrar kısaltılınca aynı kod döner
- Tık sayacı ve son tıklama zamanı
- Kopyala, sil, QR kod
- Son bağlantılar listesi
- Yalnızca `http`/`https` kabul edilir; `https://` yazılmazsa otomatik eklenir

## Çalıştırma

```bash
cd linqi
npm start          # http://localhost:3000
npm test
```

| Ortam değişkeni | Açıklama | Varsayılan |
| --- | --- | --- |
| `PORT` | Sunucu portu | `3000` |
| `BASE_URL` | Kısa bağlantılarda kullanılacak alan adı (ör. `https://lnq.link`) | İstekteki host |
| `LINQI_DATA` | Bağlantıların saklandığı JSON dosyası | `data/links.json` |

## API

| İstek | Açıklama |
| --- | --- |
| `POST /api/links` `{ "url": "...", "alias": "isteğe-bağlı" }` | Kısa bağlantı oluşturur (201; aynı URL için 200) |
| `GET /api/links` | Son 20 bağlantı |
| `GET /api/links/:code` | Bağlantı istatistikleri |
| `DELETE /api/links/:code` | Bağlantıyı siler |
| `GET /:code` | Hedefe 302 ile yönlendirir |

## Not

Şu an yönetim paneli herkese açıktır (giriş yok). Herkese açık yayına almadan önce
silme ve listeleme uçlarına kimlik doğrulama eklenmesi önerilir.
