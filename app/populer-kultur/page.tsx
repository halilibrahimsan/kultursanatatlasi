import Link from "next/link";
import { populerKultur } from "@/data/sinema";

export const metadata = {
  title: "Popüler Kültür | Kültür & Sanat Atlası",
  description:
    "Rock'n'roll'dan anime'ye, hip-hop'tan internet kültürüne modern zamanların kültürel dönüm noktaları.",
};

const kategoriler = [
  { ad: "Müzik", emoji: "🎵", renk: "bg-pink-900/20 border-pink-800/30" },
  { ad: "Teknoloji / Kültür", emoji: "💻", renk: "bg-blue-900/20 border-blue-800/30" },
  { ad: "Sinema / Popüler Kültür", emoji: "🎬", renk: "bg-violet-900/20 border-violet-800/30" },
  { ad: "Animasyon / Kültür", emoji: "⛩️", renk: "bg-red-900/20 border-red-800/30" },
  { ad: "Toplumsal Hareket / Kültür", emoji: "✊", renk: "bg-emerald-900/20 border-emerald-800/30" },
  { ad: "Medya / Kültür", emoji: "📺", renk: "bg-amber-900/20 border-amber-800/30" },
  { ad: "Müzik / Kültür", emoji: "🎤", renk: "bg-pink-900/20 border-pink-800/30" },
];

const katRenk: Record<string, string> = {
  "Müzik": "bg-pink-900/20 border-pink-800/30",
  "Müzik / Kültür": "bg-pink-900/20 border-pink-800/30",
  "Teknoloji / Kültür": "bg-blue-900/20 border-blue-800/30",
  "Sinema / Popüler Kültür": "bg-violet-900/20 border-violet-800/30",
  "Animasyon / Kültür": "bg-red-900/20 border-red-800/30",
  "Toplumsal Hareket / Kültür": "bg-emerald-900/20 border-emerald-800/30",
  "Medya / Kültür": "bg-amber-900/20 border-amber-800/30",
};

export default function PopulerKulturSayfasi() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Başlık */}
      <div className="mb-12">
        <div className="flex items-center gap-2 text-amber-500 text-sm font-medium mb-3">
          <Link href="/" className="hover:text-amber-400">Ana Sayfa</Link>
          <span>/</span>
          <span>Popüler Kültür</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          🌟 Popüler Kültür
        </h1>
        <p className="text-gray-400 text-lg max-w-3xl leading-relaxed">
          Rock&apos;n&apos;roll&apos;dan anime&apos;ye, internet kültüründen hip-hop&apos;a — modern zamanların
          kültürel dönüm noktaları ve toplumsal dönüşümleri.
        </p>
      </div>

      {/* Giriş */}
      <div className="bg-gradient-to-br from-fuchsia-900/20 via-gray-900 to-gray-900 border border-fuchsia-800/30 rounded-2xl p-8 mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">🎭 Popüler Kültür Nedir?</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Popüler kültür, belirli bir dönemde geniş kitleler tarafından paylaşılan fikir, görüntü, tutum ve
          fenomenler bütünüdür. &quot;Yüksek sanat&quot;ın elitist sınırlarının dışında kalan müzik, sinema, televizyon,
          moda, oyun ve internet kültürü bu başlık altında incelenir.
        </p>
        <p className="text-gray-300 leading-relaxed">
          Popüler kültür, toplumsal değişimin hem aynası hem de motoru olabilir: Elvis Presley ırk ayrımı
          döneminde Siyah müziği beyaz gençlere taşırken, #MeToo hareketi bir sosyal medya hashtag&apos;inden
          küresel bir dönüşüme dönüştü. Bugün meme&apos;ler siyasi tartışmayı, algoritma kültürel tüketimi şekillendiriyor.
        </p>
      </div>

      {/* Fenomenler */}
      <h2 className="text-2xl font-bold text-white mb-6">🔥 Önemli Kültürel Fenomenler</h2>
      <div className="space-y-5 mb-12">
        {populerKultur.map((item) => {
          const renkSinif = katRenk[item.kategori] || "bg-gray-900/20 border-gray-800/30";
          return (
            <div
              key={item.baslik}
              className={`bg-gray-900 border ${renkSinif.includes("border") ? renkSinif.split(" ")[1] : "border-gray-800"} rounded-2xl p-6 hover:bg-gray-800/60 transition-colors`}
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl flex-shrink-0">{item.emoji}</div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-white font-bold text-xl">{item.baslik}</h3>
                    <div className="flex flex-col items-end gap-1 flex-shrink-0">
                      <span className="text-xs text-gray-400 bg-gray-800 px-2 py-0.5 rounded-full border border-gray-700">
                        {item.donem}
                      </span>
                      <span className="text-xs text-fuchsia-400 bg-fuchsia-900/20 px-2 py-0.5 rounded-full border border-fuchsia-800/40">
                        {item.kategori}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-3 text-sm">{item.aciklama}</p>
                  <div className="bg-gray-800/50 rounded-xl p-3">
                    <span className="text-amber-400 text-xs font-semibold">💡 Neden Önemli? </span>
                    <span className="text-gray-400 text-xs leading-relaxed">{item.onemi}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bağlantılı Kategoriler */}
      <h2 className="text-2xl font-bold text-white mb-6">🔗 Daha Fazla Keşfet</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[
          { href: "/sinema", label: "Sinema", emoji: "🎬" },
          { href: "/sinema-tarihi", label: "Sinema Tarihi", emoji: "🎞️" },
          { href: "/edebiyat", label: "Edebiyat", emoji: "📚" },
          { href: "/ressamlar", label: "Ressamlar", emoji: "👨‍🎨" },
          { href: "/sanat-akimlari", label: "Sanat Akımları", emoji: "🏛️" },
          { href: "/edebiyat-akimlari", label: "Edebiyat Akımları", emoji: "✍️" },
        ].map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group bg-gray-900 border border-gray-800 rounded-xl p-4 hover:border-fuchsia-700/40 hover:bg-gray-800 transition-all flex items-center gap-3"
          >
            <span className="text-2xl">{link.emoji}</span>
            <span className="text-white font-medium text-sm group-hover:text-fuchsia-400 transition-colors">
              {link.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
