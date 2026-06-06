import Link from "next/link";

export const metadata = {
  title: "Resim Sanatı | Kültür & Sanat Atlası",
  description:
    "Mağara duvarlarından dijital tuvale, resim sanatının tarihi, teknikleri ve önemi.",
};

const bolumler = [
  {
    baslik: "Resim Sanatının Doğuşu",
    icerik:
      "Resim sanatı insanlık tarihi kadar eskidir. Yaklaşık 40.000 yıl öncesine tarihlenen mağara resimleri — İspanya'daki Altamira Mağarası ve Fransa'daki Lascaux — insanlığın en eski görsel iletişim biçimleridir. Bu ilk resimler, gözlem, simge ve ritüelin kesişim noktasıydı: bizon, at ve el izleriyle avlanma törenlerini mi yansıtıyor, bir işaret mi bırakıyor, yoksa başka bir varlığa mı sesleniyor? Cevap hâlâ tartışmalı.",
    emoji: "🦬",
  },
  {
    baslik: "Antik Çağ ve Orta Çağ",
    icerik:
      "Eski Mısır'da resim, dini ve hiyerarşik bir dil olarak işlev gördü: figürlerin büyüklüğü statülerine göre belirlenir, yüzler hep yandan çizilirdi. Antik Yunan'da fresk ve vazo sanatı gelişti. Roma'da Pompei'nin fresk kalıntıları bize bu dönemi en detaylı aktaran belgelerdir. Orta Çağ Avrupa'sında resim, Kilise'nin hizmetinde bir araç oldu: ikona ve fresk, okuma yazma bilmeyenlere İncil hikayelerini aktarıyordu. Figürler gerçekçi değil, simgesel ve hiyerarşikti.",
    emoji: "🏺",
  },
  {
    baslik: "Rönesans: Devrimin Tuvali",
    icerik:
      "15. yüzyılda İtalya'da patlak veren Rönesans, resim sanatını köklü biçimde dönüştürdü. Üç büyük yenilik: Perspektif (matematiksel üç boyutlu derinlik; Brunelleschi buldu, Alberti formüle etti), Anatomi (Leonardo ve Michelangelo insan vücudunu diseksiyon yoluyla öğrenip tuvale aktardı) ve Yağlı boya tekniği (Flaman ressam Jan van Eyck'e atfedilen bu teknik, rengin katmanlanmasına ve yoğunlaşmasına olanak tanıdı). Bu üç yenilik birlikte, tablo bir pencereden görülen gerçek dünyayı taklit eder hale geldi.",
    emoji: "🏛️",
  },
  {
    baslik: "Renk, Işık ve Teknik",
    icerik:
      "Resim sanatında dört temel teknik geleneği vardır: Fresko (kireç sıva üzerine boyama; Michelangelo'nun Sistine tavanı), Yağlı boya (bezir ya da ceviz yağıyla karıştırılmış pigment; 500 yıldır standart), Suluboya (kâğıt üzerine şeffaf renk katmanları; Turner ve Dürer), Akrilik (20. yüzyıl plastik bazlı boya; hızlı kurur, çok yönlü). Işık kullanımı da akımdan akıma değişti: Rönesans'ın dengeli ışığı, Barok'un dramatik karanlık-aydınlık kontrastı (chiaroscuro), Empresyonizm'in titreşen anlık ışığı ve Fovizm'in gerçeklikten kopuk duygusal rengi birbirinden radikal biçimde farklı görsel dünyalar yarattı.",
    emoji: "🎨",
  },
  {
    baslik: "Modern ve Çağdaş Resim",
    icerik:
      "19. yüzyıl sonundan itibaren resim sanatı, temsil etme yükümlülüğünden kurtuluşun hikâyesidir. Kameranın icadı bu özgürlüğü hızlandırdı: Fotoğraf gerçekliği aktarabiliyorsa, resmin başka bir şey yapması gerekiyordu. Empresyonizm anlık algıyı, Kübizm mekânı parçaladı, Sürrealizm bilinçaltını, Soyut Ekspresyonizm ise sanatçının bedensel enerjisini tuvale aktardı. Kavramsal sanatın yükselmesiyle birlikte 'fikir nesnenin önüne geçti' ve tablo zaman zaman tamamen ortadan kalktı. Bugün dijital araçlar resmin sınırlarını yeniden tanımlıyor.",
    emoji: "🌀",
  },
  {
    baslik: "Resmin Dili: Kompozisyon ve Renk",
    icerik:
      "Her tablo bir dizi görsel karar bütünüdür. Kompozisyon, figürlerin ve nesnelerin düzenlemesidir; 'altın oran' ve 'üçler kuralı' yüzyıllardır kullanılan dengeli düzenleme ilkeleridir. Renk teorisi: Goethe ve daha sonra Itten gibi sanatçı-teorisyenler rengi bilimsel ve duygusal boyutlarıyla sistematize etti. Tamamlayıcı renkler (kırmızı-yeşil, mavi-turuncu, sarı-mor) yan yana gelince titreşim etkisi yaratır — Empresyonistler bu etkiyi yoğunca kullandı. Değer (açık-koyu skalası) rengin ötesinde hacim ve derinlik yaratmanın temel aracıdır.",
    emoji: "🌈",
  },
];

