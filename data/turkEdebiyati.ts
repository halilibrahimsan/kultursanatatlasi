export interface TurkYazar {
  slug: string;
  ad: string;
  yasam: string;
  tur: "Şair" | "Romancı" | "Öykücü" | "Şair & Romancı" | "Şair & Düşünür";
  donem: string;
  akım: string;
  ozet: string;
  biyografi: string;
  eserler: { ad: string; yıl: string; aciklama: string }[];
  mirasi: string;
  emoji: string;
  renk: string;
}

export const turkYazarlar: TurkYazar[] = [
  {
    slug: "yunus-emre",
    ad: "Yunus Emre",
    yasam: "~1238 – ~1320",
    tur: "Şair & Düşünür",
    donem: "Anadolu Selçuklu / Beylikler Dönemi",
    akım: "Tasavvuf Edebiyatı / Halk Şiiri",
    emoji: "🕊️",
    renk: "from-sky-600 to-blue-500",
    ozet:
      "Anadolu'nun en büyük halk şairi ve mutasavvıfı. Sevgi, hoşgörü ve tanrı aşkını sade Türkçesiyle yüzyıllara taşıdı.",
    biyografi: `Yunus Emre, 13. yüzyılın ikinci yarısında muhtemelen Eskişehir veya Sakarya çevresinde doğdu. Hayatına ilişkin belgeler son derece kıttır; çoğu bilgi menkıbe niteliğindedir.

Moğol istilasının getirdiği yıkımın gölgesinde yaşayan Yunus, büyük mutasavvıf Hacı Bektaş Veli'ye intisap etmek istedi; ancak Tapduk Emre'nin dergâhına yönlendirildi. On yıllar boyunca bu dergâhta hizmet etti.

Şiirlerini Türk halkının anlayabileceği sade bir dille yazdı; Arapça ve Farsça ağırlıklı divan şiirinin yanında hece ölçüsüyle ve konuşma diliyle şiirler kaleme aldı. Bu tercih onu divan şairlerinden ayıran ve eserlerini ölümsüzleştiren en önemli özelliktir.

Tasavvufun temel kavramlarını — aşk, vahdet (birlik), fani dünya, hakikate yolculuk — herkesin kavrayabileceği imgeler ve benzetmelerle aktardı.`,
    eserler: [
      {
        ad: "Divan",
        yıl: "13.-14. yy.",
        aciklama:
          "Yaklaşık 360 şiiri kapsayan divanı, Türk şiirinin kurucu metinlerinden biridir. 'Benim adım dertli dolap' ve 'Severim seni candan içeri' gibi dizeler bugün de dilden düşmemektedir.",
      },
      {
        ad: "Risaletü'n-Nushiyye",
        yıl: "1307",
        aciklama:
          "Didaktik bir mesnevi olan bu eser, insanın kötü huylarını ve bunlardan kurtuluş yolunu anlatan öğütler kitabıdır.",
      },
    ],
    mirasi:
      "UNESCO 1991'i 'Yunus Emre Yılı' ilan etti. Şiirleri Türkçenin en saf ve en güzel örnekleri olarak bugün de ezberleniyor, bestelenip söyleniyor. 'Yaratılanı sev Yaratandan ötürü' dizesi hoşgörü felsefesinin simgesi olmuştur.",
  },
  {
    slug: "mevlana",
    ad: "Mevlânâ Celâleddin Rûmî",
    yasam: "1207 – 1273",
    tur: "Şair & Düşünür",
    donem: "Anadolu Selçuklu Dönemi",
    akım: "Tasavvuf Edebiyatı / Fars-Türk Klasiği",
    emoji: "🌀",
    renk: "from-emerald-600 to-teal-500",
    ozet:
      "Konya'da yaşayan ve dünyanın en çok okunan şairi olmaya devam eden büyük mutasavvıf. Mesnevi'si insanlığın ortak ruhi mirası sayılır.",
    biyografi: `Celaleddin Muhammed Belhi (Rûmî), 30 Eylül 1207'de Horasan'ın Belh şehrinde (bugünkü Afganistan) doğdu. Çocukken ailesiyle birlikte Moğol istilasından kaçarak uzun bir yolculuğa çıktı; Bağdat, Mekke, Şam ve Anadolu'yu dolaşarak Konya'ya yerleşti.

Konya'da medrese hocası olarak tanınan Rûmî'nin hayatı 1244'te Tebrizli Şems ile karşılaşmasıyla köklü biçimde değişti. Bu olağanüstü dostluk onu içe kapanan bir âşık şaire dönüştürdü. Şems'in gizemli şekilde ortadan kaybolması Divan-ı Kebir'in doğmasına yol açtı.

Ölümünden sonra oğlu Sultan Veled tarafından Mevlevilik tarikatı kuruldu; sema ayini (dönüş) Mevlevi geleneğinin simgesi oldu.`,
    eserler: [
      {
        ad: "Mesnevi",
        yıl: "1258–1273",
        aciklama:
          "Altı cilt ve yaklaşık 25.000 beyitten oluşan bu dev eser, ahlak ve tasavvuf öğretilerini hikâyeler aracılığıyla anlatır. 'Dinle bu neyden nasıl şikâyet eder...' diye başlayan ilk beytinden bu yana yüzyıllardır okunmaya devam etmektedir.",
      },
      {
        ad: "Divan-ı Kebir (Şems Divanı)",
        yıl: "1244–1248",
        aciklama:
          "Şems-i Tebrizî ile derin dostluğunun ilhamıyla yazılan lirik şiirler. İlahi aşkı, coşkuyu ve özlemi Farsça ve kısmen Türkçe dile getirir.",
      },
      {
        ad: "Fîhi Mâ Fîh",
        yıl: "13. yy.",
        aciklama:
          "Sohbet ve derslerin derlendiği nesir eser. Tasavvuf düşüncesini anlaşılır biçimde ortaya koyar.",
      },
    ],
    mirasi:
      "Rûmî, bugün İngilizce çevirileriyle ABD'de en çok satan şairlerden biridir. Mesnevi Türkçeye, İngilizceye ve pek çok dile sayısız kez çevrilmiştir. Konya'daki Mevlânâ Müzesi yıllık 3 milyonu aşkın ziyaretçi ağırlar.",
  },
  {
    slug: "nazim-hikmet",
    ad: "Nâzım Hikmet Ran",
    yasam: "1902 – 1963",
    tur: "Şair",
    donem: "Erken Cumhuriyet",
    akım: "Serbest Şiir / Sosyalist Gerçekçilik",
    emoji: "✊",
    renk: "from-red-700 to-rose-600",
    ozet:
      "Türk şiirini serbest nazımla devreden, hapis yıllarına ve sürgüne rağmen dünya edebiyatının doruk isimlerinden biri olmayı başaran 'Romantik Komünist' şair.",
    biyografi: `Nâzım Hikmet Ran, 15 Ocak 1902'de Selanik'te dünyaya geldi. Bahriye subayı yetiştiren bir aileden geliyordu. İstanbul'da Kurtuluş Savaşı'nı destekledi, ardından Moskova'ya giderek Komünist Üniversite'de (KUTV) okudu ve komünizmle buluştu.

Türkiye'ye döndükten sonra şiirleri ve siyasi faaliyetleri nedeniyle defalarca tutuklandı. 1938'de 28 yıl ağır hapis cezasına çarptırıldı; tutuklu kaldığı 12 yıl boyunca yazmaya devam etti. 1950'de uluslararası baskılar sonucu serbest bırakıldı.

1951'de Türk vatandaşlığından çıkarılınca Sovyetler Birliği'ne sığındı ve Moskova'ya yerleşti. Sürgündeki son yıllarında Sovyet pasaportuyla dünyayı dolaştı. 3 Haziran 1963'te Moskova'da kalp krizi geçirerek hayatını kaybetti.

Türk şiirine serbest nazım biçimini yerleştiren Nâzım, aşk, hapis, sürgün ve özgürlük temalarını eşsiz bir lirizm ve siyasi keskinlikle işledi.`,
    eserler: [
      {
        ad: "Memleketimden İnsan Manzaraları",
        yıl: "1939–1945",
        aciklama:
          "Cezaevinde yazılan ve beş ciltten oluşan bu epik şiir, Anadolu'dan onlarca farklı insanın sesini aynı tuvalde buluşturan Türk edebiyatının zirvelerinden biridir.",
      },
      {
        ad: "Kuvâyi Millîye",
        yıl: "1941",
        aciklama:
          "Kurtuluş Savaşı'nı ve Anadolu halkının direnişini anlatan uzun şiir.",
      },
      {
        ad: "Şeyh Bedreddin Destanı",
        yıl: "1936",
        aciklama:
          "Osmanlı'da ayaklanan halk önderi Şeyh Bedreddin'i anlatan uzun şiir. Türk solunun kültürel sembolü haline geldi.",
      },
      {
        ad: "En Güzel Deniz",
        yıl: "~1945",
        aciklama:
          "Kısa lirik şiiri dünyada en çok okunan ve çevrilen Türkçe şiirler arasındadır. 'En güzel deniz: henüz gidilmemiş olanıdır.'",
      },
    ],
    mirasi:
      "Nâzım Hikmet, dünyanın 50'den fazla diline çevrilen eserleriyle Türk edebiyatının uluslararası arenada en tanınan ismidir. 2009'da Türk vatandaşlığı iade edildi. Şiirleri bugün de besteler, tiyatro ve sinema uyarlamalarıyla yaşamaya devam etmektedir.",
  },
  {
    slug: "sait-faik-abasiyanik",
    ad: "Sait Faik Abasıyanık",
    yasam: "1906 – 1954",
    tur: "Öykücü",
    donem: "Erken Cumhuriyet",
    akım: "Realizm / Varoluşçu Öykü",
    emoji: "🐟",
    renk: "from-blue-600 to-cyan-500",
    ozet:
      "Türk öykücülüğünün tartışmasız ustası. İstanbul'un balıkçılarını, kenar mahalle insanlarını ve dışlanmışlarını içten ve sevgiyle anlattı.",
    biyografi: `Sait Faik Abasıyanık, 18 Kasım 1906'da Adapazarı'nda doğdu. Orta ve lise öğrenimini İstanbul ve Bursa'da tamamladı; ardından İsviçre ve Fransa'ya giderek edebiyat dersleri aldı.

Hayatının büyük bölümünü İstanbul'da, özellikle Burgaz Adası'nda geçirdi. Balıkçılar, işsizler, Rum ve Ermeni azınlıklar, denizde geçen öğleden sonralar — bunlar hem günlük hayatının hem öykü dünyasının malzemeleri oldu.

Ticaret ya da kariyer peşinde koşmak yerine yazmayı ve özgürce yaşamayı seçti. Gazete ve dergilerde öyküleri yayımlandı; dönemin standartlarına göre son derece orijinal bir dil ve bakış açısı getirdi.

1954'te siroz nedeniyle 48 yaşında hayatını kaybetti.`,
    eserler: [
      {
        ad: "Semaver",
        yıl: "1936",
        aciklama: "İlk öykü kitabı. İstanbul'un kenar semtlerinden insan portreleri.",
      },
      {
        ad: "Alemdağ'da Var Bir Yılan",
        yıl: "1954",
        aciklama:
          "En olgun döneminin ürünü. Sıradan insanların gündelik varoluşunu şiirsel bir dille aktarır.",
      },
      {
        ad: "Son Kuşlar",
        yıl: "1952",
        aciklama:
          "Burgaz Adası'nın atmosferini, balık tutmayı ve denizle insanın ilişkisini anlatan öykü kitabı.",
      },
    ],
    mirasi:
      "Sait Faik Abasıyanık adına verilen ödül, Türkiye'nin en prestijli öykü ödülü olarak bugün de verilmektedir. Türk öykücülüğünü Çehov geleneğiyle buluşturan en güçlü sestir.",
  },
  {
    slug: "ahmet-hamdi-tanpinar",
    ad: "Ahmet Hamdi Tanpınar",
    yasam: "1901 – 1962",
    tur: "Şair & Romancı",
    donem: "Erken ve Orta Cumhuriyet",
    akım: "Modernizm / Doğu-Batı Sentezi",
    emoji: "⏱️",
    renk: "from-amber-600 to-yellow-500",
    ozet:
      "Türk edebiyatının en derin zihinlerinden biri. Zaman, hafıza ve Doğu-Batı gerilimini hem nesirde hem şiirde eşsiz biçimde işledi.",
    biyografi: `Ahmet Hamdi Tanpınar, 23 Haziran 1901'de İstanbul'da doğdu. Babası bir kadı idi; Doğu klasik kültürüyle yetişti. Yahya Kemal Beyatlı'nın öğrencisi oldu ve üstadından derin biçimde etkilendi.

Edebiyat öğretmeni ve Güzel Sanatlar Akademisi hocası olarak çalıştı. Bir dönem CHP milletvekili oldu. Türk edebiyatı ve kültürü üzerine son derece özgün eleştiriler yazdı.

Modernleşme sürecinin Osmanlı-Türk kimliğini parçalayan etkilerini, geçmiş ile geleceğin çatışmasını, zaman ve bellek kavramlarını derinlemesine irdeledi. Marcel Proust'un etkisi romanlarında açıkça hissedilir.`,
    eserler: [
      {
        ad: "Huzur",
        yıl: "1949",
        aciklama:
          "Türk edebiyatının en büyük romanlarından biri. İstanbul'u, Osmanlı müziğini ve modernleşmenin yarattığı kimlik krizini ele alır. Proust'vari bir zaman ve hafıza anlayışı sergilenir.",
      },
      {
        ad: "Saatleri Ayarlama Enstitüsü",
        yıl: "1961",
        aciklama:
          "Türk modernleşmesini hiciv ve ironiyle irdeleyen eser. 'Zaman' ve 'ayarlama' mecazları üzerine inşa edilmiş harikulade bir roman.",
      },
      {
        ad: "Beş Şehir",
        yıl: "1946",
        aciklama:
          "Ankara, Erzurum, Konya, Bursa ve İstanbul'u kültürel ve tarihsel derinliğiyle ele alan deneme-gezi kitabı.",
      },
    ],
    mirasi:
      "Tanpınar Türk edebiyatının en rafine zihniydi. Eserleri ölümünden onlarca yıl sonra yeniden keşfedildi ve bugün Türk edebiyatının klasikleri arasında yer almaktadır.",
  },
  {
    slug: "yasar-kemal",
    ad: "Yaşar Kemal",
    yasam: "1923 – 2015",
    tur: "Romancı",
    donem: "Orta Cumhuriyet",
    akım: "Sosyal Realizm / Epik Roman",
    emoji: "⛰️",
    renk: "from-stone-600 to-amber-600",
    ozet:
      "Çukurova'nın destancısı. İnce Memed ile dünya edebiyat kanonuna giren, Nobel'e en çok aday gösterilen Türk yazar.",
    biyografi: `Yaşar Kemal (asıl adı Kemal Sadık Gökçeli), 1923'te Adana'nın Hemite köyünde doğdu. Beş yaşında gözleri önünde babasının öldürülmesine tanık oldu. Bu travma eserlerinin karanlık arka planını biçimlendirdi.

Çukurova'nın köylülerini, ırgatlarını, eşkıyalarını ve ağalarını anlattı. Ağız edebiyatı, destan geleneği ve halk masallarını Batılı roman tekniğiyle birleştirerek epik bir dil yarattı.

İnce Memed serisi 40'tan fazla dile çevrildi ve Türk edebiyatının dünyada en çok okunan eserleri arasına girdi. Nobel Edebiyat Ödülü'ne defalarca aday gösterildi.`,
    eserler: [
      {
        ad: "İnce Memed (1-4)",
        yıl: "1955–1987",
        aciklama:
          "Çukurova'nın ağa baskısına karşı direnen efsanevi eşkıyanın destansı hikâyesi. Türk edebiyatının dünya ölçeğindeki en büyük başarılarından biri.",
      },
      {
        ad: "Memed, My Hawk",
        yıl: "1961",
        aciklama: "İnce Memed'in İngilizce çevirisiyle dünya okuyucusuna ulaşması.",
      },
      {
        ad: "Yer Demir Gök Bakır",
        yıl: "1963",
        aciklama:
          "Kuraklık, açlık ve Anadolu köy hayatının acı gerçeklerini anlatan güçlü roman.",
      },
    ],
    mirasi:
      "Yaşar Kemal, Türk edebiyatının uluslararası arenada aldığı en büyük ilgiyi yaratmıştır. Eserleri bugün 50'den fazla dilde okunmaktadır.",
  },
  {
    slug: "elif-safak",
    ad: "Elif Şafak",
    yasam: "1971 –",
    tur: "Romancı",
    donem: "Günümüz",
    akım: "Postmodernizm / Çok Kültürlü Anlatı",
    emoji: "🌍",
    renk: "from-fuchsia-600 to-purple-500",
    ozet:
      "İngilizce ve Türkçe yazan, dünyanın en çok satan Türk yazarı. Tarih, kimlik, aşk ve toplumsal cinsiyet temalarını çok katmanlı romanlarında işliyor.",
    biyografi: `Elif Şafak, 25 Ekim 1971'de Strazburg'da doğdu. Annesi bir diplomat, babası ise akademisyendir. Çocukluğu farklı ülkelerde geçti; bu çok kültürlü arka plan eserlerinin temel özelliklerinden birini oluşturur.

Ankara'da Siyasal Bilgiler Fakültesi'nde okudu, ardından Avrupa'da ve Amerika'da akademik çalışmalar yürüttü. Hem Türkçe hem İngilizce yazan ender yazarlardan biridir.

Romanları 50'den fazla dile çevrildi. Tasavvuf, tarihsel kurgu, psikoloji ve toplumsal eleştiriyi bir arada işleyen anlatı biçimi onu uluslararası okuyucu kitlesiyle buluşturdu.`,
    eserler: [
      {
        ad: "Aşk",
        yıl: "2009",
        aciklama:
          "Mevlânâ ve Şems'in dostluğunu çağdaş bir kadının arayışıyla iç içe geçiren roman. Dünyada milyonlarca satış yaptı.",
      },
      {
        ad: "Piç",
        yıl: "2006",
        aciklama:
          "Türk-Ermeni tarihini iki aile üzerinden ele alan roman. Türkiye'de yargılanmasına yol açtı.",
      },
      {
        ad: "10 Minutes 38 Seconds in This Strange World",
        yıl: "2019",
        aciklama: "Booker Ödülü finalisti. İstanbul'un toplumsal dışlanmışlarını anlatan roman.",
      },
    ],
    mirasi:
      "Türk edebiyatının en büyük küresel başarısını elde eden yazarlardan biridir. TED konuşmaları, feminist aktivizmi ve tartışmalı konuları cesurca ele alışıyla kültürel simgeye dönüştü.",
  },
];

