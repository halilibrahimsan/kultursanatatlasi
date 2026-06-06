import { kentKultur } from "@/data/kentKultur";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin } from "lucide-react";

export async function generateStaticParams() {
  return kentKultur.map((s) => ({ sehir: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ sehir: string }> }) {
  const { sehir } = await params;
  const data = kentKultur.find((s) => s.slug === sehir);
  if (!data) return {};
  return { title: `${data.sehir} | Kültür & Sanat Atlası`, description: data.ozet };
}

export default async function KentKulturDetay({ params }: { params: Promise<{ sehir: string }> }) {
  const { sehir } = await params;
  const data = kentKultur.find((s) => s.slug === sehir);
  if (!data) notFound();
  const diger = kentKultur.filter((s) => s.slug !== sehir).slice(0, 3);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="flex items-center gap-2 text-amber-500 text-sm font-medium mb-8">
        <Link href="/" className="hover:text-amber-400">Ana Sayfa</Link>
        <span>/</span>
        <Link href="/kent-kultur" className="hover:text-amber-400">Kent & Kültür</Link>
        <span>/</span>
        <span className="text-gray-400">{data.sehir}</span>
      </div>

      {/* Hero */}
      <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 mb-8">
        <div className="flex items-start gap-6">
          <div className="text-7xl">{data.bayrak}</div>
          <div>
            <h1 className="text-4xl font-bold text-white mb-1 tracking-tight">{data.sehir}</h1>
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-3.5 h-3.5 text-amber-500" />
              <span className="text-amber-400 text-sm font-medium">{data.ulke}</span>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">{data.ozet}</p>
          </div>
        </div>
      </div>

      {/* Tarihsel Miras */}
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 mb-6">
        <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">Tarihsel Miras</h2>
        <div className="space-y-4">
          {data.tarihselMiras.split("\n\n").filter(Boolean).map((p, i) => (
            <p key={i} className="text-gray-300 leading-relaxed">{p.trim()}</p>
          ))}
        </div>
      </div>

      {/* Sanatsal Kimlik */}
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 mb-6">
        <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">Sanatsal Kimlik</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {data.sanatsalKimlik.map((oz, i) => (
            <div key={i} className="flex items-start gap-3 bg-gray-800/50 rounded-xl p-3">
              <span className="text-amber-400 mt-0.5 flex-shrink-0">▶</span>
              <span className="text-gray-300 text-sm">{oz}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Önemli Eserler */}
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 mb-6">
        <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">Önemli Eserler</h2>
        <div className="space-y-4">
          {data.onemliEserler.map((eser, i) => (
            <div key={i} className="flex items-start gap-4 border border-gray-800 rounded-xl p-5 hover:border-amber-700/40 transition-colors">
              <div className="text-2xl font-bold text-gray-700 w-7 text-center flex-shrink-0">{i + 1}</div>
              <div>
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="text-white font-semibold">{eser.baslik}</h3>
                  <div className="flex gap-2 flex-shrink-0">
                    <span className="text-xs bg-gray-800 text-gray-400 px-2 py-0.5 rounded-full border border-gray-700">{eser.tur}</span>
                    <span className="text-amber-400 text-xs">{eser.yil}</span>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{eser.aciklama}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Önemli Mekanlar */}
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 mb-6">
        <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">Kültürel Mekanlar</h2>
        <div className="flex flex-wrap gap-3">
          {data.onemliMekanlar.map((mekan, i) => (
            <div key={i} className="flex items-center gap-2 bg-gray-800/60 border border-gray-700/60 rounded-xl px-4 py-2">
              <MapPin className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
              <span className="text-gray-300 text-sm">{mekan}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Kültürel Miras */}
      <div className="bg-gradient-to-br from-amber-900/20 to-gray-900 border border-amber-800/30 rounded-2xl p-8 mb-10">
        <h2 className="text-xl font-bold text-white mb-3 tracking-tight">Kültürel Miras</h2>
        <p className="text-gray-300 leading-relaxed">{data.kulturelMiras}</p>
      </div>

      {/* Diğer Şehirler */}
      <div>
        <h2 className="text-xl font-bold text-white mb-4 tracking-tight">Diğer Şehirler</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {diger.map((s) => (
            <Link key={s.slug} href={`/kent-kultur/${s.slug}`}
              className="group bg-gray-900 border border-gray-800 rounded-xl p-4 hover:border-amber-700/40 hover:bg-gray-800 transition-all">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{s.bayrak}</span>
                <div>
                  <div className="text-white font-medium text-sm group-hover:text-amber-400 transition-colors">{s.sehir}</div>
                  <div className="text-gray-500 text-xs">{s.ulke}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
