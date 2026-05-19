import { gelenekselSanatlar } from "@/data/gelenekselSanatlar";
import { gelenekselImages } from "@/data/artworkImages";
import ArtworkImage from "@/components/ArtworkImage";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return gelenekselSanatlar.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const sanat = gelenekselSanatlar.find((s) => s.slug === slug);
  if (!sanat) return {};
  return { title: `${sanat.ad} | Kültür & Sanat Atlası`, description: sanat.ozet };
}

export default async function GelenekselSanatDetay({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const sanat = gelenekselSanatlar.find((s) => s.slug === slug);
  if (!sanat) notFound();
  const diger = gelenekselSanatlar.filter((s) => s.slug !== slug).slice(0, 3);
  const sanImg = gelenekselImages[slug];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="flex items-center gap-2 text-amber-500 text-sm font-medium mb-8">
        <Link href="/" className="hover:text-amber-400">Ana Sayfa</Link>
        <span>/</span>
        <Link href="/geleneksel-sanatlar" className="hover:text-amber-400">Geleneksel Sanatlar</Link>
        <span>/</span>
        <span className="text-gray-400">{sanat.ad}</span>
      </div>

      {/* Hero */}
      <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 mb-8">
        <div className="flex items-start gap-6">
          <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${sanat.renk} flex items-center justify-center text-5xl flex-shrink-0`}>
            {sanat.emoji}
          </div>
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">{sanat.ad}</h1>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-amber-900/30 text-amber-400 text-sm px-3 py-1 rounded-full border border-amber-800/40">
                {sanat.tanim}
              </span>
              <span className="bg-gray-800 text-gray-300 text-sm px-3 py-1 rounded-full border border-gray-700">
                📅 {sanat.tarih}
              </span>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">{sanat.ozet}</p>
          </div>
        </div>
      </div>

      {/* Temsilci Görsel */}
      {sanImg && (
        <div className="mb-6">
          <ArtworkImage {...sanImg} />
        </div>
      )}

      {/* Açıklama */}
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 mb-6">
        <h2 className="text-2xl font-bold text-white mb-6">📖 Hakkında</h2>
        <div className="space-y-4">
          {sanat.aciklama.split("\n\n").filter(Boolean).map((p, i) => (
            <p key={i} className="text-gray-300 leading-relaxed">{p.trim()}</p>
          ))}
        </div>
      </div>

      {/* Malzeme */}
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 mb-6">
        <h2 className="text-2xl font-bold text-white mb-6">🛠️ Kullanılan Malzemeler</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {sanat.malzeme.map((m, i) => (
            <div key={i} className="flex items-center gap-3 bg-gray-800/50 rounded-xl p-3">
              <span className="text-amber-400">✦</span>
              <span className="text-gray-300 text-sm">{m}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Büyük Ustalar */}
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 mb-6">
        <h2 className="text-2xl font-bold text-white mb-6">🏆 Büyük Ustalar</h2>
        <div className="space-y-5">
          {sanat.onemliUstalar.map((usta, i) => (
            <div key={i} className="border border-gray-800 rounded-xl p-5 hover:border-amber-700/40 transition-colors">
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="text-white font-bold text-lg">{usta.ad}</h3>
                <span className="text-amber-400 text-sm bg-amber-900/20 px-2 py-0.5 rounded-full border border-amber-800/40 whitespace-nowrap">
                  {usta.yasam}
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{usta.kisa}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bugün */}
      <div className="bg-gradient-to-br from-amber-900/20 to-gray-900 border border-amber-800/30 rounded-2xl p-8 mb-10">
        <h2 className="text-xl font-bold text-white mb-3">🌐 Bugün</h2>
        <p className="text-gray-300 leading-relaxed">{sanat.bugun}</p>
      </div>

      {/* Diğer Sanatlar */}
      <div>
        <h2 className="text-xl font-bold text-white mb-4">🏺 Diğer Geleneksel Sanatlar</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {diger.map((s) => (
            <Link key={s.slug} href={`/geleneksel-sanatlar/${s.slug}`}
              className="group bg-gray-900 border border-gray-800 rounded-xl p-4 hover:border-amber-700/40 hover:bg-gray-800 transition-all">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{s.emoji}</span>
                <div>
                  <div className="text-white font-medium text-sm group-hover:text-amber-400 transition-colors">{s.ad}</div>
                  <div className="text-gray-500 text-xs">{s.tanim}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
