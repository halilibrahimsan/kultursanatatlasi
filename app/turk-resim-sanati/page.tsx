import Link from "next/link";
import { turkRessamlar, turkResimSanatiTarihi } from "@/data/turkSanati";

export const metadata = {
  title: "Türk Resim Sanatı | Kültür & Sanat Atlası",
  description:
    "Osman Hamdi Bey'den Bedri Rahmi Eyüboğlu'na Türk resim sanatının tarihi ve büyük ustalar.",
};

export default function TurkResimSanatiSayfasi() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="mb-12">
        <div className="flex items-center gap-2 text-amber-500 text-sm font-medium mb-3">
          <Link href="/" className="hover:text-amber-400">Ana Sayfa</Link>
          <span>/</span>
          <span>Türk Resim Sanatı</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          🎨 Türk Resim Sanatı
        </h1>
        <p className="text-gray-400 text-lg max-w-3xl leading-relaxed">
          Osmanlı saray nakkaşhanesinden modern Türk empresyonizmine, 1914 Kuşağı&apos;ndan
          çağdaş sanata — Türk resim sanatının büyük yolculuğu.
        </p>
      </div>

      {/* Tarihsel Dönemler */}
      <h2 className="text-2xl font-bold text-white mb-6">📜 Tarihsel Dönemler</h2>
      <div className="space-y-5 mb-16">
        {turkResimSanatiTarihi.map((donem, i) => (
          <div
            key={i}
            className="bg-gray-900 border border-gray-800 rounded-2xl p-7 hover:border-amber-800/40 transition-colors"
          >
            <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
              <span className="text-2xl">{donem.emoji}</span>
              {donem.donem}
            </h3>
            <p className="text-gray-300 leading-relaxed">{donem.aciklama}</p>
          </div>
        ))}
      </div>

      {/* Önemli Ressamlar */}
      <h2 className="text-2xl font-bold text-white mb-6">👨‍🎨 Önemli Türk Ressamlar</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
        {turkRessamlar.map((ressam) => (
          <Link
            key={ressam.slug}
            href={`/turk-ressamlar/${ressam.slug}`}
            className="group bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-amber-700/50 hover:bg-gray-800/80 transition-all hover:scale-[1.01]"
          >
            <div className="flex items-start gap-4">
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${ressam.renk} flex items-center justify-center text-2xl flex-shrink-0`}
              >
                {ressam.emoji}
              </div>
              <div>
                <h3 className="text-white font-bold text-lg group-hover:text-amber-400 transition-colors">
                  {ressam.ad}
                </h3>
                <div className="flex flex-wrap gap-2 mt-1 mb-2">
                  <span className="text-xs text-gray-500 bg-gray-800 px-2 py-0.5 rounded-full border border-gray-700">
                    {ressam.yasam}
                  </span>
                  <span className="text-xs text-amber-400 bg-amber-900/20 px-2 py-0.5 rounded-full border border-amber-800/40">
                    {ressam.akım}
                  </span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                  {ressam.ozet}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* CTA */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link
          href="/geleneksel-sanatlar"
          className="bg-amber-500 hover:bg-amber-400 text-gray-950 font-semibold px-6 py-4 rounded-xl text-center transition-all hover:scale-[1.02]"
        >
          🏺 Geleneksel Sanatları Keşfet
        </Link>
        <Link
          href="/turk-sinemasi"
          className="bg-gray-800 hover:bg-gray-700 text-white font-semibold px-6 py-4 rounded-xl text-center border border-gray-700 transition-all hover:scale-[1.02]"
        >
          🎬 Türk Sinemasına Git
        </Link>
      </div>
    </div>
  );
}
