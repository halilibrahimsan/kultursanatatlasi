export interface TurkRessam {
  slug: string;
  ad: string;
  yasam: string;
  donem: string;
  akım: string;
  ozet: string;
  biyografi: string;
  eserler: { ad: string; yıl: string; aciklama: string }[];
  teknik: string;
  miras: string;
  emoji: string;
  renk: string;
}

export const turkRessamlar: TurkRessam[] = [
  {
    slug: "osman-hamdi-bey",
    ad: "Osman Hamdi Bey",
    yasam: "1842 – 1910",
    donem: "Tanzimat / Osmanlı Dönemi",
    akım: "Akademik Realizm / Oryantalizm",
    emoji: "🐢",
    renk: "from-amber-700 to-yellow-600",
    ozet:
      "Türk resminin kurucu babası, arkeolog ve müzeci. 'Kaplumbağa Terbiyecisi' ile dünya sanat kanonuna giren ilk Türk ressam.",
    biyografi: `Osman Hamdi Bey, 30 Aralık 1842'de İstanbul'da, Sadrazam İbrahim Edhem Paşa'nın oğlu olarak dünyaya geldi. Hukuk eğitimi için gittiği Paris'te on yılı aşkın süre kaldı ve Jean-Léon Gérôme ile Gustave Boulanger'in atölyelerinde resim öğrendi.

İstanbul'a döndükten sonra Osmanlı bürokrasisinde çeşitli görevler üstlendi; ancak asıl izini kültür alanında bıraktı. 1881'de kurulan İstanbul Arkeoloji Müzesi'ni yönetti, 1882'de ise Türkiye'nin ilk güzel sanatlar okulu olan Sanayi-i Nefise Mektebi'ni (bugünkü Mimar Sinan Güzel Sanatlar Üniversitesi) kurdu.

Tablolarında Osmanlı gündelik hayatını, camileri, çarşıları ve geleneksel kıyafetleri akademik Batı tekniğiyle aktardı. Oryantalist geleneği tersine çevirerek Doğu'yu bir Doğulu'nun gözünden resmetti.

Nemrut Dağı kazılarını ve Sayda (Sidon) antik kentindeki olağanüstü lahit buluntularını (İskender Lahdi dahil) dünyaya tanıttı. Müzeciliği ve arkeolojisi kadar resim sanatındaki mirası da bugün hâlâ canlıdır.`,
    eserler: [
      {
        ad: "Kaplumbağa Terbiyecisi",
        yıl: "1906",
        aciklama:
          "Türk resminin en tanınan eseri. Bir Osmanlı dervişi meşhur tef çalar nağmesiyle kaplumbağalara yön verirken tasvir edilmiştir. Pera Müzesi'nin simgesi olmuştur.",
      },
      {
        ad: "Silah Tüccarı",
        yıl: "1908",
        aciklama:
          "Üç kadının bir dini mekânda silah ticareti yapmasını gösteren tablo; geleneksel Osmanlı yaşamını ve cinsiyet rollerini ironik bir gözle yansıtır.",
      },
      {
        ad: "Mihrap",
        yıl: "1901",
        aciklama:
          "Bir cami mihrabı önünde okunan Kur'an sahnesi. Dini mekânın ışık ve doku açısından olağanüstü işlendiği başyapıt.",
      },
      {
        ad: "Leylek Besleyen Kadın",
        yıl: "1887",
        aciklama:
          "Osmanlı bahçesinde bir kadının leylekleri beslediği tabloda iç mekân ve dış mekânın ışığı ustalıkla işlenmiştir.",
      },
    ],
    teknik:
      "Paris'te öğrendiği Akademik Realizm tekniğini Osmanlı mekânlarına ve figürlerine uyguladı. Işık kullanımı, doku zenginliği ve mekânsal derinlik tablolarının belirgin özellikleridir. Fotoğraftan yararlanarak kompozisyonlarını kurduğu bilinmektedir.",
    miras:
      "Türk resim sanatının gerçek anlamdaki kurucu ismi. Sanayi-i Nefise Mektebi'ni kurarak Türkiye'de sistematik sanat eğitiminin temelini attı. 'Kaplumbağa Terbiyecisi' 2004'te Pera Müzesi'nin açılışında 3,5 milyon dolara satın alındı. Tüm eserleri bugün koleksiyonerlerin ve müzelerin gözdesidir.",
  },
  {
    slug: "ibrahim-calli",
    ad: "İbrahim Çallı",
    yasam: "1882 – 1960",
    donem: "Cumhuriyet Dönemi",
    akım: "Türk Empresyonizmi / 1914 Kuşağı",
    emoji: "🌻",
    renk: "from-yellow-600 to-orange-500",
    ozet:
      "Türk empresyonizminin kurucusu ve '1914 Kuşağı'nın önde gelen ismi. Canlı renkleri ve özgür fırça darbesiyle Türk resmine yeni bir soluk getirdi.",
    biyografi: `İbrahim Çallı, 1882'de Denizli'nin Çal ilçesinde doğdu. İstanbul'da Sanayi-i Nefise Mektebi'nde eğitim gördükten sonra 1910'da Paris'e gitti ve Fernand Cormon'un atölyesinde çalıştı. Burada Fransız empresyonizmiyle derinden tanıştı.

1914'te Birinci Dünya Savaşı'nın patlak vermesiyle birlikte İstanbul'a döndü; aynı dönemde Paris'ten dönen diğer sanatçılarla birlikte "1914 Kuşağı"nın çekirdeğini oluşturdu. Namık İsmail, Feyhaman Duran, Hikmet Onat ve Ali Sami Boyar bu kuşağın diğer önemli isimleridir.

Türkiye'de kalarak Kurtuluş Savaşı cephelerine gitmiş ve savaşı belgeleyen tablolar yapmıştır. Cumhuriyet'in ilanından sonra resmi törenleri, Atatürk portrelerini ve Anadolu yaşamını tuvale aktardı.

Güzel Sanatlar Akademisi'nde uzun yıllar öğretim üyesi olarak çalıştı ve pek çok önemli ressama hocalık yaptı. 1960'ta İstanbul'da hayatını kaybetti.`,
    eserler: [
      {
        ad: "Bahçede",
        yıl: "~1920",
        aciklama:
          "Empresyonist anlayışın en olgun örneği. Açık hava ışığı ve özgür fırça darbesiyle İstanbul'daki bir bahçe köşesini canlandırır.",
      },
      {
        ad: "Çanakkale Şehitleri",
        yıl: "1915-1920",
        aciklama:
          "Kurtuluş Savaşı ve Çanakkale cephesini belgeleyen seriden tablolar. Türk resim tarihinin önemli tarihi belgeleridir.",
      },
      {
        ad: "Kadın Portreleri",
        yıl: "1910-1940",
        aciklama:
          "Türk kadınını yeni Cumhuriyet ideolojisinin ışığında ele alan portrelerin serisi.",
      },
    ],
    teknik:
      "Fransız empresyonizmini Anadolu motifleri ve Türk yaşamıyla harmanlayan Çallı; canlı renk paleti, görünür fırça darbeleri ve ışığın doğal aktarımıyla tanınır.",
    miras:
      "Türk empresyonizminin kurucusu olarak anılır. Pek çok önemli öğrenci yetiştirmiştir. Eserleri İstanbul Resim ve Heykel Müzesi başta olmak üzere kamu koleksiyonlarında yer almaktadır.",
  },
  {
    slug: "bedri-rahmi-eyuboglu",
    ad: "Bedri Rahmi Eyüboğlu",
    yasam: "1911 – 1975",
    donem: "Erken Cumhuriyet",
    akım: "Modern Türk Resmi / Halk Sanatı Sentezi",
    emoji: "🦜",
    renk: "from-teal-600 to-emerald-500",
    ozet:
      "Türk halk sanatını modern resimle buluşturan, şair kimliğiyle de tanınan özgün Türk sanatçısı. Anadolu motiflerini çağdaş sanata taşıdı.",
    biyografi: `Bedri Rahmi Eyüboğlu, 1911'de Giresun'un Görele ilçesinde doğdu. İstanbul Güzel Sanatlar Akademisi'nde Nazmi Ziya Güran ve Leopold Lévy'nin öğrencisi oldu. Paris'te daha sonra Fernand Léger ile çalıştı.

Türk halk sanatı, Bizans mozaikleri ve Anadolu motifleriyle modern resim tekniklerini harmanlaması onu diğer çağdaşlarından ayırdı. Halı motifleri, güvercinler, balıklar ve Anadolu figürleri tablolarının tekrarlayan ögeleridir.

Bir şair olarak da tanınan Eyüboğlu, Türk resim yazınına eleştiri ve deneme alanında da katkıda bulundu. Güzel Sanatlar Akademisi'nde uzun yıllar öğretim üyeliği yaptı.

1973 São Paulo Bienali'nde Türkiye'yi temsil etti. Hem resim hem seramik hem de mozaik alanında üretken oldu.`,
    eserler: [
      {
        ad: "Güvercin Serisi",
        yıl: "1950-1970",
        aciklama:
          "Güvercin imgesi Bedri Rahmi'nin imzası haline geldi. Halk sanatı renk anlayışıyla yeniden yorumladığı bu kuş figürleri tablolarının ayrılmaz parçasıdır.",
      },
      {
        ad: "Anadolu Motifleri",
        yıl: "1940-1975",
        aciklama:
          "Halı, kilim ve nakış motiflerini modern resim yüzeyine taşıyan serisi. Türk halk estetiği ile Batılı modernizmin en başarılı sentezi.",
      },
    ],
    teknik:
      "Tuval resmi yanı sıra mozaik, seramik ve fresk da çalıştı. Halk sanatı motiflerini modern kompozisyon anlayışıyla birleştiren özgün bir dil geliştirdi.",
    miras:
      "Anadolu halk sanatını yüksek sanatla buluşturma çabası sonraki kuşak Türk sanatçıları derinden etkiledi. Güvercin imgesi Türk görsel kültürünün bir parçası haline geldi.",
  },
  {
    slug: "fikret-mualla",
    ad: "Fikret Mualla",
    yasam: "1903 – 1967",
    donem: "Erken Cumhuriyet / Paris Dönemi",
    akım: "Ekspresyonizm / Post-Empresyonizm",
    emoji: "🎪",
    renk: "from-red-600 to-orange-500",
    ozet:
      "Paris'te sürgünde yaşayan ve orada tanınan tek büyük Türk ressam. Türk Van Gogh'u olarak da anılan; cafeler, palyaçolar ve Paris sokaklarında geçen fırtınalı hayatın ressamı.",
    biyografi: `Fikret Mualla Saygı, 1903'te İstanbul'da doğdu. Güzel Sanatlar Akademisi'ni yarıda bırakıp Almanya'ya gitti, sonra Paris'e yerleşti. Hayatının büyük bölümünü Paris'te büyük yoksulluk ve alkol bağımlılığıyla geçirdi.

Montmartre'ın kafelerinde, barlarında ve sokaklarında yaşayan Mualla, tablolarını bu ortamda üretiyor ve çoğunlukla birkaç frank karşılığında satıyordu. Sirk sahneleri, palyaçolar, dans eden kadınlar, cafe köşeleri ve Paris'in rengarenk kalabalığı tablolarının başlıca konularıydı.

Paris sanat çevreleriyle ilişki kurdu; ancak hiçbir zaman büyük bir piyasa başarısı yakalayamadı. Ölümünden sonra Türkiye'de yeniden keşfedildi ve eserleri yüksek değerlere ulaştı.

1967'de Paris'te, Sainte-Anne Akıl Hastanesi'nde 64 yaşında hayatını kaybetti.`,
    eserler: [
      {
        ad: "Paris Kafeleri",
        yıl: "1940-1960",
        aciklama:
          "Montmartre'ın renkli cafe atmosferini coşkulu fırça darbeleri ve parlak renklerle aktaran seri. Türk resim tarihinin en özgün Paris tanıklıkları.",
      },
      {
        ad: "Sirk ve Palyaço Serisi",
        yıl: "1945-1965",
        aciklama:
          "Sirk figürleri Mualla'nın saplantılı konusuydu. Rengin ve neşenin arkasındaki melankoliyi yansıtır.",
      },
    ],
    teknik:
      "Post-empresyonist etki taşıyan ancak son derece kişisel bir dil geliştirdi. Hızlı ve özgür fırça darbeleri, canlı renk kontrastları ve spontane kompozisyon anlayışı belirgin özelliklerdir.",
    miras:
      "Ölümünden sonra en çok değer kazanan Türk ressamlarından biri. Eserleri müzayedelerde yüz binlerce dolara el değiştirmektedir. 'Türk Van Gogh'u' lakabı hem hayat hikâyesindeki paralellikleri hem sanatsal hırsı yansıtır.",
  },
  {
    slug: "abidin-dino",
    ad: "Abidin Dino",
    yasam: "1913 – 1993",
    donem: "Erken Cumhuriyet / Uluslararası Dönem",
    akım: "Modernizm / Soyut / Figüratif",
    emoji: "✏️",
    renk: "from-slate-600 to-gray-500",
    ozet:
      "Ressam, illüstratör, karikatürist, senaryo yazarı ve film yönetmeni. Yurt dışında en çok tanınan Türk sanatçılarından biri.",
    biyografi: `Abidin Dino, 1913'te İstanbul'da doğdu. Erken yaşta Paris'e giderek sanat eğitimi aldı. Fransa, İtalya ve İspanya'da bulundu; Pablo Picasso ve diğer önemli sanatçılarla dostluklar kurdu.

Türkiye'ye döndüğünde karikatür ve illüstrasyon çalışmalarıyla tanındı. Nazım Hikmet ile yakın arkadaşlığı siyasi açıdan onu da etkiledi. 1951'de yurt dışına çıkmak zorunda kaldı.

Paris ve Roma'da yaşadı. Realizm, ekspresyonizm ve soyut sanat arasında özgürce gidip gelen çok yönlü bir sanatçıydı. 1993'te Paris'te hayatını kaybetti.`,
    eserler: [
      {
        ad: "Eller Serisi",
        yıl: "1960-1990",
        aciklama:
          "İnsan elinin sayısız haliyle yorumlandığı bu seri onun en tanınan çalışmasıdır. Emek, güç, şefkat ve acı gibi kavramları el imgesiyle aktardı.",
      },
      {
        ad: "Karikatür ve İllüstrasyonlar",
        yıl: "1930-1950",
        aciklama:
          "Türk karikatür tarihinin önemli isimlerinden biri olarak gazete ve dergilerde yayımlanan siyasi ve sosyal karikatürler.",
      },
    ],
    teknik:
      "Son derece çeşitli bir teknik dağarcığı vardı: suluboya, yağlıboya, gravür, karakalem ve karikatür. Figüratiften soyuta uzanan geniş bir yelpazede üretim yaptı.",
    miras:
      "Türk sanatının uluslararası arenada en tanınan isimlerinden biri. Hem görsel sanatlar hem edebiyat hem de sinema alanındaki katkılarıyla çok boyutlu bir kültürel miras bıraktı.",
  },
];

