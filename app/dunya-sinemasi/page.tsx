import Link from "next/link";
import { dunyaSinemasi } from "@/data/dunyaSinemasi";

export const metadata = {
  title: "Dünya Sineması | Kültür & Sanat Atlası",
  description:
    "İran, Kore, İspanyol, Fransız ve Arap dünyası sinemalarının büyük yönetmenleri ve başyapıtları.",
};

export default function DunyaSinemaSayfasi() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-12">
        <div className="flex items-center gap-2 text-amber-500 text-sm font-medium mb-3">
          <Link href="/" className="hover:text-amber-400">Ana Sayfa</Link>
          <span>/</span>
          <span>Dünya Sineması</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          🌍 Dünya Sineması
        </h1>
        <p className="text-gray-400 text-lg max-w-3xl leading-relaxed">
          Kiarostami&apos;nin İran&apos;ından Bong Joon-ho&apos;nun Kore&apos;sine, Almodóvar&apos;ın İspanya&apos;sından
          Truffaut&apos;nun Fransa&apos;sına — dünya sinemasının rengarenk coğrafyası.
        </p>
      </div>

      {/* Ülke Kartları */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {dunyaSinemasi.map((ulke) => (
          <Link
            key={ulke.slug}
            href={`/dunya-sinemasi/${ulke.slug}`}
            className="group relative overflow-hidden bg-gray-900 border border-gray-800 rounded-2xl p-7 hover:border-amber-700/40 hover:bg-gray-800/60 transition-all hover:scale-[1.01]"
          >
            <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${ulke.renk} opacity-10 rounded-bl-3xl`} />
            <div className="text-5xl mb-4">{ulke.bayrak}</div>
            <h2 className="text-white font-bold text-xl mb-2 group-hover:text-amber-400 transition-colors flex items-center gap-2">
              {ulke.emoji} {ulke.ulke}
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-5 line-clamp-3">{ulke.ozet}</p>

            <div className="mb-4">
              <div className="text-xs text-gray-600 mb-2 font-medium">ÖNEMLI YÖNETMENLER</div>
              <div className="flex flex-wrap gap-1">
                {ulke.onemliYonetmenler.slice(0, 3).map((y) => (
                  <span key={y.ad} className="text-xs bg-gray-800 text-gray-300 px-2 py-0.5 rounded-full border border-gray-700">
                    {y.ad.split(" ").slice(-1)[0]}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-1 text-amber-500 text-sm font-medium">
              Keşfet
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        ))}
      </div>

      {/* Hızlı Ödüller Özeti */}
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 mb-10">
        <h2 className="text-2xl font-bold text-white mb-6">🏆 Altın Palmiye Kazanan Filmler</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { film: "Kiraz'ın Tadı", ulke: "🇮🇷 İran", yon: "Abbas Kiarostami", yil: "1997" },
            { film: "Parasite", ulke: "🇰🇷 Kore", yon: "Bong Joon-ho", yil: "2019" },
            { film: "Viridiana", ulke: "🇪🇸 İspanya", yon: "Luis Buñuel", yil: "1961" },
            { film: "Dheepan", ulke: "🇫🇷 Fransa", yon: "Jacques Audiard", yil: "2015" },
          ].map((item) => (
            <div key={item.film} className="flex items-center gap-3 bg-gray-800/50 rounded-xl p-3">
              <span className="text-2xl">🌴</span>
              <div>
                <div className="text-white font-semibold text-sm">{item.film} ({item.yil})</div>
                <div className="text-gray-400 text-xs">{item.ulke} — {item.yon}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link href="/turk-sinemasi"
          className="bg-violet-600 hover:bg-violet-500 text-white font-semibold px-6 py-4 rounded-xl text-center transition-all hover:scale-[1.02]">
          🎬 Türk Sinemasına Git
        </Link>
        <Link href="/sinema-tarihi"
          className="bg-gray-800 hover:bg-gray-700 text-white font-semibold px-6 py-4 rounded-xl text-center border border-gray-700 transition-all hover:scale-[1.02]">
          🎞️ Sinema Tarihine Bak
        </Link>
      </div>
    </div>
  );
}
