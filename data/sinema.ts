export interface SinemaDonemi {
  slug: string;
  ad: string;
  donem: string;
  ozet: string;
  aciklama: string;
  ozellikler: string[];
  onemliFigurler: string[];
  onemliyapitlar: string[];
  emoji: string;
  renk: string;
}

export interface SinemaAkimi {
  slug: string;
  ad: string;
  donem: string;
  koken: string;
  ozet: string;
  ozellikler: string[];
  onemliFigurler: string[];
  onemliyapitlar: string[];
  emoji: string;
  renk: string;
}

export interface PopulerKultur {
  baslik: string;
  kategori: string;
  donem: string;
  aciklama: string;
  onemi: string;
  emoji: string;
}

export const sinemaTarihi: SinemaDonemi[] = [
  {
    slug: "sessiz-sinema",
    ad: "Sessiz Sinema Dönemi",
    donem: "1895 – 1927",
    emoji: "🎞️",
    renk: "from-stone-700 to-gray-600",
    ozet:
      "Lumière Kardeşler'in ilk gösteriminden talkies'in icadına uzanan, görüntünün gücünü keşfeden ve sinemayı bir sanat formuna dönüştüren kurucu dönem.",
    aciklama: `28 Aralık 1895, sinema tarihinin başlangıç tarihi olarak kabul edilir. Bu gün Paris'te Grand Café'de Lumière Kardeşler'in ilk ücretli film gösterimini gerçekleştirdiği tarihtir. "Tren İstasyona Geliyor" gibi kısa günlük yaşam filmlerini izleyen seyirciler, gelen trenden ürkerek kaçtıklarına dair efsanelerle anlatılır.

Georges Méliès sinemanın hiçbir şey olmadan kurgu, efekt ve hayal gücünü kullanabileceğini keşfetti. "Aya Yolculuk" (1902) bilim-kurgu sinemasının ilk örneğidir.

D.W. Griffith montaj tekniğini geliştirerek sinemayı gerçek anlamda bir anlatı sanatına dönüştürdü. Yakın çekim, paralel kurgu ve flashback gibi teknikler bugün hâlâ kullanılmaktadır.

Sessiz dönemin büyük starları: Charlie Chaplin, Buster Keaton, Harold Lloyd komedi türünü mükemmelleştirirken; Lon Chaney, Lillian Gish ve Rudolf Valentino farklı türlerde parlayan isimler oldu.`,
    ozellikler: [
      "Siyah-beyaz görüntü",
      "Diyalog yokluğu, pandomim ve abartılı mimikler",
      "İntertertitles (yazılı diyalog araları)",
      "Canlı müzik eşliği (orkestradan piyanoya)",
      "Hızlı gelişen film dili (montaj, yakın çekim)",
      "Charlie Chaplin'in Tramp karakteri gibi evrensel tipler",
    ],
    onemliFigurler: [
      "Charlie Chaplin",
      "Buster Keaton",
      "D.W. Griffith",
      "Georges Méliès",
      "Lillian Gish",
      "F.W. Murnau",
      "Sergei Eisenstein",
    ],
    onemliyapitlar: [
      "Aya Yolculuk – Méliès (1902)",
      "Bir Milletin Doğuşu – Griffith (1915)",
      "Kral Şeytan – Murnau (Nosferatu, 1922)",
      "Battleship Potemkin – Eisenstein (1925)",
      "General – Keaton (1926)",
    ],
  },
  {
    slug: "klasik-hollywood",
    ad: "Klasik Hollywood Dönemi",
    donem: "1927 – 1960",
    emoji: "⭐",
    renk: "from-yellow-600 to-amber-500",
    ozet:
      "Stüdyo sisteminin hâkimiyeti altında sinemanın tür filmlerini, yıldız sistemini ve klasik anlatı dilini mükemmelleştirdiği Altın Çağ.",
    aciklama: `1927'de "The Jazz Singer"ın gösterimiyle sesli film (talkie) devri başladı. Bu geçiş pek çok sessiz dönem yıldızının kariyerini sona erdirirken yenilerini doğurdu.

MGM, Paramount, Warner Bros., RKO ve 20th Century Fox'tan oluşan Büyük Beşli stüdyo sistemi bu dönemin yönetici kurumlarıydı. Stüdyolar aktörler, yönetmenler ve teknik ekip üzerinde mutlak söz hakkına sahipti.

Tür sistemleşti: Western, Musical, Gangster, Screwball Comedy, Film Noir ve Melodram bu dönemde olgunlaştı. Her tür kendi kural kitabına, ikonografisine ve beklentiler setine sahipti.

Hays Code (1934-1968): İçerik kısıtlamaları koydu — öpüşme sahnelerinin süresi sınırlandı, suç ödüllendirilmedi, ahlaki temizlik ön plana çıktı. Bu kısıtlamalar yaratıcılığı paradoks olarak artırdı: ima, sembol ve metafor becerisi gelişti.`,
    ozellikler: [
      "Stüdyo sistemi ve yıldız sistemi",
      "Tür sineması (Western, Musical, Noir)",
      "Klasik üç perdeli anlatı yapısı",
      "Hays Code içerik kısıtlamaları",
      "Technicolor renk teknolojisi",
      "Büyük prodüksiyon değerleri ve set mimarisi",
    ],
    onemliFigurler: [
      "Orson Welles",
      "John Ford",
      "Alfred Hitchcock",
      "Billy Wilder",
      "Humphrey Bogart",
      "Katharine Hepburn",
      "Cary Grant",
    ],
    onemliyapitlar: [
      "Yurttaş Kane – Welles (1941)",
      "Casablanca – Curtiz (1942)",
      "Sunset Boulevard – Wilder (1950)",
      "Psycho – Hitchcock (1960)",
      "Rüzgâr Gibi Geçti (1939)",
    ],
  },
  {
    slug: "yeni-dalga",
    ad: "Yeni Dalga Hareketi",
    donem: "1950'ler – 1970'ler",
    emoji: "🌊",
    renk: "from-blue-700 to-cyan-600",
    ozet:
      "Dünya genelinde bağımsız yönetmenlerin stüdyo sinemasını reddederek sokaklara çıktığı, sinemanın bir sanat formu olarak keşfedildiği devrimci dönem.",
    aciklama: `Yeni Dalga, farklı ülkelerde birbirinden bağımsız gelişen ama ortak ruhla birleşen bir dizi ulusal sinema hareketini tanımlar.

Fransız Yeni Dalgası (Nouvelle Vague): Cahiers du Cinéma eleştirmenlerinin yönetmenliğe geçmesiyle doğdu. Godard, Truffaut, Chabrol ve Resnais ucuz, taşınabilir ekipmanla sokaklarda film çekti. "Auteur" teorisi — filmin gerçek yazarının yönetmen olduğu fikri — bu dönemde yerleşti.

İtalyan Yeni Gerçekçilik: Savaş sonrası yıkıntılarda, gerçek insanlarla, sokakta çekilen filmler. De Sica'nın "Bisiklet Hırsızları" ve Rossellini'nin Roma'sı bu dönemin başyapıtlarıdır.

Japon, Yeni Alman, İngiliz Özgür Sinema akımları da bu dev hareketin parçalarıdır. Bergman'ın İsveç sineması, Kurosawa'nın Japonya'sı ve Satyajit Ray'in Hindistanı bu dönemde dünya sahnesine çıktı.`,
    ozellikler: [
      "Düşük bütçe, bağımsız üretim",
      "Açık hava, sokak ve gerçek mekân çekimleri",
      "El kamerası, spontane cinematography",
      "Öznel, deneysel anlatı yapıları",
      "Auteur (yönetmen-yazar) anlayışı",
      "Politik ve toplumsal içerik",
    ],
    onemliFigurler: [
      "Jean-Luc Godard",
      "François Truffaut",
      "Ingmar Bergman",
      "Akira Kurosawa",
      "Vittorio De Sica",
      "Federico Fellini",
      "Satyajit Ray",
    ],
    onemliyapitlar: [
      "400 Darbe – Truffaut (1959)",
      "Nefessiz – Godard (1960)",
      "Yedinci Mühür – Bergman (1957)",
      "Rashomon – Kurosawa (1950)",
      "Bisiklet Hırsızları – De Sica (1948)",
      "8½ – Fellini (1963)",
    ],
  },
  {
    slug: "yeni-hollywood",
    ad: "Yeni Hollywood",
    donem: "1967 – 1980",
    emoji: "🎬",
    renk: "from-red-700 to-orange-600",
    ozet:
      "Avrupa sinemasından etkilenen genç Amerikalı yönetmenlerin stüdyo sistemini dönüştürdüğü, sinemaya sanatsal bütünlük ve yetişkin temalar kattığı parlak dönem.",
    aciklama: `Hays Code'un 1968'de kaldırılması ve stüdyo sisteminin çöküşüyle birlikte, Avrupa sinemasından etkilenen yeni bir yönetmen kuşağı — Francis Ford Coppola, Martin Scorsese, Steven Spielberg, George Lucas, Brian De Palma — Hollywood'u devraldı.

Bu yönetmenler bir yandan sanatsal bütünlük, karanlık temalar ve gerçekçi karakter çizimiyle, öte yandan devasa ticari başarıyla Hollywood sinemasını dönüştürdü.

Coppola'nın "Godfather"ı (1972) ve Scorsese'nin "Taxi Driver"ı (1976) Amerikan sinemasının başyapıtları haline geldi. Aynı dönemde Spielberg'in "Jaws" (1975) ve Lucas'ın "Star Wars" (1977) modern blockbuster sinemasını ve franchise sistemini doğurdu.

Bu dönem hem en sanatsal hem de en ticari filmlerin aynı anda üretildiği benzersiz bir paradoksal döneme tekabül eder.`,
    ozellikler: [
      "Yönetmen merkezli (auteur) yaklaşım",
      "Karanlık, ahlaki açıdan belirsiz karakterler",
      "Gerçekçi şiddet ve cinsellik tasviri",
      "Avrupa sinema etkisi",
      "Geniş bütçeli blockbuster anlayışının doğuşu",
      "Anti-kahraman ve trajik yapılar",
    ],
    onemliFigurler: [
      "Francis Ford Coppola",
      "Martin Scorsese",
      "Steven Spielberg",
      "George Lucas",
      "Robert Altman",
      "Stanley Kubrick",
      "Hal Ashby",
    ],
    onemliyapitlar: [
      "Godfather I-II – Coppola (1972-74)",
      "Taxi Driver – Scorsese (1976)",
      "Chinatown – Polanski (1974)",
      "Kıyamet Şimdi – Coppola (1979)",
      "Star Wars – Lucas (1977)",
    ],
  },
  {
    slug: "dijital-cag",
    ad: "Dijital ve Küresel Sinema Çağı",
    donem: "1990'lar – günümüz",
    emoji: "💻",
    renk: "from-violet-700 to-purple-600",
    ozet:
      "Dijital devrim, küreselleşme ve streaming platformlarının sinemayı kökten yeniden şekillendirdiği, Hollywood'un egemenliğini kısmen kıran çok kutuplu çağ.",
    aciklama: `1990'lardan itibaren dijital teknoloji sinema üretimi, dağıtımı ve tüketimini köklü biçimde dönüştürdü. CGI (bilgisayar üretimi imgeler) önce tamamlayıcı sonra belirleyici bir araç haline geldi.

Sundance gibi bağımsız film festivalleri Quentin Tarantino, Richard Linklater gibi isimleri keşfederken, Güney Kore (Bong Joon-ho), İran (Abbas Kiarostami), Tayvan ve Romanya gibi ülkeler sinema tarihinin zirvesine tırmandı.

2020'lerin başındaki pandemi sürecinde Netflix, Amazon Prime ve Disney+ gibi streaming platformları dönüşümü hızlandırdı. "Parasite"in 2019'da Academy Best Picture ödülünü kazanması Hollywood'un yüzyıllık egemenliğine sembolik bir meydan okuma oldu.

Bağımsız ve uluslararası sinema artık geniş kitlelere ulaşabiliyor; dil ve coğrafya engelleri yıkıldı.`,
    ozellikler: [
      "CGI ve dijital efektler",
      "Streaming platformlarının yükselişi",
      "Sinema franchise ve evren kurgular (MCU vb.)",
      "Küresel arthouse sinemasının yükselişi",
      "Bağımsız sinema hareketleri",
      "Çeşitlilik ve temsil tartışmaları",
    ],
    onemliFigurler: [
      "Quentin Tarantino",
      "Christopher Nolan",
      "Bong Joon-ho",
      "Alfonso Cuarón",
      "Coen Kardeşler",
      "Yorgos Lanthimos",
      "Park Chan-wook",
    ],
    onemliyapitlar: [
      "Pulp Fiction – Tarantino (1994)",
      "Parasite – Bong Joon-ho (2019)",
      "Roma – Cuarón (2018)",
      "Inception – Nolan (2010)",
      "Yüzüklerin Efendisi – Jackson (2001-03)",
    ],
  },
];

