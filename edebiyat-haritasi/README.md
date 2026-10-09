# İstanbul Edebiyat Haritası

Romanların, şiirlerin ve yazarların izinde İstanbul'u keşfetmek için interaktif bir harita.

## Özellikler

- **24 edebi mekân**: müzeler, yazar evleri, kurmaca mekânlar, şiirlerdeki semtler, buluşma yerleri, kitap/basın mekânları ve mezarlar
- **Filtreler**: kategori, dönem (Divan, Tanzimat & Servet-i Fünun, Erken Cumhuriyet, Çağdaş) ve serbest metin arama (Türkçe karakterlere duyarsız)
- **Detay kartı**: yazar, eser, açıklama, alıntı, film/dizi uyarlamaları, yol tarifi, paylaşılabilir bağlantı (`#mekan-id`)
- **Edebi rotalar**: Beyoğlu, Tarihî Yarımada, Boğaz ve Adalar için sıralı duraklar
- **Favoriler**: tarayıcıda saklanır
- Açık/koyu tema, mobil uyumlu arayüz

Kurmaca ya da genel bir bölgeyi işaret eden mekânlar haritada kesik çerçeveli işaretle gösterilir ("temsili konum").

## Çalıştırma

Derleme adımı yoktur. Klasörü herhangi bir statik sunucuyla açın:

```bash
cd edebiyat-haritasi
python3 -m http.server 8000
# http://localhost:8000
```

GitHub Pages'te doğrudan yayınlanabilir.

## Mekân eklemek

`data.js` içindeki `MEKANLAR` dizisine yeni bir nesne ekleyin:

```js
{
  id: "benzersiz-id",
  ad: "Mekân adı",
  kategori: "muze",        // muze | kurmaca | siir | mekan | kitap | ani
  donem: "cumhuriyet",     // divan | tanzimat | cumhuriyet | cagdas
  yazar: "Yazar", eser: "Eser (yıl)",
  semt: "Semt, İlçe", konum: [41.03, 28.97],
  aciklama: "…",
  alinti: "…",             // isteğe bağlı
  uyarlama: "…",           // isteğe bağlı
  temsili: true            // isteğe bağlı
}
```

Rotalar `ROTALAR` dizisinde mekân `id`'leriyle tanımlanır.

## Teknolojiler

Saf HTML/CSS/JS · [Leaflet](https://leafletjs.com/) · OpenStreetMap & CARTO harita karoları
