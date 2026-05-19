import Link from "next/link";
import { turkSinemaDonemleri, onemliTurkYonetmenler, onemliTurkFilmler } from "@/data/turkSinemasi";

export const metadata = {
  title: "Türk Sineması | Kültür & Sanat Atlası",
  description:
    "Muhsin Ertuğrul'dan Nuri Bilge Ceylan'a, Yılmaz Güney'den Zeki Demirkubuz'a Türk sinemasının tarihi ve başyapıtları.",
};

export default function TurkSinemaSayfasi() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="mb-12">
        <div className="flex items-center gap-2 text-amber-500 text-sm font-medium mb-3">
          <Link href="/" className="hover:text-amber-400">Ana Sayfa</Link>
          <span>/</span>
          <span>Türk Sineması</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          🎬 Türk Sineması
        </h1>
        <p className="text-gray-400 text-lg max-w-3xl leading-relaxed">
          Muhsin Ertuğrul&apos;un öncülüğünden Yeşilçam&apos;ın altın yıllarına, Yılmaz Güney&apos;in
          Cannes zaferinden Nuri Bilge Ceylan&apos;ın Altın Palmiyesi&apos;ne — Türk sinemasının 100 yıllık hikâyesi.
        </p>
      </div>

      {/* Dönemler */}
      <h2 className="text-2xl font-bold text-white mb-6">📽️ Tarihsel Dönemler</h2>
      <div className="space-y-4 mb-14">
        {turkSinemaDonemleri.map((donem) => (
          <div key={donem.ad} className="bg-gray-900 border border-gray-800 rounded-2xl p-7 hover:border-violet-800/40 transition-colors">
            <div className="flex items-start gap-4">
              <div className="text-3xl">{donem.emoji}</div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-white font-bold text-xl">{donem.ad}</h3>
                  <span className="text-violet-400 text-sm font-medium whitespace-nowrap bg-violet-900/20 px-2 py-0.5 rounded-full border border-violet-800/40">
                    {donem.donem}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{donem.ozet}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                  {donem.ozellikler.map((oz, i) => (
                    <li key={i} className="text-gray-500 text-xs flex items-start gap-2">
                      <span className="text-violet-400 mt-0.5">▶</span>
                      {oz}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Önemli Yönetmenler */}
      <h2 className="text-2xl font-bold text-white mb-6">🎥 Önemli Türk Yönetmenler</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
        {onemliTurkYonetmenler.map((yon) => (
          <div key={yon.ad} className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-violet-800/40 transition-colors">
            <div className="flex items-start gap-3 mb-3">
              <span className="text-3xl">{yon.emoji}</span>
              <div>
                <h3 className="text-white font-bold text-lg">{yon.ad}</h3>
                <span className="text-gray-500 text-xs">{yon.yasam}</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">{yon.ozet}</p>
            <div className="mb-3">
              <div className="text-xs text-gray-600 mb-2 font-medium">ÖNEMLI FİLMLER</div>
              <div className="flex flex-wrap gap-1">
                {yon.filmler.slice(0, 4).map((f) => (
                  <span key={f} className="text-xs bg-gray-800 text-gray-400 px-2 py-0.5 rounded-full border border-gray-700">{f}</span>
                ))}
              </div>
            </div>
            {yon.oduller && (
              <div className="bg-amber-900/20 border border-amber-800/30 rounded-lg p-2">
                <span className="text-amber-400 text-xs font-semibold">🏆 </span>
                <span className="text-gray-400 text-xs">{yon.oduller}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Önemli Filmler */}
      <h2 className="text-2xl font-bold text-white mb-6">🏆 Türk Sinemasının Başyapıtları</h2>
      <div className="space-y-4 mb-12">
        {onemliTurkFilmler.map((film, i) => (
          <div key={film.ad} className="flex items-start gap-4 bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-violet-700/40 transition-colors">
            <div className="text-3xl font-bold text-gray-700 w-8 text-center flex-shrink-0">{i + 1}</div>
            <div>
              <div className="flex items-start justify-between gap-2 mb-1">
                <h3 className="text-white font-bold text-lg">{film.ad}</h3>
                <span className="text-amber-400 text-sm font-medium whitespace-nowrap">{film.yil}</span>
              </div>
              <div className="text-gray-500 text-xs mb-2">Yön: {film.yonetmen} • {film.tur}</div>
              <p className="text-gray-400 text-sm leading-relaxed mb-2">{film.aciklama}</p>
              <div className="text-violet-400 text-xs">{film.onemi}</div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link href="/dunya-sinemasi"
          className="bg-violet-600 hover:bg-violet-500 text-white font-semibold px-6 py-4 rounded-xl text-center transition-all hover:scale-[1.02]">
          🌍 Dünya Sinemasına Git
        </Link>
        <Link href="/sinema-tarihi"
          className="bg-gray-800 hover:bg-gray-700 text-white font-semibold px-6 py-4 rounded-xl text-center border border-gray-700 transition-all hover:scale-[1.02]">
          🎞️ Sinema Tarihine Bak
        </Link>
      </div>
    </div>
  );
}
