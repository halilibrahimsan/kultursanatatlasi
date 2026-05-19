export interface SanatAkimi {
  slug: string;
  ad: string;
  donem: string;
  koken: string;
  ozet: string;
  aciklama: string;
  ozellikler: string[];
  onemliFigurler: string[];
  onemlieserler: string[];
  mirasi: string;
  emoji: string;
  renk: string;
}

export const sanatAkimlari: SanatAkimi[] = [
  {
    slug: "yuksek-ronesans",
    ad: "Rönesans",
    donem: "14. – 17. Yüzyıl",
    koken: "İtalya (Floransa)",
    emoji: "🏛️",
    renk: "from-amber-700 to-yellow-600",
    ozet:
      "Antik Yunan ve Roma'nın yeniden keşfiyle başlayan, insanı ve doğayı merkezine alan Batı sanatının dönüm noktası.",
    aciklama: `Rönesans (Fransızca: Yeniden Doğuş), 14. yüzyılda İtalya'da başlayan ve 16. yüzyılda tüm Avrupa'ya yayılan kültürel, sanatsal ve entelektüel bir dönüşüm hareketidir.

Orta Çağ'ın Tanrı merkezli dünya görüşünün yerini hümanizm aldı: insan, akıl ve doğa yeni ilgi odakları oldu. Antik Yunan ve Roma'nın yazılı ve görsel mirası yeniden keşfedilerek yorumlandı.

Floransa Medici ailesi sanatçılara himaye sundu. Sanatçılar artık anonim zanaatkâr değil, bireysel dahi olarak görülmeye başlandı. Perspektif kurallarının matematiksel olarak keşfedilmesi resmi kökten dönüştürdü.

Erken Rönesans (Quattrocento), Yüksek Rönesans ve Maniyerizm olmak üzere üç ana aşamada incelenir. Yüksek Rönesans (1490-1527) Leonardo da Vinci, Michelangelo ve Raphael'in olgunluk dönemini kapsar.`,
    ozellikler: [
      "Perspektif (üç boyutlu derinlik illüzyonu)",
      "Gerçekçi insan anatomisi",
      "Hümanist temalar: birey, akıl, doğa",
      "Antik çağ kaynaklarına başvuru",
      "Bilim ile sanatın birleşimi",
      "Sfumato ve chiaroscuro teknikleri",
    ],
    onemliFigurler: [
      "Leonardo da Vinci",
      "Michelangelo",
      "Raphael",
      "Sandro Botticelli",
      "Donatello",
      "Brunelleschi",
    ],
    onemlieserler: [
      "Mona Lisa – Leonardo da Vinci",
      "Sistine Şapeli Tavanı – Michelangelo",
      "Atina Okulu – Raphael",
      "Venüs'ün Doğuşu – Botticelli",
    ],
    mirasi:
      "Rönesans sanatı Batı uygarlığının temel estetik dilini şekillendirmiştir. Perspektif, anatomi ve kompozisyon ilkeleri günümüz sanat eğitiminin temelini oluşturmaktadır.",
  },
  {
    slug: "barok",
    ad: "Barok",
    donem: "17. – 18. Yüzyıl",
    koken: "Roma (İtalya)",
    emoji: "✨",
    renk: "from-yellow-700 to-amber-600",
    ozet:
      "Dramatik ışık-gölge, hareket dolu kompozisyonlar ve duygusal yoğunlukla izleyiciyi büyüleyen karşı-reform sanatı.",
    aciklama: `Barok, 17. yüzyılda Roma'da doğan ve Avrupa'ya hızla yayılan sanat üslubudur. Kelime kökeni Portekizce'de 'düzensiz inci' anlamına gelen 'barroco'dan gelir.

Protestan Reformasyon'a tepki olarak Katolik Kilisesi'nin desteklediği bu üslup, dini duyguyu canlandırmayı ve sıradan insanı büyülemeyi amaçladı. Bu nedenle görkemli, dramatik ve duygusal eserler ön plana çıktı.

Caravaggio'nun geliştirdiği tenebrism (derin karanlık içinden ışık vurma) tekniği Barok'un damgası haline geldi. Gian Lorenzo Bernini ise heykel ve mimariyi dramatik hareket ve duygusallıkla buluşturdu.

Hollanda'da ticaret burjuvazisinin yükselişiyle birlikte Barok'un laik, gündelik hayatı konu alan bir versiyonu gelişti: Rembrandt, Vermeer ve Frans Hals bu çizginin temsilcileridir.`,
    ozellikler: [
      "Dramatik tenebrism / chiaroscuro",
      "Hareket dolu, dinamik kompozisyonlar",
      "Güçlü duygusal yoğunluk",
      "Dinî ve mitolojik konular",
      "Detaylı dokular ve görkemli ölçek",
      "Tiyatral sahne düzeni",
    ],
    onemliFigurler: [
      "Caravaggio",
      "Gian Lorenzo Bernini",
      "Peter Paul Rubens",
      "Rembrandt van Rijn",
      "Diego Velázquez",
      "Johannes Vermeer",
    ],
    onemlieserler: [
      "Gece Nöbeti – Rembrandt",
      "Holofernes'in Başını Kesen Judith – Caravaggio",
      "Azize Theresa'nın Vecd Anı – Bernini",
      "Nedimeler – Velázquez",
    ],
    mirasi:
      "Barok mimari ve müzik (Bach, Handel) Avrupa'nın görsel ve işitsel kimliğini şekillendirdi. Versailles Sarayı ve Roma'daki Aziz Petrus Meydanı barok anlayışın mimari zirveleridir.",
  },
  {
    slug: "empresyonizm",
    ad: "Empresyonizm",
    donem: "1860'lar – 1880'ler",
    koken: "Fransa (Paris)",
    emoji: "🌅",
    renk: "from-sky-500 to-indigo-400",
    ozet:
      "Anlık ışık ve atmosferi yakalamayı hedefleyen, açık hava resmiyle sanat tarihini deviren Paris kökenli devrimci akım.",
    aciklama: `Empresyonizm, 1860'larda Fransa'da ortaya çıkan, resmi Salon'un akademik standartlarına karşı çıkan bir grup sanatçı tarafından başlatıldı.

1874'te Claude Monet, Pierre-Auguste Renoir, Edgar Degas, Camille Pissarro ve Berthe Morisot'un bağımsız sergi düzenlemesiyle resmen doğdu. Eleştirmen Louis Leroy'un Monet'nin "Impression, Sunrise" tablosunu alay konusu yapması akımın adını verdi.

Empresyonistler, nesnenin özünü değil, göz tarafından algılanan anlık ışık ve renk izlenimini yansıtmayı amaçladı. Bunun için açık havada, anında çalışmayı tercih ettiler (plein air). Fotoğrafın icadı da ressamları 'belge' işlevinden kurtarıp özgür bıraktı.

Akademik mükemmeliyetin yerini spontane fırça darbeleri, saf renklerin yan yana kullanımı ve gündelik konu seçimi aldı.`,
    ozellikler: [
      "Açık hava resmi (plein air)",
      "Anlık ışık ve atmosferin yakalanması",
      "Kısa, görünür fırça darbeleri",
      "Saf renklerin yan yana kullanımı (optik karışım)",
      "Gündelik hayat sahneleri",
      "Yüzey dokusunun önemi",
    ],
    onemliFigurler: [
      "Claude Monet",
      "Pierre-Auguste Renoir",
      "Edgar Degas",
      "Camille Pissarro",
      "Berthe Morisot",
      "Alfred Sisley",
    ],
    onemlieserler: [
      "Nilüferler (Seri) – Monet",
      "Moulin de la Galette'te Dans – Renoir",
      "Dans Eden Balet Sınıfı – Degas",
      "Le Havre Limanından İzlenim – Monet",
    ],
    mirasi:
      "Empresyonizm, modern sanatın kapısını araladı. Soyut sanata giden yolda ilk büyük adım olarak kabul edilir. Empresyonist tablolar günümüzde açık artırmalarda en yüksek fiyatlara ulaşan eserlerdir.",
  },
  {
    slug: "kubizm",
    ad: "Kübizm",
    donem: "1907 – 1920'ler",
    koken: "Fransa (Paris)",
    emoji: "🔷",
    renk: "from-blue-700 to-violet-600",
    ozet:
      "Nesneleri parçalayıp farklı bakış açılarını aynı anda sunan Picasso ve Braque'ın devrimci icadı. Modern sanatın en köklü kırılma noktası.",
    aciklama: `Kübizm, Pablo Picasso ve Georges Braque tarafından 1907-1908 yıllarında Paris'te icat edilen ve geleneksel Batı sanatının perspektif anlayışını temelinden yerle bir eden bir akımdır.

Hareketin başlangıç noktası Picasso'nun 1907'de tamamladığı "Avignonlu Kızlar" eseridir. Bu tabloda figürlerin anatomisi parçalanmış, yüzler hem yandan hem önden aynı anda gösterilmiştir. Cézanne'ın geometrik form anlayışı ve Afrika sanatının etkisi belirleyiciydi.

Analitik Kübizm (1908-1912): Bütün formlar küçük geometrik parçalara —küpler, koniler, silindirler— bölünür. Renk paleti oldukça kısıtlıdır (gri-kahverengi).

Sentetik Kübizm (1912-1919): Kolaj tekniğiyle gazete parçaları, kumaş ve diğer malzemelerin tabloya dahil edilmesiyle daha renkli ve çeşitli bir dil gelişti.`,
    ozellikler: [
      "Nesnelerin geometrik parçalara ayrılması",
      "Aynı anda birden fazla bakış açısı",
      "Kısıtlı renk paleti (analitik dönemde)",
      "Kolaj tekniğinin kullanımı (sentetik dönem)",
      "Üçüncü boyutun yıkılması",
      "Zaman ve mekânın eş zamanlı gösterimi",
    ],
    onemliFigurler: [
      "Pablo Picasso",
      "Georges Braque",
      "Juan Gris",
      "Fernand Léger",
      "Robert Delaunay",
    ],
    onemlieserler: [
      "Avignonlu Kızlar – Picasso",
      "Guernica – Picasso",
      "Keman ve Sürahi – Braque",
      "Bir Kadının Portresi – Gris",
    ],
    mirasi:
      "Kübizm, Fütürizm, Konstrüktivizm, Soyut Sanat ve Dışavurumculuğu doğrudan etkiledi. Mimarlık ve tasarım üzerinde de derin izler bıraktı. Modern sanat tarihinin en önemli dönüm noktası olarak kabul edilir.",
  },
  {
    slug: "surrrealizm",
    ad: "Sürrealizm",
    donem: "1920'ler – 1940'lar",
    koken: "Fransa (Paris)",
    emoji: "🌙",
    renk: "from-purple-700 to-indigo-600",
    ozet:
      "Freud'un bilinçaltı kuramından beslenen, rüya imgelerini gerçekliğin üstüne yerleştiren ve aklın sınırlarını zorlayan devrimci hareket.",
    aciklama: `Sürrealizm, 1924'te André Breton'ın "Sürrealizm Manifestosu"nu yayımlamasıyla resmen kurulmuş, ancak kökleri 1910'ların Dadaist deneylerinde olan bir sanat ve kültür hareketidir.

Temel ilkesi, akılcı kontrolün devre dışı bırakılarak bilinçaltının serbest bırakılmasıdır. Sigmund Freud'un psikanaliz kuramı — özellikle rüyalar, arzular ve bilinçdışı süreçler — akımın entelektüel zeminiydi.

İki ana yönelim vardır: Otomatik yazı ve çizim (bilinçsiz üretim); ve Dalí ile Magritte'in ustalaştığı hiperrealist düş imgesi (tanıdık nesneleri bağlamından kopararak tuhaf bileşimler oluşturma).

Paris'te başlayan hareket 2. Dünya Savaşı'nın ardından New York'a taşınan sanatçılarla Amerikan Soyut Ekspresyonizmi'ni de besledi.`,
    ozellikler: [
      "Bilinçaltı ve rüya imgelerinin kullanımı",
      "Beklenmedik nesne/kavram bileşimleri",
      "Otomatik yazı ve çizim",
      "Freudyen sembolizm",
      "Hiperrealist ya da fantastik yüzey",
      "Siyasi ve toplumsal eleştiri",
    ],
    onemliFigurler: [
      "Salvador Dalí",
      "René Magritte",
      "Max Ernst",
      "Joan Miró",
      "André Breton (teorisyen)",
      "Frida Kahlo (ilişkilendirilen)",
    ],
    onemlieserler: [
      "Belleğin Azmi – Dalí",
      "Adamın Oğlu – Magritte",
      "Gece Aşıkları – Ernst",
      "Karneval d'Arlequin – Miró",
    ],
    mirasi:
      "Sürrealizm edebiyat, sinema, fotoğrafçılık ve reklamcılık üzerinde derin etkiler bıraktı. Reklam tasarımında 'şaşırtan bileşimler' geleneği hâlâ bu akımın mirasıdır. Bunuel ve Dalí'nin 'Un Chien Andalou' filmi sinema tarihinin en etkili avant-garde yapıtlarından biridir.",
  },
  {
    slug: "ekspresyonizm",
    ad: "Ekspresyonizm",
    donem: "1900'ler – 1930'lar",
    koken: "Almanya / Avusturya",
    emoji: "😱",
    renk: "from-red-700 to-orange-600",
    ozet:
      "İçsel duygu ve psikolojik gerilimi çarpıtılmış formlar ve çığlık gibi renklerle dışa vuran Alman ve Avusturya kökenli akım.",
    aciklama: `Ekspresyonizm (Dışavurumculuk), 20. yüzyılın başında Almanya ve Avusturya'da filizlenen, sanatçının iç dünyasını — duygularını, korkularını ve anksiyetesini — nesnel gerçekliğin önüne koyan bir harekettir.

Empresyonistlerin dış dünyayı algıladığı gibi yansıtmasına karşılık, ekspresyonistler iç dünyayı görünür kılmayı hedefledi. Bu doğrultuda figürleri çarpıttılar, renkleri duygusal anlamla yüklediler, perspektifi bozdular.

Norveçli ressam Edvard Munch'ün 1893 tarihli "Çığlık" tablosu akımın öncülü sayılır. Almanya'da Die Brücke (1905) ve Der Blaue Reiter (1911) grupları hareketin örgütlü yapısını oluşturdu.

1. Dünya Savaşı'nın yarattığı yıkım ve sanayileşmenin toplumsal baskısı ekspresyonist ifadeye zemin hazırladı. Nazi Almanyası bu eserleri "çürük sanat" (entartete Kunst) olarak yasakladı ve 1937'de bir sergiyle aşağıladı.`,
    ozellikler: [
      "Çarpıtılmış, abartılı formlar",
      "Yoğun, duygusal renk kullanımı",
      "Bireysel psikolojik deneyim",
      "Toplumsal ve varoluşsal kaygılar",
      "Perspektif bozulması",
      "Ağır kontur çizgileri ve keskin hatlar",
    ],
    onemliFigurler: [
      "Edvard Munch",
      "Ernst Ludwig Kirchner",
      "Emil Nolde",
      "Egon Schiele",
      "Oskar Kokoschka",
      "Wassily Kandinsky",
    ],
    onemlieserler: [
      "Çığlık – Munch",
      "Oturmuş Kadın – Schiele",
      "Şehir Meydanı – Kirchner",
      "Portre – Kokoschka",
    ],
    mirasi:
      "Ekspresyonizm Soyut Ekspresyonizm, Neo-Ekspresyonizm ve Sürrealizm'i doğrudan etkiledi. Sinema alanında Alman Ekspresyonist filmleri (Nosferatu, Caligari) modern korku ve noir türünün temelini attı.",
  },
  {
    slug: "pop-art",
    ad: "Pop Art",
    donem: "1950'ler – 1970'ler",
    koken: "İngiltere / ABD",
    emoji: "💥",
    renk: "from-yellow-500 to-red-500",
    ozet:
      "Reklam görselleri, çizgi roman ve tüketim ürünlerini yüksek sanata taşıyarak 'yüksek' ve 'alçak' kültür arasındaki duvarı yıkan devrimci hareket.",
    aciklama: `Pop Art, 1950'lerin İngiltere'sinde Richard Hamilton gibi sanatçılarla başlayıp 1960'larda ABD'de Warhol ve Lichtenstein ile doruğa ulaşan bir harekettir.

Soyut Ekspresyonizm'in elitizmine ve piyasa yönelimli kültürü görmezden gelme eğilimine tepki olarak doğdu. Pop sanatçılar tam tersini yaptı: süpermarket ürünleri, film yıldızları, gazete fotoğrafları ve çizgi romanları doğrudan sanat eserine dönüştürdüler.

Tüketim kültürünü kutlayan mı yoksa eleştiren mi olduğu akımın en çok tartışılan sorusudur. Warhol'un Campbell's çorba kutuları hem tüketimi yüceltir hem de onun tekdüzeliğiyle dalga geçer gibi görünür.

Seri üretim, tekrar ve baskı teknikleri Pop Art'ın dilini oluşturdu. Sanat "özgün el yapımı eser" olmaktan çıkıp çoğaltılabilir, demokratik bir forma kavuştu.`,
    ozellikler: [
      "Popüler kültür imgelerinin kullanımı",
      "Parlak, doygun renkler",
      "Seri üretim estetiği",
      "Kolaj ve baskı teknikleri",
      "İroni ve mizah",
      "Sanat/gündelik hayat sınırını silme",
    ],
    onemliFigurler: [
      "Andy Warhol",
      "Roy Lichtenstein",
      "Jasper Johns",
      "Robert Rauschenberg",
      "Richard Hamilton",
      "David Hockney",
    ],
    onemlieserler: [
      "Campbell's Çorba Kutuları – Warhol",
      "Marilyn Diptik – Warhol",
      "Drowned Girl – Lichtenstein",
      "Bayrak – Jasper Johns",
    ],
    mirasi:
      "Pop Art, tasarım, reklam ve moda üzerinde derin ve kalıcı izler bıraktı. Günümüz dijital görsel kültürü Pop Art'ın mantığını sürdürmektedir. Banksy ve Jeff Koons gibi çağdaş sanatçılar bu mirasın devamcılarıdır.",
  },
  {
    slug: "soyut-ekspresyonizm",
    ad: "Soyut Ekspresyonizm",
    donem: "1940'lar – 1960'lar",
    koken: "ABD (New York)",
    emoji: "🎆",
    renk: "from-slate-700 to-zinc-600",
    ozet:
      "Güçlü duygusal ve bilinçdışı içeriği soyut biçim ve jestüel boyama aracılığıyla ifade eden, New York'u modern sanatın merkezine taşıyan Amerikan hareketi.",
    aciklama: `Soyut Ekspresyonizm, 2. Dünya Savaşı'nın ardından 1940'larda New York'ta gelişen ve ABD'nin ilk özgün sanat akımı olarak tarihe geçen harekettir.

İsmindeki "soyut" görsel bir formu, "ekspresyonizm" ise yoğun duygusal ifadeyi niteler. Sanatçılar kendiliğindeliği, spontaneliği ve bilinçdışını ön plana çıkardı.

İki ana eğilim vardır: Jestüel boyama (action painting) — Pollock'un damlatma tekniği ve De Kooning'in fırça darbelerinde öne çıkar; Renk alanı resmi (color field painting) — Rothko ve Newman'ın büyük, düz renk yüzeyleri izleyicide derin duygusal deneyimler uyandırmayı hedefler.

Eleştirmen Clement Greenberg'in yorumlarıyla hareket bir prestij kazandı ve sanat dünyasının merkezi Paris'ten New York'a taşındı.`,
    ozellikler: [
      "Büyük boyutlu tuvaller",
      "Jestüel, spontane fırça darbeleri",
      "Soyut formlar (figüratif temsil yok)",
      "Sanatçının psikolojisini yansıtma",
      "Düz renk alanları (color field)",
      "Otomatik süreçler ve bilinçdışı üretim",
    ],
    onemliFigurler: [
      "Jackson Pollock",
      "Mark Rothko",
      "Willem de Kooning",
      "Franz Kline",
      "Barnett Newman",
      "Lee Krasner",
    ],
    onemlieserler: [
      "No. 31 – Pollock",
      "Turuncu ve Sarı – Rothko",
      "Kadın I – De Kooning",
      "Vir Heroicus Sublimis – Newman",
    ],
    mirasi:
      "Soyut Ekspresyonizm, ABD'yi dünya sanatının merkezine taşıdı. Minimalizm, Renk Alanı Resmi ve Kavramsal Sanat'ı doğrudan besledi. Rothko'nun büyük yüzeyleri günümüz izleyicisine hâlâ derin duygusal deneyimler yaşatmaktadır.",
  },
  {
    slug: "minimalizm",
    ad: "Minimalizm",
    donem: "1960'lar – 1970'ler",
    koken: "ABD (New York)",
    emoji: "⬜",
    renk: "from-gray-400 to-slate-300",
    ozet:
      "Gereksiz her şeyi ayıklayarak en saf, en az, en temel formda kalan sanat. 'Az olan çoktur' felsefesinin tuval ve mekân dili.",
    aciklama: `Minimalizm, 1960'larda ABD'de Soyut Ekspresyonizm'in duygusal abartısına tepki olarak doğdu. Sanatı en temel geometrik formlara, düz renklere ve sade yüzeylere indirgemek temel hedefiydi.

"Az olan çoktur" (Less is more) cümlesinin görsel tercümesiydi. Sanatçının kişisel ifadesi, duygusu veya psikolojisi eserden çekildi; nesnenin kendisi — formu, rengi, malzemesi — ön plana geçti.

Frank Stella'nın "Siyah Tablolar" serisi, Donald Judd'un endüstriyel malzemelerden yapılmış "yığınları" (stacks) ve Dan Flavin'in floresan ışık düzenlemeleri bu anlayışın örnekleridir.

Minimalizm aynı zamanda müzik (Philip Glass, Steve Reich), edebiyat (Raymond Carver) ve mimarlık (Mies van der Rohe) alanlarında da güçlü bir hareket olarak tezahür etti.`,
    ozellikler: [
      "Geometrik sadelik",
      "Endüstriyel malzeme kullanımı",
      "Duygusallık ve anlatı yokluğu",
      "Tekrar ve seri",
      "Mekânla ilişki",
      "İzleyicinin algısını ön plana çıkarma",
    ],
    onemliFigurler: [
      "Donald Judd",
      "Frank Stella",
      "Dan Flavin",
      "Carl Andre",
      "Agnes Martin",
      "Robert Morris",
    ],
    onemlieserler: [
      "Yığınlar – Judd",
      "Floresan Düzenlemeler – Flavin",
      "Siyah Tablolar – Stella",
      "Izgara Çizimler – Martin",
    ],
    mirasi:
      "Minimalizm günümüz tasarım anlayışının temelini oluşturur. Apple'ın ürün tasarımı, Japonyalı tasarımcı Naoto Fukasawa ve moda dünyasında Jil Sander gibi isimler bu mirasın taşıyıcılarıdır. 'Wabi-sabi' ile buluşarak Japon estetiğiyle de derin bir diyalog kurmuştur.",
  },
];
