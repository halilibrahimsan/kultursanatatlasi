// İstanbul Edebiyat Haritası — mekân verisi
// temsili: true → kurmaca/genel bir bölge için temsili konum
window.KATEGORILER = {
  muze:    { ad: "Müze & Ev",          renk: "#b5452b" },
  kurmaca: { ad: "Kurmaca Mekân",      renk: "#2b6cb5" },
  siir:    { ad: "Şiirdeki İstanbul",  renk: "#7a3fb0" },
  mekan:   { ad: "Buluşma & Uğrak",    renk: "#c98a12" },
  kitap:   { ad: "Kitap & Basın",      renk: "#2e8b57" },
  ani:     { ad: "Mezar & Anıt",       renk: "#555f6b" }
};

window.DONEMLER = {
  divan:      "Divan Edebiyatı",
  tanzimat:   "Tanzimat & Servet-i Fünun",
  cumhuriyet: "Erken Cumhuriyet",
  cagdas:     "Çağdaş"
};

window.MEKANLAR = [
  {
    id: "masumiyet-muzesi",
    ad: "Masumiyet Müzesi",
    kategori: "muze", donem: "cagdas",
    yazar: "Orhan Pamuk", eser: "Masumiyet Müzesi (2008)",
    semt: "Çukurcuma, Beyoğlu", konum: [41.0313, 28.9786],
    aciklama: "Pamuk'un romanıyla eş zamanlı kurguladığı müze, Kemal'in Füsun'a duyduğu takıntılı aşkın nesnelerini sergiliyor. Roman ile müze birbirinin kataloğu gibi okunabiliyor; 2014'te Avrupa Yılın Müzesi ödülünü aldı.",
    alinti: "Hayatımın en mutlu anıymış, bilmiyordum.",
    uyarlama: "Grant Gee'nin belgeseli 'Innocence of Memories' (2015)"
  },
  {
    id: "pamuk-apartmani",
    ad: "Nişantaşı – Teşvikiye",
    kategori: "kurmaca", donem: "cagdas",
    yazar: "Orhan Pamuk", eser: "İstanbul: Hatıralar ve Şehir (2003), Cevdet Bey ve Oğulları (1982)",
    semt: "Nişantaşı, Şişli", konum: [41.0505, 28.9935], temsili: true,
    aciklama: "Pamuk'un çocukluğunun geçtiği aile apartmanının bulunduğu semt. 'İstanbul: Hatıralar ve Şehir'de kentin kolektif 'hüzün'ünü bu pencerelerden anlatır; Cevdet Bey ailesinin üç kuşaklık hikâyesi de büyük ölçüde burada geçer."
  },
  {
    id: "tarlabasi",
    ad: "Tarlabaşı",
    kategori: "kurmaca", donem: "cagdas",
    yazar: "Orhan Pamuk", eser: "Kafamda Bir Tuhaflık (2014)",
    semt: "Tarlabaşı, Beyoğlu", konum: [41.0380, 28.9790], temsili: true,
    aciklama: "Boza satıcısı Mevlut'un 1969–2012 arasındaki İstanbul serüveninin önemli duraklarından biri. Roman, göç, kentsel dönüşüm ve sokak satıcılığı üzerinden kentin yarım asırlık sosyal tarihini anlatır."
  },
  {
    id: "pera-palas",
    ad: "Pera Palas Oteli",
    kategori: "mekan", donem: "cumhuriyet",
    yazar: "Agatha Christie", eser: "Doğu Ekspresinde Cinayet (1934)",
    semt: "Tepebaşı, Beyoğlu", konum: [41.0317, 28.9741],
    aciklama: "Orient Express yolcuları için 1892'de açılan otel. Rivayete göre Agatha Christie romanını 411 numaralı odada yazdı; oda bugün yazara adanmış durumda. Ernest Hemingway'in de konakladığı otel, Levanten Pera'nın simgelerinden.",
    uyarlama: "Doğu Ekspresinde Cinayet — Sidney Lumet (1974), Kenneth Branagh (2017)"
  },
  {
    id: "cicek-pasaji",
    ad: "Çiçek Pasajı & Balık Pazarı",
    kategori: "mekan", donem: "cumhuriyet",
    yazar: "Sait Faik, Orhan Kemal ve kuşağı", eser: "Beyoğlu öyküleri",
    semt: "Galatasaray, Beyoğlu", konum: [41.0343, 28.9778],
    aciklama: "Cité de Péra pasajının meyhaneleri ve arka sokaklar, 1940'lardan itibaren yazarların, ressamların ve gazetecilerin uğrak yeriydi. Sait Faik'in öykülerindeki Beyoğlu insanı — balıkçılar, garsonlar, işsizler — bu sokaklardan çıkar."
  },
  {
    id: "tunel-galata-mevlevihanesi",
    ad: "Galata Mevlevihanesi – Şeyh Galip Türbesi",
    kategori: "ani", donem: "divan",
    yazar: "Şeyh Galip", eser: "Hüsn ü Aşk (1783)",
    semt: "Tünel, Beyoğlu", konum: [41.0286, 28.9748],
    aciklama: "Divan şiirinin son büyük ustası Şeyh Galip, şeyhlik yaptığı bu mevlevihanede yatıyor. Hüsn ü Aşk, sembolik bir aşk yolculuğu olarak klasik mesnevi geleneğinin doruklarından sayılır.",
    alinti: "Hoşça bak zâtına kim zübde-i âlemsin sen"
  },
  {
    id: "haydarpasa",
    ad: "Haydarpaşa Garı",
    kategori: "siir", donem: "cumhuriyet",
    yazar: "Nâzım Hikmet", eser: "Memleketimden İnsan Manzaraları (1941–1950)",
    semt: "Kadıköy", konum: [40.9970, 29.0186],
    aciklama: "Nâzım'ın destansı yapıtı Haydarpaşa'nın merdivenlerinde açılır; tren Anadolu'ya doğru yola çıkarken memleketin insan manzaraları birbiri ardına geçer. Gar, Anadolu'ya açılan kapı olarak Türk edebiyatının ve sinemasının kalıcı imgelerinden biridir.",
    alinti: "Haydarpaşa garında / 1941 baharında / saat on beş."
  },
  {
    id: "istanbulu-dinliyorum",
    ad: "Eminönü – Haliç kıyısı",
    kategori: "siir", donem: "cumhuriyet",
    yazar: "Orhan Veli Kanık", eser: "İstanbul'u Dinliyorum — Vazgeçemediğim (1945)",
    semt: "Eminönü, Fatih", konum: [41.0170, 28.9725], temsili: true,
    aciklama: "Garip akımının öncüsünün belki de en sevilen şiiri: kuş sesleri, Kapalıçarşı'nın serinliği, güvercin dolu avlular, kıyıdan gelen sesler… Şehir, gözler kapalıyken bir ses manzarası olarak kurulur.",
    alinti: "İstanbul'u dinliyorum, gözlerim kapalı"
  },
  {
    id: "kapalicarsi",
    ad: "Kapalıçarşı",
    kategori: "mekan", donem: "cumhuriyet",
    yazar: "Edip Cansever", eser: "Yerçekimli Karanfil (1957), Mendilimde Kan Sesleri",
    semt: "Beyazıt, Fatih", konum: [41.0107, 28.9680],
    aciklama: "İkinci Yeni'nin önemli şairi Edip Cansever, uzun yıllar Kapalıçarşı'da antikacılık yaptı. Şiirlerindeki eşya, mekân ve iç ses ilişkisinde bu çarşının dokusunu aramak mümkün.",
    alinti: "İnsan yaşadığı yere benzer"
  },
  {
    id: "sahaflar",
    ad: "Sahaflar Çarşısı",
    kategori: "kitap", donem: "divan",
    yazar: "—", eser: "Kuşaklar boyu kitap ticareti",
    semt: "Beyazıt, Fatih", konum: [41.0103, 28.9645],
    aciklama: "Bizans döneminin kâğıt ve kitap pazarının yerinde kurulduğu söylenen, Osmanlı'dan bu yana kesintisiz kitap ticaretine ev sahipliği yapan avlu. Ortasında İbrahim Müteferrika'nın büstü bulunur."
  },
  {
    id: "babiali",
    ad: "Babıali – Cağaloğlu Yokuşu",
    kategori: "kitap", donem: "tanzimat",
    yazar: "Ahmet Rasim, Ahmet Mithat ve basın kuşakları", eser: "Matbuat tarihi",
    semt: "Cağaloğlu, Fatih", konum: [41.0115, 28.9755],
    aciklama: "Sadrazamlık binasından adını alan Babıali, Tanzimat'tan 1990'lara dek Türk basın ve yayıncılığının merkeziydi. Gazeteler, matbaalar ve yayınevleri bu yokuşta yan yana dizilirdi; 'Babıali' bugün hâlâ basın dünyasının mecazıdır."
  },
  {
    id: "yahya-kemal-muzesi",
    ad: "Yahya Kemal Beyatlı Müzesi",
    kategori: "muze", donem: "cumhuriyet",
    yazar: "Yahya Kemal Beyatlı", eser: "Kendi Gök Kubbemiz (1961), Aziz İstanbul (1964)",
    semt: "Çarşıkapı, Fatih", konum: [41.0098, 28.9690],
    aciklama: "Merzifonlu Kara Mustafa Paşa Medresesi'nde kurulan müze, şairin kişisel eşyalarını ve el yazılarını barındırır. Yahya Kemal'in şiirinde İstanbul, Osmanlı medeniyetinin hafızası ve 'fethedilen' şehir olarak yüceltilir."
  },
  {
    id: "suleymaniye",
    ad: "Süleymaniye",
    kategori: "siir", donem: "cumhuriyet",
    yazar: "Yahya Kemal Beyatlı", eser: "Süleymaniye'de Bayram Sabahı",
    semt: "Süleymaniye, Fatih", konum: [41.0161, 28.9640],
    aciklama: "Yahya Kemal'in en bilinen şiirlerinden biri, bir bayram sabahı Süleymaniye'de namaza duran cemaati Osmanlı'nın tarihî sürekliliğinin imgesine dönüştürür. Mimar Sinan'ın eseri burada bir medeniyet metaforudur."
  },
  {
    id: "fatih-harbiye",
    ad: "Fatih",
    kategori: "kurmaca", donem: "cumhuriyet",
    yazar: "Peyami Safa", eser: "Fatih-Harbiye (1931)",
    semt: "Fatih", konum: [41.0193, 28.9497], temsili: true,
    aciklama: "Romanın başkahramanı Neriman, geleneksel Fatih ile Batılılaşmış Harbiye arasında, tramvay hattının iki ucunda bocalar. İki semt, Cumhuriyet'in ilk yıllarındaki Doğu-Batı ikileminin mekânsal karşılığıdır."
  },
  {
    id: "harbiye",
    ad: "Harbiye",
    kategori: "kurmaca", donem: "cumhuriyet",
    yazar: "Peyami Safa", eser: "Fatih-Harbiye (1931)",
    semt: "Harbiye, Şişli", konum: [41.0455, 28.9878], temsili: true,
    aciklama: "Fatih-Harbiye'nin 'Batı' kutbu: konserler, balolar, Avrupai giyim ve yeni hayat tarzı. Neriman'ın Macit ile tanıştığı dünyanın simgesi."
  },
  {
    id: "topkapi",
    ad: "Topkapı Sarayı",
    kategori: "kurmaca", donem: "cagdas",
    yazar: "Orhan Pamuk", eser: "Benim Adım Kırmızı (1998)",
    semt: "Sultanahmet, Fatih", konum: [41.0115, 29.0034],
    aciklama: "1591 kışında geçen romanda saray nakkaşhanesinin ustaları, Frenk usulü resim ile İslam minyatür geleneği arasındaki gerilimin ortasında bir cinayeti çözmeye çalışır. Sarayın hazine ve kütüphanesi kurgunun merkezindedir."
  },
  {
    id: "tanpinar-muze-kutuphane",
    ad: "Ahmet Hamdi Tanpınar Edebiyat Müze Kütüphanesi",
    kategori: "muze", donem: "cumhuriyet",
    yazar: "Ahmet Hamdi Tanpınar", eser: "Huzur (1949), Beş Şehir (1946)",
    semt: "Gülhane Parkı, Fatih", konum: [41.0130, 28.9814],
    aciklama: "Gülhane Parkı içindeki tarihî köşkte, Türk edebiyatına adanmış ilk müze-kütüphane. Yazar portreleri, el yazmaları ve kişisel eşyalarla edebiyat tarihimizi mekânsal olarak sergiler."
  },
  {
    id: "huzur-bogaz",
    ad: "Kandilli – Anadolu yakası Boğaz kıyısı",
    kategori: "kurmaca", donem: "cumhuriyet",
    yazar: "Ahmet Hamdi Tanpınar", eser: "Huzur (1949)",
    semt: "Kandilli, Üsküdar", konum: [41.0686, 29.0583], temsili: true,
    aciklama: "Mümtaz ile Nuran'ın aşkı, Boğaz'ın iki yakasındaki semtlerde, mehtap gezintilerinde, musiki ve şiirle örülerek yaşanır. Tanpınar için Boğaz, zamanın ve geleneğin estetik bir sentezidir."
  },
  {
    id: "asiyan",
    ad: "Aşiyan Müzesi & Aşiyan Mezarlığı",
    kategori: "ani", donem: "tanzimat",
    yazar: "Tevfik Fikret · Yahya Kemal · Tanpınar · Orhan Veli", eser: "Rübab-ı Şikeste (1900), Sis",
    semt: "Aşiyan, Beşiktaş", konum: [41.0806, 29.0558],
    aciklama: "Servet-i Fünun'un büyük şairi Tevfik Fikret'in kendi tasarladığı ev, bugün müze; Fikret de bahçesinde yatıyor. Hemen yanındaki Aşiyan Mezarlığı'nda Yahya Kemal, Ahmet Hamdi Tanpınar ve Orhan Veli gibi isimler toprağa verilmiştir — Boğaz'a bakan bir edebiyat panteonu."
  },
  {
    id: "ask-i-memnu",
    ad: "Boğaziçi yalıları",
    kategori: "kurmaca", donem: "tanzimat",
    yazar: "Halit Ziya Uşaklıgil", eser: "Aşk-ı Memnu (1900)",
    semt: "Boğaziçi", konum: [41.0770, 29.0440], temsili: true,
    aciklama: "Adnan Bey'in Boğaziçi'ndeki yalısı, Bihter'in yasak aşkının kapalı sahnesidir. Servet-i Fünun romanının ustalık eseri, Batılı roman tekniğinin Türkçedeki ilk olgun örneklerinden sayılır.",
    uyarlama: "TRT dizisi (1975), Kanal D dizisi (2008–2010)"
  },
  {
    id: "camlica",
    ad: "Çamlıca Bahçesi",
    kategori: "kurmaca", donem: "tanzimat",
    yazar: "Recaizade Mahmut Ekrem", eser: "Araba Sevdası (1896)",
    semt: "Çamlıca, Üsküdar", konum: [41.0270, 29.0690],
    aciklama: "Alafranga züppe Bihruz Bey, Çamlıca Bahçesi'nde gördüğü bir lando içindeki kadına âşık olur. Tanzimat'ın yüzeysel Batılılaşmasını hicveden roman, ilk realist Türk romanlarındandır."
  },
  {
    id: "pierre-loti",
    ad: "Pierre Loti Tepesi",
    kategori: "mekan", donem: "tanzimat",
    yazar: "Pierre Loti", eser: "Aziyade (1879)",
    semt: "Eyüp", konum: [41.0548, 28.9338],
    aciklama: "Fransız yazar Pierre Loti'nin Haliç'e bakan bu kahveye sık uğradığı anlatılır. İstanbul'da geçen otobiyografik romanı Aziyade, oryantalist İstanbul imgesinin Avrupa'daki en etkili kaynaklarından biridir."
  },
  {
    id: "sait-faik-muzesi",
    ad: "Sait Faik Abasıyanık Müzesi",
    kategori: "muze", donem: "cumhuriyet",
    yazar: "Sait Faik Abasıyanık", eser: "Son Kuşlar (1952), Alemdağ'da Var Bir Yılan (1954)",
    semt: "Burgazada, Adalar", konum: [40.8810, 29.0640],
    aciklama: "Yazarın annesiyle yaşadığı ada evi, eşyaları ve kitaplarıyla korunuyor. 'Haritada Bir Nokta' öyküsünde Burgaz, kaçışın ve yeniden başlamanın adasıdır.",
    alinti: "Bir insanı sevmekle başlar her şey."
  },
  {
    id: "huseyin-rahmi",
    ad: "Hüseyin Rahmi Gürpınar Müzesi",
    kategori: "muze", donem: "tanzimat",
    yazar: "Hüseyin Rahmi Gürpınar", eser: "Şıpsevdi (1911), Gulyabani (1912)",
    semt: "Heybeliada, Adalar", konum: [40.8775, 29.0920],
    aciklama: "Halk romancısı Hüseyin Rahmi, ömrünün son yıllarını bu ada köşkünde geçirdi. Romanlarındaki İstanbul mahalle hayatı, batıl inançlar ve alafrangalık hicvi bugün de güncelliğini koruyor."
  }
];

window.ROTALAR = [
  {
    id: "beyoglu",
    ad: "Beyoğlu: Levanten Pera'dan Masumiyet'e",
    sure: "~2 saat yürüyüş",
    duraklar: ["pera-palas", "tunel-galata-mevlevihanesi", "masumiyet-muzesi", "cicek-pasaji", "tarlabasi"]
  },
  {
    id: "tarihi-yarimada",
    ad: "Tarihî Yarımada: Sahaflardan Saraya",
    sure: "~3 saat yürüyüş",
    duraklar: ["suleymaniye", "sahaflar", "yahya-kemal-muzesi", "kapalicarsi", "babiali", "tanpinar-muze-kutuphane", "topkapi"]
  },
  {
    id: "bogaz",
    ad: "Boğaz: Yalılar ve Şairler",
    sure: "Yarım gün, vapur + yürüyüş",
    duraklar: ["ask-i-memnu", "asiyan", "huzur-bogaz", "camlica", "haydarpasa"]
  },
  {
    id: "adalar",
    ad: "Adalar: Sait Faik'ten Hüseyin Rahmi'ye",
    sure: "Tam gün, vapur",
    duraklar: ["sait-faik-muzesi", "huseyin-rahmi"]
  }
];
