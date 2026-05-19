export interface Ressam {
  slug: string;
  ad: string;
  yasam: string;
  uyruk: string;
  akım: string;
  ozet: string;
  biyografi: string;
  eserler: { ad: string; yıl: string; aciklama: string }[];
  teknik: string;
  miras: string;
  emoji: string;
  renk: string;
}

export const ressamlar: Ressam[] = [
  {
    slug: "leonardo-da-vinci",
    ad: "Leonardo da Vinci",
    yasam: "1452 – 1519",
    uyruk: "İtalyan",
    akım: "Yüksek Rönesans",
    emoji: "🎨",
    renk: "from-amber-600 to-yellow-500",
    ozet:
      "Tarihinin en çok yönlü dehasıydı: ressam, heykeltıraş, mimar, müzisyen, matematikçi, mühendis, mucit, anatomist, jeolog, botanikçi ve yazar.",
    biyografi: `Leonardo da Vinci, 15 Nisan 1452'de İtalya'nın Vinci kasabasında doğdu. Bir noter olan Ser Piero da Vinci'nin gayri meşru oğluydu. On dört yaşında Floransa'daki ünlü ressam Andrea del Verrocchio'nun atölyesine çırak olarak girdi ve burada resim, heykel ve mühendislik öğrendi.

Gençliğinde Verrocchio ile birlikte çalışırken zaten ustasını geçtiği söylenir; rivayet odur ki "Vaftiz Sahnesi"ndeki meleği gören Verrocchio fırçayı bırakmış, bir daha resim yapmamıştır.

Milano'da Ludovico Sforza'nın himayesinde yıllarca çalışan Leonardo; burada "Son Akşam Yemeği"ni tamamladı, müzik enstrümanları tasarladı, şehir planları yaptı ve binlerce sayfa not tuttu. Notebooklarında uçan makineler, tanklar, güneş enerjisi, hesap makineleri ve plaka tektoniği hakkında fikirler bulunmaktadır — bunların büyük çoğunluğu zamanının en az 400 yıl ötesindeydi.

Ömrünün son yıllarını Fransa'da, Kral I. François'ın davetlisi olarak geçirdi. 2 Mayıs 1519'da Amboise yakınlarındaki Clos Lucé Şatosu'nda 67 yaşında hayatını kaybetti. Efsaneye göre Fransız Kralı onun son anında yanında bulundu.`,
    eserler: [
      {
        ad: "Mona Lisa",
        yıl: "1503–1519",
        aciklama:
          "Dünyanın en tanınan tablosu. Gizemli gülümsemesiyle Lisa Gherardini'nin portresinin ötesine geçen, sfumato tekniğinin en üst örneği. Paris Louvre Müzesi'nde sergilenmektedir.",
      },
      {
        ad: "Son Akşam Yemeği",
        yıl: "1495–1498",
        aciklama:
          "Milano'daki Santa Maria delle Grazie Kilisesi'nin refektoryum duvarına yapılan fresk. İsa'nın öğrencilerine 'İçinizden biri beni ele verecek' dediği dramatik anı tasvir eder.",
      },
      {
        ad: "Vitruvius Adamı",
        yıl: "~1490",
        aciklama:
          "İnsan vücudunun ideal oranlarını anlatan çizim. İnsanı evrenin ölçüsü olarak gören Rönesans felsefesinin sembolü haline gelmiştir.",
      },
      {
        ad: "Bakire ve Çocuk ile Aziz Anne",
        yıl: "1503–1519",
        aciklama:
          "Louvre'da bulunan bu eser, üç nesil kadını huzur dolu bir kompozisyonda bir araya getirir.",
      },
    ],
    teknik:
      "Sfumato tekniğinin mucidi olan Leonardo, renk geçişlerini duman gibi yumuşatarak gerçekçi cilt ve hava etkisi yaratmıştır. Aynı zamanda chiaroscuro (ışık-gölge kontrastı) tekniğini de yetkinleştirmiştir.",
    miras:
      "Leonardo, 'çok yönlü insan' (uomo universale) kavramının simgesidir. Notebooklarındaki icatlar modern uçak, helikopter, tank, güneş enerjisi ve termal enerji kavramlarını öngörmektedir. Her yıl Louvre'u ziyaret eden 9 milyon kişinin büyük çoğunluğu Mona Lisa'yı görmek için gelir.",
  },
  {
    slug: "vincent-van-gogh",
    ad: "Vincent van Gogh",
    yasam: "1853 – 1890",
    uyruk: "Hollandalı",
    akım: "Post-Empresyonizm",
    emoji: "🌻",
    renk: "from-yellow-500 to-orange-500",
    ozet:
      "Hayatı boyunca yalnızca bir tablo satan, ölümünden sonra 20. yüzyılın en etkili ressamlarından biri olarak tanınan trajik deha.",
    biyografi: `Vincent Willem van Gogh, 30 Mart 1853'te Hollanda'nın Zundert köyünde bir Protestan papazın oğlu olarak dünyaya geldi. Hayatı acı, yoksulluk ve ruhsal çalkantıyla geçti.

İlk gençlik yıllarını sanat galerisi çalışanı, öğretmen ve İncil misyoneri olarak geçirdi. Otuz yaşına kadar profesyonel ressam olmadı. Kardeşi Theo'nun maddi ve manevi desteğiyle yaşadı; bu ikili arasındaki mektup yazışmaları edebiyat tarihi açısından da son derece değerlidir.

Batı Flanders'daki madenci bölgesinde yaşarken halkın acısını gözlemledi ve "Patates Yiyenler" gibi kasvetli, koyu tonlu eserler üretti. Paris'e taşındıktan sonra empresyonistlerle tanışması onu renkle buluşturdu.

En verimli dönemi Güney Fransa'nın Arles şehrindeydi: burada 15 ay içinde 200'den fazla eser yarattı. Paul Gauguin ile yaşadığı meşhur kavgadan sonra kendi kulağını kesti ve Saint-Rémy-de-Provence'daki bir akıl hastanesine yatırıldı.

37 yaşında, Paris yakınlarındaki Auvers-sur-Oise'de göğsüne ateş ederek intihar etti (ya da bir tartışmada vuruldu — bu konu hâlâ tartışmalıdır). Hayatı boyunca yalnızca bir tablo satabilmişti.`,
    eserler: [
      {
        ad: "Yıldızlı Gece",
        yıl: "1889",
        aciklama:
          "Saint-Rémy'deki akıl hastanesinde kaldığı dönemde yapılan bu tablo, gökyüzünü coşkulu fırça darbeleriyle girdaplara dönüştürür. New York MoMA'da sergilenir.",
      },
      {
        ad: "Ayçiçekleri",
        yıl: "1888",
        aciklama:
          "Gauguin için süslediği odaya asılan dizi. Sarının tüm tonlarını kullanan bu eser, Van Gogh'un renk anlayışının simgesi olmuştur.",
      },
      {
        ad: "Patates Yiyenler",
        yıl: "1885",
        aciklama:
          "Hollandalı köylülerin yoksul sofrasını tasvir eden ilk büyük eseri. Kasvetli, toprak tonlu paleti bu döneminin karakteristiğidir.",
      },
      {
        ad: "Gece Kafesi",
        yıl: "1888",
        aciklama:
          "Sarı ve yeşilin çatışmasıyla insandaki 'kötü tutkulara' gönderme yapan tablo. Yale Üniversitesi Sanat Galerisi'ndedir.",
      },
      {
        ad: "Kargalı Buğday Tarlası",
        yıl: "1890",
        aciklama:
          "Ölümünden kısa süre önce yapılan bu kaotik tablo, çoğunlukla son duygu durumunun yansıması olarak yorumlanır.",
      },
    ],
    teknik:
      "Kalın boya katmanları (impasto) ve kıvrımlı fırça darbeleri Van Gogh'un imzasıdır. Renkleri duygusal gerçekliği ifade etmek için kullandı; mavi hüzün, sarı mutluluk ve umut anlamı taşır. Japon baskı sanatından da derinden etkilendi.",
    miras:
      "Ekspresyonizm ve modern sanatın babası sayılır. 2024 yılında 'Hayalet Işık' adlı eseri açık artırmada 117 milyon dolara satılarak bir rekora imza attı. Amsterdam'daki Van Gogh Müzesi her yıl 2 milyondan fazla ziyaretçi ağırlıyor.",
  },
  {
    slug: "pablo-picasso",
    ad: "Pablo Picasso",
    yasam: "1881 – 1973",
    uyruk: "İspanyol",
    akım: "Kübizm",
    emoji: "🎭",
    renk: "from-blue-600 to-indigo-500",
    ozet:
      "20. yüzyıl sanatının en etkili ismi. Kübizmin kurucu babası; 20.000'i aşkın eserle üretkenliğin de zirvesi.",
    biyografi: `Pablo Diego José Francisco de Paula Juan Nepomuceno María de los Remedios Cipriano de la Santísima Trinidad Ruiz y Picasso, 25 Ekim 1881'de İspanya'nın Málaga şehrinde doğdu. Babası ressam ve sanat öğretmeniydi; küçük Pablo daha sekiz yaşında akademik kurallara uygun resimler yapıyordu.

Biyografistlerin "Mavi Dönem" (1901-1904) olarak adlandırdığı yıllarda yakın arkadaşı Carlos Casagemas'ın intiharından derinden etkilenen Picasso ağırlıklı olarak mavi ve gri tonlarda çalıştı; dilenciler, yalnız kadınlar ve ağlayan figürler bu dönemin özneleriydi.

"Gül Dönem"inde (1904-1906) Paris'e yerleşmesi ve Fernande Olivier ile aşk ilişkisi renk paletini pembeleştirdi, konular ise sirk cambazları ve arlekenlere dönüştü.

1907'de Georges Braque ile birlikte Kübizmi icat etti. "Avignonlu Kızlar" bu devrimci hareketin ilk manifestosuydu. Nesneleri parçalayıp farklı açılardan aynı anda gösterme fikri, sanat tarihini ikiye böldü.

İspanya İç Savaşı sırasında 1937'de yaptığı "Guernica", faşizme karşı en güçlü görsel protestolardan biri olarak tarihe geçti.

92 yaşında, Fransa'nın Mougins kentinde hayatını kaybetti ve hayatı boyunca sahip olduğu bütün eserleri vasiyeti olmaksızın bıraktı — bu da tarihte en uzun süren miras davalarından birine yol açtı.`,
    eserler: [
      {
        ad: "Guernica",
        yıl: "1937",
        aciklama:
          "Nazi Almanyası'nın Bask kasabası Guernica'yı bombalamasına tepki olarak yapılan muazzam tuval. Savaşın vahşetini kübist parçalanma aracılığıyla anlatır. Madrid Reina Sofía Müzesi'ndedir.",
      },
      {
        ad: "Avignonlu Kızlar",
        yıl: "1907",
        aciklama:
          "Kübizmin doğuş manifestosu. Beş çıplak kadının anatomisi parçalanmış ve birden fazla bakış açısıyla aynı anda gösterilmiştir. New York MoMA'dadır.",
      },
      {
        ad: "Weeping Woman (Ağlayan Kadın)",
        yıl: "1937",
        aciklama:
          "Guernica döneminin devamı. Picasso'nun sevgilisi Dora Maar'ı model alan tablo, savaş acısının evrensel simgesi olmuştur.",
      },
    ],
    teknik:
      "Picasso tek bir üsluba bağlı kalmadı: Kübizm, Sürrealizm, Neo-Klasizm ve Ekspresyonizm arasında serbestçe geçiş yaptı. Kolaj tekniğini de ilk kullananlardan biridir. Seramik, heykel, baskı sanatı ve kitap illüstrasyonu alanında da üretken oldu.",
    miras:
      "Picasso'nun eserleri açık artırmalarda defalarca rekor kırmıştır. 'Cezayirli Kadınlar (Versiyon O)' 2015'te 179 milyon dolara satıldı. Paris'teki Musée National Picasso dünyanın en çok ziyaret edilen müzelerinden biridir.",
  },
  {
    slug: "claude-monet",
    ad: "Claude Monet",
    yasam: "1840 – 1926",
    uyruk: "Fransız",
    akım: "Empresyonizm",
    emoji: "🌸",
    renk: "from-teal-500 to-cyan-400",
    ozet:
      "Empresyonizmin kurucu babası ve en tanınan yüzü. Gözün algıladığı ışığı ve rengi anın geçiciliğiyle yakalamaya ömrünü adadı.",
    biyografi: `Oscar-Claude Monet, 14 Kasım 1840'ta Paris'te doğdu; ancak çocukluğunu Normandiya'nın Rouen kenti yakınlarındaki Le Havre'da geçirdi. Orada yerel karikatürist Eugène Boudin'in teşvikiyle açık havada resim yapmaya başladı.

Paris'te Académie Suisse'de öğrenim gördü; burada Camille Pissarro ile tanıştı. Askerlik görevini Cezayir'de tamamladıktan sonra eğitimine devam etti ve Edouard Manet'den derinden etkilendi.

1874'te arkadaşlarıyla birlikte düzenlediği grup sergisi, bir eleştirmenin "Le Havre Limanı'ndan İzlenim" adlı tabloyla alay etmesi üzerine "Empresyonizm" olarak anıldı — o güne kadar hakaret olarak kullanılan bu terim zamanla sanat tarihinin en önemli akım adına dönüştü.

1883'te Giverny'ye taşındı ve bahçesinde meşhur nilüfer gölünü tasarladı. Bu göl, hayatının son 30 yılının temel ilham kaynağı oldu. Katarakt hastalığı görme yetisini yitirmeye başladığında bile tuvalin başına geçti; bu dönemde renkleri sezgiyle kullandı.

1926'da Giverny'de 86 yaşında hayatını kaybetti. Nilüfer tablolarının bir bölümü Paris'te Orangerie Müzesi'nde büyük oval salonlarda sergilenmekte ve "Batı sanatının Sistine Şapeli" olarak anılmaktadır.`,
    eserler: [
      {
        ad: "Nilüferler (Seri)",
        yıl: "1896–1926",
        aciklama:
          "250'yi aşkın tabloluk bu seri, dünyanın en tanınan resim dizisidir. Giverny bahçesinin nilüfer havuzunu farklı ışık ve mevsim koşullarında gösterir.",
      },
      {
        ad: "Le Havre Limanı'ndan İzlenim",
        yıl: "1872",
        aciklama:
          "Empresyonizm akımına adını veren tablo. Gündoğumunda Le Havre limanını gösteren bu eser, fırça darbelerinin gerçekçi ayrıntının önüne geçtiği yeni bir yaklaşımı simgeler.",
      },
      {
        ad: "Ruan Katedrali (Seri)",
        yıl: "1892–1894",
        aciklama:
          "Aynı katedrali farklı saatlerde ve ışık koşullarında tasvir eden seri, Monet'nin ışığa olan saplantısını açıkça gösterir.",
      },
    ],
    teknik:
      "Monet açık hava resmine (plein air) büyük önem verdi. Birbirine yakın fırça darbeleri ve saf renkleri yan yana kullanarak optik karışım etkisi yarattı. Aynı sahneyi farklı ışık koşullarında defalarca resmetme alışkanlığı zamanı ve ışığı araştırma yöntemi oldu.",
    miras:
      "Soyut sanatın öncüsü sayılır. Nilüfer tablolarının büyük yatay boyutu ve sonsuz görünen yüzey etkisi, 1950'lerin Soyut Ekspresyonistlerini doğrudan etkiledi. Giverny bahçesi bugün her yıl 600.000 ziyaretçi çekmektedir.",
  },
  {
    slug: "salvador-dali",
    ad: "Salvador Dalí",
    yasam: "1904 – 1989",
    uyruk: "İspanyol",
    akım: "Sürrealizm",
    emoji: "🕰️",
    renk: "from-purple-600 to-pink-500",
    ozet:
      "Bilinçaltının tuvaline döküldüğü eserler ve eşsiz bıyığıyla Sürrealizmin en ikonik ismi. Performatif kişiliği sanatı kadar tanınırdı.",
    biyografi: `Salvador Domingo Felipe Jacinto Dalí i Domènech, 11 Mayıs 1904'te İspanya'nın Figueres kentinde doğdu. Babası, otoriterliğiyle bilinen bir noter; annesi ise Dalí henüz 16 yaşındayken hayatını kaybetti.

Madrid'de Güzel Sanatlar Okulu'nda okudu; burada Federico García Lorca ve Luis Buñuel ile derin dostluklar kurdu. Disiplin sorunları ve kurallara karşı çıkması nedeniyle okuldan iki kez uzaklaştırıldı.

1929'da Paris'e giderek Sürrealizm çevresine katıldı. Aynı yıl hayatının aşkı ve esin perisi olacak Gala Éluard'la tanıştı. André Breton'ın grubuyla çalışmaya başladı.

Paranoyak-kritik yöntemi geliştirdi: bilinç dışı imgeler yaratmak için bilinçli bir paranoya durumunu simüle etmeyi öğrendi. Freud'un psikanaliz kuramından büyük ölçüde yararlandı.

İspanya İç Savaşı döneminde siyasi tutumu nedeniyle Sürrealizm çevresinden koptu. İkinci Dünya Savaşı yıllarını ABD'de geçirdi. 1948'de İspanya'ya dönerek Portlligat'taki evi ve Figüres yakınlarındaki Púbol Şatosu'nda yaşadı.

Gala'nın 1982'deki ölümünden sonra giderek içine kapandı ve 1989'da Figueres'te 84 yaşında hayatını kaybetti.`,
    eserler: [
      {
        ad: "Belleğin Azmi (Eriyen Saatler)",
        yıl: "1931",
        aciklama:
          "Sürrealizmin ikonik imgesi. Yoğun kaya manzarasında eriyen saatler zamanın göreliliğini, bilinçdışının gerçekliği çarpıttığını simgeler. New York MoMA'dadır.",
      },
      {
        ad: "Fil",
        yıl: "1948",
        aciklama:
          "Uzun, ince örümcek bacaklar üzerinde yürüyen filler, gerçeküstücü imgelerinin en tanınanlarındandır.",
      },
      {
        ad: "Gala'nın Bakışıyla Gökyüzünün Yanındaki Görünme",
        yıl: "1945",
        aciklama:
          "Savaş sonrası nükleer mistisizm döneminin başyapıtı. Atomik parçalanma ve Hristiyan ikonografisini birleştirir.",
      },
    ],
    teknik:
      "Eski ustalara yakın, titiz ve gerçekçi bir boyama tekniği kullandı. Rüya imgelerini hiperrealist bir tarzda aktardı — bu çelişki eserlerin yarattığı huzursuzluğun kaynağıdır. Ayrıca fotoğraf, film, moda tasarımı ve reklam alanında da çalıştı.",
    miras:
      "Figueres'teki Dalí Tiyatro-Müzesi, İspanya'nın en çok ziyaret edilen müzelerinden biridir. Parfüm şişelerinden kredi kartı tasarımlarına uzanan geniş bir ticari miras bıraktı. Efsanevi bıyığı ve karizması onu 20. yüzyılın en tanınan sanatçılarından biri yaptı.",
  },
  {
    slug: "frida-kahlo",
    ad: "Frida Kahlo",
    yasam: "1907 – 1954",
    uyruk: "Meksikalı",
    akım: "Sürrealizm / Naif Sanat",
    emoji: "🌺",
    renk: "from-red-600 to-rose-500",
    ozet:
      "Bedeni ve kimliğini tuvale döken Meksika'nın en ikonik ressamı. Acısını sanata dönüştüren direniş ve güç sembolü.",
    biyografi: `Magdalena Carmen Frida Kahlo y Calderón, 6 Temmuz 1907'de Mexico City yakınlarındaki Coyoacán'da doğdu. Altı yaşında geçirdiği poliomyelit (çocuk felci) sağ bacağının ince kalmasına yol açtı; bu durum hayatı boyunca onu etkiledi.

On sekiz yaşındayken maruz kaldığı ağır trafik kazası, onlarca kemiğinin kırılmasına ve pelvisinin parçalanmasına neden oldu. Bu kazadan sonra yatağa bağlı kaldığı uzun iyileşme döneminde aynaya yansıyan imgesini resmetmeye başladı ve böylece ressam oldu.

Sanatının büyük bölümü bu kazadan kaynaklanmaktadır: 35 ameliyat geçirdi, defalarca hamile kaldı ancak kaza nedeniyle hiçbirini tamamlayamadı; bu kayıplar tablolarında güçlü bir yas ifadesine dönüştü.

Ünlü ressam Diego Rivera ile evlendi; aldatma, boşanma ve yeniden evlenme gibi çalkantılı bir ilişkiyle geçen bu birliktelik sanatına derinlemesine yansıdı. Aynı zamanda Andre Breton, Leon Troçki ve diğer devrimci entelektüellerle dostluk kurdu.

1953'te Mexico City'de açılan ilk kişisel sergisini sedyeyle gelerek izledi. 1954'te 47 yaşında hayatını kaybetti.`,
    eserler: [
      {
        ad: "İki Frida",
        yıl: "1939",
        aciklama:
          "Diego Rivera ile boşanmasından sonra yapılan tablo. İki benliği — Meksikalı ve Avrupalı — yan yana ve birbirlerine bağlı kalpler aracılığıyla gösterir.",
      },
      {
        ad: "Kırık Kolon",
        yıl: "1944",
        aciklama:
          "Bedene duyulan acıyı simgeleyen başyapıtı. Omurgasının yerinde İyon sütunu bulunan ve çivi batmış bir Frida, çöl manzarasında tasvir edilmiştir.",
      },
      {
        ad: "Henry Ford Hastanesi",
        yıl: "1932",
        aciklama:
          "Düşüğünü yaşadıktan sonra çizdiği tablo. Hastane yatağında kan içinde, etrafında o dönemin travmalarıyla sembolik nesneler.",
      },
    ],
    teknik:
      "Küçük metal levhalar üzerine titiz bir gerçekçilikle boyayan Kahlo, Meksika halk sanatı (retablo) geleneğinden beslendi. Sürrealistlerle zaman zaman ilişkilendirilse de kendisi için 'rüyalarımı değil, gerçekliğimi boyuyorum' diyordu.",
    miras:
      "Feminist ve kimlik siyaseti bağlamında 1970'lerden itibaren yeniden keşfedilen Kahlo, 20. yüzyıl sanatının en güçlü kadın seslerinden biridir. Kaş çizgisi, çiçekli başlığı ve Meksika kıyafetleriyle kültürel simgeye dönüştü. 'Diego ve Ben' tablosu 2021'de 34,9 milyon dolara satıldı.",
  },
  {
    slug: "rembrandt",
    ad: "Rembrandt van Rijn",
    yasam: "1606 – 1669",
    uyruk: "Hollandalı",
    akım: "Barok / Hollanda Altın Çağı",
    emoji: "🕯️",
    renk: "from-yellow-700 to-amber-500",
    ozet:
      "Işık ve gölgenin ustası, öz-portrenin şairi. Hollanda Altın Çağı'nın tartışmasız en büyük ressamı.",
    biyografi: `Rembrandt Harmenszoon van Rijn, 15 Temmuz 1606'da Leiden'de, değirmen işleten bir ailenin çocuğu olarak dünyaya geldi. Leiden Üniversitesi'ne kayıt yaptırdıysa da akademik yaşamı bırakarak resim çalışmaya başladı.

Leiden'de Jacob van Swanenburg'un atölyesinde çıraklık yaptıktan sonra Amsterdam'a geçti ve tarihsel sahneler, portrejler ve dinî konularda çalışmaya başladı.

1630'ların başında Amsterdam'ın en gözde portre ressamına dönüştü. Varlıklı bir mirasçı olan Saskia van Uylenburgh ile evlendi; ancak üç çocuklarını bebekken kaybettiler, dördüncüsü Titus kurtuldu. Saskia ise 1642'de 29 yaşında hayatını kaybetti.

Eşinin ölüm yılında tamamladığı "Gece Nöbeti" Hollanda sanatının zirvesi sayılır. Ancak pek çok sipariş veren müşteri beklentileri dışında bir tablo aldığı gerekçesiyle şikâyetçi oldu.

Mali çöküş, 1656'da iflasını ilan etmesine ve evini satmasına yol açtı. Ömrünün son yıllarını yoksulluk içinde geçiren Rembrandt, 1669'da 63 yaşında Amsterdam'da hayatını kaybetti.`,
    eserler: [
      {
        ad: "Gece Nöbeti",
        yıl: "1642",
        aciklama:
          "Amsterdam Civic Guard'ın portresi. Devrimci kompozisyonu, dramatik ışık kullanımı ve sinematografik derinliğiyle Hollanda ve Dünya sanatının başyapıtı. Amsterdam Rijksmuseum'dadır.",
      },
      {
        ad: "Öz Portreler (Serisi)",
        yıl: "1628–1669",
        aciklama:
          "Yaklaşık 100 öz portreyle Rembrandt, yüz ifadelerini ve yaşlanmayı araştırdı. Sanat tarihinin en kapsamlı öz-portre serisi.",
      },
      {
        ad: "Doktor Nicolaes Tulp'un Anatomi Dersi",
        yıl: "1632",
        aciklama:
          "Bilim ve sanatın buluşma noktası. Gerçek bir kadavra üzerinde ders veren doktor ve çevresindeki öğrencilerden oluşan bu eser bilginin yüceltilmesidir.",
      },
    ],
    teknik:
      "Chiaroscuro (aydınlık-karanlık kontrastı) tekniğini Caravaggio'dan öğrenip aştı. Kalın boya katmanları, zengin kahverengi ve altın tonları ve yüz ifadelerine verdiği önem belirleyici özellikleridir.",
    miras:
      "Gece Nöbeti, dünyanın en değerli tablolarından biri olmaya devam etmektedir. Rembrandt'ın yaklaşık 350 tabloya ek olarak 300 kadar oyma baskısı (etching) da günümüze ulaşmıştır. Amsterdam'daki Rembrandthuis Müzesi yıllık 200.000'den fazla ziyaretçi ağırlamaktadır.",
  },
  {
    slug: "michelangelo",
    ad: "Michelangelo",
    yasam: "1475 – 1564",
    uyruk: "İtalyan",
    akım: "Yüksek Rönesans / Maniyerizm",
    emoji: "🗿",
    renk: "from-stone-600 to-gray-500",
    ozet:
      "Sistine Şapeli tavanı ve Davut heykeli ile Rönesansın zirvesini işaret eden çok yönlü deha: ressam, heykeltıraş ve mimar.",
    biyografi: `Michelangelo di Lodovico Buonarroti Simoni, 6 Mart 1475'te İtalya'nın Caprese kasabasında doğdu. Floransa'da Lorenzo de' Medici'nin himayesinde büyüdü ve burada çağının en iyi ustalarından eğitim aldı.

İlk önemli eseri olan "Bacchus" (1497) ve ardından "Pietà" (1498-99) onu anında ünlü etti. Pietà'yı tamamladığında yalnızca 24 yaşındaydı.

1501'de Floransa'ya dönerek 4 yıl sürecek Davut üzerinde çalışmaya başladı. Bu eserin açılışı bir olay oldu; heykel, genç Floransa Cumhuriyeti'nin sembolüne dönüştü.

1508'de Papa II. Julius, Sistine Şapeli tavanını boyaması için onu görevlendirdi. Michelangelo önce bu görevi reddetti; boyama değil heykel yapan bir sanatçı olduğunu söyledi. Ama ikna edildi. 4 yıl boyunca sırtüstü yatarak çalıştı ve 1512'de tavan tamamlandı. Sonradan Sistine'nin ön duvarı için "Son Yargı"yı ekledi (1534-41).

Hayatının büyük bölümünü Roma'da geçiren Michelangelo, 88 yaşında burada hayatını kaybetti — sanatçılar arasında olağanüstü uzun bir ömürdü. Yaşlılığına kadar aktif biçimde çalışmaya devam etti.`,
    eserler: [
      {
        ad: "Sistine Şapeli Tavanı",
        yıl: "1508–1512",
        aciklama:
          "Dünyanın en büyük fresk eseri. Yaratılış, Adem'in Yaratılışı, Nuh Tufanı ve diğer Tekvin sahnelerini kapsar. Vatikan'dadır ve yıllık 6 milyon ziyaretçi ağırlar.",
      },
      {
        ad: "Davut",
        yıl: "1501–1504",
        aciklama:
          "5,17 metre yüksekliğiyle Rönesans heykelinin simgesi. Golyat ile savaştan önceki Davut'u tasvir eder. Floransa Accademia Galerisi'ndedir.",
      },
      {
        ad: "Pietà",
        yıl: "1498–1499",
        aciklama:
          "Meryem Ana'nın İsa'nın cesedini kucakladığı sahne. Mermer heykelciliğin başyapıtı; yüzeyin incecik şeffaflığıyla deri yanılsaması yaratılmıştır.",
      },
    ],
    teknik:
      "Heykelcilik anlayışını 'eserin mermerin içinde zaten var olduğu, görevin onu ortaya çıkarmak olduğu' şeklinde tanımlamıştır. Anatomik bilgisi insan figürünü olağanüstü gerçeklikle yansıtmasını sağladı.",
    miras:
      "Sistine Şapeli tavanı hâlâ dünyanın en çok fotoğraflanan iç mekânlarından biridir. Vatikan'ın ölümünden sonra yaptığı cenaze törenine gelen kalabalık, Papa dahil tüm Roma'yı doldurdu.",
  },
  {
    slug: "jackson-pollock",
    ad: "Jackson Pollock",
    yasam: "1912 – 1956",
    uyruk: "Amerikalı",
    akım: "Soyut Ekspresyonizm",
    emoji: "💥",
    renk: "from-gray-800 to-slate-600",
    ozet:
      "Tuvali yere serip üzerine boya döken 'damlatma' tekniğiyle sanatı kökten dönüştüren ve Soyut Ekspresyonizmi dünya sahnesine taşıyan Amerikalı usta.",
    biyografi: `Paul Jackson Pollock, 28 Ocak 1912'de Wyoming eyaletine bağlı Cody kasabasında doğdu. Batı'daki çiftliklerde büyüdü, sonra sanat eğitimi için New York'a geldi.

1930'larda Bölgesel ressam Thomas Hart Benton'dan eğitim aldı ve Meksikalı muralist David Alfaro Siqueiros'un atölyesine katıldı. Buradan elde ettiği teknikler — boyayı akıtma ve döktürme — ilerleyen yıllarda devrimci çalışmalarının temelini oluşturdu.

1940'larda Sürrealizm akımıyla tanışması ve Jungyen psikanalize ilgisi, bilinçaltı imgelerini tuvaline aktarmasında belirleyici oldu. Eleştirmen Clement Greenberg'in güçlü desteğiyle 1940'ların sonunda şöhrete kavuştu.

1947-1950 yılları arasındaki "damlatma dönemi"nde (drip period) tuvali yere yatırıp etrafında dolaşarak boya döktü, fırlattı, sıçrattı. Bu eserlerin fotoğraflarını çeken Hans Namuth, Pollock'u efsaneye dönüştürdü.

Alkolizmle mücadelesi hayatı boyunca sürdü. 1956'da 44 yaşında sarhoş araç kullanırken bir trafik kazasında hayatını kaybetti.`,
    eserler: [
      {
        ad: "No. 31 (Bir: 31 No'lu, 1950)",
        yıl: "1950",
        aciklama:
          "New York MoMA'daki bu devasa tablo (269 × 530 cm), damlatma döneminin zirve eseridir. Tüm yüzey boya akışları ve izleriyle kaplanmıştır.",
      },
      {
        ad: "Autumn Rhythm (No. 30)",
        yıl: "1950",
        aciklama:
          "Metropolitan Museum of Art'ın koleksiyonundaki bu tablo, Pollock'un şiirsel ritim anlayışını gösterir.",
      },
      {
        ad: "Lavender Mist (No. 1)",
        yıl: "1950",
        aciklama:
          "Washington DC Ulusal Sanat Galerisi'nde. Leylak, siyah ve beyazın birbirine geçtiği sis benzeri yüzey.",
      },
    ],
    teknik:
      "Tuvali zemine yatırıp etrafında dolaşarak boya akıttı, fırlattı ve döktü. Bu yöntem 'action painting' olarak adlandırılır; sanatçının hareketi ve enerjisi tuvalin üzerinde kalıcı iz bırakır.",
    miras:
      "Pollock Amerikan sanatını dünya sahnesine taşıdı; New York, Paris'in yerini alarak modern sanatın merkezi oldu. Eserleri bugün onlarca milyon dolara alıcı bulmaktadır. 'No. 5, 1948' 2006 yılında 140 milyon dolara satıldı.",
  },
  {
    slug: "andy-warhol",
    ad: "Andy Warhol",
    yasam: "1928 – 1987",
    uyruk: "Amerikalı",
    akım: "Pop Art",
    emoji: "🥫",
    renk: "from-pink-500 to-red-400",
    ozet:
      "Campbell's çorba kutularından Marilyn Monroe'ya, sanatı tüketim kültürünün aynasına dönüştüren ve meşhur '15 dakika ünü' kehanetini yapan Pop Art'ın öncüsü.",
    biyografi: `Andrew Warhola, 6 Ağustos 1928'de Pittsburgh, Pennsylvania'da Doğu Avrupa göçmeni bir ailenin çocuğu olarak dünyaya geldi. Carnegie Mellon Üniversitesi'nde ticari sanat eğitimi aldı ve 1949'da New York'a taşındı.

1950'lerde ayakkabı reklamları başta olmak üzere pek çok marka için illüstrasyon yapan başarılı bir ticari tasarımcıydı. 1960'ların başında ticari sanat ile "yüksek sanat" arasındaki sınırı kasıtlı olarak silmeye girişti.

1962'de "Campbell's Çorba Kutuları" serisi büyük ses getirdi. Sıradan tüketim nesnelerini sanat eserine dönüştürerek tüketim toplumuna hem eleştiri hem de kutlama yaptığı yorumlandı.

New York'taki "Factory" stüdyosu, sanatçılar, sinemacılar, modeller ve ünlülerden oluşan bir kültürel merkeze dönüştü. Burada film, müzik ve dergi (Interview) de üretti.

1968'de feminist aktivist Valerie Solanas tarafından ateş açılmasından ağır yaralı kurtuldu. Ölümüne kadar üretmeye devam etti. 1987'de safra kesesi ameliyatından sonra 58 yaşında hayatını kaybetti.`,
    eserler: [
      {
        ad: "Campbell's Çorba Kutuları",
        yıl: "1962",
        aciklama:
          "32 farklı Campbell's ürününün baskı serisi. Tüketim kültürünü ve seri üretimi sanat dünyasına taşıyan bu eser, Pop Art'ın ilanı oldu.",
      },
      {
        ad: "Marilyn Diptik",
        yıl: "1962",
        aciklama:
          "Marilyn Monroe'nun yüzünün 50 tekrarı. Sol yarı renkli, sağ yarı siyah-beyaz; solda hayat sağda ölüm gibi okunur. Warhol bunu Monroe'nun ölümünden haftalar sonra yaptı.",
      },
      {
        ad: "Mao",
        yıl: "1972",
        aciklama:
          "Nixon'ın Çin ziyaretini takip eden dönemde yapılan seri. Siyasi iktidarı ve imge çoğaltımını sorgular.",
      },
    ],
    teknik:
      "Fotoğraf bazlı ipek baskı (silkscreen) tekniğini yaygınlaştırdı. Seri üretimi ve tekrarı sanatın özüne yerleştirdi. 'Fabrika' mantığını bilinçli olarak benimsedi; sanat eserinin özgünlüğü kavramını sorguladı.",
    miras:
      "Warhol, sanat ile ticaret, yüksek kültür ile popüler kültür arasındaki sınırları kalıcı olarak bulanıklaştırdı. Pittsburgh'daki Andy Warhol Müzesi, ABD'nin tek bir sanatçıya adanmış en büyük müzesidir.",
  },
];
