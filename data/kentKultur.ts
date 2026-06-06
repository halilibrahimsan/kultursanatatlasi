export interface SehirKultur {
  slug: string;
  sehir: string;
  ulke: string;
  bayrak: string;
  renk: string;
  ozet: string;
  tarihselMiras: string;
  sanatsalKimlik: string[];
  onemliEserler: { baslik: string; tur: string; yil: string; aciklama: string }[];
  onemliMekanlar: string[];
  kulturelMiras: string;
}

export const kentKultur: SehirKultur[] = [
  {
    slug: "istanbul",
    sehir: "İstanbul",
    ulke: "Türkiye",
    bayrak: "🇹🇷",
    renk: "from-red-600 to-orange-500",
    ozet: "İki kıtanın buluştuğu İstanbul, on beş yüz yılı aşkın tarihin katman katman biriktiği, Bizans'tan Osmanlı'ya, modernden çağdaşa uzanan eşsiz bir kültür başkentidir.",
    tarihselMiras: `İstanbul, doğu ile batı, antik ile modern, kutsal ile dünyevi arasındaki köprü olarak insanlık tarihinin en anlamlı kentlerinden biridir. Konstantinopolis adıyla kurulan şehir, Roma, Bizans ve Osmanlı imparatorluklarına başkentlik yapmış; her medeniyetin izini taşıyan benzersiz bir kültür katmanı oluşturmuştur.\n\nOsmanlı döneminde saraylar, camiler ve çarşılar büyük bir sanatsal bütünlük içinde inşa edildi. Mimar Sinan'ın şaheserleri şehrin siluetini kalıcı biçimde şekillendirirken, Topkapı Sarayı'nda hat, minyatür ve tezhip sanatlarında zirveye ulaşıldı. Patronaj sistemi sayesinde sanatçılar, şairler ve müzisyenler için korunaklı bir ortam oluştu.\n\n20. yüzyılda İstanbul, hem gelenekten hem de modernizmden beslenen özgün bir edebiyat geleneği yarattı. Orhan Pamuk'un "hüzün" kavramıyla tasvir ettiği şehir, sinemadan tiyatroya, müzikten görsel sanata kadar pek çok alanda ilham kaynağı oldu. İstanbul Modern ve Pera Müzesi gibi çağdaş kurumlar ise kentin küresel sanat sahnesindeki yerini pekiştirdi.`,
    sanatsalKimlik: [
      "Osmanlı minyatür ve hat sanatının merkezi",
      "Nuri Bilge Ceylan sinemasının etkileyici fonu",
      "Orhan Pamuk edebiyatının yaşayan atmosferi",
      "Bizans mozaik sanatının başkenti",
      "Çağdaş sanatın yükselen Türkiye merkezi",
      "İki kıtanın mimari sentezi",
    ],
    onemliEserler: [
      { baslik: "Masumiyet Müzesi", tur: "Roman", yil: "2008", aciklama: "Orhan Pamuk'un İstanbul'un belleğini ve sıradan insanların trajedisini anlattığı, Nobel ödüllü başyapıtı." },
      { baslik: "İklimler", tur: "Sinema", yil: "2006", aciklama: "Nuri Bilge Ceylan'ın İstanbul sokaklarında, Boğaz kıyısında çektiği, sessiz bir aşk ve yalnızlık şiiri." },
      { baslik: "Süleymaniye Camii", tur: "Mimari", yil: "1557", aciklama: "Mimar Sinan'ın İstanbul silüetine armağanı; denge, oran ve güzelliğin mimari ifadesi." },
      { baslik: "Semavi Lale (Sultan Ahmed Çinileri)", tur: "Dekoratif Sanat", yil: "1616", aciklama: "Sultanahmet Camii'nin İznik çinileri; mavi-beyaz zirvenin en yetkin örneklerinden biri." },
      { baslik: "Son Tramvay", tur: "Şiir", yil: "1965", aciklama: "Cemal Süreya'nın İstanbul'un modernleşme gerilimine duyduğu nostaljik özlemi aktaran şiiri." },
    ],
    onemliMekanlar: [
      "İstanbul Modern — Türkiye'nin ilk çağdaş sanat müzesi",
      "Pera Müzesi — Osman Hamdi Bey eserleri ve dünya sanatı",
      "Topkapı Sarayı Müzesi — Osmanlı hazineleri ve el yazmaları",
      "Kapalıçarşı — Altı yüzyıllık ticaret ve zanaat merkezi",
      "Ayasofya — Dünyanın en büyük mozaik koleksiyonlarından biri",
      "Beyoğlu Sanat Galerileri — Çağdaş Türk sanatının kalbi",
    ],
    kulturelMiras: "İstanbul, Doğu ile Batı arasındaki eşsiz konumuyla sanat tarihine damgasını vurmuş; Osmanlı sanat geleneğini besleyerek modernleştirmiş, 21. yüzyılda da yaratıcı enerjisini çağdaş bir söylemle sürdürmektedir.",
  },
  {
    slug: "paris",
    sehir: "Paris",
    ulke: "Fransa",
    bayrak: "🇫🇷",
    renk: "from-blue-600 to-indigo-500",
    ozet: "Paris; empresyonizmin filizlendiği, sürrealizmin hayal kurduğu, egzistansiyalizmin düşündüğü ve Yeni Dalga sinemasının devrim yaptığı şehirdir — dünyanın tartışmasız sanat başkenti.",
    tarihselMiras: `19. yüzyılın ortasında Haussmann'ın büyük dönüşüm projesiyle yeniden biçimlenen Paris, aynı dönemde sanat tarihinin en köklü devrimini de yaşadı. Empresyonistler, Monet ve Renoir öncülüğünde, akademik resim anlayışını yıkarak anın ışığını ve duyumunu tuvale aktardı. Montmartre'ın atelyelerinde, Académie des Beaux-Arts'ın gölgesinde yepyeni bir görsel dil doğdu.\n\n20. yüzyılın başında Paris, dünyanın dört bir yanından sanatçılara kucak açtı. Picasso İspanya'dan, Chagall Rusya'dan, Modigliani İtalya'dan geldi ve "École de Paris" olarak bilinen bu kozmopolit hareket modern sanatın temeli oldu. Gertrude Stein'ın salonu, bu yaratıcı buluşmanın agorası haline geldi.\n\nYazar ve filozoflar şehrin kafe kültüründen beslendi. Sartre ve de Beauvoir Saint-Germain-des-Prés'de egzistansiyalist fikirleri geliştirdi. Proust, Paris sokaklarını "Kayıp Zamanın İzinde" romanının dokusuna işledi. Yeni Dalga sinemacıları ise şehrin sokaklarını stüdyodan kurtararak özgür ve spontane bir sinema dili icat etti.`,
    sanatsalKimlik: [
      "Empresyonizmin beşiği ve ana yurdu",
      "École de Paris ile modern sanatın odak noktası",
      "Nouvelle Vague sinemasının doğduğu şehir",
      "Edebiyatta egzistansiyalizm ve varoluş sorunsalı",
      "Yüksek moda ve tasarımın küresel merkezi",
      "Louvre ve Musée d'Orsay ile dünyanın en zengin müze mirası",
    ],
    onemliEserler: [
      { baslik: "Nilüferler (Nymphéas)", tur: "Resim", yil: "1906-1926", aciklama: "Claude Monet'nin Giverny bahçesindeki havuzu yansıtan dev tablo serisi; empresyonizmin doruk noktası." },
      { baslik: "Breathless (À Bout de Souffle)", tur: "Sinema", yil: "1960", aciklama: "Jean-Luc Godard'ın Paris sokaklarında çektiği, Nouvelle Vague'ın manifestosu olan başyapıt." },
      { baslik: "Kayıp Zamanın İzinde", tur: "Roman", yil: "1913-1927", aciklama: "Marcel Proust'un Paris'in burjuva dünyasını ve hafızanın mimarisini anlattığı 7 ciltlik anıtsal roman." },
      { baslik: "Centre Pompidou", tur: "Mimari", yil: "1977", aciklama: "Renzo Piano ve Richard Rogers'ın high-tech mimarinin simgesi olarak tasarladığı, Paris'in kültür fabrikası." },
      { baslik: "Demoiselles d'Avignon", tur: "Resim", yil: "1907", aciklama: "Pablo Picasso'nun Paris'te yarattığı, kübizmin kapılarını açan skandallı şaheser." },
    ],
    onemliMekanlar: [
      "Louvre Müzesi — Dünyanın en büyük sanat koleksiyonu",
      "Musée d'Orsay — Empresyonizm ve post-empresyonizmin tapınağı",
      "Centre Georges Pompidou — Çağdaş sanat ve modern mimari",
      "Montmartre — Sanatçıların efsanevi tepesi ve atelyeler",
      "Palais Royal Bahçesi — Aristokrasi ve sanatın buluştuğu mekân",
      "Shakespeare and Company — Sanatçıların sığındığı efsanevi kitabevi",
    ],
    kulturelMiras: "Paris, üç yüz yıldır dünyanın dört bir yanından sanatçıları kucaklayan kozmopolit yapısı ve müze zenginliğiyle küresel sanat tarihinin en kalıcı buluşma noktası olmayı sürdürmektedir.",
  },
  {
    slug: "tokyo",
    sehir: "Tokyo",
    ulke: "Japonya",
    bayrak: "🇯🇵",
    renk: "from-rose-600 to-pink-500",
    ozet: "Tokyo, ukiyo-e'nin ruhunu manga'ya taşıyan, geleneksel Japon estetiğini teknoloji çağıyla harmanlayan ve dünyanın pop kültür yeniliklerinin büyük bölümünü üreten öncü bir metropoldür.",
    tarihselMiras: `Edo döneminde (1603-1868) kurulan ve bugünkü Tokyo'nun temeli olan şehir, sanatsal açıdan Batı'dan bağımsız özgün bir estetik anlayış geliştirdi. Ukiyo-e olarak bilinen tahta baskı tekniğiyle Hiroshige ve Hokusai, gündelik yaşamı ve doğayı kayıt altına aldı. Bu "geçici dünyanın resimleri", 19. yüzyılda Avrupalı empresyonistleri derinden etkileyerek Japonculuk (Japonisme) akımını doğurdu.\n\nMeiji dönemi (1868) Batı etkisini kentsel ve sanatsal mekâna taşıdıysa da Japonya hiçbir zaman özgün estetiğini yitirmedi. Wabi-sabi, ma (boşluk) ve mono no aware gibi kavramlar mimariden tiyatroya, sinemadan güncel sanat pratiklerine sızdı. Kurosawa sineması, "Batı'yı Japon gözüyle okumak" üzerine kalıcı bir şablonu tanımladı.\n\nSavaş sonrası dönemde Tokyo, manga ve anime gibi kitlesel görsel anlatı biçimlerini küresel kültüre kazandırdı. Takashi Murakami ve Yayoi Kusama gibi çağdaş sanatçılar Japon pop kültürünü Batı sanat piyasasının merkezine taşıdı. Bugün Tokyo, hem geleneğin titizlikle korunduğu hem de en radikal deneysel sanatın hayat bulduğu çelişkili bir yaratıcı cennet olmaya devam etmektedir.`,
    sanatsalKimlik: [
      "Ukiyo-e tahta baskı geleneğinin mirası",
      "Manga ve anime endüstrisinin küresel üssü",
      "Kurosawa ve Ozu sinemasının anavatanı",
      "Wabi-sabi ve ma estetiğinin yaşayan laboratuvarı",
      "Murakami ve Kusama ile çağdaş pop sanat hareketi",
      "Harajuku ve Shibuya ile küresel sokak modası kültürü",
    ],
    onemliEserler: [
      { baslik: "Kanagawa Dalgası", tur: "Tahta Baskı", yil: "1831", aciklama: "Katsushika Hokusai'nin ikonik baskısı; Fuji Dağı ve dev dalganın karşılaşması, modern tasarımı etkileyen evrensel bir görsel simge." },
      { baslik: "Rüzgar Vadisi Nausicaä", tur: "Anime/Manga", yil: "1982", aciklama: "Hayao Miyazaki'nin çevreci temalarla örülü, anime ve manga tarihinin en etkili eserlerinden biri." },
      { baslik: "Tokyo Hikayesi", tur: "Sinema", yil: "1953", aciklama: "Yasujiro Ozu'nun Japon aile yapısındaki dönüşümü anlatan, sinema tarihinin en büyük filmlerinden biri." },
      { baslik: "Sonsuzluğun Odası (Infinity Rooms)", tur: "Enstalasyon", yil: "1965-günümüz", aciklama: "Yayoi Kusama'nın noktalı ve ayna odaları; obsesif tekrar ve sonsuzluk temalarını araştıran kalıcı bir sanat fenomeni." },
      { baslik: "Akira", tur: "Manga/Anime", yil: "1982-1990", aciklama: "Katsuhiro Otomo'nun neo-Tokyo distopyası; siber-punk estetiğini ve Soğuk Savaş kaygılarını hayranlık uyandıran bir görsel şiddetle yansıttı." },
    ],
    onemliMekanlar: [
      "Tokyo Ulusal Müzesi — Japonya'nın en büyük sanat koleksiyonu",
      "Mori Sanat Müzesi — Çağdaş sanatın Roppongi'deki kalesi",
      "Ghibli Müzesi — Animenin büyülü dünyasına açılan kapı",
      "Akihabara Manga/Anime Merkezi — Popüler kültürün katedrali",
      "TeamLab Planets — Dijital sanatın sürükleyici deneyim mekânı",
      "Yanaka Tarihi Mahallesi — Geleneksel Edo atmosferinin korunduğu ada",
    ],
    kulturelMiras: "Tokyo, geleneksel Japon estetiğini yitirmeksizin küresel kültür endüstrisini şekillendiren nadir metropollerden biridir; ukiyo-e'nin ustalığından manga'nın kitlesel anlatısına uzanan çizgi sanat tarihinin en özgün devamlılığını simgelemektedir.",
  },
  {
    slug: "new-york",
    sehir: "New York",
    ulke: "ABD",
    bayrak: "🇺🇸",
    renk: "from-slate-600 to-gray-500",
    ozet: "New York, Soyut Ekspresyonizm'den Pop Art'a, caz'dan hip-hop'a, film noir'dan bağımsız sinemaya uzanan alanlarda 20. yüzyılın en belirleyici sanatsal hareketlerinin yaşandığı başkentidir.",
    tarihselMiras: `20. yüzyılın ilk yarısında Avrupa'dan gelen göçmen sanatçılar New York'u yeni yurtları yaptı. İkinci Dünya Savaşı'nın ardından Paris'ten el alarak dünyanın sanat başkentine dönüşen şehir, Soyut Ekspresyonizm'in merkezine taşındı. Jackson Pollock'ın damlama tekniğiyle başlayan deney, Mark Rothko'nun renk alanları ve Willem de Kooning'in figüratif çözülmesiyle sürdü. Sanat eleştirmeni Clement Greenberg bu devrimci hareketi kavramsallaştırdı.\n\n1960'larda Andy Warhol, Factory'sini kurarak Pop Art'ı ticarileşme, kitlesel üretim ve ünlü kültürüyle buluşturdu. Warhol'un Campbell's çorbaları ve Marilyn Monroe serigrafları, tüketim toplumunun ikonografisini sanatın diline dönüştürdü. Aynı yıllarda Jean-Michel Basquiat gibi isimler sokak sanatını galerilere taşıdı.\n\nNew York aynı zamanda Jazz'ın (Bebop, Cool Jazz) ve hip-hop'un doğduğu şehirdir. Bronx ve Harlem'den yükselen müzik, hareketler boyunca kentin sosyal eşitsizliklerini ve zaferlerini kaydetti. Martin Scorsese'den Woody Allen'a, Spike Lee'den Noah Baumbach'a uzanan sinemacılar bu dinamik şehri beyaz perdede ölümsüzleştirdi.`,
    sanatsalKimlik: [
      "Soyut Ekspresyonizm'in dünya merkezi",
      "Pop Art ve tüketim kültürünün eleştiri arenası",
      "Jazz, Bebop ve Hip-Hop müziğinin anavatanı",
      "MoMA ile çağdaş sanatın küresel başvuru kaynağı",
      "Bağımsız ve sanatçı merkezli sinema hareketi",
      "Sokak sanatı ve grafiti kültürünün tarihsel odağı",
    ],
    onemliEserler: [
      { baslik: "Lavanta Sisi (Lavender Mist)", tur: "Resim", yil: "1950", aciklama: "Jackson Pollock'ın damlama tekniğinin zirvesi; bilinçaltını doğrudan tuvale aktaran, soyut ekspresyonizmin manifestosu." },
      { baslik: "Campbell's Çorbası Tenekesi", tur: "Resim", yil: "1962", aciklama: "Andy Warhol'un tüketim kültürünü ve sanat piyasasını sorgulayan ikonik Pop Art serisi." },
      { baslik: "Taksi Şoförü (Taxi Driver)", tur: "Sinema", yil: "1976", aciklama: "Martin Scorsese'nin 1970'ler New York'unun tehlikeli, karanlık atmosferini anlattığı sinema klasiği." },
      { baslik: "Guggenheim Müzesi", tur: "Mimari", yil: "1959", aciklama: "Frank Lloyd Wright'ın sarmal rampasıyla sanat mekânı kavramını yeniden tanımlayan, 5. Cadde'nin organik spirali." },
      { baslik: "Rapper's Delight", tur: "Müzik", yil: "1979", aciklama: "Sugarhill Gang'ın ilk hip-hop single'ı; Bronx'tan doğan bir kültürel devrimi dünya sahnesine taşıyan tarihsel kayıt." },
    ],
    onemliMekanlar: [
      "MoMA — Modern ve çağdaş sanatın küresel başvuru müzesi",
      "Guggenheim Müzesi — Wright mimarisi kadar değerli koleksiyon",
      "Whitney Müzesi — Amerikan sanatının ulusal arşivi",
      "The Met (Metropolitan) — 5000 yıllık sanat tarihinin hazinesi",
      "Chelsea Galerileri — Çağdaş sanat piyasasının merkezi",
      "Apollo Theatre (Harlem) — Caz ve R&B tarihinin tapınağı",
    ],
    kulturelMiras: "New York, 20. yüzyılın sanatsal devrimlerini hem üretip hem ihraç ederek küresel kültür endüstrisinin tartışmasız başkentine dönüşmüş; Soyut Ekspresyonizm'den hip-hop'a uzanan mirası tüm dünya sanatını kalıcı biçimde şekillendirmiştir.",
  },
  {
    slug: "viyana",
    sehir: "Viyana",
    ulke: "Avusturya",
    bayrak: "🇦🇹",
    renk: "from-violet-600 to-purple-500",
    ozet: "Viyana; Mozart, Beethoven ve Schubert'in müziğini doğurmuş, Klimt ve Schiele'nin tuvallerinde altın sarısıyla parlamış, Freud'un bilinçaltını keşfettiği ve Wittgenstein'ın dili çözümlediği beraberlik ve gerilimin başkentidir.",
    tarihselMiras: `19. yüzyılın sonundan 20. yüzyılın ilk on yılına kadar süren Viyana Fin de Siècle (yüzyıl sonu) dönemi, sanat tarihinin en yoğun entelektüel atılımlarından birini barındırdı. Habsburg İmparatorluğu'nun çöküşünü öngören bu kıpırdanışta, Gustav Klimt ve meslektaşları akademik tutuculuğa karşı çıkarak 1897'de Viyana Secession'ı kurdu. "Her çağa sanatı, sanata özgürlüğü" sloganıyla hareket eden bu grup, Jugendstil akımının en parlak örneklerini yarattı.\n\nAynı dönemde psikolog Sigmund Freud bilinçaltını keşfederek modern psikolojiyi temellendirdi ve sanat dünyasını kalıcı olarak etkiledi. Egon Schiele'nin çarpıcı figüratif çalışmaları, Freudyen gerilimi tuvale taşıdı; Oskar Kokoschka'nın ifadeci portreleri ise iç dünyayı dışavurumcu bir şiddetle ortaya koydu.\n\nKlasik müzik açısından Viyana, dünya tarihinin en yoğun sanatçı konsantrasyonuna ev sahipliği yapmıştır. Mozart, Haydn, Beethoven, Schubert, Brahms, Mahler ve Bruckner bu şehirde yaşadı ve çalıştı. Viyana Filarmoni Orkestrası ve Devlet Operası, bu müzikal mirasın yaşayan taşıyıcıları olmayı sürdürmektedir.`,
    sanatsalKimlik: [
      "Klasik müzik tarihinin altın çağı ve Viyana Okulu",
      "Klimt ve Schiele ile Viyana Secession hareketi",
      "Freud'un bilinçaltı kuramıyla psikanalizin doğduğu kent",
      "Jugendstil mimarisi ve dekoratif sanat",
      "12-ton tekniğiyle Schoenberg ve müzikal modernizm",
      "Habsburg döneminin opera ve bale geleneği",
    ],
    onemliEserler: [
      { baslik: "Öpücük (Der Kuss)", tur: "Resim", yil: "1907-1908", aciklama: "Gustav Klimt'in altın yaprak ve Bizans etkisiyle bezeli, sembolik aşk betimlemesi; Viyana Secession'ın simgesi." },
      { baslik: "9. Senfoni (Op. 125)", tur: "Müzik", yil: "1824", aciklama: "Ludwig van Beethoven'ın sağırlık döneminde bestelediği, Ode to Joy'u içeren ve 'Avrupa Marşı' olan şaheser." },
      { baslik: "Kız Portreleri (Schiele)", tur: "Resim", yil: "1910-1918", aciklama: "Egon Schiele'nin sansüre rağmen ürettiği, insan bedeninin anksiyete ve cinselliğini ifadeci bir dil ile keşfeden eserleri." },
      { baslik: "Kıyamet'in Gülüşü (Beethoven Frizi)", tur: "Resim-Fresk", yil: "1902", aciklama: "Klimt'in 34 metre boyunca uzanan ve Beethoven'a adanmış, Secession Binası'nı süsleyen muazzam frizi." },
      { baslik: "Viyana Devlet Operası", tur: "Mimari", yil: "1869", aciklama: "Eduard van der Nüll ve August von Siccardsburg tasarımlı, Habsburg döneminin Ringstrasse mimarisinin en görkemli örneği." },
    ],
    onemliMekanlar: [
      "Kunsthistorisches Museum — İmparatorluk sanat koleksiyonlarının hazinesi",
      "Belvedere Sarayı — Klimt'in 'Öpücük'ünün evi",
      "Viyana Secession Binası — Jugendstil mimarinin ikonu",
      "Viyana Devlet Operası — Avrupa'nın en prestijli opera sahnesi",
      "Albertina — Dünyanın en büyük grafik sanat koleksiyonu",
      "Freud Müzesi — Bilinçaltı kuramının doğduğu Berggasse 19",
    ],
    kulturelMiras: "Viyana, müzik, resim ve entelektüel düşünce alanlarında 18-20. yüzyıllar boyunca evrensel kültüre katkı yapmış; Klasik müzik geleneği ve Secession hareketi ile Avrupa sanat tarihinin tartışmasız en verimli merkezlerinden biri olmuştur.",
  },
];
