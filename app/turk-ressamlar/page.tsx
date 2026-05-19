import Link from "next/link";
import { turkRessamlar } from "@/data/turkSanati";

export const metadata = {
  title: "Türk Ressamlar | Kültür & Sanat Atlası",
  description: "Osman Hamdi Bey'den Abidin Dino'ya Türk resim sanatının büyük isimleri.",
};

export default function TurkRessamlarSayfasi() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-12">
        <div className="flex items-center gap-2 text-amber-500 text-sm font-medium mb-3">
          <Link href="/" className="hover:text-amber-400">Ana Sayfa</Link>
          <span>/</span>
          <Link href="/turk-resim-sanati" className="hover:text-amber-400">Türk Resim Sanatı</Link>
          <span>/</span>
          <span>Türk Ressamlar</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          🖼️ Türk Ressamlar
        </h1>
        <p className="text-gray-400 text-lg max-w-3xl leading-relaxed">
          Osman Hamdi Bey&apos;in akademik realizmiyle başlayan yolculuk; İbrahim Çallı&apos;nın
          empresyonizmi, Bedri Rahmi&apos;nin halk sentezi ve Fikret Mualla&apos;nın Paris günleriyle devam eder.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {turkRessamlar.map((ressam) => (
          <Link
            key={ressam.slug}
            href={`/turk-ressamlar/${ressam.slug}`}
            className="group bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-amber-700/50 hover:bg-gray-800/80 transition-all duration-200 hover:scale-[1.01]"
          >
            <div className="flex items-start gap-4">
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${ressam.renk} flex items-center justify-center text-3xl flex-shrink-0`}
              >
                {ressam.emoji}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <h2 className="text-white font-bold text-xl group-hover:text-amber-400 transition-colors">
                    {ressam.ad}
                  </h2>
                  <span className="text-gray-500 text-sm whitespace-nowrap">{ressam.yasam}</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-2 mb-3">
                  <span className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded-full border border-gray-700">
                    {ressam.donem}
                  </span>
                  <span className="text-xs text-amber-400 bg-amber-900/20 px-2 py-1 rounded-full border border-amber-800/40">
                    {ressam.akım}
                  </span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">{ressam.ozet}</p>
                <div className="mt-3 text-xs text-gray-500">{ressam.eserler.length} önemli eser →</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
