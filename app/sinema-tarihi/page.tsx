import Link from "next/link";
import { sinemaTarihi } from "@/data/sinema";

export const metadata = {
  title: "Sinema Tarihi | Kültür & Sanat Atlası",
  description:
    "Lumière Kardeşler'den dijital çağa, sinemanın 130 yıllık büyük yolculuğu.",
};

export default function SinemaTarihiSayfasi() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Başlık */}
      <div className="mb-12">
        <div className="flex items-center gap-2 text-amber-500 text-sm font-medium mb-3">
          <Link href="/" className="hover:text-amber-400">Ana Sayfa</Link>
          <span>/</span>
          <span>Sinema Tarihi</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          🎞️ Sinema Tarihi
        </h1>
        <p className="text-gray-400 text-lg max-w-3xl leading-relaxed">
          28 Aralık 1895&apos;te Paris&apos;te Lumière Kardeşler&apos;in ilk film gösteriminden
          günümüz streaming çağına, sinemanın 130 yıllık büyük dönüşüm hikâyesi.
        </p>
      </div>

      {/* Zaman çizelgesi görsel */}
      <div className="bg-gradient-to-r from-violet-900/30 via-gray-900 to-gray-900 border border-violet-800/30 rounded-2xl p-6 mb-12">
        <div className="flex items-center justify-between text-sm overflow-x-auto gap-4">
          {[
            { yil: "1895", etiket: "İlk Film" },
            { yil: "1927", etiket: "Sesli Sinema" },
            { yil: "1940", etiket: "Altın Çağ" },
            { yil: "1960", etiket: "Yeni Dalga" },
            { yil: "1975", etiket: "Blockbuster" },
            { yil: "2000", etiket: "Dijital" },
            { yil: "2020+", etiket: "Streaming" },
          ].map((nokta, i, arr) => (
            <div key={i} className="flex items-center gap-2 flex-shrink-0">
              <div className="text-center">
                <div className="w-3 h-3 bg-violet-500 rounded-full mx-auto mb-1" />
                <div className="text-violet-300 font-bold text-xs">{nokta.yil}</div>
                <div className="text-gray-500 text-xs">{nokta.etiket}</div>
              </div>
              {i < arr.length - 1 && (
                <div className="w-8 h-0.5 bg-gray-700 flex-shrink-0" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Dönemler */}
      <div className="space-y-8">
        {sinemaTarihi.map((donem) => (
          <div
            key={donem.slug}
            id={donem.slug}
            className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-violet-800/40 transition-colors"
          >
            <div className="flex items-start gap-5 mb-6">
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${donem.renk} flex items-center justify-center text-3xl flex-shrink-0`}
              >
                {donem.emoji}
              </div>
              <div>
                <div className="text-violet-400 text-sm font-medium mb-1">
                  {donem.donem}
                </div>
                <h2 className="text-2xl font-bold text-white">{donem.ad}</h2>
                <p className="text-gray-400 mt-2 leading-relaxed">{donem.ozet}</p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              {donem.aciklama.split("\n\n").filter(Boolean).map((p, i) => (
                <p key={i} className="text-gray-300 leading-relaxed text-sm">
                  {p.trim()}
                </p>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Özellikler */}
              <div>
                <h3 className="text-white font-semibold mb-3 text-sm">✨ Dönemin Özellikleri</h3>
                <ul className="space-y-1">
                  {donem.ozellikler.map((oz, i) => (
                    <li key={i} className="text-gray-400 text-xs flex items-start gap-2">
                      <span className="text-violet-400 mt-0.5">•</span>
                      {oz}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Önemli Yapıtlar */}
              <div>
                <h3 className="text-white font-semibold mb-3 text-sm">🎬 Dönemin Başyapıtları</h3>
                <ul className="space-y-1">
                  {donem.onemliyapitlar.map((yapıt, i) => (
                    <li key={i} className="text-gray-400 text-xs flex items-start gap-2">
                      <span className="text-violet-400 mt-0.5">▶</span>
                      {yapıt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Önemli İsimler */}
            <div className="mt-4 flex flex-wrap gap-2">
              {donem.onemliFigurler.map((fig) => (
                <span
                  key={fig}
                  className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full border border-gray-700"
                >
                  {fig}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link
          href="/sinema"
          className="bg-violet-600 hover:bg-violet-500 text-white font-semibold px-6 py-4 rounded-xl text-center transition-all hover:scale-[1.02]"
        >
          🎬 Sinema Akımlarını Keşfet
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
