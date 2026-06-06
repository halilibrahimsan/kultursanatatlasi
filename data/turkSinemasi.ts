export interface TurkYonetmen {
  ad: string;
  yasam: string;
  ozet: string;
  filmler: string[];
  oduller: string;
  emoji: string;
}

export interface TurkFilm {
  ad: string;
  yil: string;
  yonetmen: string;
  tur: string;
  aciklama: string;
  onemi: string;
}

export interface TurkSinemaDonemi {
  ad: string;
  donem: string;
  ozet: string;
  ozellikler: string[];
  emoji: string;
}

export const turkSinemaDonemleri: TurkSinemaDonemi[] = [
  {
    ad: "Osmanlı ve İlk Türk Filmleri",
    donem: "1896 – 1922",
    emoji: "🎞️",
    ozet:
      "Sinemanın Türkiye'ye gelişi ve ilk Türk filmlerinin çekildiği dönem.",
    ozellikler: [
      "Lumière Kardeşler'in temsilcisi tarafından 1896'da İstanbul'da ilk gösterim",
      "İlk Türk filmi: 'Ayastefanos'taki Rus Abidesinin Yıkılışı' (1914)",
      "Selanik Subayları etkisi ve belgesel ağırlıklı üretim",
      "Tiyatrocuların yönetmen olduğu amatör dönem",
    ],
  },
  {
    ad: "Muhsin Ertuğrul Dönemi",
    donem: "1922 – 1948",
    emoji: "🎭",
    ozet:
      "Türk sinemasının gerçek kurucusu sayılan Muhsin Ertuğrul'un neredeyse tek adam olduğu dönem.",
    ozellikler: [
      "Muhsin Ertuğrul'un yönetiminde Türk sinemasının temelinin atılması",
      "Tiyatro kökenli anlatı anlayışı",
      "Stüdyo altyapısının ilk kurulumu",
      "Atatürk döneminin ulusal konularını işleyen filmler",
      "'Ankara Postası' (1929) ilk sesli film",
    ],
  },
  {
    ad: "Yeşilçam Dönemi",
    donem: "1948 – 1970",
    emoji: "🌿",
    ozet:
      "Türk sinemasının ilk kitlesel atılımı. İstanbul'da yüzlerce yapım şirketinin kurulduğu, Türk halkının sinemayı keşfettiği hızlı büyüme yılları.",
    ozellikler: [
      "Yılda 200'ü aşkın film üretimi",
      "Tür sineması: melodram, komedi, aksiyon",
      "Türkan Şoray, Fatma Girik, Hülya Koçyiğit gibi yıldız sistemi",
      "Yetkili dublaj sisteminin gelişmesi",
      "Avrupa filmlerinin kopyalanması (Ayhan Işık = Türk Clark Gable)",
    ],
  },
  {
    ad: "Toplumsal Gerçekçilik ve Yılmaz Güney",
    donem: "1960 – 1980",
    emoji: "✊",
    ozet:
      "Türk sinemasının en güçlü toplumsal eleştiri dönemini kapsayan; Yılmaz Güney'in hem oyunculuk hem de yönetmenlikle damgasını vurduğu yıllar.",
    ozellikler: [
      "Toplumsal gerçekçi akımın yükselişi",
      "Yılmaz Güney'in 'Halk Yıldızı'ndan yönetmen kimliğine evrimi",
      "Halit Refiğ ve Memduh Ün'ün ulusal sinema tartışmaları",
      "Siyasi baskılar altında üretim",
      "Cannes'dan Palme d'Or'a uzanan yol",
    ],
  },
  {
    ad: "Kriz ve Dönüşüm",
    donem: "1980 – 2000",
    emoji: "📺",
    ozet:
      "Televizyon ve video kasetin yükselişiyle sinema salonlarının boşaldığı, ancak otoriter yönetmenler kuşağının filiz verdiği geçiş dönemi.",
    ozellikler: [
      "Televizyon rekabeti ve seyirci kaybı",
      "1980 askeri darbesi sonrası sansür baskısı",
      "Atıf Yılmaz'ın kadın hikayeleri üzerine kadın odaklı filmleri",
      "Nuri Bilge Ceylan ve Zeki Demirkubuz'un yükselişi",
      "Bağımsız yapımlar ve festival sineması",
    ],
  },
  {
    ad: "Türk Sinemasının Yeniden Doğuşu",
    donem: "2000 – Günümüz",
    emoji: "🏆",
    ozet:
      "Uluslararası festivallerde altın dönemi. Nuri Bilge Ceylan ve diğer yönetmenlerin Cannes'ı fethettiği ve Türk sinemasının dünya haritasına girdiği çağ.",
    ozellikler: [
      "Nuri Bilge Ceylan'ın Cannes'daki ard arda ödülleri",
      "Kış Uykusu ile Altın Palmiye (2014)",
      "Geniş bütçeli popüler Türk sineması (Recep İvedik serisi, Fetih 1453)",
      "Netflix Türkiye yapımlarıyla küresel izleyici",
      "Emir Kusturica, Koreeda gibi ustalarla kıyaslanabilir yönetmenler kuşağı",
    ],
  },
];

