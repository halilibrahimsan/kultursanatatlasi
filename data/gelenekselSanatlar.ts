export interface GelenekselSanat {
  slug: string;
  ad: string;
  tanim: string;
  tarih: string;
  ozet: string;
  aciklama: string;
  malzeme: string[];
  onemliUstalar: { ad: string; yasam: string; kisa: string }[];
  bugun: string;
  emoji: string;
  renk: string;
}

export const gelenekselSanatlar: GelenekselSanat[] = [
  {
    slug: "hat",
    ad: "Hat Sanatı",
    tanim: "İslam yazı sanatı",
    tarih: "7. yüzyıldan günümüze",
    emoji: "✒️",
    renk: "from-amber-700 to-yellow-600",
    ozet:
      "Arap yazısının estetik biçimlere dönüştürüldüğü İslam sanatlarının en köklüsü. 'Güzel yazı' anlamına gelen hat, spiritüel bir disiplin ve estetik mükemmelliğin simgesidir.",
    aciklama: `Hat sanatı (Arapça: hatt = çizgi, yazı) Arap yazısını estetik kurallara göre biçimlendirme sanatıdır. İslam uygarlığında Kur'an-ı Kerim'i güzel yazmak kutsal bir görev olarak kabul edildiğinden hat, tüm İslam sanatları içinde en saygın konuma yükseldi.

Türk hat sanatı Osmanlı döneminde olağanüstü bir gelişim gösterdi. Şeyh Hamdullah (15. yy.) Osmanlı hat üslubunun kurucusu sayılır; onun çizdiği çerçeve sonraki yüzyılların hattatlarına yol gösterdi.

Başlıca hat üslupları: Sülüs (anıtsal ve heymetli; camilerde kullanılır), Nesih (Kur'an yazımında en yaygın kullanılan), Talik/Nastalık (ince ve akıcı; İran etkili), Divani (Osmanlı divan yazışmalarına özgü; girift ve süslü), Rik'a (gündelik yazışmalarda kullanılan pratik üslup), Celî (büyük boyutlu anıtsal yazı).

Hat öğrenmek onlarca yıl süren meşk geleneğini gerektirir: Öğrenci ustanın harflerini kalıp üzerinde defalarca kopya ederek el ve göz eğitimi alır. İcazet (diploma) almak için ustadan onay şarttır.`,
    malzeme: [
      "Kalem (kamış ya da metal uçlu)",
      "Mürekkep (is, zamk ve su karışımı)",
      "Kâğıt (aharlı, özel hazırlanmış)",
      "Mıstar (satır cetveli)",
      "Makta (kalem kesme tahtası)",
      "Divit (mürekkep hokkası)",
    ],
    onemliUstalar: [
      {
        ad: "Şeyh Hamdullah",
        yasam: "1436–1520",
        kisa:
          "Osmanlı hat sanatının kurucu babası. Aklam-ı sitte üslubunu yeniden biçimlendirerek sonraki tüm Osmanlı hattatlarına referans noktası oldu. II. Bayezid'in yakın çevresindeydi.",
      },
      {
        ad: "Hafız Osman",
        yasam: "1642–1698",
        kisa:
          "Osmanlı hat sanatının ikinci büyük reformcusu. Sülüs ve nesih yazılarını en rafine biçimine kavuşturdu. Hat levhalarına klasik kompozisyon anlayışını kazandırdı.",
      },
      {
        ad: "Kazasker Mustafa İzzet Efendi",
        yasam: "1801–1876",
        kisa:
          "Ayasofya'nın büyük madalyonlarının hattatı. Çapı 7,5 metreyi bulan bu yazılar dünyanın en büyük el yazısı örnekleri arasındadır.",
      },
      {
        ad: "Hamid Aytaç",
        yasam: "1891–1982",
        kisa:
          "20. yüzyılın en büyük Türk hattatı. 91 yıllık ömrünün büyük bölümünü hat sanatına adayan Hamid, geleneksel meşk yöntemini modern dönemde yaşattı.",
      },
      {
        ad: "Hasan Çelebi",
        yasam: "1937–",
        kisa:
          "Hamid Aytaç'ın başlıca öğrencisi. Uluslararası hat yarışmalarında Türkiye'yi başarıyla temsil eden çağdaş ustanın en önemli ismi.",
      },
    ],
    bugun:
      "Hat sanatı UNESCO'nun Somut Olmayan Kültürel Miras listesindedir. İstanbul ve Türkiye'nin çeşitli şehirlerinde özel hat kursları ve atölyeler faaliyet göstermektedir. Geleneksel meşk geleneği modern arayışlarla da buluşarak çağdaş hat yorumları ortaya çıkmaktadır.",
  },
  {
    slug: "tezhip",
    ad: "Tezhip",
    tanim: "Altın ve renkli boyalarla yapılan süsleme sanatı",
    tarih: "9. yüzyıldan günümüze",
    emoji: "🌸",
    renk: "from-yellow-500 to-amber-400",
    ozet:
      "Altın ve canlı renklerle yapılan geleneksel kitap ve kâğıt süsleme sanatı. Hat ve minyatür eserlerinin etrafındaki muhteşem çerçeveleri oluşturur.",
    aciklama: `Tezhip (Arapça: altınlamak, yaldızlamak) altın ve çeşitli bitkisel boyalarla kâğıt, deri ve benzeri yüzeyleri bezeme sanatıdır. Kökleri 9. yüzyıl Abbasi dönemine uzanır; Osmanlı döneminde İran ve Orta Asya etkisiyle olağanüstü bir gelişim gösterdi.

Tezhip, başlangıçta Kur'an sayfalarını, duaları ve resmi belgeleri süslemek amacıyla kullanıldı. Zamanla hat eserlerinin yanına, şiirlerin çevresine ve müstakil süsleme levhalarına uygulanmaya başladı.

Başlıca tezhip motifleri: Hatayi (lotus kökenli çiçek motifleri), Rumi (geometrik eğri bantlar), Bulut (Çin bulut motifi), Şakayık ve gül (doğadan alınan çiçek motifleri), Zemin tezhipleri (düz altın zemin üzerinde motifler).

Osmanlı sarayındaki Ehl-i Hiref teşkilatı (sanat erbabı), tezhipçileri ve diğer sanatçıları organize ederdi. Topkapı Sarayı Müzesi bu geleneğin en zengin örneklerini barındırmaktadır.`,
    malzeme: [
      "Altın tozu (hakiki altın, arap zamkıyla ezilir)",
      "Doğal bitkisel boyalar",
      "İnce fırçalar (sincap kılı)",
      "Aharlı kâğıt",
      "Şeffaf selüloid (çalışma altına konur)",
      "Arap zamkı (bağlayıcı)",
    ],
    onemliUstalar: [
      {
        ad: "Rikkat Kunt",
        yasam: "1903–1986",
        kisa:
          "Cumhuriyet dönemi tezhip sanatının kurucu ismi. Milli Eğitim Bakanlığı ve Güzel Sanatlar Akademisi'nde tezhip geleneğini sistematik biçimde aktardı. Onlarca öğrenci yetiştirdi.",
      },
      {
        ad: "Muhsin Demironat",
        yasam: "1908–1983",
        kisa:
          "Klasik Osmanlı tezhip üslubunu günümüze taşıyan en önemli ustalardan biri. Topkapı Sarayı ve çeşitli müzelerdeki eserlerin restorasyonunda çalıştı.",
      },
      {
        ad: "Çiçek Derman",
        yasam: "1943–",
        kisa:
          "Uluslararası arenada en çok tanınan çağdaş Türk tezhip sanatçısı. İstanbul Üniversitesi'nde yıllarca ders verdi ve pek çok uluslararası öğrenci yetiştirdi.",
      },
    ],
    bugun:
      "Tezhip sanatı İstanbul Büyükşehir Belediyesi kurslarından özel atölyelere kadar pek çok mekânda öğretilmektedir. Özellikle son yıllarda Türkiye'de ve Batı dünyasında ilgi artmıştır. UNESCO listesinde yer alan Türk-İslam el sanatları arasındadır.",
  },
  {
    slug: "minyatur",
    ad: "Minyatür",
    tanim: "Küçük boyutlu resim ve kitap illüstrasyonu sanatı",
    tarih: "11. yüzyıldan günümüze",
    emoji: "🖌️",
    renk: "from-rose-600 to-pink-500",
    ozet:
      "Osmanlı ve İslam dünyasının küçük boyutlu resim sanatı. Tarihsel olayları, efsaneleri ve gündelik hayatı canlı renklerle belgeleyen eşsiz görsel hafıza.",
    aciklama: `Minyatür, kitapların içinde ya da müstakil olarak üretilen küçük boyutlu resim sanatıdır. Kökleri 11. yüzyıl İslam dünyasına uzanır; Abbasiler, Selçuklular ve Timuriler aracılığıyla Osmanlılara ulaştı.

Osmanlı minyatürünün altın çağı 16. yüzyıldır. Topkapı Sarayı'nda faaliyet gösteren nakkaşhanede görevli nakkaşlar (ressam-zanaatkârlar) padişah emirleriyle şehname, surname ve seyahatnameleri resimlediler.

Osmanlı minyatürünün özellikleri: Perspektif yoktur; mekânlar ve figürler düzlemsel aktarılır. Canlı, doymuş renkler kullanılır. Figürler tipleştirilmiştir; psikolojik derinlik değil, statü ve rol önemlidir. Hikâye anlatıcılığı ön plandadır.

İran minyatürünün doğa ve peyzaj duyarlılığına karşın Osmanlı minyatürü daha belgesel ve kentsel bir içeriğe sahiptir.`,
    malzeme: [
      "Altın ve gümüş boya",
      "Doğal mineral boyalar (lapis lazuli, vermilyon)",
      "Sincap ya da kedi kılı fırça",
      "Aharlı ve pürüzsüz kâğıt (çoğunlukla Semerkant kâğıdı)",
      "Zamk bağlayıcı",
    ],
    onemliUstalar: [
      {
        ad: "Nakkaş Osman",
        yasam: "16. yy.",
        kisa:
          "Topkapı Sarayı nakkaşhanesinin şefi. Şehname-i Selim Han ve Hünername gibi önemli eserlerin başlıca ressamı. Süleymanname minyatürlerinin de sorumlusu.",
      },
      {
        ad: "Levni (Abdülcelil Çelebi)",
        yasam: "?–1732",
        kisa:
          "18. yüzyıl Lale Devri'nin en önemli minyatürcüsü. Surname-i Vehbi'deki İstanbul sahneleri ve kadın portreleri Osmanlı minyatürünü yeni bir boyuta taşıdı.",
      },
      {
        ad: "Matrakçı Nasuh",
        yasam: "1480–1564",
        kisa:
          "Osmanlı sefer güzergâhlarını ve şehirlerini gösteren panoramik minyatürleriyle tanınır. Beyan-ı Menazil'de İstanbul, Edirne, Tebriz gibi şehirleri haritasal bir anlayışla resmetti.",
      },
    ],
    bugun:
      "Geleneksel minyatür sanatı Türkiye'de çeşitli sanat okullarında ve atölyelerde yaşatılmaktadır. Çağdaş sanatçılar klasik minyatür dilini modern temalar ve ironik yaklaşımlarla yeniden yorumlamaktadır. Topkapı Sarayı Müzesi dünyanın en zengin minyatür koleksiyonlarından birine ev sahipliği yapar.",
  },
  {
    slug: "ebru",
    ad: "Ebru",
    tanim: "Su yüzeyinde yapılan kâğıt marbeling sanatı",
    tarih: "15. yüzyıldan günümüze",
    emoji: "🌊",
    renk: "from-blue-600 to-cyan-500",
    ozet:
      "Kıvamlı su yüzeyine damlatılan boyaların çeşitli araçlarla işlenerek kâğıda aktarıldığı, her ürünün birbirinin aynısı olmadığı eşsiz Türk-İslam sanatı.",
    aciklama: `Ebru, özel hazırlanmış kıvamlı su (kitre zamkı içeren) yüzeyine boya damlatılması ve çeşitli araçlarla biçimlendirilip kâğıda aktarılması sanatıdır. Her ebru baskısı tektir — aynısını yapmak imkânsızdır.

Kökeni tartışmalı olmakla birlikte 15.-16. yüzyıl İran ve Orta Asya'sına kadar uzandığı kabul edilir. Türkiye'de Osmanlı döneminde gelişti; hat eserlerinin fonu, cilt kapağı ve belge kenar süslemesi olarak kullanıldı.

Başlıca ebru türleri: Battal ebru (boyaların rastgele damlatılmasıyla oluşan serbest desen), Gelgit ebru (tarağa benzer araçla sıra sıra çizgiler), Şal ebru (kıvrımlı, şal görünümü), Çiçekli ebru (stilize lale, karanfil, sümbül gibi çiçek motifleri), Hatip ebrusu (sık noktalı zemin üzerinde çiçek desenleri).

Türk ebru geleneği, Batı'da 16.-17. yüzyıldan itibaren yayıldı; Avrupa'da "marbling" ya da "Turkish paper" olarak bilinir.`,
    malzeme: [
      "Tekneh (sığ dikdörtgen kap, genellikle tahta)",
      "Kitre çözeltisi (kıvamlı su tabanı)",
      "Öküz ödü (safrası, boyaları suya yayar)",
      "Boyalar (toprak boyalar, doğal pigmentler)",
      "Biz (sivri uçlu alet)",
      "Tarak (paralel çizgi çizmek için)",
      "Kâğıt (şap çözeltisiyle hazırlanmış)",
    ],
    onemliUstalar: [
      {
        ad: "Hatip Mehmed Efendi",
        yasam: "?–1773",
        kisa:
          "Çiçekli (hatip) ebruyu geliştiren ve kendi adıyla anılmasını sağlayan usta. Lale, karanfil ve sümbül gibi stilize çiçekleri ebru yüzeyine taşıdı.",
      },
      {
        ad: "Necmeddin Okyay",
        yasam: "1883–1976",
        kisa:
          "20. yüzyılda ebru sanatını yaşatan en önemli isim. Hem hattat hem ebrucu olan Okyay, geleneği Mustafa Düzgünman'a aktardı.",
      },
      {
        ad: "Mustafa Düzgünman",
        yasam: "1920–1990",
        kisa:
          "Ebru sanatını modern dönemde diriltip yaygınlaştıran usta. Pek çok öğrenci yetiştirdi ve ebrunun dünya genelinde tanınmasına büyük katkı sağladı.",
      },
      {
        ad: "Hikmet Barutçugil",
        yasam: "1949–",
        kisa:
          "Düzgünman'ın öğrencisi. Ebru sanatını uluslararası arenaya taşıyan ve düzinelerce ülkede workshop veren çağdaş ustanın en önemli temsilcisi.",
      },
    ],
    bugun:
      "UNESCO 2014'te ebru sanatını Somut Olmayan Kültürel Miras listesine aldı. Bugün İstanbul ve Türkiye'nin pek çok şehrinde ebru atölyeleri ve kursları faaliyet göstermektedir. Uluslararası ilgi her geçen yıl artmakta; ebru Batılı sanat çevrelerinde özgün ve meditasyon etkili bir pratik olarak ilgi görmektedir.",
  },
  {
    slug: "cini",
    ad: "Çini Sanatı",
    tanim: "Seramik ve fayans üzerine sır boyama sanatı",
    tarih: "11. yüzyıldan günümüze",
    emoji: "🏺",
    renk: "from-sky-600 to-blue-500",
    ozet:
      "Osmanlı mimarlığının vazgeçilmez süsü olan çini; İznik ve Kütahya atölyelerinde zirveye ulaşan, camileri ve sarayları donatan eşsiz seramik sanatı.",
    aciklama: `Çini (Türkçe'de hem seramik kap hem de mimari çini kaplama anlamına gelir) pişmiş kil üzerine sır ve boya uygulanarak fırınlanmasıyla elde edilir. Türk çini sanatı Selçuklulardan Osmanlılara, oradan günümüze uzanan köklü bir gelenektir.

Osmanlı çinisinin zirvesi 16. yüzyıldaki İznik atölyeleridir. Toprak altı mavi, beyaz, fıstık yeşili ve mercan kırmızısı (İznik kırmızısı) bu döneme özgü renk paletini oluşturur. Lale, karanfil, sümbül, bahar dalı ve arabesk bu dönemin karakteristik motifleridir.

Rüstem Paşa Camii (İstanbul), Topkapı Sarayı ve Süleymaniye Camii İznik çinisinin en görkemli örneklerini barındırır. İznik çinisinin sırrı 20. yüzyılda yeniden çözülmeye çalışıldı; araştırmacılar kırmızı rengi elde etmenin güçlüğünü belgelediler.

Kütahya çinisi ise İznik'in gerilemeye başladığı 17. yüzyıldan itibaren öne çıktı; daha ince ve az dayanıklı bir teknikle üretildi ama zengin motif çeşitliliğiyle tanındı.`,
    malzeme: [
      "Kil (çoğunlukla kuvars katkılı)",
      "Kobalt mavisi (mavi renk için)",
      "Bakır oksit (yeşil için)",
      "Manganez (mor-siyah için)",
      "Demir oksit (kırmızı için; İznik kırmızısı)",
      "Şeffaf sırlar",
    ],
    onemliUstalar: [
      {
        ad: "İznik Atölyeleri (Nakkaşane)",
        yasam: "15.-17. yy.",
        kisa:
          "Osmanlı sarayına bağlı İznik'teki atölyeler; isimleri kayıt altına alınmamış ustalar tarafından üretilen eserler bugün dünya müzelerinin gözdesidir.",
      },
      {
        ad: "İbrahim Safi",
        yasam: "19. yy.",
        kisa:
          "Kütahya çini geleneğini 19. yüzyılda yaşatan ustalardan biri.",
      },
    ],
    bugun:
      "İznik Çini Vakfı modern dönemde klasik İznik çinisini yeniden üretmeyi başarmıştır. Kütahya bugün de aktif bir çini üretim merkezi olmaya devam etmektedir. Çini sanatı hem geleneksel formlarıyla hem de çağdaş tasarım anlayışıyla üretilmektedir.",
  },
];