export const sinemaAkimlari: SinemaAkimi[] = [
  {
    slug: "film-noir",
    ad: "Film Noir",
    donem: "1940'lar – 1950'lar",
    koken: "ABD (Hollywood)",
    emoji: "🌑",
    renk: "from-gray-800 to-zinc-700",
    ozet:
      "Siyah-beyaz görüntünün dramatik gölgeleri, ahlaki belirsizliği ve 'femme fatale' tipiyle suç ve kader filmlerinin eşsiz şiirsel dili.",
    ozellikler: [
      "Yüksek kontrast siyah-beyaz görüntü",
      "Gece sahneleri ve yağmurlu sokaklar",
      "Birinci tekil anlatı (voice-over)",
      "Femme fatale karakteri",
      "Ahlaki belirsizlik ve kaygı",
      "Alman ekspresyonist etki",
    ],
    onemliFigurler: [
      "John Huston",
      "Billy Wilder",
      "Howard Hawks",
      "Humphrey Bogart",
      "Lauren Bacall",
      "Barbara Stanwyck",
    ],
    onemliyapitlar: [
      "Double Indemnity – Wilder (1944)",
      "The Big Sleep – Hawks (1946)",
      "Sunset Boulevard – Wilder (1950)",
      "Touch of Evil – Welles (1958)",
    ],
  },
  {
    slug: "italyan-gercekcilik",
    ad: "İtalyan Yeni Gerçekçilik",
    donem: "1940'lar – 1950'lar",
    koken: "İtalya",
    emoji: "🇮🇹",
    renk: "from-green-700 to-emerald-600",
    ozet:
      "Savaş sonrası yıkıntılarda gerçek insanlarla, sokaklarda çekilen, sıradan yaşamın dramını anlatan İtalyan hareket.",
    ozellikler: [
      "Gerçek mekânlar, sokak çekimleri",
      "Profesyonel olmayan aktörler",
      "Düşük bütçe, belgesel estetiği",
      "Toplumsal yoksulluk ve savaş sonrası kriz",
      "Melodrama ve gerçekçilik sentezi",
      "Çocuk ve işçi sınıfı kahramanları",
    ],
    onemliFigurler: [
      "Roberto Rossellini",
      "Vittorio De Sica",
      "Luchino Visconti",
      "Cesare Zavattini (senarist)",
    ],
    onemliyapitlar: [
      "Roma Açık Şehir – Rossellini (1945)",
      "Bisiklet Hırsızları – De Sica (1948)",
      "Paisa – Rossellini (1946)",
      "Shoeshine – De Sica (1946)",
    ],
  },
  {
    slug: "alman-ekspresyonizm",
    ad: "Alman Ekspresyonist Sinema",
    donem: "1919 – 1933",
    koken: "Almanya (Weimar Cumhuriyeti)",
    emoji: "🦇",
    renk: "from-slate-800 to-gray-700",
    ozet:
      "Eğri ve bozulmuş set tasarımları, abartılı gölgeler ve kaygı dolu atmosferiyle korku ve gerilim türünün temelini atan Alman akım.",
    ozellikler: [
      "Bozulmuş, açılı set tasarımları",
      "Aşırı dramatik aydınlatma",
      "Psikolojik ve gotik temalar",
      "Otorite ve delilik",
      "Toplumsal paranoya atmosferi",
      "Ressam ve tiyatro etkisi",
    ],
    onemliFigurler: [
      "F.W. Murnau",
      "Fritz Lang",
      "Robert Wiene",
      "Paul Wegener",
      "Conrad Veidt",
    ],
    onemliyapitlar: [
      "Caligari Doktor'un Kabinesi – Wiene (1920)",
      "Nosferatu – Murnau (1922)",
      "Metropolis – Lang (1927)",
      "M – Lang (1931)",
    ],
  },
];