export const onemliTurkYonetmenler: TurkYonetmen[] = [
  {
    ad: "Yılmaz Güney",
    yasam: "1937 – 1984",
    emoji: "🦁",
    ozet:
      "Türk sinemasının en büyük ismi. 'Çirkin Kral' lakabıyla tanınan Güney; oyunculuğu, yönetmenliği ve toplumsal cesaretiyle tek başına bir dönem oluşturdu. Cezaevindeyken yönettiği 'Yol', Cannes'da Altın Palmiye kazandı.",
    filmler: ["Umut (1970)", "Sürü (1978)", "Düşman (1979)", "Yol (1982)", "Duvar (1983)"],
    oduller: "Cannes Altın Palmiye — Yol (1982)",
  },
  {
    ad: "Nuri Bilge Ceylan",
    yasam: "1959 –",
    emoji: "🏔️",
    ozet:
      "Çağdaş Türk sinemasının dünya ölçeğindeki en büyük ismi. Uzun çekimler, felsefi diyaloglar ve Anadolu peyzajını Çehov anlayışıyla birleştiren kendine özgü sinema dili.",
    filmler: [
      "Kasaba (1997)",
      "Uzak (2002)",
      "İklimler (2006)",
      "Üç Maymun (2008)",
      "Bir Zamanlar Anadolu'da (2011)",
      "Kış Uykusu (2014)",
      "Ahlat Ağacı (2018)",
    ],
    oduller:
      "Cannes Altın Palmiye — Kış Uykusu (2014); Grand Prix — Bir Zamanlar Anadolu'da (2011); Yönetmen Ödülü — İklimler (2006); FIPRESCI — Uzak (2003)",
  },
  {
    ad: "Zeki Demirkubuz",
    yasam: "1964 –",
    emoji: "🌑",
    ozet:
      "Türk sinemasının en karanlık ve en tutarlı seslerinden biri. İnsan doğasının karanlık yönlerini, suçu ve vicdan azabını sıkı bir sinema diliyle işler. Ahlaki sorgulama onun filmlerinin merkezidir.",
    filmler: ["C Blok (1994)", "Masumiyet (1997)", "Üçüncü Sayfa (1999)", "Kader (2006)", "Yeraltı (2012)"],
    oduller: "Antalya Altın Portakal dahil pek çok ulusal ödül",
  },
  {
    ad: "Ferzan Özpetek",
    yasam: "1959 –",
    emoji: "🌹",
    ozet:
      "İtalya'da kariyerini kuran Türk-İtalyan yönetmen. İstanbul'u, gelenekle modernliğin çatışmasını ve kimlik sorularını büyük bir duygusal sıcaklıkla işler.",
    filmler: [
      "Hamam (1997)",
      "Harem Suare (1999)",
      "Cahil Periler (2001)",
      "Cuore Sacro (2005)",
      "Mine Vaganti (2010)",
    ],
    oduller: "David di Donatello dahil pek çok İtalyan ödülü",
  },
  {
    ad: "Semih Kaplanoğlu",
    yasam: "1963 –",
    emoji: "🌾",
    ozet:
      "Bal / Süt / Yumurta üçlemesiyle tanınan Kaplanoğlu; manevi arayış, çocukluk ve Anadolu doğasını yavaş sinema diliyle işler.",
    filmler: ["Yumurta (2007)", "Süt (2008)", "Bal (2010)", "Buğday (2017)"],
    oduller: "Berlin Altın Ayı — Bal (2010)",
  },
  {
    ad: "Reha Erdem",
    yasam: "1960 –",
    emoji: "🌿",
    ozet:
      "İstanbul ve Anadolu doğasını özgün bir şiirsellikle sinemaya taşıyan yönetmen. Şiddet, büyüme ve özgürlük temalarını görsel güçle işler.",
    filmler: ["A Ay (1988)", "Kaç Para Kaç (1999)", "Beş Vakit (2006)", "Hayat Var (2008)"],
    oduller: "Pek çok uluslararası festival ödülü",
  },
];