const onemliMuseler = [
  { ad: "Louvre Müzesi", sehir: "Paris", ozellik: "Mona Lisa, Winged Victory", emoji: "🇫🇷" },
  { ad: "Metropolitan Museum of Art", sehir: "New York", ozellik: "5.000 yıl sanat tarihi", emoji: "🇺🇸" },
  { ad: "Uffizi Galerisi", sehir: "Floransa", ozellik: "Rönesans sanatının kalbi", emoji: "🇮🇹" },
  { ad: "Rijksmuseum", sehir: "Amsterdam", ozellik: "Gece Nöbeti ve Hollanda Altın Çağı", emoji: "🇳🇱" },
  { ad: "Prado Müzesi", sehir: "Madrid", ozellik: "Velázquez, Goya, El Greco", emoji: "🇪🇸" },
  { ad: "MoMA", sehir: "New York", ozellik: "Modern ve çağdaş sanat", emoji: "🇺🇸" },
];

export default function ResimSanatiSayfasi() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Başlık */}
      <div className="mb-12">
        <div className="flex items-center gap-2 text-amber-500 text-sm font-medium mb-3">
          <Link href="/" className="hover:text-amber-400">Ana Sayfa</Link>
          <span>/</span>
          <span>Resim Sanatı</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          🎨 Resim Sanatı
        </h1>
        <p className="text-gray-400 text-lg max-w-3xl leading-relaxed">
          Mağara duvarlarından dijital tuvale, insanlığın en eski ve evrensel görsel
          ifade biçiminin kapsamlı tarihi, teknikleri ve anlamı.
        </p>
      </div>

      {/* Bölümler */}
      <div className="space-y-6 mb-16">
        {bolumler.map((bolum, i) => (
          <div
            key={i}
            className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-amber-800/40 transition-colors"
          >
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="text-3xl">{bolum.emoji}</span>
              {bolum.baslik}
            </h2>
            <p className="text-gray-300 leading-relaxed">{bolum.icerik}</p>
          </div>
        ))}
      </div>

      {/* Önemli Müzeler */}
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 mb-10">
        <h2 className="text-2xl font-bold text-white mb-6">
          🏛️ Dünyanın En Önemli Sanat Müzeleri
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {onemliMuseler.map((muze) => (
            <div
              key={muze.ad}
              className="bg-gray-800/50 border border-gray-700 rounded-xl p-4"
            >
              <div className="text-2xl mb-2">{muze.emoji}</div>
              <div className="text-white font-semibold text-sm">{muze.ad}</div>
              <div className="text-amber-400 text-xs mb-1">{muze.sehir}</div>
              <div className="text-gray-500 text-xs">{muze.ozellik}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link
          href="/ressamlar"
          className="bg-amber-500 hover:bg-amber-400 text-gray-950 font-semibold px-6 py-4 rounded-xl text-center transition-all hover:scale-[1.02]"
        >
          👨‍🎨 Büyük Ressamları İncele
        </Link>
        <Link
          href="/sanat-akimlari"
          className="bg-gray-800 hover:bg-gray-700 text-white font-semibold px-6 py-4 rounded-xl text-center border border-gray-700 transition-all hover:scale-[1.02]"
        >
          🏛️ Sanat Akımlarını Keşfet
        </Link>
      </div>
    </div>
  );
}
