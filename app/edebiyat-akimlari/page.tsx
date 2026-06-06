import Link from "next/link";
import { edebiyatAkimlari } from "@/data/edebiyat";

export const metadata = {
  title: "Edebiyat Akımları | Kültür & Sanat Atlası",
  description:
    "Romantizm'den Postmodernizm'e, edebiyatın büyük düşünce hareketleri ve temsilcileri.",
};

export default function EdebiyatAkimlariSayfasi() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-12">
        <div className="flex items-center gap-2 text-amber-500 text-sm font-medium mb-3">
          <Link href="/" className="hover:text-amber-400">Ana Sayfa</Link>
          <span>/</span>
          <span>Edebiyat Akımları</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          ✍️ Edebiyat Akımları
        </h1>
        <p className="text-gray-400 text-lg max-w-3xl leading-relaxed">
          Romantizm&apos;den Sihirli Realizm&apos;e, edebiyatın büyük düşünce hareketleri;
          temsilcileri, özellikleri ve mirası.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {edebiyatAkimlari.map((akim) => (
          <Link
            key={akim.slug}
            href={`/edebiyat-akimlari/${akim.slug}`}
            className="group relative overflow-hidden bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-rose-700/40 hover:bg-gray-800/80 transition-all duration-200 hover:scale-[1.01]"
          >
            <div
              className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${akim.renk} opacity-15 rounded-bl-3xl`}
            />
            <div className="text-4xl mb-4">{akim.emoji}</div>
            <h2 className="text-white font-bold text-xl mb-1 group-hover:text-rose-400 transition-colors">
              {akim.ad}
            </h2>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="text-xs text-gray-500 bg-gray-800 px-2 py-0.5 rounded-full border border-gray-700">
                {akim.donem}
              </span>
              <span className="text-xs text-gray-500 bg-gray-800 px-2 py-0.5 rounded-full border border-gray-700">
                {akim.koken}
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
              {akim.ozet}
            </p>
            <div className="mt-4 text-xs text-rose-400 flex items-center gap-1">
              {akim.onemliFigurler.length} önemli yazar →
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
