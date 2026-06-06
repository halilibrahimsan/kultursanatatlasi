import Link from "next/link";
import Image from "next/image";
import { ressamlar } from "@/data/ressamlar";
import { artworkImages } from "@/data/artworkImages";

export const metadata = {
  title: "Ressamlar | Kültür & Sanat Atlası",
  description:
    "Da Vinci'den Warhol'a, tarihte iz bırakan büyük ressamların biyografileri ve eserleri.",
};

export default function RessamlarSayfasi() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-12">
        <div className="flex items-center gap-2 text-amber-500 text-sm font-medium mb-3">
          <Link href="/" className="hover:text-amber-400">Ana Sayfa</Link>
          <span>/</span>
          <span>Ressamlar</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          👨‍🎨 Büyük Ressamlar
        </h1>
        <p className="text-gray-400 text-lg max-w-3xl leading-relaxed">
          Leonardo da Vinci&apos;den Andy Warhol&apos;a, insanlık tarihinin en etkili
          ressamlarının biyografileri, başyapıtları ve sanat dünyasına katkıları.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ressamlar.map((ressam) => {
          const firstImg = artworkImages[ressam.slug]?.[0];
          return (
            <Link
              key={ressam.slug}
              href={`/ressamlar/${ressam.slug}`}
              className="group bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-amber-700/50 hover:bg-gray-800/80 transition-all duration-200 hover:scale-[1.01]"
            >
              {firstImg && (
                <div className="relative w-full h-44 overflow-hidden">
                  <Image
                    src={firstImg.src}
                    alt={firstImg.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                </div>
              )}
              <div className="p-6">
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
                      <span className="text-gray-500 text-sm whitespace-nowrap">
                        {ressam.yasam}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2 mb-3">
                      <span className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded-full border border-gray-700">
                        {ressam.uyruk}
                      </span>
                      <span className="bg-amber-900/30 text-amber-400 text-xs px-2 py-1 rounded-full border border-amber-800/40">
                        {ressam.akım}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                      {ressam.ozet}
                    </p>
                    <div className="mt-3 text-xs text-gray-500">
                      {ressam.eserler.length} önemli eser →
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
