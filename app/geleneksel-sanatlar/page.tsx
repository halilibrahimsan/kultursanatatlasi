import Link from "next/link";
import { gelenekselSanatlar } from "@/data/gelenekselSanatlar";

export const metadata = {
  title: "Geleneksel Türk Sanatları | Kültür & Sanat Atlası",
  description:
    "Hat, Tezhip, Minyatür, Ebru ve Çini: Türk-İslam sanat geleneğinin şaheserleri ve büyük ustaları.",
};

export default function GelenekselSanatlarSayfasi() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="mb-12">
        <div className="flex items-center gap-2 text-amber-500 text-sm font-medium mb-3">
          <Link href="/" className="hover:text-amber-400">Ana Sayfa</Link>
          <span>/</span>
          <span>Geleneksel Sanatlar</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          🏺 Geleneksel Türk Sanatları
        </h1>
        <p className="text-gray-400 text-lg max-w-3xl leading-relaxed">
          Hat&apos;tan Ebru&apos;ya, Tezhip&apos;ten Minyatür&apos;e, Çini&apos;den Nakış&apos;a — yüzyıllar boyunca yaşatılan
          Türk-İslam sanat geleneğinin büyük ustaları ve sırları.
        </p>
      </div>

      {/* Sanatlar Grid */}
      <div className="space-y-8">
        {gelenekselSanatlar.map((sanat) => (
          <Link
            key={sanat.slug}
            href={`/geleneksel-sanatlar/${sanat.slug}`}
            className="group block bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-amber-700/40 hover:bg-gray-800/60 transition-all"
          >
            <div className="flex items-start gap-5 mb-5">
              <div className={`w-18 h-18 w-16 h-16 rounded-2xl bg-gradient-to-br ${sanat.renk} flex items-center justify-center text-4xl flex-shrink-0`}>
                {sanat.emoji}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white group-hover:text-amber-400 transition-colors">
                  {sanat.ad}
                </h2>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="text-xs text-amber-400 bg-amber-900/20 px-2 py-0.5 rounded-full border border-amber-800/40">
                    {sanat.tanim}
                  </span>
                  <span className="text-xs text-gray-500 bg-gray-800 px-2 py-0.5 rounded-full border border-gray-700">
                    {sanat.tarih}
                  </span>
                </div>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mb-5">{sanat.ozet}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="text-xs font-semibold text-gray-500 mb-2">KULLANILAN MALZEMELER</div>
                <div className="flex flex-wrap gap-2">
                  {sanat.malzeme.slice(0, 4).map((m) => (
                    <span key={m} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full border border-gray-700">
                      {m}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-xs font-semibold text-gray-500 mb-2">BÜYÜK USTALAR</div>
                <div className="flex flex-wrap gap-2">
                  {sanat.onemliUstalar.slice(0, 3).map((u) => (
                    <span key={u.ad} className="text-xs text-amber-300 bg-amber-900/20 px-2 py-1 rounded-full border border-amber-800/40">
                      {u.ad}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-1 text-amber-500 text-sm font-medium">
              Detayları İncele
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link href="/turk-resim-sanati"
          className="bg-amber-500 hover:bg-amber-400 text-gray-950 font-semibold px-6 py-4 rounded-xl text-center transition-all hover:scale-[1.02]">
          🎨 Türk Resim Sanatına Git
        </Link>
        <Link href="/turk-edebiyati"
          className="bg-gray-800 hover:bg-gray-700 text-white font-semibold px-6 py-4 rounded-xl text-center border border-gray-700 transition-all hover:scale-[1.02]">
          📚 Türk Edebiyatına Git
        </Link>
      </div>
    </div>
  );
}
