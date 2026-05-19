import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div>
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <span>🎨</span> Görsel Sanatlar
            </h3>
            <ul className="space-y-2">
              <li><Link href="/resim-sanati" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">Resim Sanatı</Link></li>
              <li><Link href="/ressamlar" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">Ressamlar</Link></li>
              <li><Link href="/sanat-akimlari" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">Sanat Akımları</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <span>📚</span> Edebiyat
            </h3>
            <ul className="space-y-2">
              <li><Link href="/edebiyat" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">Edebiyat Dünyası</Link></li>
              <li><Link href="/edebiyat-akimlari" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">Edebi Akımlar</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <span>🎬</span> Sinema
            </h3>
            <ul className="space-y-2">
              <li><Link href="/sinema" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">Sinema Dünyası</Link></li>
              <li><Link href="/sinema-tarihi" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">Sinema Tarihi</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <span>🌟</span> Kültür
            </h3>
            <ul className="space-y-2">
              <li><Link href="/populer-kultur" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">Popüler Kültür</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🗺️</span>
            <div>
              <span className="text-white font-bold">Kültür & Sanat Atlası</span>
              <p className="text-gray-500 text-xs">Sanatın, edebiyatın ve sinemanın doyurucu rehberi</p>
            </div>
          </div>
          <p className="text-gray-600 text-sm">
            © 2024 Kültür & Sanat Atlası — Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
