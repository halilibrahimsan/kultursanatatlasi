import Link from "next/link";
import { heykelciData } from "@/data/heykelSanati";
import { Shapes, ChevronRight } from "lucide-react";

export const metadata = {
  title: "Heykel | Kültür & Sanat Atlası",
  description: "Michelangelo'dan Rodin'e, Brancusi'den İlhan Koman'a — heykel sanatının büyük ustaları ve kalıcı eserleri.",
};

export default function HeykelSayfasi() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-12">
        <div className="flex items-center gap-2 text-amber-500 text-sm font-medium mb-3">
          <Link href="/" className="hover:text-amber-400">Ana Sayfa</Link>
          <span>/</span>
          <span>Heykel</span>
        </div>
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 rounded-xl bg-amber-900/30 border border-amber-800/40 flex items-center justify-center flex-shrink-0 mt-1">
            <Shapes className="w-6 h-6 text-amber-400" />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Heykel</h1>
            <p className="text-gray-400 text-lg max-w-3xl leading-relaxed mt-3">
              Mermer yontmaktan bronz dökmeye, soyut biçimlerden kinetik deneylere — üç boyutlu sanatın
              insanlık tarihini şekillendiren büyük ustalarını keşfedin.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {heykelciData.map((heykelci) => (
          <Link
            key={heykelci.slug}
            href={`/heykel/${heykelci.slug}`}
            className="group bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-amber-700/50 hover:bg-gray-800/80 transition-all duration-200 hover:scale-[1.01]"
          >
            <div className="flex items-start gap-4">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${heykelci.renk} flex items-center justify-center text-3xl flex-shrink-0`}>
                {heykelci.emoji}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <h2 className="text-white font-bold text-xl group-hover:text-amber-400 transition-colors tracking-tight">
                    {heykelci.ad}
                  </h2>
                  <span className="text-gray-500 text-sm whitespace-nowrap">{heykelci.yasam}</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-2 mb-3">
                  <span className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded-full border border-gray-700">
                    {heykelci.uyruk}
                  </span>
                  <span className="bg-amber-900/30 text-amber-400 text-xs px-2 py-1 rounded-full border border-amber-800/40">
                    {heykelci.stil}
                  </span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">{heykelci.ozet}</p>
                <div className="mt-3 flex items-center gap-1 text-xs text-amber-500">
                  {heykelci.onemlieserler.length} önemli eser
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
