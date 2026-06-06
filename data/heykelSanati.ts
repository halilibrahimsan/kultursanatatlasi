export interface Heykelci {
  slug: string;
  ad: string;
  yasam: string;
  uyruk: string;
  donem: string;
  stil: string;
  ozet: string;
  biyografi: string;
  onemlieserler: { ad: string; yil: string; bulundugu: string; aciklama: string }[];
  teknik: string;
  miras: string;
  emoji: string;
  renk: string;
}

export const heykelciData: Heykelci[] = [
  {
    slug: "michelangelo-buonarroti",
    ad: "Michelangelo Buonarroti",
    yasam: "1475–1564",
    uyruk: "İtalyan",
    donem: "Yüksek Rönesans",
    stil: "Rönesans / Maniyerizm",
    emoji: "🗿",
    renk: "from-amber-600 to-orange-500",
    ozet: "Michelangelo, mermer bloğun içinde zaten var olan formu özgürleştirdiğini söylüyordu; Rönesans'ın en büyük heykeltıraşı, her çekicinin darbesiyle ideal güzelliği arayan bir kâşif gibi çalıştı.",
    biyografi: `Michelangelo di Lodovico Buonarroti Simoni, Floransa yakınlarındaki Caprese'de 1475'te dünyaya geldi. Ailesi onu ticaret hayatına hazırlamak istese de Michelangelo, Ghirlandaio'nun atölyesine girmeyi başardı. Daha sonra Lorenzo de Medici'nin antik koleksiyonlarına erişim imkânı buldu; bu koleksiyonlar onun sanat anlayışını antik Yunan ve Roma idealize estetiğiyle buluşturdu.\n\nFloransa'da Pietà ve Davut gibi gençlik döneminin heykelleri Michelangelo'nun ustalığını tüm dünyaya duyurdu. Davut heykeli, 1504'ten itibaren Floransa'nın simgesi oldu; mükemmel anatomik oran ve psikolojik gerilimi bir arada taşıyan bu eser, Rönesans idealizminin doruk noktasını temsil eder.\n\nRoma'daki Papa Julius II ile imzaladığı sözleşme, önce Sistine Şapeli tavan fresklerine (1508-1512), ardından Vatikan'daki anıt mezar projesine yol açtı. Michelangelo kendini heykeltıraş olarak tanımlıyor, ressam olarak çalışmaya zorlanmaktan yakınıyordu — ancak her iki alanda da çağının tartışmasız ustası oldu. Hayatının son döneminde eserleri giderek daha soyut ve ruhani bir boyut kazandı.`,
    onemlieserler: [
      { ad: "Davut (David)", yil: "1504", bulundugu: "Accademia Galerisi, Floransa", aciklama: "5.17 metre yüksekliğindeki mermer devasa; mükemmel anatomisiyle Rönesans idealizminin ve vatanseverlik ruhunun simgesi." },
      { ad: "Pietà", yil: "1499", bulundugu: "Vatikan, Roma", aciklama: "Genç Meryem'in kucağındaki İsa'yı betimleyen; diyagonal kompozisyon ve mermer yüzey işçiliğinde benzersiz Rönesans şaheseri." },
      { ad: "Musa (Moses)", yil: "1515", bulundugu: "San Pietro in Vincoli, Roma", aciklama: "Julius II'nin mezar anıtı için yapılan; kasılmış kasları ve psikolojik yoğunluğuyla ilahi gazabı taşlaştıran dev figür." },
      { ad: "Köle Heykelleri (Prisoners)", yil: "1513-1534", bulundugu: "Accademia Galerisi, Floransa", aciklama: "Mermerin içinden kurtulmaya çabalayan figürleri; tamamlanmamışlık (non-finito) estetiğinin en çarpıcı örneği." },
    ],
    teknik: "Michelangelo, subtractive sculpting yöntemini kullanarakmermer bloğun doğal damarlarını takip etti; her yüzey işçiliğinde kaslara ve damar sistemine dair derin bir anatomi bilgisini yansıttı. Tamamlanmamış bıraktığı eserlerde ise non-finito kavramını bilinçli bir estetik seçime dönüştürdü.",
    miras: "Michelangelo'nun anatomik gerçekliği ideal güzellikle buluşturduğu heykeller, sonraki dört yüz yılın tüm figüratif heykel anlayışını belirleyen bir referans standart oluşturdu. Rodin, Bernini ve modern heykelcilerin büyük bölümü bu mirası hem örnek alarak hem de ona karşı çıkarak şekillendi.",
  },
  {
    slug: "auguste-rodin",
    ad: "Auguste Rodin",
    yasam: "1840–1917",
    uyruk: "Fransız",
    donem: "Empresyonist Çağ",
    stil: "Modern Heykel / Realizm",
    emoji: "🤔",
    renk: "from-slate-600 to-gray-500",
    ozet: "Auguste Rodin, modern heykelin babası olarak pürüzlü yüzeyleri ve tamamlanmamış biçimleriyle akademik heykele meydan okudu; bronz ve mermerde insan bedeninin duygusal yoğunluğunu şiirsel bir anlatımla yakaladı.",
    biyografi: `Paris'te orta sınıf bir ailede dünyaya gelen Rodin, Beaux-Arts'a üç kez başvurdu ve her seferinde reddedildi. Uzun yıllar başka ustalar için dekoratif süsleme işleri yaparken kendi sanatını geliştirdi. 1875'teki İtalya gezisinde Michelangelo ile karşılaşması, anlayışını kökten değiştirdi.\n\n1877'de sergilediği "Bronz Çağ" heykeli o kadar gerçekçiydi ki Rodin'in canlı modelden kalıp aldığı iddia edildi — bu suçlamalar sonradan reddedildi ama Rodin'in anatomik ustalığının ne denli derin olduğunu da ortaya koydu. Cehennem Kapıları (Porte de l'Enfer) için 1880'de aldığı komisyon, yaşam boyu sürecek başyapıt projesini başlattı.\n\nRodin'in atölyesi Camille Claudel gibi yetenekli asistanlarla dolup taştı; Claudel ile hem sanatsal hem kişisel derin bir bağ kurdu. Siyasi tartışmalara yol açan Calais Vatandaşları ve Balzac heykelleri ise onun akademik normlara meydan okuyan özgün sesini dünyaya duyurdu.`,
    onemlieserler: [
      { ad: "Düşünen Adam (Le Penseur)", yil: "1902", bulundugu: "Rodin Müzesi, Paris", aciklama: "Cehennem Kapıları'nın tepesine tasarlanan figür; insanlığın varoluşsal düşüncesinin evrensel simgesi olarak en çok çoğaltılan heykel." },
      { ad: "Cehennem Kapıları", yil: "1880-1917", bulundugu: "Musée Rodin, Paris", aciklama: "Dante'nin İlahi Komedyası'ndan ilham alan 6 metrelik bronz kapı; 180'den fazla figürü kapsayan ve tüm kariyerinin özeti sayılan eser." },
      { ad: "Öpücük (Le Baiser)", yil: "1889", bulundugu: "Musée Rodin, Paris", aciklama: "Paolo ve Francesca'nın yasak aşkını mermer de kucaklayan figürlerle anlatan; aşkın bedensel ve duyumsal boyutunu açıkça işleyen eser." },
      { ad: "Calais Vatandaşları", yil: "1889", bulundugu: "Calais, Fransa", aciklama: "Altı figürden oluşan grup; İngiliz kuşatmasına boyun eğen Calaisli eşraftı anıtlaştırarak kahramanlığı insan kırılganlığıyla buluşturdu." },
    ],
    teknik: "Rodin, modelin poz verdiği anda rastladığı tutumları sketchlerle kayıt altına alarak figürlerine özgün anlık enerji kazandırdı. Pürüzlü, kazınmış yüzeyleri ışığın dramatik oynamasına olanak tanıdı; bu empresyonist yaklaşım tamamlanmamışlıkla bilinçli estetik bir tercih haline geldi.",
    miras: "Rodin, modern heykelin temelini atan, 20. yüzyıl heykel pratiğini doğrudan etkileyen bir dönüşüm yarattı. Brancusi ve Giacometti gibi öncü isimler, Rodin'in pürüzlü yüzeyler ve parçalanmış formlar anlayışını kendi soyutlamalarında sürdürdü.",
  },
  {
    slug: "constantin-brancusi",
    ad: "Constantin Brancusi",
    yasam: "1876–1957",
    uyruk: "Rumen-Fransız",
    donem: "Erken Modernizm",
    stil: "Soyut Heykel / Modern Primitivizm",
    emoji: "🦅",
    renk: "from-amber-500 to-yellow-500",
    ozet: "Brancusi, figüratif heykeli biçimsel özüne indirgeyen ve modern soyut heykel dilini yaratan köy doğumlu Rumen ustadır; \"Uzayda Kuş\" serisinde uçuşun özünü iki bronz çizgiye sığdırdı.",
    biyografi: `Romanya'nın Gorj ilçesinde köylü bir ailede doğan Brancusi, tahta oymacılığını köyde öğrendi; erken yetenekleri sayesinde Bükreş Güzel Sanatlar Okulu'na kabul edildi. 1904'te Paris'e yürüyerek geldi — rivayete göre başka türlü parasal imkânı yoktu — ve hemen sanat dünyasının merkezine girdi.\n\nRodin'in atölyesine kabul edildi ama kısa sürede ayrıldı: \"Büyük ağaçların altında hiçbir şey yetişemez\" diyerek bağımsız bir yol çizdi. Uzak çeşitli Karayip ve Afrika sanatı geleneğinden beslenerek figürü giderek arındırma yoluna girdi. Boyun'dan başladığı bu süreç, Uçuş / Uzayda Kuş serisinde saf bir heykelsi biçime ulaştı.\n\nAtölyesi kendi başına bir sanat eseri gibiydi; her nesnenin konumunu, ışığını ve gölgesini denetliyor; mekânı bütünsel bir kompozisyon gibi düşünüyordu. 1956'ya kadar Fransız vatandaşlığını reddeden Brancusi, öldüğünde tüm eserlerini ve atölyesini Fransız devletine bağışladı.`,
    onemlieserler: [
      { ad: "Uzayda Kuş (Bird in Space)", yil: "1923-1940", bulundugu: "MoMA, New York / Pompidou, Paris", aciklama: "Yükselen bronz form; uçuşun idealize soyutlaması. Amerikan Gümrüğü, \"sanatsal eser\" sayılmadığı için birini vergilendirdi — dava heykel tarihine geçti." },
      { ad: "Sonsuz Kolon", yil: "1938", bulundugu: "Târgu Jiu, Romanya", aciklama: "29.35 metre yükseklikte tekrarlayan çift kesik piramit modülleri; sonsuzluğu dikey bir ritim içinde somutlaştıran anıtsal Halk Sanatı sentezi." },
      { ad: "Öpücük", yil: "1907-1916", bulundugu: "Centre Pompidou, Paris / Montparnasse Mezarlığı", aciklama: "İki figürün birleştiği nokta: kübik formda yalın bir aşk; Rodin'in aynı konudaki eserine bilinçli bir yanıt." },
      { ad: "Uyuyan Muse", yil: "1909-1910", bulundugu: "Ulusal Sanat Müzesi, Bükreş", aciklama: "Oval biçime indirgenmiş yüz; figürün özsel varlığını en sade geometride araştıran erken dönem soyutlama denemesi." },
    ],
    teknik: "Brancusi taş ve ahşabı doğrudan yontu yöntemiyle (direct carving) işledi — kil modelden kalıp almak yerine malzemenin kendisine yasladı. Bronzda ise sayısız saat süren el parlatması gerçekleştirerek ayna gibi yüzeyin ışıkla bütünleşmesini sağladı.",
    miras: "Brancusi, figüratif heykeli soyuta taşıyan köprünün baş mühendisi olarak Henry Moore, Barbara Hepworth ve minimal sanatçıların bütününü doğrudan etkiledi. Uzayda Kuş, heykel tarihinin en tanınan ve en çok yorumlanan eserlerinden biri olmayı sürdürmektedir.",
  },
  {
    slug: "alberto-giacometti",
    ad: "Alberto Giacometti",
    yasam: "1901–1966",
    uyruk: "İsviçre",
    donem: "Varoluşçuluk Dönemi",
    stil: "Egzistansiyalist Heykel / Ekspresyonizm",
    emoji: "🚶",
    renk: "from-stone-600 to-gray-500",
    ozet: "Giacometti, insanı uzaktan izlendiği kadar ince ve hassas bronz figürlerinde dondu; yürüyen insanlarını yalnızlık ve varoluşsal kaygının sembolleri yaparak 20. yüzyılın en distile heykel dilini yarattı.",
    biyografi: `İsviçre'nin Graubünden kantonunda bir ressam babanın oğlu olarak doğan Alberto Giacometti, sanatın içinde büyüdü. Cenevre ve Floransa'da eğitimden sonra Paris'e yerleşti (1922) ve ömrünün geri kalan kısmını Montparnasse'daki küçük atölyesinde geçirdi.\n\n1930'larda Sürrealist harekete katılan Giacometti, Gözle Görülmez Nesne ve sabah bıçak gibi gizemli objeleriyle dikkat çekti. Ancak İkinci Dünya Savaşı'nın ardından figüratif çalışmaya döndü. Savaş yıllarını geçirdiği Cenevre'den Paris'e 1945'te döndüğünde çantasında yarım kilogram tutan ve tütün kutusu büyüklüğünde heykeller taşıyordu.\n\nHer figür yaparken çok büyük bulduğu ya da çok küçük kaldığı duygusundan kurtulamıyor, sayısız kez söküp yeniden kuruyordu. Sartre'in onu Jean Genet ile birlikte varoluşçuluğun plastik temsilcisi ilan etmesi, Giacometti'nin düşüncenin sanatsal pratiğe nasıl dönüştüğüne dair keskin bir sezgiydi.`,
    onemlieserler: [
      { ad: "Yürüyen Adam (L'Homme Qui Marche)", yil: "1960", bulundugu: "Çeşitli özel koleksiyonlar", aciklama: "İki metre bronz; uzun yolculuktan yorgun ama ilerleyişini sürdüren figür. 2010'da 104 milyon dolara satıldı — zamanında rekor." },
      { ad: "Şehrin Meydanı (La Place)", yil: "1948-1949", bulundugu: "Kunstmuseum Basel / MoMA, New York", aciklama: "Geniş bir plaka üzerinde farklı yönlere giden beş figür; kentsel yabancılaşmanın ve insanlar arasındaki uçurumun görsel metaforu." },
      { ad: "Arabanın İçindeki Figür", yil: "1950", bulundugu: "Kunsthaus Zürich", aciklama: "Kaba bir tekerlekli çerçevede ayakta duran figür; endüstriyel dünyanın içinde varoluşsal hassasiyeti buluşturan bileşik eser." },
      { ad: "Gözle Görülmez Nesne", yil: "1934", bulundugu: "Özel Koleksiyon", aciklama: "Sürrealist dönemden kalan; avuçlarının arasında olmayan bir nesneyi tutan figür — yokluğun maddileştirilmesi." },
    ],
    teknik: "Giacometti kili sürekli eritip yeniden yoğurarak figürü arındırıyordu; artık ince teller haline gelmiş figürleri sonunda döküme gönderebiliyordu. Bronz döküm sonrasında yüzeyi kazıyarak pürüzlü, neredeyse ateşten çıkmış bir doku elde etti.",
    miras: "Giacometti'nin figürleri, modern insanın yalnızlığı ve varoluşsal kaygısını en özlü biçimde somutlaştırarak 20. yüzyıl heykelinin kanonik eserleri arasına girdi. 2010 yılındaki açık artırma rekoru, hem onun mirasını hem de 20. yüzyıl sanatına verilen küresel değeri yeniden gündeme taşıdı.",
  },
  {
    slug: "ilhan-koman",
    ad: "İlhan Koman",
    yasam: "1921–1986",
    uyruk: "Türk-İsveçli",
    donem: "Kinetik Sanat Dönemi",
    stil: "Soyut / Kinetik Heykel",
    emoji: "⚙️",
    renk: "from-teal-600 to-cyan-500",
    ozet: "İlhan Koman, 20. yüzyıl dünya heykel tarihine Türkiye'den katılan en özgün sestir; sonsuzluk temasını matematiksel bir disiplinle araştıran kinetik heykel anlayışıyla Batı sanat dünyasında kalıcı bir iz bıraktı.",
    biyografi: `Edirne'de 1921'de dünyaya gelen İlhan Koman, İstanbul Devlet Güzel Sanatlar Akademisi'ni bitirdikten sonra Devlet bursuyla Paris'e gitti. Fernand Léger'in Académie du Mouvement'ında çalıştı ve Fransız soyut heykelinin önemli temsilcileriyle tanıştı. 1953'te Paris'ten Stockholm'e geçti.\n\nİsveç, Koman'ın hem kalıcı yuvası hem de sanatsal gelişim mekânı oldu. İsveç Kraliyet Teknoloji Enstitüsü'nde öğretim görevlisi olarak çalışırken matematik ve geometri konusundaki araştırmalarını heykel pratiğiyle iç içe geçirdi. Sonsuzluk temaları ve matematiksel örüntüler, çalışmalarının merkezine yerleşti.\n\nPi Heykeli ve Sonsuz Yüzeyler serisi, fizik ve matematikte yüzey topolojisi kavramlarıyla heykeli buluşturan nadir örneklerdir. Koman'ın çalışmaları Stockholm, Berlin ve çeşitli Avrupa kentlerinde kamusal alanlarda yer almaktadır.`,
    onemlieserler: [
      { ad: "Pi Heykeli", yil: "1977", bulundugu: "Stockholm, İsveç", aciklama: "Matematiksel Pi sabitinden hareketle türetilen yüzey örgüleri; form ve sayı arasındaki ilişkiyi üç boyutlu mekânda araştıran kinetik heykel." },
      { ad: "Sonsuz Yüzey Serisi", yil: "1966-1985", bulundugu: "Çeşitli koleksiyonlar", aciklama: "Möbius şeridini ve sonsuz döngü yüzeylerini çelik ve bakır malzemelerle hayata geçiren çığır açıcı seri." },
      { ad: "Evren Serisi", yil: "1960-1975", bulundugu: "Moderna Museet, Stockholm", aciklama: "Kozmik dönüşüm ve büyüme örüntülerini araştıran; organik formların matematiksel altta yatanını heykelleştiren çalışmalar topluluğu." },
      { ad: "Kıvrımlı Yüzey", yil: "1972", bulundugu: "Özel Koleksiyon", aciklama: "Tek parça metalden elde edilen karmaşık topolojik yüzey; izleyicinin gözünü form sınırlarını takip etmeye zorlayan meditasyonel eser." },
    ],
    teknik: "Koman, özellikle paslanmaz çelik ve bakır malzemeleri kullanarak soğuk şekillendirme ve kaynak tekniklerini titizlikle uyguladı. Matematiksel modeller ve bilgisayar destekli hesaplamalar (kendi döneminin olanaklıları ile) form geometrisini belirlemesinde temel araçlara dönüştü.",
    miras: "İlhan Koman, Türk sanatının uluslararası alanda en erken ve kalıcı izlerinden birini bıraktı. İsveç sanat ortamında ve ardından gelen Türk kinetik sanatçılar kuşağında belirleyici bir referans noktası olarak anılmaya devam etmektedir.",
  },
];
