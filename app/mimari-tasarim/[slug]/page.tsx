import { mimarlarData } from "@/data/mimarTasarim";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return mimarlarData.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const mimar = mimarlarData.find((m) => m.slug === slug);
  if (!mimar) return {};
  return { title: `${mimar.ad} | Kültür & Sanat Atlası`, description: mimar.ozet };
}

export default async function MimarDetay({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const mimar = mimarlarData.find((m) => m.slug === slug);
  if (!mimar) notFound();
  const diger = mimarlarData.filter((m) => m.slug !== slug).slice(0, 3);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="flex items-center gap-2 text-amber-500 text-sm font-medium mb-8">
        <Link href="/" className="hover:text-amber-400">Ana Sayfa</Link>
        <span>/</span>
        <Link href="/mimari-tasarim" className="hover:text-amber-400">Mimari & Tasarım</Link>
        <span>/</span>
        <span className="text-gray-400">{mimar.ad}</span>
      </div>

      {/* Hero */}
      <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 mb-8">
        <div className="flex items-start gap-6">
          <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${mimar.renk} flex items-center justify-center text-5xl flex-shrink-0`}>
            {mimar.emoji}
          </div>
          <div>
            <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">{mimar.ad}</h1>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-gray-800 text-gray-300 text-sm px-3 py-1 rounded-full border border-gray-700">📅 {mimar.yasam}</span>
              <span className="bg-gray-800 text-gray-300 text-sm px-3 py-1 rounded-full border border-gray-700">🌍 {mimar.uyruk}</span>
              <span className="bg-amber-900/30 text-amber-400 text-sm px-3 py-1 rounded-full border border-amber-800/40">{mimar.stil}</span>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">{mimar.ozet}</p>
          </div>
        </div>
      </div>

      {/* Biyografi */}
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 mb-6">
        <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">Biyografi</h2>
        <div className="space-y-4">
          {mimar.biyografi.split("\n\n").filter(Boolean).map((p, i) => (
            <p key={i} className="text-gray-300 leading-relaxed">{p.trim()}</p>
          ))}
        </div>
      </div>

      {/* Önemli Yapılar */}
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 mb-6">
        <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">Önemli Yapılar</h2>
        <div className="space-y-4">
          {mimar.onemliBinalar.map((bina, i) => (
            <div key={i} className="flex items-start gap-4 border border-gray-800 rounded-xl p-5 hover:border-amber-700/40 transition-colors">
              <div className="text-2xl font-bold text-gray-700 w-7 text-center flex-shrink-0">{i + 1}</div>
              <div>
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="text-white font-semibold">{bina.ad}</h3>
                  <span className="text-amber-400 text-sm whitespace-nowrap">{bina.yil}</span>
                </div>
                <div className="text-gray-500 text-xs mb-2">{bina.yer}</div>
                <p className="text-gray-400 text-sm leading-relaxed">{bina.aciklama}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Teknik & Miras */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-white mb-4 tracking-tight">Teknik & Üslup</h2>
          <p className="text-gray-300 leading-relaxed text-sm">{mimar.teknik}</p>
        </div>
        <div className="bg-gradient-to-br from-amber-900/20 to-gray-900 border border-amber-800/30 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-white mb-4 tracking-tight">Mirası</h2>
          <p className="text-gray-300 leading-relaxed text-sm">{mimar.miras}</p>
        </div>
      </div>

      {/* Diğer Mimarlar */}
      <div>
        <h2 className="text-xl font-bold text-white mb-4 tracking-tight">Diğer Mimarlar</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {diger.map((m) => (
            <Link key={m.slug} href={`/mimari-tasarim/${m.slug}`}
              className="group bg-gray-900 border border-gray-800 rounded-xl p-4 hover:border-amber-700/40 hover:bg-gray-800 transition-all">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{m.emoji}</span>
                <div>
                  <div className="text-white font-medium text-sm group-hover:text-amber-400 transition-colors">{m.ad}</div>
                  <div className="text-gray-500 text-xs">{m.stil}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
