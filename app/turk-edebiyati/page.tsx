import Link from "next/link";
import { turkYazarlar, turkSiirDonemi } from "@/data/turkEdebiyati";

export const metadata = {
  title: "Türk Edebiyatı | Kültür & Sanat Atlası",
  description:
    "Yunus Emre'den Orhan Pamuk'a, Nazım Hikmet'ten Elif Şafak'a Türk edebiyatının büyük isimleri.",
};

export default function TurkEdebiyatiSayfasi() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="mb-12">
        <div className="flex items-center gap-2 text-amber-500 text-sm font-medium mb-3">
          <Link href="/" className="hover:text-amber-400">Ana Sayfa</Link>
          <span>/</span>
          <span>Türk Edebiyatı</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          📚 Türk Edebiyatı
        </h1>
        <p className="text-gray-400 text-lg max-w-3xl leading-relaxed">
          Yunus Emre ve Mevlânâ&apos;nın tasavvuf şiirinden Nâzım Hikmet&apos;in özgürlük çığlığına,
          Tanpınar&apos;ın hafıza dünyasından Orhan Pamuk&apos;un Nobel ödüllü evrenine uzanan büyük yolculuk.
        </p>
      </div>

      {/* Şiir Dönemleri */}
      <h2 className="text-2xl font-bold text-white mb-6">📜 Türk Edebiyatının Dönemleri</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
        {turkSiirDonemi.map((donem) => (
          <div
            key={donem.ad}
            className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-emerald-800/40 transition-colors"
          >
            <div className="text-3xl mb-3">{donem.emoji}</div>
            <h3 className="text-white font-bold text-base mb-1">{donem.ad}</h3>
            <div className="text-emerald-400 text-xs mb-3 font-medium">{donem.donem}</div>
            <p className="text-gray-400 text-xs leading-relaxed">{donem.ozet}</p>
          </div>
        ))}
      </div>

      {/* Büyük Yazarlar */}
      <h2 className="text-2xl font-bold text-white mb-6">✍️ Önemli Türk Yazar ve Şairler</h2>
      <div className="space-y-5 mb-12">
        {turkYazarlar.map((yazar) => (
          <div
            key={yazar.slug}
            className="bg-gray-900 border border-gray-800 rounded-2xl p-7 hover:border-emerald-800/40 transition-colors"
          >
            <div className="flex items-start gap-5">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${yazar.renk} flex items-center justify-center text-3xl flex-shrink-0`}>
                {yazar.emoji}
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-white font-bold text-xl">{yazar.ad}</h3>
                  <span className="text-gray-500 text-sm whitespace-nowrap">{yazar.yasam}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="text-xs text-gray-400 bg-gray-800 px-2 py-0.5 rounded-full border border-gray-700">
                    {yazar.tur}
                  </span>
                  <span className="text-xs text-gray-400 bg-gray-800 px-2 py-0.5 rounded-full border border-gray-700">
                    {yazar.donem}
                  </span>
                  <span className="text-xs text-emerald-400 bg-emerald-900/20 px-2 py-0.5 rounded-full border border-emerald-800/40">
                    {yazar.akım}
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-300 text-sm leading-relaxed mb-3">
                      {yazar.biyografi.split("\n\n")[0]?.trim()}
                    </p>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-2 font-medium">ÖNEMLI ESERLERİ</div>
                    <ul className="space-y-1">
                      {yazar.eserler.slice(0, 3).map((eser) => (
                        <li key={eser.ad} className="text-gray-400 text-xs flex items-start gap-2">
                          <span className="text-emerald-400 mt-0.5">▶</span>
                          <span><span className="text-gray-300 font-medium">{eser.ad}</span> ({eser.yıl})</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-4 bg-emerald-900/10 border border-emerald-800/30 rounded-xl p-3">
                  <span className="text-emerald-400 text-xs font-semibold">🏆 Mirası: </span>
                  <span className="text-gray-400 text-xs">{yazar.mirasi}</span>
                </div>
              </div>
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
          ✍️ Dünya Edebiyat Akımları
        </Link>
        <Link
          href="/turk-sinemasi"
          className="bg-gray-800 hover:bg-gray-700 text-white font-semibold px-6 py-4 rounded-xl text-center border border-gray-700 transition-all hover:scale-[1.02]"
        >
          🎬 Türk Sinemasına Git
        </Link>
      </div>
    </div>
  );
}
