import { sanatAkimlari } from "@/data/sanatAkimlari";
import { movementImages } from "@/data/artworkImages";
import ArtworkImage from "@/components/ArtworkImage";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return sanatAkimlari.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const akim = sanatAkimlari.find((a) => a.slug === slug);
  if (!akim) return {};
  return {
    title: `${akim.ad} | Kültür & Sanat Atlası`,
    description: akim.ozet,
  };
}

export default async function SanatAkimiDetay({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const akim = sanatAkimlari.find((a) => a.slug === slug);
  if (!akim) notFound();

  const diger = sanatAkimlari.filter((a) => a.slug !== slug).slice(0, 3);
  const movImg = movementImages[slug];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-amber-500 text-sm font-medium mb-8">
        <Link href="/" className="hover:text-amber-400">Ana Sayfa</Link>
        <span>/</span>
        <Link href="/sanat-akimlari" className="hover:text-amber-400">Sanat Akımları</Link>
        <span>/</span>
        <span className="text-gray-400">{akim.ad}</span>
      </div>

      {/* Hero */}
      <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 mb-8">
        <div className="flex items-start gap-5">
          <div
            className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${akim.renk} flex items-center justify-center text-4xl flex-shrink-0`}
          >
            {akim.emoji}
          </div>
          <div>
            <h1 className="text-4xl font-bold text-white mb-3">{akim.ad}</h1>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-gray-800 text-gray-300 text-sm px-3 py-1 rounded-full border border-gray-700">
                📅 {akim.donem}
              </span>
              <span className="bg-gray-800 text-gray-300 text-sm px-3 py-1 rounded-full border border-gray-700">
                📍 {akim.koken}
              </span>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">{akim.ozet}</p>
          </div>
        </div>
      </div>

      {/* Temsilci Eser */}
      {movImg && (
        <div className="mb-6">
          <ArtworkImage {...movImg} />
        </div>
      )}

      {/* Açıklama */}
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 mb-6">
        <h2 className="text-2xl font-bold text-white mb-6">📖 Hakkında</h2>
        <div className="space-y-4">
          {akim.aciklama.split("\n\n").filter(Boolean).map((p, i) => (
            <p key={i} className="text-gray-300 leading-relaxed">{p.trim()}</p>
          ))}
        </div>
      </div>

      {/* Özellikler */}
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 mb-6">
        <h2 className="text-2xl font-bold text-white mb-6">✨ Temel Özellikleri</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {akim.ozellikler.map((oz, i) => (
            <div key={i} className="flex items-start gap-3 bg-gray-800/50 rounded-xl p-3">
              <span className="text-amber-400 mt-0.5 flex-shrink-0">▶</span>
              <span className="text-gray-300 text-sm">{oz}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Figürler & Eserler */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-white mb-4">👨‍🎨 Önemli Sanatçılar</h2>
          <ul className="space-y-2">
            {akim.onemliFigurler.map((fig, i) => (
              <li key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                <span className="text-amber-400">•</span>
                {fig}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-white mb-4">🖼️ Önemli Eserler</h2>
          <ul className="space-y-2">
            {akim.onemlieserler.map((eser, i) => (
              <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                <span className="text-amber-400 mt-0.5">•</span>
                {eser}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Miras */}
      <div className="bg-gradient-to-br from-amber-900/20 to-gray-900 border border-amber-800/30 rounded-2xl p-8 mb-10">
        <h2 className="text-xl font-bold text-white mb-3">🏆 Mirası</h2>
        <p className="text-gray-300 leading-relaxed">{akim.mirasi}</p>
      </div>

      {/* Diğer Akımlar */}
      <div>
        <h2 className="text-xl font-bold text-white mb-4">🏛️ Diğer Sanat Akımları</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {diger.map((a) => (
            <Link
              key={a.slug}
              href={`/sanat-akimlari/${a.slug}`}
              className="group bg-gray-900 border border-gray-800 rounded-xl p-4 hover:border-amber-700/40 hover:bg-gray-800 transition-all"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{a.emoji}</span>
                <div>
                  <div className="text-white font-medium text-sm group-hover:text-amber-400 transition-colors">
                    {a.ad}
                  </div>
                  <div className="text-gray-500 text-xs">{a.donem}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
