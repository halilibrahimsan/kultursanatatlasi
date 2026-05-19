import { dunyaSinemasi } from "@/data/dunyaSinemasi";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return dunyaSinemasi.map((u) => ({ ulke: u.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ ulke: string }> }) {
  const { ulke } = await params;
  const data = dunyaSinemasi.find((u) => u.slug === ulke);
  if (!data) return {};
  return { title: `${data.ulke} | Kültür & Sanat Atlası`, description: data.ozet };
}

export default async function DunyaSinemaDetay({ params }: { params: Promise<{ ulke: string }> }) {
  const { ulke } = await params;
  const data = dunyaSinemasi.find((u) => u.slug === ulke);
  if (!data) notFound();
  const diger = dunyaSinemasi.filter((u) => u.slug !== ulke).slice(0, 3);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="flex items-center gap-2 text-amber-500 text-sm font-medium mb-8">
        <Link href="/" className="hover:text-amber-400">Ana Sayfa</Link>
        <span>/</span>
        <Link href="/dunya-sinemasi" className="hover:text-amber-400">Dünya Sineması</Link>
        <span>/</span>
        <span className="text-gray-400">{data.ulke}</span>
      </div>

      {/* Hero */}
      <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 mb-8">
        <div className="flex items-start gap-6">
          <div className="text-7xl">{data.bayrak}</div>
          <div>
            <h1 className="text-4xl font-bold text-white mb-3">{data.ulke}</h1>
            <p className="text-gray-300 text-lg leading-relaxed">{data.ozet}</p>
          </div>
        </div>
      </div>

      {/* Tarih */}
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 mb-6">
        <h2 className="text-2xl font-bold text-white mb-4">📜 Tarihçe</h2>
        <p className="text-gray-300 leading-relaxed">{data.tarih}</p>
      </div>

      {/* Özellikler */}
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 mb-6">
        <h2 className="text-2xl font-bold text-white mb-6">✨ Temel Özellikleri</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {data.ozellikler.map((oz, i) => (
            <div key={i} className="flex items-start gap-3 bg-gray-800/50 rounded-xl p-3">
              <span className="text-amber-400 mt-0.5 flex-shrink-0">▶</span>
              <span className="text-gray-300 text-sm">{oz}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Yönetmenler */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white mb-6">🎬 Önemli Yönetmenler</h2>
        <div className="space-y-6">
          {data.onemliYonetmenler.map((yon) => (
            <div key={yon.ad} className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-amber-700/40 transition-colors">
              <div className="flex items-start justify-between gap-2 mb-3">
                <h3 className="text-white font-bold text-xl">{yon.ad}</h3>
                <span className="text-gray-500 text-sm whitespace-nowrap">{yon.yasam}</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">{yon.ozet}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <div className="text-xs text-gray-600 mb-2 font-medium">FİLMLER</div>
                  <div className="flex flex-wrap gap-1">
                    {yon.filmler.map((f) => (
                      <span key={f} className="text-xs bg-gray-800 text-gray-400 px-2 py-0.5 rounded-full border border-gray-700">{f}</span>
                    ))}
                  </div>
                </div>
                {yon.oduller && (
                  <div className="bg-amber-900/20 border border-amber-800/30 rounded-xl p-3">
                    <span className="text-amber-400 text-xs font-semibold">🏆 </span>
                    <span className="text-gray-400 text-xs">{yon.oduller}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Önemli Filmler */}
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 mb-6">
        <h2 className="text-2xl font-bold text-white mb-6">🎞️ Önemli Filmler</h2>
        <div className="space-y-4">
          {data.onemliFilmler.map((film, i) => (
            <div key={film.ad} className="flex items-start gap-4 border border-gray-800 rounded-xl p-5 hover:border-amber-700/40 transition-colors">
              <div className="text-2xl font-bold text-gray-700 w-8 text-center flex-shrink-0">{i + 1}</div>
              <div>
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="text-white font-semibold text-lg">{film.ad}</h3>
                  <span className="text-amber-400 text-sm whitespace-nowrap">{film.yil}</span>
                </div>
                <div className="text-gray-500 text-xs mb-2">Yön: {film.yonetmen}</div>
                <p className="text-gray-400 text-sm leading-relaxed">{film.aciklama}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Miras */}
      <div className="bg-gradient-to-br from-violet-900/20 to-gray-900 border border-violet-800/30 rounded-2xl p-8 mb-10">
        <h2 className="text-xl font-bold text-white mb-3">🌟 Mirası</h2>
        <p className="text-gray-300 leading-relaxed">{data.mirasi}</p>
      </div>

      {/* Diğer */}
      <div>
        <h2 className="text-xl font-bold text-white mb-4">🌍 Diğer Ülke Sinemaları</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {diger.map((u) => (
            <Link key={u.slug} href={`/dunya-sinemasi/${u.slug}`}
              className="group bg-gray-900 border border-gray-800 rounded-xl p-4 hover:border-amber-700/40 hover:bg-gray-800 transition-all">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{u.bayrak}</span>
                <div>
                  <div className="text-white font-medium text-sm group-hover:text-amber-400 transition-colors">{u.ulke}</div>
                  <div className="text-gray-500 text-xs">{u.onemliYonetmenler.length} yönetmen</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
