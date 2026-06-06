import Link from "next/link";
import { mimarlarData } from "@/data/mimarTasarim";
import { Building2, ChevronRight } from "lucide-react";

export const metadata = {
  title: "Mimari & Tasarım | Kültür & Sanat Atlası",
  description: "Le Corbusier'den Mimar Sinan'a, Zaha Hadid'den Frank Lloyd Wright'a — mimarinin büyük ustaları ve insanlığın en kalıcı eserleri.",
};

export default function MimariTasarimSayfasi() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-12">
        <div className="flex items-center gap-2 text-amber-500 text-sm font-medium mb-3">
          <Link href="/" className="hover:text-amber-400">Ana Sayfa</Link>
          <span>/</span>
          <span>Mimari & Tasarım</span>
        </div>
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 rounded-xl bg-amber-900/30 border border-amber-800/40 flex items-center justify-center flex-shrink-0 mt-1">
            <Building2 className="w-6 h-6 text-amber-400" />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Mimari & Tasarım
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl leading-relaxed mt-3">
              Yapılar sadece barınak değil; çağının felsefesini, toplumsal değerlerini ve estetik anlayışını
              taşan en büyük sanat eserleridir. Tarihte iz bırakan mimarların yaşamları ve şaheserleri.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mimarlarData.map((mimar) => (
          <Link
            key={mimar.slug}
            href={`/mimari-tasarim/${mimar.slug}`}
            className="group bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-amber-700/50 hover:bg-gray-800/80 transition-all duration-200 hover:scale-[1.01]"
          >
            <div className="flex items-start gap-4">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${mimar.renk} flex items-center justify-center text-3xl flex-shrink-0`}>
                {mimar.emoji}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <h2 className="text-white font-bold text-xl group-hover:text-amber-400 transition-colors tracking-tight">
                    {mimar.ad}
                  </h2>
                  <span className="text-gray-500 text-sm whitespace-nowrap">{mimar.yasam}</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-2 mb-3">
                  <span className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded-full border border-gray-700">
                    {mimar.uyruk}
                  </span>
                  <span className="bg-amber-900/30 text-amber-400 text-xs px-2 py-1 rounded-full border border-amber-800/40">
                    {mimar.stil}
                  </span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">{mimar.ozet}</p>
                <div className="mt-3 flex items-center gap-1 text-xs text-amber-500">
                  {mimar.onemliBinalar.length} önemli yapı
                  <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
