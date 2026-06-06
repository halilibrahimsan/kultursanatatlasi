import Link from "next/link";
import {
  Map, Palette, Brush, Landmark, BookOpen, PenLine, Film, Video, Globe,
  Sparkles, MapPin, Building2, Gem, Mail,
} from "lucide-react";
import NewsletterForm from "@/components/NewsletterForm";

const footerKolonlar = [
  {
    baslik: "Görsel Sanatlar",
    icon: Palette,
    linkler: [
      { href: "/resim-sanati",        label: "Resim Sanatı",       icon: Palette },
      { href: "/ressamlar",           label: "Ressamlar",           icon: Brush },
      { href: "/sanat-akimlari",      label: "Sanat Akımları",      icon: Landmark },
      { href: "/geleneksel-sanatlar", label: "Geleneksel Sanatlar", icon: Gem },
      { href: "/mimari-tasarim",      label: "Mimari & Tasarım",    icon: Building2 },
    ],
  },
  {
    baslik: "Edebiyat",
    icon: BookOpen,
    linkler: [
      { href: "/edebiyat",          label: "Dünya Edebiyatı",  icon: BookOpen },
      { href: "/edebiyat-akimlari", label: "Edebi Akımlar",    icon: PenLine },
      { href: "/turk-edebiyati",    label: "Türk Edebiyatı",   icon: BookOpen },
    ],
  },
  {
    baslik: "Sinema",
    icon: Film,
    linkler: [
      { href: "/sinema-tarihi",  label: "Sinema Tarihi",   icon: Film },
      { href: "/turk-sinemasi",  label: "Türk Sineması",   icon: Video },
      { href: "/dunya-sinemasi", label: "Dünya Sineması",  icon: Globe },
    ],
  },
  {
    baslik: "Kültür",
    icon: Sparkles,
    linkler: [
      { href: "/populer-kultur", label: "Popüler Kültür",  icon: Sparkles },
      { href: "/kent-kultur",    label: "Kent & Kültür",   icon: MapPin },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-10">

        {/* Newsletter */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 mb-14">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-amber-900/30 border border-amber-800/40 rounded-full px-4 py-1.5 mb-4">
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-amber-400 text-xs font-semibold tracking-wide uppercase">
                Haftalık Kültür-Sanat İstihbaratı
              </span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">
              Sanatın Nabzını Takip Edin
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-md mx-auto">
              Her hafta seçkin bir ressam, etkileyici bir akım, kalıcı bir sinema eseri.
              Kültür dünyasından özenle seçilmiş içerikler, doğrudan gelen kutunuza.
            </p>
            <NewsletterForm />
            <p className="text-gray-600 text-xs mt-3">
              Haftalık, reklamsız, yalnızca sanat. İstediğinizde çıkabilirsiniz.
            </p>
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {footerKolonlar.map((kolon) => {
            const KolonIcon = kolon.icon;
            return (
              <div key={kolon.baslik}>
                <h3 className="flex items-center gap-2 text-white font-semibold mb-4 text-sm">
                  <KolonIcon className="w-3.5 h-3.5 text-amber-500/70" />
                  {kolon.baslik}
                </h3>
                <ul className="space-y-2.5">
                  {kolon.linkler.map((link) => {
                    const LinkIcon = link.icon;
                    return (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="flex items-center gap-2 text-gray-500 hover:text-amber-400 text-sm transition-colors group"
                        >
                          <LinkIcon className="w-3 h-3 flex-shrink-0 opacity-50 group-hover:opacity-100 transition-opacity" />
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-7 h-7 rounded-lg bg-amber-900/40 border border-amber-800/40 flex items-center justify-center">
              <Map className="w-3.5 h-3.5 text-amber-400" />
            </div>
            <div>
              <span className="text-white font-bold text-sm tracking-tight">Kültür &amp; Sanat Atlası</span>
              <p className="text-gray-600 text-xs">Sanatın, edebiyatın ve sinemanın rehberi</p>
            </div>
          </Link>
          <p className="text-gray-700 text-xs">
            © 2025 Kültür &amp; Sanat Atlası — Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
