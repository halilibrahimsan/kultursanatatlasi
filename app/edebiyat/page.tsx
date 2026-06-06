import Link from "next/link";
import { onluyazarlar } from "@/data/edebiyat";

export const metadata = {
  title: "Edebiyat | Kültür & Sanat Atlası",
  description:
    "Dünya edebiyatının büyük yazarları, Nobel ödüllüler ve temel eserler hakkında kapsamlı bilgi.",
};

const edebiyatBolum = [
  {
    baslik: "Roman Nedir?",
    icerik:
      "Roman, 17. yüzyılda Avrupa'da ortaya çıkan uzun kurmaca anlatı biçimidir. Miguel de Cervantes'in 'Don Kişot'u (1605) ilk modern roman olarak kabul edilir. Roman, insanın iç dünyasını, toplumsal çelişkileri ve varoluşsal soruları kısa hikâyenin sınırlarını aşarak derinlemesine araştırma olanağı sunar. 400 yılda roman, en demokratik, en erişilebilir ve en dönüştürücü edebi biçim haline geldi.",
    emoji: "📖",
  },
  {
    baslik: "Şiirin Gücü",
    icerik:
      "Şiir, insanlığın en eski edebi biçimidir; Sümer'in Gılgameş Destanı'ndan Homer'in İlyada'sına, Yunus Emre'den Nazım Hikmet'e uzanır. Şiir, dilin en yoğunlaştırılmış, en müziksel halidir: ritim, kafiye, ses tekrarları ve imge yüklü dil anlama ek bir boyut katar. Şiirde 'ne söylendiği' kadar 'nasıl söylendiği' de anlam üretir. Serbest şiir, sonnet, haiku, kaside, gazel — her biçim farklı kültürlerin ve dönemlerin şiirsel zekâsını taşır.",
    emoji: "🌸",
  },
  {
    baslik: "Nobel Edebiyat Ödülü",
    icerik:
      "1901'den bu yana İsveç Akademisi tarafından her yıl verilen Nobel Edebiyat Ödülü, edebi üretkenliğin en prestijli uluslararası tanınması. Rudyard Kipling'den (1907) Olga Tokarczuk'a (2018), ödül zaman zaman tartışmalı seçimleriyle kamuoyunu meşgul etse de dünya edebiyatına küresel bir mercek tutmaya devam ediyor. Türkiye'den tek Nobel sahibi Orhan Pamuk'tur (2006).",
    emoji: "🏅",
  },
  {
    baslik: "Sözlü Gelenekten Dijital Çağa",
    icerik:
      "Yazı öncesi toplumlar destanlarını, mitlerini ve hikâyelerini kuşaktan kuşağa sözlü aktarıyordu: Yunan aoidler, Türk ozanlar, Afrikalı griotlar. Gutenberg'in matbaa icadı (1440) kitabı çoğaltarak edebiyatı demokratikleştirdi; sessiz, bireysel okuma alışkanlığı doğdu. Dijital çağda e-kitap, sesli kitap, blog ve sosyal medya edebiyatın biçimlerini ve tüketim pratiklerini yeniden şekillendiriyor. Yine de roman — ağır, uzun ve dikkat isteyen — direniyor.",
    emoji: "📱",
  },
];

export default function EdebiyatSayfasi() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Başlık */}
      <div className="mb-12">
        <div className="flex items-center gap-2 text-amber-500 text-sm font-medium mb-3">
          <Link href="/" className="hover:text-amber-400">Ana Sayfa</Link>
          <span>/</span>
          <span>Edebiyat</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          📚 Edebiyat Dünyası
        </h1>
        <p className="text-gray-400 text-lg max-w-3xl leading-relaxed">
          Dünyanın dört bir yanından büyük yazarlar, evrensel eserler ve edebiyatın
          insanlık tarihindeki derin rolü.
        </p>
      </div>

      {/* Bölümler */}
      <div className="space-y-6 mb-16">
        {edebiyatBolum.map((b, i) => (
          <div
            key={i}
            className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-emerald-800/40 transition-colors"
          >
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="text-3xl">{b.emoji}</span>
              {b.baslik}
            </h2>
            <p className="text-gray-300 leading-relaxed">{b.icerik}</p>
          </div>
        ))}
      </div>

      {/* Büyük Yazarlar */}
      <h2 className="text-2xl font-bold text-white mb-6">✍️ Büyük Yazarlar</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
        {onluyazarlar.map((yazar) => (
          <div
            key={yazar.ad}
            className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-emerald-800/40 transition-colors"
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="text-white font-bold text-lg">{yazar.ad}</h3>
              <span className="text-gray-500 text-xs whitespace-nowrap mt-1">
                {yazar.yasam}
              </span>
            </div>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="text-xs text-gray-400 bg-gray-800 px-2 py-0.5 rounded-full border border-gray-700">
                {yazar.uyruk}
              </span>
              <span className="text-xs text-emerald-400 bg-emerald-900/20 px-2 py-0.5 rounded-full border border-emerald-800/40">
                {yazar.akım}
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-3 leading-relaxed">{yazar.kisa}</p>
            <div className="text-xs text-gray-600">
              {yazar.onemlieserleri.join(" · ")}
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link
          href="/edebiyat-akimlari"
          className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-6 py-4 rounded-xl text-center transition-all hover:scale-[1.02]"
        >
          ✍️ Edebiyat Akımlarını Keşfet
        </Link>
        <Link
          href="/populer-kultur"
          className="bg-gray-800 hover:bg-gray-700 text-white font-semibold px-6 py-4 rounded-xl text-center border border-gray-700 transition-all hover:scale-[1.02]"
        >
          🌟 Popüler Kültüre Bak
        </Link>
      </div>
    </div>
  );
}