export const populerKultur: PopulerKultur[] = [
  {
    baslik: "Rock 'n' Roll'un Doğuşu",
    kategori: "Müzik",
    donem: "1950'ler",
    emoji: "🎸",
    aciklama:
      "Elvis Presley, Chuck Berry ve Little Richard ile Afrika-Amerikan blues ve rhythm & blues geleneğinin beyaz genç kültürüyle buluşması; popüler müziği ve gençlik kültürünü kökten dönüştürdü.",
    onemi:
      "Rock müzik, 1960'lar karşı-kültür hareketinin, The Beatles fenomeninin ve sonrasında heavy metal, punk ve alternatif müziğin doğmasına zemin hazırladı. Gençliğin kendi kimliğini ilan ettiği ilk kitlesel kültürel hareket.",
  },
  {
    baslik: "The Beatles ve Britanya İstilası",
    kategori: "Müzik",
    donem: "1960'lar",
    emoji: "🎵",
    aciklama:
      "Liverpool'dan çıkan dört genç müzisyen — Lennon, McCartney, Harrison ve Starr — popüler müziği, kılık kıyafeti ve gençlik kültürünü dönüştürdü. 'Beatlemania' küresel bir kültürel depreme dönüştü.",
    onemi:
      "The Beatles albüm kavramını, stüdyoyu kompozisyon aracı olarak kullanmayı ve sanatçının kamusal rol üstlenmesini yeniden tanımladı. Etkileri günümüz pop müziğinde hâlâ hissedilmektedir.",
  },
  {
    baslik: "Punk Devrimi",
    kategori: "Müzik / Kültür",
    donem: "1970'ler",
    emoji: "✊",
    aciklama:
      "The Sex Pistols ve The Clash öncülüğünde İngiltere ve ABD'de patlak veren punk hareketi, teknik virtüözlük yerine tutku ve öfkeyi, tüketim yerine kendin yap (DIY) etiğini öne çıkardı.",
    onemi:
      "Punk sanat, moda, yayıncılık ve tutumda bağımsızlık fikrini ana akıma taşıdı. Grunge, indie ve alternatif müzik hareketlerinin doğrudan atasıdır.",
  },
  {
    baslik: "Video Oyunlarının Yükselişi",
    kategori: "Teknoloji / Kültür",
    donem: "1970'ler – günümüz",
    emoji: "🎮",
    aciklama:
      "Atari'nin Pong'undan Super Mario'ya, Tetris'ten The Last of Us'a; video oyunları 50 yılda dünya kültürünün en büyük eğlence sektörüne dönüştü. Bugün sinema ve müzikten daha büyük bir endüstri.",
    onemi:
      "Oyunlar artık yalnızca eğlence değil, sanat, anlatı ve sosyal etkileşim platformu. Esport milyonlarca izleyiciye sahip profesyonel bir alan; oyun müzikleri konser salonlarında çalınıyor.",
  },
  {
    baslik: "Hip-Hop Kültürü",
    kategori: "Müzik / Kültür",
    donem: "1970'ler – günümüz",
    emoji: "🎤",
    aciklama:
      "1970'lerde Bronx'ta DJ Kool Herc ile başlayan hareket; rap, break dans, graffiti ve DJ kültürünü birleştirerek 20. yüzyılın en etkili kültürel hareketlerinden birine dönüştü.",
    onemi:
      "Hip-hop dünya genelinde en çok dinlenen müzik türü haline geldi. Moda, dil, siyaset ve toplumsal kimlik üzerindeki etkisi tarihsel açıdan eşsizdir.",
  },
  {
    baslik: "İnternet ve Dijital Kültür",
    kategori: "Teknoloji / Kültür",
    donem: "1990'lar – günümüz",
    emoji: "🌐",
    aciklama:
      "World Wide Web'in yaygınlaşmasıyla enformasyon üretimi, tüketimi ve paylaşımı kökten değişti. Blog, sosyal medya, YouTube ve TikTok yeni içerik yaratıcısı sınıfı doğurdu.",
    onemi:
      "İnternet kültürü geleneksel medya, yayıncılık ve sanat dünyasını dönüştürdü. Herkes içerik üreticisi olabildi; meme kültürü, viral içerik ve influencer ekonomisi yeni kültürel fenomenler yarattı.",
  },
  {
    baslik: "Süper Kahraman Sineması / MCU",
    kategori: "Sinema / Popüler Kültür",
    donem: "2000'ler – günümüz",
    emoji: "🦸",
    aciklama:
      "Marvel Studios'un 2008'de Iron Man ile başlattığı MCU (Marvel Sinematik Evreni) franchise modeli, sinemanın işletme modelini ve anlatı yapısını kökten değiştirdi. 30 milyar dolar küresel gişe.",
    onemi:
      "MCU, süper kahraman kültürünü niş alt kültürden ana akım kitlesel fenomene taşıdı. Sinema evren-yapımı ve franchise modeli rekabet eden stüdyolar tarafından kopyalandı.",
  },
  {
    baslik: "Japon Anime ve Manga Kültürü",
    kategori: "Animasyon / Kültür",
    donem: "1960'lar – günümüz",
    emoji: "⛩️",
    aciklama:
      "Osamu Tezuka'nın çizgi roman ve animasyon geleneği, Dragon Ball'dan Akira'ya, Neon Genesis Evangelion'dan Studio Ghibli'ye uzanan küresel kültürel bir güce dönüştü.",
    onemi:
      "Anime ve manga artık yalnızca Japonya'nın değil dünyanın kültürel mirası. Netflix gibi platformlardaki anime içerikleri küresel izleme rekoru kırıyor; manga satışları Fransız çizgi romanı piyasasını geçti.",
  },
  {
    baslik: "Feminist Dalgalar ve Kültür",
    kategori: "Toplumsal Hareket / Kültür",
    donem: "1960'lar – günümüz",
    emoji: "♀️",
    aciklama:
      "İkinci dalga feminizm 1960-70'lerde medya, edebiyat, sinema ve sanatta kadın temsilini sorguladı. #MeToo hareketi bu tartışmayı dijital çağa taşıdı.",
    onemi:
      "Feminist eleştiri sanat tarihi, edebiyat kanonu ve sinema endüstrisinin erkek egemenliğini yeniden değerlendirmemizi sağladı. Kadın sanatçılar ve yazarlar artık tarihte hak ettikleri yeri alıyor.",
  },
  {
    baslik: "Akış Yayıncılığı ve İçerik Devrimi",
    kategori: "Medya / Kültür",
    donem: "2010'lar – günümüz",
    emoji: "📺",
    aciklama:
      "Netflix, Amazon Prime, Disney+ ve HBO Max gibi platformlar dizi anlatısını bir sanat formuna dönüştürdü. 'Altın Televizyon Çağı' uzun biçimli anlatıya yeni olanaklar açtı.",
    onemi:
      "Breaking Bad, The Wire, Game of Thrones gibi diziler sinemanın önüne geçen karmaşıklık ve ambisyon düzeyine ulaştı. Binge-watching kültürü medya tüketimini kökten değiştirdi.",
  },
];
