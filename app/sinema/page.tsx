import Link from "next/link";
import { sinemaAkimlari } from "@/data/sinema";

export const metadata = {
  title: "Sinema | Kültür & Sanat Atlası",
  description:
    "Film Noir'dan Yeni Dalga'ya, sinemanın büyük akımları, türleri ve yönetmenleri.",
};

const turler = [
  { ad: "Dram", aciklama: "İnsan ilişkilerinin ve ruhsal çatışmaların odakta olduğu en geniş tür.", emoji: "😢" },
  { ad: "Suç & Gerilim", aciklama: "Cinayet, soygun ve suç örgütleri. Hitchcock'tan Fincher'a.", emoji: "🔍" },
  { ad: "Bilim Kurgu", aciklama: "Geleceği, teknolojiyi ve uzayı hayal eden tür. 2001'den Interstellar'a.", emoji: "🚀" },
  { ad: "Western", aciklama: "Amerikan sınır mitolojisi. John Ford'dan Sergio Leone'ye.", emoji: "🤠" },
  { ad: "Korku", aciklama: "Korku psikolojisini araştıran tür. Alman Ekspresyonizm'den modern slasher'a.", emoji: "👻" },
  { ad: "Animasyon", aciklama: "Disney'den Ghibli'ye, çizgiden CGI'ya evrim.", emoji: "🎠" },
  { ad: "Belgesel", aciklama: "Gerçekliği kurguyla keşfeden tür. Dziga Vertov'dan Werner Herzog'a.", emoji: "📹" },
  { ad: "Komedi", aciklama: "Chaplin'in sessiz komedisinden Coen Kardeşler'in karanlık mizahına.", emoji: "😂" },
];

const onluFilmler = [
  { ad: "Yurttaş Kane", yil: "1941", yon: "Orson Welles", aciklama: "Tüm zamanların en iyi filmi seçilen başyapıt. Anlatı yapısı ve sinematografi sinemanın dilini değiştirdi." },
  { ad: "Godfather", yil: "1972", yon: "Francis Ford Coppola", aciklama: "Corleone ailesinin destanı. Suç filminin en olgun hali." },
  { ad: "2001: Uzay Yolu Macerası", yil: "1968", yon: "Stanley Kubrick", aciklama: "Bilim kurgunun felsefesi. Kubrick'in yönetmenlik dehası en gür sesle konuştu." },
  { ad: "Rashomon", yil: "1950", yon: "Akira Kurosawa", aciklama: "Aynı olayın dört farklı anlatısı. 'Rashomon etkisi' dil ve kültüre girdi." },
  { ad: "Metropolis", yil: "1927", yon: "Fritz Lang", aciklama: "Distopik bilim kurgunun kurucu eseri. Görsel estetiği sinemayı aştı." },
  { ad: "Schindler'in Listesi", yil: "1993", yon: "Steven Spielberg", aciklama: "Holokost'un en etkili sinema anlatısı." },
];

export default function SinemaSayfasi() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Başlık */}
      <div className="mb-12">
        <div className="flex items-center gap-2 text-amber-500 text-sm font-medium mb-3">
          <Link href="/" className="hover:text-amber-400">Ana Sayfa</Link>
          <span>/</span>
          <span>Sinema</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          🎬 Sinema Dünyası
        </h1>
        <p className="text-gray-400 text-lg max-w-3xl leading-relaxed">
          Film akımları, türler, yönetmenler ve sinemanın kültürel mirası —
          yedinci sanatın kapsamlı rehberi.
        </p>
      </div>

      {/* Akımlar */}
      <h2 className="text-2xl font-bold text-white mb-6">🌊 Önemli Sinema Akımları</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
        {sinemaAkimlari.map((akim) => (
          <div
            key={akim.slug}
            className="relative overflow-hidden bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-violet-700/40 transition-colors"
          >
            <div
              className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl ${akim.renk} opacity-15 rounded-bl-2xl`}
            />
            <div className="text-3xl mb-3">{akim.emoji}</div>
            <h3 className="text-white font-bold text-lg mb-1">{akim.ad}</h3>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="text-xs text-gray-500 bg-gray-800 px-2 py-0.5 rounded-full border border-gray-700">
                {akim.donem}
              </span>
              <span className="text-xs text-gray-500 bg-gray-800 px-2 py-0.5 rounded-full border border-gray-700">
                {akim.koken}
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">{akim.ozet}</p>
            <div>
              <div className="text-xs text-gray-500 mb-2">Önemli Filmler:</div>
              <ul className="space-y-1">
                {akim.onemliyapitlar.slice(0, 3).map((yapıt, i) => (
                  <li key={i} className="text-xs text-gray-400 flex items-start gap-2">
                    <span className="text-violet-400">▶</span>
                    {yapıt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Türler */}
      <h2 className="text-2xl font-bold text-white mb-6">🎭 Sinema Türleri</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
        {turler.map((tur) => (
          <div
            key={tur.ad}
            className="bg-gray-900 border border-gray-800 rounded-xl p-4 hover:border-violet-700/40 hover:bg-gray-800 transition-all"
          >
            <div className="text-3xl mb-2">{tur.emoji}</div>
            <div className="text-white font-bold text-sm mb-1">{tur.ad}</div>
            <div className="text-gray-500 text-xs leading-relaxed">{tur.aciklama}</div>
          </div>
        ))}
      </div>

      {/* Önemli Filmler */}
      <h2 className="text-2xl font-bold text-white mb-6">🏆 Zamanın En Büyük Filmleri</h2>
      <div className="space-y-4 mb-12">
        {onluFilmler.map((film, i) => (
          <div
            key={film.ad}
            className="flex items-start gap-4 bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-violet-700/40 transition-colors"
          >
            <div className="text-3xl font-bold text-gray-700 w-8 flex-shrink-0 text-center">
              {i + 1}
            </div>
            <div>
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-white font-bold text-lg">{film.ad}</h3>
                <span className="text-amber-400 text-sm font-medium whitespace-nowrap">
                  {film.yil}
                </span>
              </div>
              <div className="text-gray-500 text-xs mb-2">Yön: {film.yon}</div>
              <p className="text-gray-400 text-sm leading-relaxed">{film.aciklama}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link
          href="/sinema-tarihi"
          className="bg-violet-600 hover:bg-violet-500 text-white font-semibold px-6 py-4 rounded-xl text-center transition-all hover:scale-[1.02]"
        >
          🎞️ Sinema Tarihini Keşfet
        </Link>
        <Link
          href="/populer-kultur"
          className="bg-gray-800 hover:bg-gray-700 text-white font-semibold px-6 py-4 rounded-xl text-center border border-gray-700 transition-all hover:scale-[1.02]"
        >
          🌟 Popüler Kültüre Bak
        </Link>
      </div>
    </div>
  );
}
