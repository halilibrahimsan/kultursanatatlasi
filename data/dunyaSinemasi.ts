export interface UlkeSinemasi {
  slug: string;
  ulke: string;
  bayrak: string;
  ozet: string;
  tarih: string;
  ozellikler: string[];
  onemliYonetmenler: {
    ad: string;
    yasam: string;
    ozet: string;
    filmler: string[];
    oduller: string;
  }[];
  onemliFilmler: {
    ad: string;
    yil: string;
    yonetmen: string;
    aciklama: string;
  }[];
  mirasi: string;
  emoji: string;
  renk: string;
}

export const dunyaSinemasi: UlkeSinemasi[] = [
  {
    slug: "iran",
    ulke: "İran Sineması",
    bayrak: "🇮🇷",
    emoji: "🌹",
    renk: "from-green-700 to-emerald-600",
    ozet:
      "Dünya arthouse sinemasının en güçlü seslerinden biri. Şiirsel gerçekçilik, çocuk bakış açısı ve siyasi cesaretiyle 1990'lardan bu yana festivallerin favorisi.",
    tarih:
      "İran'da sinema 1900'lerin başında başladı. Ancak 1979 İslam Devrimi sinema anlayışını kökten değiştirdi. Beklenilenin aksine devrim sonrası sansür koşullarında son derece yaratıcı ve özgün bir sinema doğdu. Abbas Kiarostami, Mohsen Makhmalbaf ve ardından Asghar Farhadi ile İran sineması dünya haritasına çıktı.",
    ozellikler: [
      "Şiirsel gerçekçilik ve minimal anlatı",
      "Çocuk bakış açısının yoğun kullanımı",
      "Doğal ışık ve gerçek mekân tercihi",
      "Amatör ve profesyonel oyuncuların karışımı",
      "Sansürle yaratıcı bir boğuşma",
      "Felsefi ve insancıl temalar",
    ],
    onemliYonetmenler: [
      {
        ad: "Abbas Kiarostami",
        yasam: "1940 – 2016",
        ozet:
          "İran sinemasının dünyaya açılan penceresi. Minimalist anlayışı, meta-anlatı yapıları ve insanın gündelik iyiliğine olan inancıyla çağın en büyük yönetmenlerinden biri. 'Rüzgar Bizi Götürecek' ve 'Yakın' trilojiyle İran'ı Cannes'ın merkezine taşıdı.",
        filmler: [
          "Ev Arkadaşım Nerede? (1987)",
          "Kiraz'ın Tadı (1997)",
          "Rüzgar Bizi Götürecek (1999)",
          "10 (2002)",
          "Sertifikalı Kopya (2010)",
        ],
        oduller: "Cannes Altın Palmiye — Kiraz'ın Tadı (1997)",
      },
      {
        ad: "Asghar Farhadi",
        yasam: "1972 –",
        ozet:
          "İki kez Oscar kazanan İranlı yönetmen. Aile içi ahlaki ikilemleri, sosyal sınıf gerilimini ve yalan-doğru çatışmasını ustaca dramatize eder.",
        filmler: [
          "Güzel Şehir (2004)",
          "Nader ve Simin: Bir Ayrılık (2011)",
          "Geçmiş (2013)",
          "Satıcı (2016)",
          "Herkes Biliyor (2018)",
        ],
        oduller:
          "Oscar En İyi Uluslararası Film — Bir Ayrılık (2012); Satıcı (2017); Berlin Altın Ayı — Bir Ayrılık (2011)",
      },
      {
        ad: "Mohsen Makhmalbaf",
        yasam: "1957 –",
        ozet:
          "Devrim sonrası İran sinemasının ilk büyük sesi. Sonradan eleştirmenleşen bu devrimcinin siyasi filmleri dünya festivallerinde büyük ses getirdi.",
        filmler: [
          "Satıcı (1987)",
          "Gabbeh (1996)",
          "Kandahar (2001)",
          "Afgan Alfabesi (2002)",
        ],
        oduller: "Cannes dahil pek çok uluslararası festival ödülü",
      },
      {
        ad: "Majid Majidi",
        yasam: "1959 –",
        ozet:
          "Yoksul çocukların gözünden anlattığı insancıl ve sıcak filmlerle dünya izleyicisine ulaşan yönetmen.",
        filmler: [
          "Cennet'in Rengi (1999)",
          "Baran (2001)",
          "Peygamber Muhammed (2015)",
        ],
        oduller: "Oscar adaylığı — Cennet'in Rengi (2000)",
      },
      {
        ad: "Jafar Panahi",
        yasam: "1960 –",
        ozet:
          "İran hükümeti tarafından defalarca hapsedilen ve film çekmesi yasaklanan Panahi; bu koşullarda bile film yapmaya devam ederek dünya çapında sembolik bir direniş figürü oldu.",
        filmler: [
          "Ayna (1997)",
          "Daire (2000)",
          "Bu Film Değil (2011)",
          "Taksi (2015)",
          "3 Faces (2018)",
        ],
        oduller: "Berlin Altın Ayı — Taksi (2015); Cannes Jüri Ödülü",
      },
    ],
    onemliFilmler: [
      {
        ad: "Ev Arkadaşım Nerede?",
        yil: "1987",
        yonetmen: "Abbas Kiarostami",
        aciklama:
          "Komşusunun defterini yanlışlıkla alan bir çocuğun onu iade etme çabasının şiirsel anlatımı. Dünya sinemasında çocuk bakış açısının en güzel örneklerinden biri.",
      },
      {
        ad: "Kiraz'ın Tadı",
        yil: "1997",
        yonetmen: "Abbas Kiarostami",
        aciklama:
          "İntihar etmek isteyen bir adamın bu işte yardımcı olacak kişi arayışı. Felsefi ve insancıl bir yolculuk.",
      },
      {
        ad: "Nader ve Simin: Bir Ayrılık",
        yil: "2011",
        yonetmen: "Asghar Farhadi",
        aciklama:
          "Boşanmak isteyen bir çift, hasta kaynata ve hizmetçi aile arasında gelişen ahlaki açmazlar. İran toplumunun katmanlarını keskin gözlemle aktarır.",
      },
      {
        ad: "Satıcı",
        yil: "2016",
        yonetmen: "Asghar Farhadi",
        aciklama:
          "Arthur Miller'ın 'Satıcının Ölümü' oyununu İran bağlamında yorumlayan film. Şeref, öç ve af kavramlarını sorgular.",
      },
    ],
    mirasi:
      "İran sineması 1990-2020 yılları arasında dünyanın en yaratıcı ulusal sinemaları arasında yer aldı. Kiarostami ve Farhadi'nin Cannes ve Oscar başarıları İran'ı dünya sinema haritasına kalıcı olarak yazdı. Sansür altında üretilen bu filmler özgürlük ve sanat arasındaki ilişkiyi de sorgulatır.",
  },
  {
    slug: "kore",
    ulke: "Kore Sineması",
    bayrak: "🇰🇷",
    emoji: "🌸",
    renk: "from-blue-700 to-indigo-600",
    ozet:
      "1990'lardan bu yana olağanüstü bir yükseliş yaşayan ve 2019'da 'Parasite'in Oscar'ı kazanmasıyla dünya sinemasının zirvesine oturan Güney Kore sineması.",
    tarih:
      "Güney Kore sineması 1960'larda çiçeklenmeye başladı, ancak 1980'lerin sansür rejimiyle sekteye uğradı. 1990'larda elde edilen siyasi özgürlükle birlikte Kore sineması patladı. Chungmuro adıyla bilinen yapım merkezi Asya'nın Hollywood'una dönüştü.",
    ozellikler: [
      "Tür karışımı: dram, komedi ve şiddetin iç içe geçmesi",
      "Toplumsal eşitsizlik ve sınıf eleştirisi",
      "Olağanüstü görsel estetik",
      "Güçlü karakter çizimi",
      "Beklenmedik anlatı kırılmaları",
      "Eşsiz ritim ve tempo kontrolü",
    ],
    onemliYonetmenler: [
      {
        ad: "Bong Joon-ho",
        yasam: "1969 –",
        ozet:
          "Kore sinemasını dünyaya tanıtan en önemli isim. Sınıf eşitsizliğini tür sinemasıyla harmanlayan özgün üslubu ve Parasite ile yazdığı Oscar tarihi onu çağın en etkili yönetmenlerinden biri yapıyor.",
        filmler: [
          "Sığınak (2000)",
          "Cinayet Anıları (2003)",
          "Canavar (2006)",
          "Annemi Ara (2009)",
          "Snowpiercer (2013)",
          "Parasite (2019)",
        ],
        oduller:
          "Cannes Altın Palmiye ve Oscar En İyi Film dahil 4 Oscar — Parasite (2019-2020)",
      },
      {
        ad: "Park Chan-wook",
        yasam: "1963 –",
        ozet:
          "Öc üçlemesiyle tanınan usta yönetmen. Şiddet, ahlak ve insanın karanlık yönlerini olağanüstü estetik duyarlılıkla perdede yansıtır.",
        filmler: [
          "Sempati Oy Ver (2002)",
          "Oldboy (2003)",
          "Centilmen'in İntikamı (2005)",
          "Thirst (2009)",
          "The Handmaiden (2016)",
          "Decision to Leave (2022)",
        ],
        oduller:
          "Cannes Jüri Ödülü — Oldboy (2004); Cannes Best Director — Decision to Leave (2022)",
      },
      {
        ad: "Lee Chang-dong",
        yasam: "1954 –",
        ozet:
          "Sakin ama derin filmleriyle insan onurunu ve kayıpları anlatan yönetmen. Edebiyatçı kimliği filmlerinin felsefi yoğunluğuna yansır.",
        filmler: [
          "Nane Şekeri (1999)",
          "Oasis (2002)",
          "Sır (2007)",
          "Poetry (2010)",
          "Burning (2018)",
        ],
        oduller:
          "Cannes Best Screenplay — Poetry (2010); Cannes FIPRESCI — Burning (2018)",
      },
      {
        ad: "Kim Ki-duk",
        yasam: "1960 – 2020",
        ozet:
          "Minimum diyalogla maksimum anlam yaratan yönetmen. Kaba bir estetikle insanın şiddet ve şefkat arasındaki gidişini anlatırdı.",
        filmler: [
          "Ada (2000)",
          "Bahar Yaz Sonbahar Kış ve Yine Bahar (2003)",
          "Yay (2005)",
          "Pieta (2012)",
        ],
        oduller: "Venedik Altın Aslan — Pieta (2012)",
      },
    ],
    onemliFilmler: [
      {
        ad: "Oldboy",
        yil: "2003",
        yonetmen: "Park Chan-wook",
        aciklama:
          "15 yıl boyunca sebepsizce hapsedilen bir adamın intikam hikâyesi. Kore neo-noir'ının başyapıtı; sürpriz finaliyle sinema tarihinin en çarpıcı sonlarından biri.",
      },
      {
        ad: "Cinayet Anıları",
        yil: "2003",
        yonetmen: "Bong Joon-ho",
        aciklama:
          "Güney Kore'nin gerçek ilk seri katil davasını anlatan film. Kore toplumunun ve polisiye türünün en güçlü örneklerinden.",
      },
      {
        ad: "Parasite",
        yil: "2019",
        yonetmen: "Bong Joon-ho",
        aciklama:
          "Fakir bir ailenin zengin bir ailenin evine sızmasını anlatan sınıf hicvi. Cannes Altın Palmiye ve 4 Oscar, En İyi Film dahil.",
      },
      {
        ad: "The Handmaiden",
        yil: "2016",
        yonetmen: "Park Chan-wook",
        aciklama:
          "Japon işgali altındaki Kore'de bir dolandırıcılık planının beklenmedik dönüşleri. Görsel mükemmelliği ve anlatı yapısıyla olağanüstü.",
      },
    ],
    mirasi:
      "Kore sineması 2000'li yıllarda Hollywood'dan bağımsız olarak gelişen ve kendi küresel izleyici kitlesini oluşturan en güçlü ulusal sinemalardan biridir. 'Parasite'in dört Oscar'ı — tarihte bir İngilizce olmayan filmin En İyi Film ödülü alan ilk örnek — bir çağın kapandığını simgeliyordu.",
  },
  {
    slug: "ispanya",
    ulke: "İspanyol Sineması",
    bayrak: "🇪🇸",
    emoji: "💃",
    renk: "from-red-700 to-orange-600",
    ozet:
      "Buñuel'in sürrealist devriminden Almodóvar'ın renkli melodramlarına, İspanyol sineması coşkulu duyguların ve yönetmen güçlüğünün kesişim noktasıdır.",
    tarih:
      "İspanyol sineması Franco diktatörlüğü (1939-1975) altında ağır sansür koşullarında gelişti. Demokratikleşme sonrası patlayan özgürlük ortamında Pedro Almodóvar başta olmak üzere yeni bir kuşak sahneye çıktı. Bugün İspanya, Avrupa'nın en güçlü sinema geleneklerinden birine sahip.",
    ozellikler: [
      "Güçlü melodram ve duygusal yoğunluk",
      "Renk kullanımının önemi",
      "Kadın hikayeleri ve feminist bakış açısı",
      "Tarihsel travma (İç Savaş) ile yüzleşme",
      "Fantastik ve gotik öğelerin gerçekçilikle buluşması",
      "Aile ve toplumsal normların sorgulanması",
    ],
    onemliYonetmenler: [
      {
        ad: "Pedro Almodóvar",
        yasam: "1949 –",
        ozet:
          "İspanyol sinemasının dünyaya açılan en büyük kapısı. Parlak renkler, aşırı duygular, queer kimlikler ve güçlü kadın karakterleriyle özgün bir evren yarattı. İki Oscar sahibi.",
        filmler: [
          "Matador (1986)",
          "Bağlı, Zincirli (1990)",
          "Acı Üzerine Konuşmak (2002)",
          "Her Şey Annem Hakkında (1999)",
          "Volver (2006)",
          "Aşıkların Derisi (2011)",
          "Acı ve Şan (2019)",
        ],
        oduller:
          "Oscar En İyi Yabancı Film — Her Şey Annem Hakkında (2000); Oscar En İyi Senaryo — Acı Üzerine Konuşmak (2003); Cannes Yönetmen Ödülü; Cannes Onursal Altın Palmiye (2017)",
      },
      {
        ad: "Luis Buñuel",
        yasam: "1900 – 1983",
        ozet:
          "Sürrealist sinemanın babası ve en büyük provokasyon ustası. Kilise, burjuvazi ve toplumsal normları amansızca yerdi. İspanya, Meksika ve Fransa'da farklı dönemlerde çalıştı.",
        filmler: [
          "Bir Endülüs Köpeği (1929)",
          "Unutulanlar (1950)",
          "Viridiana (1961)",
          "Yıkım Meleği (1962)",
          "Burjuvazinin Gizli Çekimi (1972)",
          "Özgürlüğün Hayaleti (1974)",
        ],
        oduller:
          "Cannes Altın Palmiye — Viridiana (1961); Oscar — Burjuvazinin Gizli Çekimi (1973)",
      },
      {
        ad: "Victor Erice",
        yasam: "1940 –",
        ozet:
          "Az film yapan ama her birini başyapıta dönüştüren İspanyol sinemasının sessiz ustası. Çocukluk, bellek ve Franco İspanyası en önemli temalarıdır.",
        filmler: [
          "Bal Peteği Ruhu (1973)",
          "Güneyin Güneyi (1983)",
          "Ayva Ağacının Işığı (1992)",
          "Kapaklar (2023)",
        ],
        oduller: "Berlin Altın Ayı ve Cannes ödülleri",
      },
      {
        ad: "Alejandro Amenábar",
        yasam: "1972 –",
        ozet:
          "Gerilim ve korku üzerine özgün filmler yapan Şilili-İspanyol yönetmen. 'Deniz İçinde' ile cinsellik ve ötanazi tartışmalarını ön plana çıkardı.",
        filmler: [
          "Tesis (1996)",
          "Aç Gözlerini (1997)",
          "Diğerleri (2001)",
          "Deniz İçinde (2004)",
        ],
        oduller: "Oscar En İyi Yabancı Film — Deniz İçinde (2005)",
      },
    ],
    onemliFilmler: [
      {
        ad: "Bir Endülüs Köpeği",
        yil: "1929",
        yonetmen: "Luis Buñuel & Salvador Dalí",
        aciklama:
          "Sürrealizmin en ünlü filmi. Açılış sahnesi sinemanın en şok edici görüntüsü olarak tarihe geçmiştir.",
      },
      {
        ad: "Bal Peteği Ruhu",
        yil: "1973",
        yonetmen: "Victor Erice",
        aciklama:
          "Franco İspanyası'nda küçük bir kızın Frankenstein filmiyle kurduğu hayal dünyası. İspanyol sinemasının şiirsel başyapıtı.",
      },
      {
        ad: "Her Şey Annem Hakkında",
        yil: "1999",
        yonetmen: "Pedro Almodóvar",
        aciklama:
          "Oğlunu kaybeden bir kadının Barcelona'da yeni bir hayat kurma hikâyesi. Kadınlık, annelik ve kimlik temalarının zirvesi.",
      },
      {
        ad: "Acı Üzerine Konuşmak",
        yil: "2002",
        yonetmen: "Pedro Almodóvar",
        aciklama:
          "Travmatik anıların ve aşkın kesişiminde iki kadının karşılaşması. Almodóvar'ın en olgun eseri.",
      },
    ],
    mirasi:
      "İspanyol sineması Almodóvar'ın yarattığı küresel ilginin ötesinde giderek genişleyen bir yaratıcı havuzla büyümektedir. Guillermo del Toro (Meksika-İspanyol mirası), Alfonso Cuarón gibi isimler bu geleneğin uzantılarıdır.",
  },
  {
    slug: "fransa",
    ulke: "Fransız Sineması",
    bayrak: "🇫🇷",
    emoji: "🗼",
    renk: "from-blue-600 to-indigo-500",
    ozet:
      "Sinemanın mucidi ve Yeni Dalga'nın anavatanı. Dünya sinemasını en çok şekillendiren ulusal gelenek.",
    tarih:
      "Fransa sinemanın doğum yeridir: Lumière Kardeşler 28 Aralık 1895'te Paris'te tarihin ilk ücretli film gösterimini yaptı. Bu öncülük geleneğini Fransız sinemacılar defalarca sürdürdü. 1950'lerdeki Yeni Dalga (Nouvelle Vague) hareketi modern sinemanın sözlüğünü yeniden yazdı.",
    ozellikler: [
      "Auteur (yönetmen-yazar) sineması anlayışı",
      "Cahiers du Cinéma'nın teorik mirası",
      "Yüksek kültür ile popüler film arasındaki denge",
      "Felsefe ve edebiyatla güçlü bağ",
      "Aşk ve bireysel özgürlük temaları",
      "Festival kültürü — Cannes Film Festivali",
    ],
    onemliYonetmenler: [
      {
        ad: "Jean-Luc Godard",
        yasam: "1930 – 2022",
        ozet:
          "Yeni Dalga'nın en radikal sesi. Her filmiyle sinemanın dilini ve olanaklarını yeniden sorguladı. Montaj, diyalog ve anlatı anlayışını kökten dönüştürdü.",
        filmler: [
          "Nefessiz (1960)",
          "Ateş Altında Yaşamak (1963)",
          "Delilik Şiiri (1965)",
          "Hafta Sonu (1967)",
          "Film Sosyalizmi (2010)",
          "İmge Kitabı (2018)",
        ],
        oduller: "Venedik Onursal Altın Aslan; Cannes Onursal Altın Palmiye",
      },
      {
        ad: "François Truffaut",
        yasam: "1932 – 1984",
        ozet:
          "Yeni Dalga'nın en insancıl sesi. Antoine Doinel döngüsüyle otobiyografik sinemayı mükemmelleştirdi. Hitchcock'a olan hayranlığı onu gerilim ve duygu arasında özgün bir noktaya taşıdı.",
        filmler: [
          "400 Darbe (1959)",
          "Jules ve Jim (1962)",
          "Fahrenheit 451 (1966)",
          "Vahşi Çocuk (1970)",
          "Amerikalı Gece (1973)",
          "Son Metro (1980)",
        ],
        oduller: "Cannes Yönetmen Ödülü — 400 Darbe (1959); Oscar Yabancı Film — Amerikalı Gece (1974)",
      },
      {
        ad: "Agnès Varda",
        yasam: "1928 – 2019",
        ozet:
          "Fransız sinemasının 'büyükannesi' ve feminist öncü. Yeni Dalga'nın tek kadın yönetmeni olarak hem kurmaca hem belgesel alanında özgün eserler verdi.",
        filmler: [
          "La Pointe Courte (1954)",
          "Cleo: Saat 5'ten 7'ye (1962)",
          "Vagabond (1985)",
          "Toplayıcılar ve Ben (2000)",
          "Yüzler Yerler (2017)",
        ],
        oduller: "Cannes Onursal Altın Palmiye; Oscar Onursal Ödülü (2017)",
      },
      {
        ad: "Jacques Audiard",
        yasam: "1952 –",
        ozet:
          "Çağdaş Fransız sinemasının en güçlü sesi. Göç, suç ve kimlik temalarını filmlerine taşıyan Audiard gerçekçi anlatıyla şiirsel görüntüyü buluşturur.",
        filmler: [
          "Vuruşum Sert Vuruşumdur (1996)",
          "Bir Peygamber (2009)",
          "Pastan (2012)",
          "Dheepan (2015)",
          "Bir Kez Terk Et (2021)",
        ],
        oduller: "Cannes Altın Palmiye — Dheepan (2015)",
      },
      {
        ad: "Michel Gondry",
        yasam: "1963 –",
        ozet:
          "Klip yönetmenliğinden beyazperdeye geçen Gondry; el yapımı efektleri ve hayal gücünün özgürlüğünü savunan visüel mucit.",
        filmler: [
          "Duman / Human Nature (2001)",
          "Güneşli Zihnin Ebedi Işığı (2004)",
          "Davranış Bilimi (2006)",
          "Sinema Gözü (2008)",
        ],
        oduller: "Oscar En İyi Senaryo — Güneşli Zihnin Ebedi Işığı (2005)",
      },
    ],
    onemliFilmler: [
      {
        ad: "400 Darbe",
        yil: "1959",
        yonetmen: "François Truffaut",
        aciklama:
          "13 yaşındaki Antoine Doinel'in Paris'teki çalkantılı çocukluk deneyimi. Yeni Dalga'nın manifestosu.",
      },
      {
        ad: "Nefessiz",
        yil: "1960",
        yonetmen: "Jean-Luc Godard",
        aciklama:
          "Amerikan film noir'ından ilham alan ancak onun kurallarını parçalayan film. El kamerası, jump cut ve doğal ışık sinemanın dilini değiştirdi.",
      },
      {
        ad: "Cleo: Saat 5'ten 7'ye",
        yil: "1962",
        yonetmen: "Agnès Varda",
        aciklama:
          "Kanser teşhisi bekleyen bir şarkıcının Paris'teki iki saatini gerçek zamanlı anlatan film.",
      },
      {
        ad: "Bir Peygamber",
        yil: "2009",
        yonetmen: "Jacques Audiard",
        aciklama:
          "Fransız cezaevinde bir Arap gencin ağır koşullardan güce yükselmesini anlatan çarpıcı film.",
      },
    ],
    mirasi:
      "Cannes Film Festivali Fransız sinemanın dünyaya sunduğu en kalıcı hediyelerden biridir. Yeni Dalga hareketi ise bugün hâlâ dünyanın her yerinde okul ve film eleştirilerinde başvuru noktasıdır.",
  },
  {
    slug: "arap-dunyasi",
    ulke: "Arap Dünyası Sineması",
    bayrak: "🌙",
    emoji: "🏜️",
    renk: "from-amber-700 to-yellow-600",
    ozet:
      "Mısır'ın Hollywood'undan Filistin'in direnişine, Lübnanlı yönetmenlerin şiirsel gerçekçiliğine kadar zengin ve çeşitli bir coğrafyanın sineması.",
    tarih:
      "Mısır, Arap dünyasının sinema merkezi olarak 1920'lerden bu yana film üretiyor. 'Doğu'nun Hollywood'u' olarak anılan Kahire stüdyoları Arap dünyasına melodram, komedi ve müzikaller verdi. 1960'larda toplumsal gerçekçi akım öne çıktı; Filistin meselesi, Lübnan İç Savaşı ve bölgesel çatışmalar sinemanın başlıca konuları oldu.",
    ozellikler: [
      "Mısır merkezli ana akım ile bağımsız arthouse çizgisi",
      "Siyasi ve toplumsal meseleler (Filistin, savaş, göç)",
      "Arap kimliği ve tarihsel travma",
      "Şiirsel gerçekçilik",
      "Kadın hikayeleri ve toplumsal cinsiyet",
      "Arap Baharı sonrası belgesel sinema patlaması",
    ],
    onemliYonetmenler: [
      {
        ad: "Youssef Chahine",
        yasam: "1926 – 2008",
        ozet:
          "Mısır ve Arap sinemasının en büyük ustası. Yarım asrı aşkın kariyerinde Arap kimliğini, geçmişle hesaplaşmayı ve modernleşmeyi sinemaya taşıdı. İskenderiye dörtlemesi otobiyografik sinema anlayışının en güçlü örneklerindendir.",
        filmler: [
          "İstasyon (1958)",
          "İskenderiye Neden? (1979)",
          "İskenderiye'de Vedalaşma (1990)",
          "Mısırlı Hikayesi (1982)",
          "Kader (1997)",
        ],
        oduller: "Cannes Onursal Altın Palmiye — 50. Yıl Özel Ödülü (1997)",
      },
      {
        ad: "Hany Abu-Assad",
        yasam: "1961 –",
        ozet:
          "Filistinli yönetmen. Filistin-İsrail çatışmasını insancıl bir perspektifle ve Filistinlilerin gündelik yaşamından anlatan iki kez Oscar'a aday film yapan usta.",
        filmler: [
          "Rana'nın Düğünü (2002)",
          "Cennet Şimdi (2005)",
          "Omar (2013)",
          "Dağların Kraliçesi (2014)",
        ],
        oduller: "Oscar adaylığı — Cennet Şimdi (2006) ve Omar (2014)",
      },
      {
        ad: "Nadine Labaki",
        yasam: "1974 –",
        ozet:
          "Lübnanlı kadın yönetmen. Lübnan toplumunu kadın bakışıyla ve mizahla anlatan filmler yapıyor. Capernaum'la Oscar'a aday gösterildi.",
        filmler: [
          "Karamel (2007)",
          "Nereden Nereye (2011)",
          "Capernaum (2018)",
        ],
        oduller:
          "Cannes Jüri Ödülü — Capernaum (2018); Oscar adaylığı",
      },
      {
        ad: "Maroun Baghdadi",
        yasam: "1950 – 1993",
        ozet:
          "Lübnan İç Savaşı'nı en sert ve dürüst biçimde sinemaya taşıyan yönetmen. Körler için Küçük Savaşlar ile tanındı.",
        filmler: [
          "Körler için Küçük Savaşlar (1982)",
          "Dışarıdan (1985)",
        ],
        oduller: "Cannes Jüri Ödülü",
      },
    ],
    onemliFilmler: [
      {
        ad: "İstasyon",
        yil: "1958",
        yonetmen: "Youssef Chahine",
        aciklama:
          "Mısır'ın en büyük film noire klasiği. Kahire tren istasyonunda geçen dramatik bir gün. Siyah-beyaz görüntüsü ve gergin anlatısıyla dönemini aşan bir eser.",
      },
      {
        ad: "Cennet Şimdi",
        yil: "2005",
        yonetmen: "Hany Abu-Assad",
        aciklama:
          "Batı Şeria'dan intihar bombalısı olmak üzere gönderilen iki Filistinlinin son gününü anlatan film. Siyasi film yapımının en etik ve cesur örneklerinden biri.",
      },
      {
        ad: "Karamel",
        yil: "2007",
        yonetmen: "Nadine Labaki",
        aciklama:
          "Beyrut'ta güzellik salonunu merkeze alan, aşk ve toplumsal baskıyı anlatan Lübnan filmi. Sıcak ve mizahla yüklü anlatısıyla geniş kitlelere ulaştı.",
      },
      {
        ad: "Capernaum",
        yil: "2018",
        yonetmen: "Nadine Labaki",
        aciklama:
          "Lübnan sokaklarında ebeveynlerini mahkemeye veren 12 yaşındaki bir çocuğun gözünden yoksulluk ve terk edilmişlik.",
      },
    ],
    mirasi:
      "Arap dünyası sineması siyasi çalkantılara rağmen son on yılda büyük bir ivme kazandı. Filistin ve Lübnan sineması uluslararası festivallerde giderek daha fazla yer bulurken Mısır popüler sineması tüm Arap dünyasına ulaşmaya devam ediyor.",
  },
];
