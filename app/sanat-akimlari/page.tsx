import Link from "next/link";
import { sanatAkimlari } from "@/data/sanatAkimlari";
import Timeline from "@/components/Timeline";
import type { TimelineItem } from "@/components/Timeline";

const sanatTimeline: TimelineItem[] = [
  { yil: "15. yy", baslik: "Yüksek Rönesans", aciklama: "Da Vinci, Raphael" },
  { yil: "17. yy", baslik: "Barok", aciklama: "Rembrandt, Caravaggio" },
  { yil: "18. yy", baslik: "Neoklasizm", aciklama: "David, Canova" },
  { yil: "1860", baslik: "Empresyonizm", aciklama: "Monet, Renoir" },
  { yil: "1900", baslik: "Ekspresyonizm", aciklama: "Munch, Kirchner" },
  { yil: "1907", baslik: "Kübizm", aciklama: "Picasso, Braque" },
  { yil: "1924", baslik: "Sürrealizm", aciklama: "Dalí, Ernst" },
  { yil: "1950", baslik: "Pop Art", aciklama: "Warhol, Lichtenstein" },
  { yil: "1960+", baslik: "Minimalizm", aciklama: "Judd, Andre" },
];

export const metadata = {
  title: "Sanat Akımları | Kültür & Sanat Atlası",
  description:
    "Rönesans'tan Minimalizme, sanat tarihinin her büyük akımı ve dönüşüm noktası.",
};

export default function SanatAkimlariSayfasi() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-12">
        <div className="flex items-center gap-2 text-amber-500 text-sm font-medium mb-3">
          <Link href="/" className="hover:text-amber-400">Ana Sayfa</Link>
          <span>/</span>
          <span>Sanat Akımları</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          🏛️ Sanat Akımları
        </h1>
        <p className="text-gray-400 text-lg max-w-3xl leading-relaxed">
          Rönesans&apos;tan Pop Art&apos;a, Empresyonizm&apos;den Minimalizm&apos;e — sanat tarihinin
          büyük dönüşüm noktalarını, temsilcilerini ve miraslarını keşfedin.
        </p>
      </div>

      <Timeline items={sanatTimeline} accent="amber" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sanatAkimlari.map((akim) => (
          <Link
            key={akim.slug}
            href={`/sanat-akimlari/${akim.slug}`}
            className="group relative overflow-hidden bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-amber-700/40 hover:bg-gray-800/80 transition-all duration-200 hover:scale-[1.01]"
          >
            <div
              className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${akim.renk} opacity-15 rounded-bl-3xl`}
            />
            <div className="text-4xl mb-4">{akim.emoji}</div>
            <h2 className="text-white font-bold text-xl mb-1 group-hover:text-amber-400 transition-colors">
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
            <div className="mt-4 text-xs text-amber-500 flex items-center gap-1">
              {akim.onemliFigurler.length} önemli sanatçı →
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
