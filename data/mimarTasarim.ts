export interface Mimar {
  slug: string;
  ad: string;
  yasam: string;
  uyruk: string;
  stil: string;
  ozet: string;
  biyografi: string;
  onemliBinalar: { ad: string; yil: string; yer: string; aciklama: string }[];
  teknik: string;
  miras: string;
  emoji: string;
  renk: string;
}

export const mimarlarData: Mimar[] = [
  {
    slug: "le-corbusier",
    ad: "Le Corbusier",
    yasam: "1887–1965",
    uyruk: "İsviçre-Fransız",
    stil: "Modernizm / Fonksiyonalizm",
    emoji: "🏛️",
    renk: "from-slate-600 to-gray-500",
    ozet: "Le Corbusier, 20. yüzyılın en etkili mimarıdır; \"ev, içinde yaşanacak bir makinedir\" sözüyle modernizmin ilkelerini tanımlamış, şehir planlamasını kökten dönüştürmüştür.",
    biyografi: `Charles-Édouard Jeanneret-Gris, İsviçre'nin Le Chaux-de-Fonds kentinde dünyaya geldi. Genç yaşta ülkeler arası seyahatler yaparak Akdeniz, Balkanlar ve yakın doğu mimarilerini inceledi; bu gözlemler ilerleyen yıllardaki tasarım dilini derinden şekillendirdi. Paris'e yerleşip Le Corbusier takma adını benimsedikten sonra hem tasarım atölyesi kurdu hem de L'Esprit Nouveau dergisini çıkardı.\n\nMimarideki beş temel ilkesini (pilotis, çatı bahçesi, serbest plan, yatay pencereler, serbest cephe) sistematik biçimde formüle eden Le Corbusier, Purisme akımının mimariye yansıması olarak saf hacim ve işlevsel oran anlayışını savundu. Villa Savoye bu ilkelerin somutlaştığı başyapıtı oldu.\n\nSavaş sonrası dönemde Marsilya'daki Unité d'Habitation, "yatay şehir" hayalini dikey bir yapıya sığdırdı. Hindistan'ın Chandigarh şehrini baştan planlayarak yapısal ölçeğini en büyük boyutuna taşıdı. Hayatının son eserlerinde Ronchamp Şapeli gibi organik ve heykelsi biçimler kullanarak kendisiyle de diyalektik bir gerilim yarattı.`,
    onemliBinalar: [
      { ad: "Villa Savoye", yil: "1931", yer: "Poissy, Fransa", aciklama: "Beş ilkenin tam olarak uygulandığı; pilotiler üzerinde yükselen, beyaz saf hacmiyle modernizmin ikonik manifesto yapısı." },
      { ad: "Unité d'Habitation", yil: "1952", yer: "Marsilya, Fransa", aciklama: "337 daire, çatı bahçesi, okul ve ticaret alanıyla kentsel bir topluluk fikrini tek çatı altında somutlaştıran devasa blok." },
      { ad: "Ronchamp Şapeli (Notre-Dame du Haut)", yil: "1954", yer: "Ronchamp, Fransa", aciklama: "Plastik ve organik duvarlarıyla Le Corbusier'nin kendi rasyonel dogmasını kırdığı, betonun heykelsi anlatım gücünü keşfettiği eser." },
      { ad: "Chandigarh Capitol Kompleksi", yil: "1960", yer: "Chandigarh, Hindistan", aciklama: "Meclisler, mahkeme ve valiliği kapsayan; bağımsızlık sonrası modern Hindistan'ın simgesi olarak planlanan yönetim merkezi." },
    ],
    teknik: "Béton brut (ham beton), pilotiler, serbest plan ve açık cephe gibi devrimci yapısal çözümler üreten Le Corbusier; kaba beton yüzeylerin doğrusal bırakılması ile Brutalizm akımına temel oluşturdu. Orantı sistemlerinde insan vücudunu esas alan Modulor ölçek sistemini geliştirerek evrensel bir tasarım çerçevesi önerdi.",
    miras: "Dünya genelindeki 17 yapısı 2016'da UNESCO Dünya Mirası Listesi'ne alındı. Mimarideki şehircilik anlayışı, sosyal konut projeleri ve tasarım metodolojisi hâlâ bütün dünyada okutulmakta ve tartışılmaktadır.",
  },
  {
    slug: "frank-lloyd-wright",
    ad: "Frank Lloyd Wright",
    yasam: "1867–1959",
    uyruk: "Amerikalı",
    stil: "Organik Mimari / Prairie Style",
    emoji: "🏡",
    renk: "from-amber-600 to-orange-500",
    ozet: "Frank Lloyd Wright, yapıyı çevresiyle bütünleştiren organik mimari anlayışıyla Amerikan mimarisi tarihinin en özgün ve üretken dehası olarak kabul edilir.",
    biyografi: `Wisconsin'de doğan Frank Lloyd Wright, mühendislik eğitiminin ardından Chicago'da Louis Sullivan'ın atölyesinde çalıştı. Sullivan'ın "biçim işlevi izler" ilkesini özümseyerek kendi radikal yorumunu geliştirdi. 1900'lerin başında Prairie Style adıyla bilinen yatay çizgili, geniş saçaklı ve manzarayla bütünleşen ev tasarımlarını geliştirdi.\n\nWright'ın organik mimari felsefesi, yapıların bulunduğu arazi ve çevreyle uyum içinde tasarlanmasını öngörüyordu. Malzemelerin doğallığına, mekânların akıcılığına ve iç-dış geçişkenliğine verdiği önem, döneminin Avrupa Modernizminden köklü biçimde ayrışıyordu. Japon mimarisi ve felsefesinden de beslendiği bu anlayış, ona özgün bir sentez yarattı.\n\nYüzyılın ortasında Usonian evleri aracılığıyla demokratik ve uygun fiyatlı konut idealini hayata geçirdi. 70 yaşını geçmişken tasarlanan Guggenheim Müzesi ise onun yaratıcı enerjisinin hiç söncmediğini gözler önüne serdi.`,
    onemliBinalar: [
      { ad: "Fallingwater (Şelale Evi)", yil: "1939", yer: "Pennsylvania, ABD", aciklama: "Pennsylvania'daki bir şelale üzerine konumlanan; beton konsol platformlar ve doğal kaya yüzeyleriyle mimarinin doğayla diyaloğunun doruk noktası." },
      { ad: "Guggenheim Müzesi", yil: "1959", yer: "New York, ABD", aciklama: "5. Cadde üzerinde yükselen spiral rampalı davul biçimli yapı; müze mekânı ve sirkülasyon anlayışını kökten yeniden tanımladı." },
      { ad: "Robie House", yil: "1910", yer: "Chicago, ABD", aciklama: "Prairie Style'ın en yetkin örneği; ufka paralel uzanan çatısı, tuğla yüzeyleri ve organik mekân akışıyla eklektisizmi geride bıraktı." },
      { ad: "Taliesin Atölyesi", yil: "1911/1937", yer: "Wisconsin & Arizona, ABD", aciklama: "Wright'ın hem yaşadığı hem de öğrencileriyle birlikte tasarladığı, organik mimari anlayışının yaşayan laboratuvarı." },
    ],
    teknik: "Wright, yapının site analizinden başlayarak bütünsel bir yaşam deneyimi yaratan organik tasarım yöntemi geliştirdi. Doğal malzemeleri (taş, tuğla, ahşap) ham biçimde kullanan mimar, açık planlı iç mekânları ve akıcı mekânsal geçişleri sistematik hale getirdi.",
    miras: "AIA (Amerikan Mimarlar Enstitüsü) Wright'ı \"tüm zamanların en büyük Amerikan mimarı\" seçti. Fallingwater ve Guggenheim Müzesi küresel mimarlık ikonlarına dönüştü; organik ve çevrecilik odaklı tasarım yaklaşımı ise günümüz sürdürülebilir mimari söyleminin temeli haline geldi.",
  },
  {
    slug: "mies-van-der-rohe",
    ad: "Mies van der Rohe",
    yasam: "1886–1969",
    uyruk: "Alman-Amerikalı",
    stil: "Uluslararası Üslup / Modernizm",
    emoji: "🏢",
    renk: "from-blue-600 to-indigo-500",
    ozet: "\"Az, çoktur\" ilkesiyle tasarımı salt özüne indirgeyen Mies van der Rohe, cam-çelik strüktürün şiirini keşfetti ve modern ofis mimarisini şekillendiren Uluslararası Üslup'un ustası oldu.",
    biyografi: `Ludwig Mies, Aachen'de bir taş ustasının oğlu olarak dünyaya geldi; akademik eğitim değil, erken dönem usta-çırak ilişkileri ve şantiye deneyimi onu biçimlendirdi. Berlin'de Peter Behrens'in atölyesinde çalışması — Le Corbusier ve Gropius gibi aynı kuşaktan mimarlarla birlikte — modernist düşüncenin temel özümlenmesini sağladı.\n\nBauhaus'un son direktörü olarak okulun kapatılmasından sonra 1937'de ABD'ye yerleşti. Chicago'da Illinois Institute of Technology'nin mimarlık bölümünü kurarak hem öğretti hem de tasarladı. Kampüs binaları, modern akademik mimarinin çerçevesini belirledi.\n\nÇelik-cam mimarinin saf geometrisini araştıran Mies, Farnsworth House ve Seagram Building ile bu dili zirveye taşıdı. "God is in the details" (Tanrı ayrıntılardadır) sözü, onun her milimetreyi mükemmelleştirmeye yönelik titiz tasarım disiplinini özetler.`,
    onemliBinalar: [
      { ad: "Barcelona Pavyonu", yil: "1929", yer: "Barcelona, İspanya", aciklama: "Mermer duvarlar, açık plan ve su yüzeylerinden oluşan geçici sergi yapısı; modernizmin programatik manifestosu. 1986'da aslına uygun yeniden inşa edildi." },
      { ad: "Farnsworth House", yil: "1951", yer: "Illinois, ABD", aciklama: "Çelik iskelet ve cam yüzeyin saf geometrisinden oluşan tek odalı ev; mekânın en soyut ve yalın ifadesi." },
      { ad: "Seagram Building", yil: "1958", yer: "New York, ABD", aciklama: "Manhattan'da bronz-cam cephesiyle yükselen; geri çekilmiş taban ve plaza anlayışıyla kent dokusuna saygılı modern gökdelen tipolojisini belirledi." },
      { ad: "Neue Nationalgalerie", yil: "1968", yer: "Berlin, Almanya", aciklama: "Çelik çatısı tek bir desteksiz levha gibi uzanan; saf modernist yapı anlayışının son ve en özlü ifadesi." },
    ],
    teknik: "Mies, yapıyı taşıyan çelik çerçeveyi cepheye yansıtmak yerine saf bir geometrik kafes içinde bütünleştirdi; duvarları taşıyıcı işlevden kurtararak iç mekânı özgürleştirdi. Bronz, paslanmaz çelik ve mermer gibi pahalı malzemeleri seçerek minimalist cepheye anlam ve ağırlık kattı.",
    miras: "Mies'in cam-çelik gökdelenler anlayışı, savaş sonrası dönemin tüm büyük şehir siluetlerini şekillendirdi. \"Less is more\" sözü mimarinin en popüler aforizmalarından biri haline gelirken Uluslararası Üslup, küresel kurumsal mimarinin varsayılan standardına dönüştü.",
  },
  {
    slug: "zaha-hadid",
    ad: "Zaha Hadid",
    yasam: "1950–2016",
    uyruk: "Iraklı-İngiliz",
    stil: "Dekonstruktivizm / Parametrik Tasarım",
    emoji: "🌊",
    renk: "from-violet-600 to-purple-500",
    ozet: "Zaha Hadid, mimaride hiçbir zaman görülmemiş eğrisel biçimleri bilgisayar destekli tasarımla hayata geçirdi; Pritzker Ödülü kazanan ilk kadın mimar olarak tarihe geçti.",
    biyografi: `Bağdat'ta dünyaya gelen Zaha Hadid, Beyrut'ta matematik eğitiminin ardından Londra'da Architectural Association'a girdi. Rem Koolhaas ve Elia Zenghelis ile birlikte OMA'da çalışmasının ardından kendi bürosunu kurdu. 1980'ler ve 90'lardaki projeleri uzun yıllar boyunca gerçekleştirilemeyen saf çizim ve ütopik tasarımlar olarak kaldı; yoğun eleştiri aldı.\n\nAncak bilgisayar destekli tasarım teknolojilerinin olgunlaşmasıyla birlikte Hadid'in akıcı, sürükleyici biçimleri inşa edilebilir hale geldi. 2004'te Pritzker Ödülü kazandı. MAXXI Müzesi ve Guangzhou Operası başarı üstüne başarı getirdi. Çalışmalarında kübizm, Suprematizm ve Rus Konstrüktivizminden ilham alarak mimariyi heykelsi bir ifade aracına dönüştürdü.\n\nHadid, yalnızca yapıları değil; mobilya, ayakkabı, mücevher ve otomobil tasarımlarıyla da mimariyi farklı ölçeklere taşıdı. Ölümünden bu yana bürosu, "Zaha Hadid Architects" olarak çalışmalarını sürdürmektedir.`,
    onemliBinalar: [
      { ad: "MAXXI Ulusal Sanat Müzesi", yil: "2010", yer: "Roma, İtalya", aciklama: "Birbirine geçen beton bantlar ve diyagonal galerileriyle antik Roma dokusunun içinde yaşayan bir çağdaşlık simgesi." },
      { ad: "Guangzhou Opera Binası", yil: "2010", yer: "Guangzhou, Çin", aciklama: "İki çakıl taşını andıran organik formuyla Pearl Nehri kıyısına yerleşen; çift kabuklu cephesiyle ses ve ışığı yeniden tanımlayan yapı." },
      { ad: "Heydar Aliyev Kültür Merkezi", yil: "2012", yer: "Bakü, Azerbaycan", aciklama: "Zemin, cephe ve çatının kesintisiz beyaz bir yüzeyde birleştiği; yer ile gök arasındaki sınırı silen akar form." },
      { ad: "BMW Merkezi (Leipzig)", yil: "2005", yer: "Leipzig, Almanya", aciklama: "Üretim bandının cam içinden görünür olduğu; mekânsal akışı üretim süreciyle özdeşleştiren devrimci fabrika yapısı." },
    ],
    teknik: "Hadid parametrik tasarım araçlarını kullanarak karmaşık eğrisel yüzeyleri milimetre hassasiyetiyle inşa edilebilir kıldı. Fiber beton, cam elyaf takviyeli polimer ve çelik kafes sistemler gibi ileri malzemeler, geleneksel mimari teknolojisinin sınırlarını aştı.",
    miras: "Parametrik mimari söylemin öncüsü, Pritzker Ödülü'nün ilk kadın kazananı ve mimarlık eğitiminde dönüşüm yaratan bir figür olarak Hadid, hem teori hem de pratikte kalıcı bir iz bıraktı. Başarısı, mimarlık dünyasındaki cinsiyet bariyerlerini kısmen aşmasında önemli bir sembolik işlev gördü.",
  },
  {
    slug: "mimar-sinan",
    ad: "Mimar Sinan",
    yasam: "yakl. 1490–1588",
    uyruk: "Osmanlı",
    stil: "Klasik Osmanlı Mimarisi",
    emoji: "🕌",
    renk: "from-rose-600 to-amber-500",
    ozet: "Mimar Sinan, Osmanlı mimarisini zirveye taşıyan ve 400'den fazla eser bırakan dehadır; Selimiye Camii'ni kendi başyapıtı olarak gören usta, İslam mimarisinin Michelangelo'su sayılmaktadır.",
    biyografi: `Kayseri ya da Ağırnas yakınlarında doğan Sinan, devşirme usulüyle Yeniçeri Ocağı'na alındı. Mühendislik yetenekleri ve seferlerde köprü, kale onarımı gibi pratik işler sırasında dikkat çekti. Kanuni Sultan Süleyman döneminde baş mimar (Hassa Mimarbaşı) konumuna yükseldi ve bu görevi yaklaşık elli yıl sürdürdü.\n\nŞehzade Camii'ni kendi "çıraklık eseri", Süleymaniye Camii'ni "kalfalık eseri", Selimiye Camii'ni ise "ustalık eseri" olarak tanımladığı rivayet edilir. Bu üçleme, onun mekânsal çözümler ve strüktürel mühendislik üzerine yürüttüğü sürekli deneyimi belgelemektedir. Yarım ve tam kubbelerin birleşiminden oluşan strüktürel sistem, Ayasofya'yı aşma çabasının ürünüdür.\n\nSinan yalnızca cami değil; medrese, han, hamam, kervansaray, köprü ve su tesisleri de tasarladı. Osmanlı şehirciliğinin tümüne damgasını vurdu; İstanbul'dan Edirne'ye, Şam'dan Bağdat'a uzanan coğrafyada eserler bıraktı.`,
    onemliBinalar: [
      { ad: "Selimiye Camii", yil: "1575", yer: "Edirne, Türkiye", aciklama: "Sinan'ın kendi \"ustalık eseri\"; merkezi kubbe sistemi, zarif minareleri ve dört yönde açılan yarım kubbelerle Osmanlı mimarisinin mutlak zirvesi." },
      { ad: "Süleymaniye Camii", yil: "1557", yer: "İstanbul, Türkiye", aciklama: "Kanuni Sultan Süleyman adına inşa edilen; sivil yapılar topluluğuyla birlikte kentin en büyük külliyesini oluşturan anıtsal yapı." },
      { ad: "Şehzade Camii", yil: "1548", yer: "İstanbul, Türkiye", aciklama: "Sinan'ın ilk büyük eseri; dört eşit yarım kubbenin merkezi kubbeyi çevrelediği, dengeli ve dingin bir mekânsal düzen." },
      { ad: "Rüstem Paşa Camii", yil: "1563", yer: "İstanbul, Türkiye", aciklama: "Eminönü'nde tüccar çarşısı üzerine yükselen; İznik çinilerinin en yoğun biçimde kullanıldığı, çini sanatının şaheseri." },
    ],
    teknik: "Sinan, yük aktarımı için paye ve yarım kubbe sistemini mükemmelleştirdi; ana kubbeyi destekleyen yarım kubbeleri simetrik düzenleyerek içerde geniş, sütunlardan bağımsız açık bir ibadet mekânı yarattı. Zemin mekaniği ve strüktürel sezgiyi ustaca birleştirdi.",
    miras: "Toplamda 374 yapı ile Osmanlı coğrafyasının en verimli mimar olarak tescil edilen Sinan, strüktürel çözümleri ve estetik olgunluğuyla hem döneminin hem de sonraki kuşakların standartını belirledi. Selimiye Camii 2011'de UNESCO Dünya Mirası Listesi'ne alındı.",
  },
  {
    slug: "renzo-piano",
    ad: "Renzo Piano",
    yasam: "1937–",
    uyruk: "İtalyan",
    stil: "High-Tech Mimari / Bağlamcı Modernizm",
    emoji: "🔧",
    renk: "from-teal-600 to-cyan-500",
    ozet: "Renzo Piano, teknolojiyi şiirle buluşturan yapılarıyla modern mimariyi hem yüksek teknolojiye hem de kentsel duyarlılığa bağlayan, Pritzker ödüllü İtalyan bir dâhidir.",
    biyografi: `Cenova'da bir müteahhit ailede doğan Renzo Piano, babasından taş ve tuğla sezgisini, Floransa ve Milano'daki eğitiminden ise mühendislik titizliğini aldı. Jean Prouvé ve Louis Kahn ile çalışma fırsatı bularak ustalarla diyalog kurdu. 1971'de Richard Rogers ile Centre Georges Pompidou yarışmasını kazanması hem mimariye hem de kariyerine bambaşka bir dönüm noktası açtı.\n\nPompidou'nun "ters çevrilmiş" yapısı — strüktür ve tesisatı dışarıya taşıyan —, ilk bakışta tartışmalı ama sonradan ikonik sayılan bir yaklaşımdı. Bu erken dönem projenin ardından Piano giderek daha az gösteri, daha çok incelik ve bağlam duyarlılığına yöneldi.\n\nBürosu Renzo Piano Building Workshop, meydanlardan müzelere, köprülerden kentsel dönüşüm projelerine geniş bir yelpazede çalışmaktadır. Her projede ışığı bir malzeme gibi kullanan, kentsel bağlamla diyalogu ön plana çıkaran ve yapı kullanıcısını merkeze alan bir tasarım anlayışı geliştirdi.`,
    onemliBinalar: [
      { ad: "Centre Georges Pompidou", yil: "1977", yer: "Paris, Fransa", aciklama: "Richard Rogers ile tasarlanan; renkli borular, yürüyen merdiven tünelleri ve dış strüktürlü high-tech cephe, şehrin sanat fabrikasına dönüştü." },
      { ad: "The Shard", yil: "2012", yer: "Londra, İngiltere", aciklama: "Thames kıyısında 309 metre yüksekliğe ulaşan cam piramit; parçalı camlardan oluşan cephesiyle Londra siluetinin yeni simgesi." },
      { ad: "Whitney Müzesi", yil: "2015", yer: "New York, ABD", aciklama: "Meatpacking District'te endüstriyel dokuya saygı gösteren; kademeli terasları, çelik cephesi ve Hudson Nehri manzarasıyla bütünleşen kültürel mekân." },
      { ad: "Kansai Uluslararası Havalimanı", yil: "1994", yer: "Osaka, Japonya", aciklama: "Yapay ada üzerine inşa edilen 1.7 km uzunluğundaki terminal; aerodinamik çatısı ve esnek mekânsal organizasyonuyla havalimanı mimarisini yeniden tanımladı." },
    ],
    teknik: "Piano, ışık geçirgenliğini denetleyen katmanlı cepheler ve özel kesit profilleriyle strüktürel sadeliği parçalı doku içinde eritti. Her projede yöresel malzeme ve iklimle uyumu gözetirken yüksek teknolojili prefabrikasyonla hız ve hassasiyet denetimini bir arada tuttu.",
    miras: "1998 Pritzker Ödülü sahibi Piano, hem endüstriyel hem de kültürel programlar için yalın ama zengin cepheler tasarlama yeteneğiyle dünyanın en çok çalışan aktif mimarlarından biri olmayı sürdürmektedir. Kentsel dönüşüm projelerindeki hassasiyet ve insan ölçeğine verdiği önem, çağdaş bağlamcı mimarlık söylemi için bir referans noktasıdır.",
  },
];