export const onemliTurkFilmler: TurkFilm[] = [
  {
    ad: "Umut",
    yil: "1970",
    yonetmen: "Yılmaz Güney",
    tur: "Drama / Sosyal Gerçekçilik",
    aciklama:
      "Adana'da at arabasıyla geçimini sağlayan Cabbar'ın atını kaybetmesi ve umuda tutunmaya çalışması. Türk toplumsal gerçekçi sinemasının başlangıç noktası.",
    onemi:
      "Yılmaz Güney'in hem oynadığı hem yönettiği ilk büyük film. Türk sinemasında toplumsal gerçekçilik dönemini başlattı.",
  },
  {
    ad: "Yol",
    yil: "1982",
    yonetmen: "Yılmaz Güney / Şerif Gören",
    tur: "Drama",
    aciklama:
      "Cezaevinden izinli çıkan beş mahkumun Türkiye'nin dört bir yanında yaşadıklarını anlatan film. Güney cezaevindeyken senaryoyu yazdı ve direktiflerini iletti.",
    onemi:
      "Cannes Film Festivali Altın Palmiye ödülü. Türkiye'nin Cannes'da kazandığı tek Altın Palmiye.",
  },
  {
    ad: "Sürü",
    yil: "1978",
    yonetmen: "Zeki Ökten (Yılmaz Güney senaryosuyla)",
    tur: "Drama",
    aciklama:
      "Doğu Anadolu'dan İstanbul'a sürü satan bir ailenin göç ve geleneksel değerlerin çöküşü üzerine draması.",
    onemi:
      "Cannes ve Berlin'de büyük yankı uyandırdı. Anadolu'dan modern şehre göçün en güçlü sinema belgelerinden biri.",
  },
  {
    ad: "Masumiyet",
    yil: "1997",
    yonetmen: "Zeki Demirkubuz",
    tur: "Drama / Film Noir",
    aciklama:
      "Cezaevinden çıkan bir adamın küçük bir kasabada tesadüfen tanıştığı bir kadına ve çocuğuna bağlanması. Türk sinemasının en çarpıcı karakter çalışmalarından biri.",
    onemi:
      "Zeki Demirkubuz'u Türk sinemasının karanlık ustası olarak yerleştirdi. Uluslararası festivallerden büyük ilgi gördü.",
  },
  {
    ad: "Uzak",
    yil: "2002",
    yonetmen: "Nuri Bilge Ceylan",
    tur: "Drama",
    aciklama:
      "İstanbul'da yaşayan bir fotoğrafçıyla taşradan gelen yeğeninin birlikte geçirdikleri zaman. İki yalnızlık arasındaki sessiz gerilim.",
    onemi:
      "Cannes'dan büyük ödüller. Türk sinemasının uluslararası festivallerde yeniden ağırlık kazanmasının başlangıcı.",
  },
  {
    ad: "Bir Zamanlar Anadolu'da",
    yil: "2011",
    yonetmen: "Nuri Bilge Ceylan",
    tur: "Drama / Gerilim",
    aciklama:
      "Anadolu bozkırında bir cenazenin aranması sırasında bir doktor, savcı ve polisin birbirine karışan iç dünyaları.",
    onemi:
      "Cannes Grand Prix. Türk sinemasının dünya standartlarına tam anlamıyla ulaştığının belgesi.",
  },
  {
    ad: "Kış Uykusu",
    yil: "2014",
    yonetmen: "Nuri Bilge Ceylan",
    tur: "Drama",
    aciklama:
      "Kapadokya'da otel işleten emekli bir aktörün karısı, kız kardeşi ve çevresiyle yaşadığı felsefi çatışmalar. Çehov'dan uyarlanan diyaloglar.",
    onemi:
      "Cannes Altın Palmiye. Türkiye'nin sinema tarihinin en büyük uluslararası başarısı.",
  },
  {
    ad: "Bal",
    yil: "2010",
    yonetmen: "Semih Kaplanoğlu",
    tur: "Drama",
    aciklama:
      "Karadeniz ormanlarında arı yetiştiricisi bir babanın gözünden çocukluğun sessiz ve şiirsel anlatımı.",
    onemi:
      "Berlin Altın Ayı. Türk sinemasının Berlin'deki en büyük ödülü.",
  },
];
