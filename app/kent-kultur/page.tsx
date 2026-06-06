import Link from "next/link";
import { kentKultur } from "@/data/kentKultur";
import { MapPin, ChevronRight } from "lucide-react";

export const metadata = {
  title: "Kent & Kültür | Kültür & Sanat Atlası",
  description: "İstanbul'dan Paris'e, Tokyo'dan New York'a — şehirlerin sanatsal kimlikleri, kültürel mirası ve yaratıcı enerjisi.",
};

export default function KentKulturSayfasi() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-12">
        <div className="flex items-center gap-2 text-amber-500 text-sm font-medium mb-3">
          <Link href="/" className="hover:text-amber-400">Ana Sayfa</Link>
          <span>/</span>
          <span>Kent & Kültür</span>
        </div>
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 rounded-xl bg-amber-900/30 border border-amber-800/40 flex items-center justify-center flex-shrink-0 mt-1">
            <MapPin className="w-6 h-6 text-amber-400" />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Kent & Kültür
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl leading-relaxed mt-3">
              Her büyük şehir bir sanat manifestosudur — İstanbul&apos;un katmanlı tarihi, Paris&apos;in empresyonizmi,
              Tokyo&apos;nun estetik devrimleri, New York&apos;un soyut enerjisi ve Viyana&apos;nın müzikal mirası.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {kentKultur.map((sehir) => (
          <Link
            key={sehir.slug}
            href={`/kent-kultur/${sehir.slug}`}
            className="group relative overflow-hidden bg-gray-900 border border-gray-800 rounded-2xl p-7 hover:border-amber-700/40 hover:bg-gray-800/60 transition-all hover:scale-[1.01]"
          >
            <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${sehir.renk} opacity-10 rounded-bl-3xl`} />
            <div className="text-5xl mb-4">{sehir.bayrak}</div>
            <h2 className="text-white font-bold text-xl mb-1 group-hover:text-amber-400 transition-colors tracking-tight">
              {sehir.sehir}
            </h2>
            <p className="text-amber-500/70 text-sm font-medium mb-3">{sehir.ulke}</p>
            <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-5">
              {sehir.ozet}
            </p>
            <div className="flex items-center gap-1 text-amber-500 text-sm font-medium">
              Keşfet
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link href="/sinema"
          className="bg-violet-600 hover:bg-violet-500 text-white font-semibold px-6 py-4 rounded-xl text-center transition-all hover:scale-[1.02]">
          Sinema Dünyasına Git
        </Link>
        <Link href="/edebiyat"
          className="bg-gray-800 hover:bg-gray-700 text-white font-semibold px-6 py-4 rounded-xl text-center border border-gray-700 transition-all hover:scale-[1.02]">
          Dünya Edebiyatına Bak
        </Link>
      </div>
    </div>
  );
}
