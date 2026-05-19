import { turkRessamlar } from "@/data/turkSanati";
import { artworkImages } from "@/data/artworkImages";
import ArtworkImage from "@/components/ArtworkImage";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return turkRessamlar.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ressam = turkRessamlar.find((r) => r.slug === slug);
  if (!ressam) return {};
  return { title: `${ressam.ad} | Kültür & Sanat Atlası`, description: ressam.ozet };
}

export default async function TurkRessamDetay({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ressam = turkRessamlar.find((r) => r.slug === slug);
  if (!ressam) notFound();
  const diger = turkRessamlar.filter((r) => r.slug !== slug).slice(0, 3);
  const images = artworkImages[slug] ?? [];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="flex items-center gap-2 text-amber-500 text-sm font-medium mb-8">
        <Link href="/" className="hover:text-amber-400">Ana Sayfa</Link>
        <span>/</span>
        <Link href="/turk-ressamlar" className="hover:text-amber-400">Türk Ressamlar</Link>
        <span>/</span>
        <span className="text-gray-400">{ressam.ad}</span>
      </div>

      <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 mb-8">
        <div className="flex items-start gap-6">
          <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${ressam.renk} flex items-center justify-center text-5xl flex-shrink-0`}>
            {ressam.emoji}
          </div>
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">{ressam.ad}</h1>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-gray-800 text-gray-300 text-sm px-3 py-1 rounded-full border border-gray-700">📅 {ressam.yasam}</span>
              <span className="bg-gray-800 text-gray-300 text-sm px-3 py-1 rounded-full border border-gray-700">🏛️ {ressam.donem}</span>
              <span className="bg-amber-900/30 text-amber-400 text-sm px-3 py-1 rounded-full border border-amber-800/40">🎨 {ressam.akım}</span>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">{ressam.ozet}</p>
          </div>
        </div>
      </div>

      {images.length > 0 && (
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 mb-6">
          <h2 className="text-2xl font-bold text-white mb-6">🖼️ Eserlerden</h2>
          <div className={`grid gap-4 ${images.length === 1 ? "grid-cols-1 max-w-md mx-auto" : images.length === 2 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"}`}>
            {images.map((img) => (
              <ArtworkImage key={img.src} {...img} />
            ))}
          </div>
        </div>
      )}

      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 mb-6">
        <h2 className="text-2xl font-bold text-white mb-6">📖 Biyografi</h2>
        <div className="space-y-4">
          {ressam.biyografi.split("\n\n").filter(Boolean).map((p, i) => (
            <p key={i} className="text-gray-300 leading-relaxed">{p.trim()}</p>
          ))}
        </div>
      </div>

      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 mb-6">
        <h2 className="text-2xl font-bold text-white mb-6">🖼️ Önemli Eserleri</h2>
        <div className="space-y-4">
          {ressam.eserler.map((eser, i) => (
            <div key={i} className="border border-gray-800 rounded-xl p-5 hover:border-amber-700/40 transition-colors">
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="text-white font-semibold text-lg">{eser.ad}</h3>
                <span className="text-amber-400 text-sm font-medium whitespace-nowrap bg-amber-900/20 px-2 py-0.5 rounded-full">{eser.yıl}</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{eser.aciklama}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-white mb-4">🖌️ Teknik &amp; Üslup</h2>
          <p className="text-gray-300 leading-relaxed text-sm">{ressam.teknik}</p>
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-white mb-4">🏆 Mirası &amp; Etkisi</h2>
          <p className="text-gray-300 leading-relaxed text-sm">{ressam.miras}</p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold text-white mb-4">🖼️ Diğer Türk Ressamlar</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {diger.map((r) => (
            <Link key={r.slug} href={`/turk-ressamlar/${r.slug}`}
              className="group bg-gray-900 border border-gray-800 rounded-xl p-4 hover:border-amber-700/40 hover:bg-gray-800 transition-all">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{r.emoji}</span>
                <div>
                  <div className="text-white font-medium text-sm group-hover:text-amber-400 transition-colors">{r.ad}</div>
                  <div className="text-gray-500 text-xs">{r.akım}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
