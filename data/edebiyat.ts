export interface EdebiyatAkimi {
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

export interface YazarProfil {
  ad: string;
  yasam: string;
  uyruk: string;
  akım: string;
  onemlieserleri: string[];
  kisa: string;
}

export const edebiyatAkimlari: EdebiyatAkimi[] = [
  {
    slug: "romantizm",
    ad: "Romantizm",
    donem: "18. yüzyıl sonu – 19. yüzyıl başı",
    koken: "Almanya / İngiltere",
    emoji: "🌹",
    renk: "from-rose-600 to-pink-500",
    ozet:
      "Akıl ve endüstriye karşı doğa, duygu, hayal gücü ve bireyselliği yücelten edebiyat ve sanat hareketi.",
    aciklama: `Romantizm, 18. yüzyılın sonunda Aydınlanma'nın akılcılığına ve Sanayi Devrimi'nin mekanik düzenine tepki olarak Almanya ve İngiltere'de doğdu.

Sturm und Drang (Fırtına ve Atılım) hareketini öncüleyen Alman Romantizmi; Goethe, Schiller ve kardeşler Schlegel tarafından şekillendirildi. İngiliz Romantizmi ise Byron, Shelley, Keats ve Wordsworth'ün şiirleriyle tanınır.

Temel temalar: doğanın yüceliği (sublime), birey ile evren arasındaki derin bağ, geçmişe özlem (nostalji), mistisizm ve folklorun yeniden keşfi. Kahraman ya bir dahidir ya bir deliyeye yakındır ya da toplumdan dışlanmış bir outsider'dır.

Fransız Romantizmi'nde Victor Hugo ve Stendhal siyasi devrimle sanatı iç içe geçirdi. Amerikan Romantizmi'nde ise Edgar Allan Poe, Nathaniel Hawthorne ve Herman Melville karanlık ve gotik tonları ön plana çıkardı.`,
    ozellikler: [
      "Duygu ve sezginin akıl üzerindeki önceliği",
      "Doğanın yüceltilmesi (sublime)",
      "Bireysellik ve deha kültü",
      "Orta Çağ ve folklorik geçmişe özlem",
      "Egzotik, uzak ve mistik mekânlar",
      "Ölüm, aşk ve özgürlük temaları",
    ],
    onemliFigurler: [
      "Johann Wolfgang von Goethe",
      "Lord Byron",
      "Percy Bysshe Shelley",
      "Mary Shelley",
      "John Keats",
      "Victor Hugo",
      "Edgar Allan Poe",
    ],
    onemlieserler: [
      "Genç Werther'in Acıları – Goethe",
      "Don Juan – Byron",
      "Frankenstein – Mary Shelley",
      "Notre-Dame'ın Kamburu – Victor Hugo",
      "Bir Çığlık Gibi Gece – Poe",
    ],
    mirasi:
      "Romantizm, modern edebiyatın kişisel duygu ve öznel deneyime verdiği değerin temelini atmıştır. Gotik kurgu, korku edebiyatı ve kişisel şiir geleneği bu akımın mirasını taşımaktadır.",
  },
  {
    slug: "realizm",
    ad: "Realizm",
    donem: "19. yüzyıl ortası",
    koken: "Fransa",
    emoji: "🔍",
    renk: "from-stone-600 to-gray-500",
    ozet:
      "Romantizmin idealizmine karşı toplumsal gerçekliği, sıradan insanı ve gündelik yaşamı nesnel bir gözle aktaran edebiyat akımı.",
    aciklama: `Realizm, 1850'lerde Fransa'da ortaya çıktı ve kısa sürede tüm Avrupa'ya yayıldı. Gustave Courbet'nin aynı adlı resim hareketi ile eş zamanlı gelişti.

Romantizmin hayalî kahramanlarına ve duygusal abartılarına karşılık realistler, gerçek insanları — işçileri, köylüleri, burjuvaziyi, fahişeleri — olduğu gibi anlatmayı seçti. Gözlem, belge ve sosyal eleştiri ön plana çıktı.

Fransız Realizmi: Gustave Flaubert'in "Madam Bovary"si ve Stendhal'in eserleri bu dönemin zirvelerini oluşturur. Rus Realizmi: Dostoyevski, Tolstoy ve Turgenev ile zirveye ulaşır; psikolojik derinlik burada ön plana çıkar. İngiliz Realizmi: Charles Dickens toplumsal eşitsizliği hicivle harmanlayan gerçekçi portreyi mükemmelleştirdi.

Realizm, sıradan insanı roman kahramanı yapmakla edebiyat tarihinde devrim yarattı.`,
    ozellikler: [
      "Nesnel, belgesel anlatım",
      "Sıradan insanlar ve gündelik hayat",
      "Toplumsal eleştiri",
      "Dil sadeliği ve doğallık",
      "Detaylı çevre betimlemesi",
      "Psikolojik karakter derinliği",
    ],
    onemliFigurler: [
      "Gustave Flaubert",
      "Charles Dickens",
      "Lev Tolstoy",
      "Fyodor Dostoyevski",
      "Honoré de Balzac",
      "Ivan Turgenev",
    ],
    onemlieserler: [
      "Madam Bovary – Flaubert",
      "Savaş ve Barış – Tolstoy",
      "Suç ve Ceza – Dostoyevski",
      "Oliver Twist – Dickens",
      "Père Goriot – Balzac",
    ],
    mirasi:
      "Realizm, modern roman anlayışının temelini oluşturur. Karakterlerin psikolojik derinliği ve toplumsal bağlamı burada köklenir. 20. yüzyıl sosyal gerçekçiliği, Marksist edebiyat eleştirisi ve belgesel anlatı bu mirasın devamıdır.",
  },
  {
    slug: "modernizm",
    ad: "Modernizm",
    donem: "1890'lar – 1940'lar",
    koken: "Avrupa / ABD",
    emoji: "🌀",
    renk: "from-indigo-700 to-blue-600",
    ozet:
      "Geleneksel anlatı biçimlerini kırarak bilincin akışını, zamanı ve kimliği yeniden tanımlayan devrimci edebiyat hareketi.",
    aciklama: `Modernizm, 1890'lardan 1945'e uzanan dönemde Batı edebiyatında geleneksel biçim, dil ve anlatı anlayışını kökten reddeden ya da yeniden kuran bir harekettir.

Birinci Dünya Savaşı'nın yarattığı uygarlık şoku, Freud'un psikanaliz kuramı, Einstein'ın görelilik teorisi ve Bergson'ın zaman felsefesi Modernizmin entelektüel zeminini oluşturdu.

Bilinç akışı (stream of consciousness): James Joyce ve Virginia Woolf karakterlerin zihnini doğrusal anlatı dışına çıkarak, düşüncelerin gerçek akışında aktardı. Kırık zaman: Marcel Proust hatıra ve zamanın öznelliğini anlatının merkezine koydu. Fragmanlaşma: T.S. Eliot şiirde geleneksel bütünlüğü parçaladı.

Paris Lost Generation (Hemingway, Fitzgerald, Stein), Bloomsbury Grubu (Woolf, Forster) ve Alman Modernizmi (Kafka, Mann) hareketin üç büyük odağıdır.`,
    ozellikler: [
      "Bilinç akışı tekniği",
      "Doğrusal olmayan zaman anlayışı",
      "Çoğul bakış açıları",
      "Geleneksel anlatı yapısını reddetme",
      "Öznel deneyim ve iç dünya",
      "Dil ve biçim üzerine deneysellik",
    ],
    onemliFigurler: [
      "James Joyce",
      "Virginia Woolf",
      "Marcel Proust",
      "Franz Kafka",
      "T.S. Eliot",
      "William Faulkner",
      "Ernest Hemingway",
    ],
    onemlieserler: [
      "Ulysses – Joyce",
      "Mrs Dalloway – Woolf",
      "Kayıp Zamanın İzinde – Proust",
      "Dava – Kafka",
      "Çorak Ülke – Eliot",
    ],
    mirasi:
      "Modernizm 20. yüzyıl edebiyatının siyasi, estetik ve biçimsel dilini belirledi. Bugün 'roman yazmak' dediğimizde kastettiğimiz şeyin büyük bölümü Modernizm'in mirasıdır.",
  },
  {
    slug: "postmodernizm",
    ad: "Postmodernizm",
    donem: "1960'lar – günümüz",
    koken: "ABD / Fransa",
    emoji: "🎭",
    renk: "from-violet-700 to-fuchsia-600",
    ozet:
      "Her büyük anlatıyı şüpheyle karşılayan, ironi, pastiche ve metakurgu aracılığıyla gerçeklik ve temsil kavramlarını sorgulayan çok katmanlı hareket.",
    aciklama: `Postmodernizm, 1960'larda Modernizm'in katı ciddiyet ve avangard iddialarına tepki olarak filizlendi. Fransız filozoflar Derrida, Foucault ve Baudrillard'ın yapıçözümcü kuramları entelektüel zeminini oluşturdu.

Temel tutumu: hiçbir büyük anlatıya (din, bilim, ilerleme fikri) güvenmemek. Gerçeklik, dil tarafından inşa edilir; nesnel hakikat yoktur, yalnızca bakış açıları vardır.

Metakurgu (metafiction): anlatının kendi kurgu olduğunu okuyucuya hatırlatan yapılar. Pastiche: önceki biçim ve üslupları harmanlama. İroni: anlam üretiminin kendisini sorgulama. Yüksek/popüler kültür arasındaki hiyerarşiyi yıkma.

Thomas Pynchon, Don DeLillo, John Barth, İtalya'dan Umberto Eco ve Latin Amerika'dan Borges bu akımın önde gelen temsilcileridir. Türk edebiyatında Orhan Pamuk postmodern anlatı teknikleriyle Nobel'e ulaştı.`,
    ozellikler: [
      "Büyük anlatılara şüphe",
      "İroni, parodi ve pastiche",
      "Metakurgu (kurgunun kendini sorgulayan yapısı)",
      "Yüksek/popüler kültür sınırını silme",
      "Çoğul ve çelişkili gerçeklikler",
      "Tarihsel olgularla kurgunun karışımı",
    ],
    onemliFigurler: [
      "Jorge Luis Borges",
      "Thomas Pynchon",
      "Umberto Eco",
      "Don DeLillo",
      "Salman Rushdie",
      "Orhan Pamuk",
    ],
    onemlieserler: [
      "Gülen Fıkralar – Borges",
      "Gülün Adı – Eco",
      "Yerçekimi Gökkuşağı – Pynchon",
      "Benim Adım Kırmızı – Pamuk",
      "Geceyarısı Çocukları – Rushdie",
    ],
    mirasi:
      "Postmodernizm dijital çağın temel kültürel mantığı haline geldi. İnternet, sosyal medya ve deepfake çağında 'gerçek nedir?' sorusu Postmodernizm'in merkezinde yatan sorudur.",
  },
  {
    slug: "egzistansiyalizm",
    ad: "Egzistansiyalizm",
    donem: "1940'lar – 1960'lar",
    koken: "Fransa",
    emoji: "🌑",
    renk: "from-zinc-700 to-neutral-600",
    ozet:
      "İnsan varoluşunun saçmalığını, özgürlüğünü ve bunun getirdiği kaygıyı merkeze alan felsefi edebiyat akımı.",
    aciklama: `Egzistansiyalizm, 2. Dünya Savaşı'nın ardından Paris'te Jean-Paul Sartre ve Simone de Beauvoir önderliğinde gelişen felsefi bir edebiyat hareketidir.

Temel öncülü: "Varoluş özden önce gelir." İnsan, önceden belirlenmiş bir doğa veya amaca sahip değildir; her birey kendi anlamını ve özünü yaratmak zorundadır. Bu özgürlük aynı zamanda ağır bir sorumluluk ve varoluşsal kaygı (Angst) doğurur.

Albert Camus "saçmalık" (absurd) kavramını merkeze aldı: anlamsız bir evrende anlam arayan insanın trajikomik durumu. "Sisifos Miti"nde bu durumu Sisifos'un kayayı taşımasıyla özetledi.

Samuel Beckett'in "Godot'yu Beklerken"i absürd tiyatronun başyapıtıdır: iki kişi hiç gelmeyen biri için bekler — bu hem varoluşsal anlamsızlığı hem de insanın umutla yaşamayı sürdürme iradesiyle gösterir.`,
    ozellikler: [
      "Bireysel varoluş ve anlam arayışı",
      "Özgürlük ve sorumluluk",
      "Varoluşsal kaygı (Angst)",
      "Saçmalık (absurd) kavramı",
      "Ölüm bilincinin merkezi önemi",
      "Bireysel seçimin yetkinliği",
    ],
    onemliFigurler: [
      "Jean-Paul Sartre",
      "Albert Camus",
      "Simone de Beauvoir",
      "Samuel Beckett",
      "Franz Kafka (öncü)",
      "Fyodor Dostoyevski (öncü)",
    ],
    onemlieserler: [
      "Varlık ve Hiçlik – Sartre",
      "Bulantı – Sartre",
      "Yabancı – Camus",
      "Veba – Camus",
      "Godot'yu Beklerken – Beckett",
      "İkinci Cins – de Beauvoir",
    ],
    mirasi:
      "Egzistansiyalizm 20. yüzyılın en etkili felsefi akımlarından biri oldu. Varoluşçu temalar günümüz psikolojisini (logotherapy, Viktor Frankl), sinemasını ve edebiyatını biçimlendirmeye devam etmektedir.",
  },
  {
    slug: "magik-realizm",
    ad: "Sihirli Realizm",
    donem: "1940'lar – günümüz",
    koken: "Latin Amerika",
    emoji: "✨",
    renk: "from-emerald-600 to-teal-500",
    ozet:
      "Gündelik gerçekliğin içine olağanüstü olayları şaşırmadan, doğal bir parçaymış gibi yerleştiren Latin Amerika kökenli anlatı biçimi.",
    aciklama: `Sihirli Realizm, García Márquez'in 1967'de yayımlanan "Yüzyıllık Yalnızlık"ıyla dünya edebiyatına büyük bir sarsıntıyla girdi. Ancak akımın kökleri Alejo Carpentier ve Jorge Luis Borges'in 1940'lardaki çalışmalarına uzanır.

Tanımı basit ama güçlüdür: ölüler yaşayanlarla konuşur, ruhlar mahallelerde dolaşır, mucizeler sıradan gündelik olaylar gibi aktarılır. Anlatıcı buna şaşırmaz; okuyucu bu dünyayı kabullenmek zorundadır.

Latin Amerika tarihi ve mitolojisi — sömürge hafızası, kırsal yaşam, yerli kozmolojisi, Hristiyan geleneği ve Afrika mirası — bu anlatı biçiminin zeminidir. "Reel maravilloso" (mucizevi gerçeklik) Carpentier'in bu kıtanın doğasını tanımlamak için kullandığı kavramdır.

Günümüzde Toni Morrison, Salman Rushdie ve İsabel Allende de bu geleneği sürdürmüştür.`,
    ozellikler: [
      "Olağanüstünün sıradanmış gibi sunulması",
      "Güçlü yerel/mitolojik atmosfer",
      "Tarih ve efsanenin iç içe geçmesi",
      "Gerçekçi anlatı dili",
      "Toplumsal ve politik boyut",
      "Nesiller arası hafıza",
    ],
    onemliFigurler: [
      "Gabriel García Márquez",
      "Jorge Luis Borges",
      "Isabel Allende",
      "Laura Esquivel",
      "Alejo Carpentier",
      "Toni Morrison",
    ],
    onemlieserler: [
      "Yüzyıllık Yalnızlık – García Márquez",
      "Evin Ruhu – Allende",
      "Aşk ve Güvercin – García Márquez",
      "Labirentler – Borges",
      "Sevgili – Morrison",
    ],
    mirasi:
      "Sihirli Realizm dünya genelinde pek çok yazarı etkiledi. Türk edebiyatında Latife Tekin, Afrika edebiyatında Ben Okri ve Çin'de Mo Yan bu anlayışı kendi kültürel bağlamlarına uyarladı.",
  },
];

export const onluyazarlar: YazarProfil[] = [
  {
    ad: "Gabriel García Márquez",
    yasam: "1927 – 2014",
    uyruk: "Kolombiyalı",
    akım: "Sihirli Realizm",
    kisa:
      "1982 Nobel Edebiyat Ödülü. 'Yüzyıllık Yalnızlık' ile Latin Amerika edebiyatını dünyaya tanıttı.",
    onemlieserleri: [
      "Yüzyıllık Yalnızlık",
      "Aşk ve Güvercin",
      "Kolera Günlerinde Aşk",
    ],
  },
  {
    ad: "Leo Tolstoy",
    yasam: "1828 – 1910",
    uyruk: "Rus",
    akım: "Realizm",
    kisa:
      "İnsanlık tarihinin en büyük romancılarından biri. Savaş ve Barış ile Anna Karenina Rus edebiyatının zirvesidir.",
    onemlieserleri: ["Savaş ve Barış", "Anna Karenina", "İvan İlyiç'in Ölümü"],
  },
  {
    ad: "Fyodor Dostoyevski",
    yasam: "1821 – 1881",
    uyruk: "Rus",
    akım: "Realizm / Varoluşçuluk öncüsü",
    kisa:
      "Psikolojik romanın babası. Suç ve Ceza, Karamazov Kardeşler ile insan ruhunun en derin köşelerine indi.",
    onemlieserleri: [
      "Suç ve Ceza",
      "Karamazov Kardeşler",
      "Budala",
      "Yeraltından Notlar",
    ],
  },
  {
    ad: "Franz Kafka",
    yasam: "1883 – 1924",
    uyruk: "Çekli",
    akım: "Modernizm / Absürd",
    kisa:
      "Bürokratik baskı ve varoluşsal kaygının eşsiz anlatıcısı. 'Kafkaesk' kelimesi onun adından türetildi.",
    onemlieserleri: ["Dava", "Şato", "Dönüşüm", "Amerika"],
  },
  {
    ad: "Virginia Woolf",
    yasam: "1882 – 1941",
    uyruk: "İngiliz",
    akım: "Modernizm",
    kisa:
      "Bilinç akışı tekniğinin ustası. Bloomsbury Grubu'nun ve feminist edebiyatın öncü sesi.",
    onemlieserleri: [
      "Mrs Dalloway",
      "Dalgalar",
      "Kendine Ait Bir Oda",
      "Orlando",
    ],
  },
  {
    ad: "Orhan Pamuk",
    yasam: "1952 –",
    uyruk: "Türk",
    akım: "Postmodernizm",
    kisa:
      "2006 Nobel Edebiyat Ödülü. 'Benim Adım Kırmızı' ve 'Kar' ile Türk edebiyatını dünya sahnesine taşıdı.",
    onemlieserleri: [
      "Benim Adım Kırmızı",
      "Kar",
      "İstanbul: Hatıralar ve Şehir",
      "Masumiyet Müzesi",
    ],
  },
  {
    ad: "Albert Camus",
    yasam: "1913 – 1960",
    uyruk: "Fransız-Cezayirli",
    akım: "Egzistansiyalizm / Absürd",
    kisa:
      "1957 Nobel Ödülü. 'Yabancı' ve 'Sisifos Miti' ile saçmacılık felsefesini edebiyata taşıdı.",
    onemlieserleri: ["Yabancı", "Veba", "Sisifos Miti", "Düşüş"],
  },
  {
    ad: "James Joyce",
    yasam: "1882 – 1941",
    uyruk: "İrlandalı",
    akım: "Modernizm",
    kisa:
      "Ulysses ile 20. yüzyılın en büyük İngilizce romanı sayılan eseri yaratan dil devi.",
    onemlieserleri: ["Ulysses", "Finneganların Uyanışı", "Bir Sanatçının Portresi", "Dublinliler"],
  },
  {
    ad: "Toni Morrison",
    yasam: "1931 – 2019",
    uyruk: "Amerikalı",
    akım: "Sihirli Realizm / Postmodernizm",
    kisa:
      "1993 Nobel Ödülü. Kölelik tarihini ve Afro-Amerikan deneyimini güçlü mitik bir dille aktardı.",
    onemlieserleri: ["Sevgili", "Song of Solomon", "The Bluest Eye"],
  },
  {
    ad: "Jorge Luis Borges",
    yasam: "1899 – 1986",
    uyruk: "Arjantin",
    akım: "Sihirli Realizm / Postmodernizm öncüsü",
    kisa:
      "Labirentler, aynalar ve sonsuzluk temalarıyla modern kısa hikâyeyi dönüştüren eşsiz zihin.",
    onemlieserleri: ["Labirentler", "Kurmacalar", "Aleph"],
  },
];