export const turkSiirDonemi = [
  {
    ad: "Divan Edebiyatı",
    donem: "13.-19. yy.",
    ozet:
      "Arap ve Fars şiirinin biçim ve estetik anlayışını Türkçeyle buluşturan köklü gelenek. Gazel, kaside, mesnevi gibi nazım biçimleri; Fuzuli, Baki, Nedim, Şeyh Galip bu geleneğin büyük isimleridir.",
    emoji: "📜",
  },
  {
    ad: "Halk Edebiyatı",
    donem: "13. yy. – günümüz",
    ozet:
      "Hece ölçüsüyle sözlü gelenek içinde gelişen şiir; ozan, âşık ve şaman kültüründen beslenir. Yunus Emre, Karacaoğlan, Pir Sultan Abdal, Köroğlu bu geleneğin şaheser isimleridir.",
    emoji: "🎸",
  },
  {
    ad: "Tanzimat Edebiyatı",
    donem: "1839–1896",
    ozet:
      "Batı edebiyatıyla ilk ciddi temasın yaşandığı dönem. Namık Kemal, Şinasi ve Ziya Paşa gazetecilik, tiyatro ve roman türlerini Türk edebiyatına kazandırdı.",
    emoji: "🗞️",
  },
  {
    ad: "Servet-i Fünun",
    donem: "1896–1901",
    ozet:
      "Fransız sembolizmi ve empresyonizminden etkilenen, karamsar ve sanat için sanat anlayışındaki akım. Tevfik Fikret ve Cenap Şahabettin bu dönemin öncü isimleridir.",
    emoji: "🌙",
  },
  {
    ad: "Milli Edebiyat",
    donem: "1911–1923",
    ozet:
      "Öz Türkçe ve Anadolu'ya dönüşü savunan; Ziya Gökalp'ın önderlik ettiği, ulusal duyguları ön plana çıkaran hareket. Mehmet Akif Ersoy bu dönemin en güçlü sesidir.",
    emoji: "🦅",
  },
  {
    ad: "Cumhuriyet Dönemi Şiiri",
    donem: "1923–günümüz",
    ozet:
      "Garip hareketi (Orhan Veli, Oktay Rifat, Melih Cevdet) ile başlayan modernleşme; ardından İkinci Yeni (Cemal Süreya, Turgut Uyar, Edip Cansever) ile soyut ve bireysel şiirin zirveye ulaşması.",
    emoji: "🌺",
  },
];