export const turkResimSanatiTarihi = [
  {
    donem: "Osmanlı'da Resim (15.-19. yy.)",
    aciklama:
      "Osmanlı İmparatorluğu'nda geleneksel sanat anlayışı minyatür, hat ve tezhiple şekillenmişti. 15. yüzyılda Fatih Sultan Mehmed döneminde Gentile Bellini gibi Venedikli ustalar saraya davet edildi. Tanzimat reformlarıyla birlikte 19. yüzyılda Batılı anlamda resim sanatı Osmanlı'ya girmeye başladı. 1793'te açılan Mühendishane-i Berri-i Hümayun'da askeri amaçlı perspektif dersleri verildi.",
    emoji: "🏰",
  },
  {
    donem: "1914 Kuşağı ve Türk Empresyonizmi",
    aciklama:
      "Paris'te eğitim gören İbrahim Çallı, Feyhaman Duran, Namık İsmail, Hikmet Onat ve Ali Sami Boyar, Birinci Dünya Savaşı'nın başlamasıyla yurda döndü. Bu kuşak Türk resmini Batı akademik geleneğiyle buluşturdu. Empresyonist etki güçlüydü; ancak konular ve atmosfer Anadolu'ya özgüydü.",
    emoji: "🎨",
  },
  {
    donem: "Cumhuriyet Dönemi Sanatı (1923-1950)",
    aciklama:
      "Yeni Türkiye Cumhuriyeti sanatı ulusal kimlik inşasının aracı olarak kullandı. 'Yurt Gezileri' programıyla sanatçılar Anadolu'yu keşfetmek için gönderildi. Leopold Lévy, Güzel Sanatlar Akademisi'nde uzun yıllar ders vererek Türk sanatını şekillendirdi. Bedri Rahmi Eyüboğlu, halk sanatı motifleriyle modern sentezi bu dönemde geliştirdi.",
    emoji: "🏛️",
  },
  {
    donem: "Modernizm ve Soyut Eğilimler (1950-1980)",
    aciklama:
      "D Grubu (1933) ve ardından Yeniler Grubu (1940) Türk resminde modernist akımları yerleştirdi. 1950 sonrasında Türk ressamlar Soyut Ekspresyonizm, Geometrik Soyut ve Kavramsal Sanat alanlarında üretimler gerçekleştirdi. Adnan Çoker, Burhan Doğançay ve Komet (Cumhur Arslan) uluslararası arenada tanınan isimler oldu.",
    emoji: "🌀",
  },
  {
    donem: "Çağdaş Türk Sanatı (1980-Günümüz)",
    aciklama:
      "1980 sonrası Türk sanatı küreselleşme, kimlik siyaseti ve post-modern sorgulamalarla şekillendi. İstanbul Bienali (1987'den itibaren) Türkiye'yi uluslararası çağdaş sanat haritasına koydu. Şükrü Aysan, Hale Tenger, Gülsün Karamustafa ve Canan gibi sanatçılar kavramsal ve politik sanatı ön plana çıkardı.",
    emoji: "🌐",
  },
];
