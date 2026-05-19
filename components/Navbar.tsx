"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Palette, Brush, Landmark, PaintbrushVertical, Users, Gem, Building2, Shapes,
  BookOpen, PenLine, Scroll,
  Clapperboard, Film, Video, Globe,
  Sparkles, MapPin,
  Map, ChevronDown, Menu, X,
} from "lucide-react";

const menuGruplari = [
  {
    baslik: "Görsel Sanatlar",
    icon: Palette,
    linkler: [
      { href: "/resim-sanati",        label: "Resim Sanatı",        Icon: Palette },
      { href: "/ressamlar",           label: "Dünya Ressamları",     Icon: Brush },
      { href: "/sanat-akimlari",      label: "Sanat Akımları",       Icon: Landmark },
      { href: "/turk-resim-sanati",   label: "Türk Resim Sanatı",    Icon: PaintbrushVertical },
      { href: "/turk-ressamlar",      label: "Türk Ressamlar",       Icon: Users },
      { href: "/geleneksel-sanatlar", label: "Geleneksel Sanatlar",  Icon: Gem },
      { href: "/mimari-tasarim",      label: "Mimari & Tasarım",     Icon: Building2 },
      { href: "/heykel",              label: "Heykel",               Icon: Shapes },
    ],
  },
  {
    baslik: "Edebiyat",
    icon: BookOpen,
    linkler: [
      { href: "/edebiyat",           label: "Dünya Edebiyatı",  Icon: BookOpen },
      { href: "/edebiyat-akimlari",  label: "Edebi Akımlar",    Icon: PenLine },
      { href: "/turk-edebiyati",     label: "Türk Edebiyatı",   Icon: Scroll },
    ],
  },
  {
    baslik: "Sinema",
    icon: Clapperboard,
    linkler: [
      { href: "/sinema",         label: "Sinema",          Icon: Clapperboard },
      { href: "/sinema-tarihi",  label: "Sinema Tarihi",   Icon: Film },
      { href: "/turk-sinemasi",  label: "Türk Sineması",   Icon: Video },
      { href: "/dunya-sinemasi", label: "Dünya Sineması",  Icon: Globe },
    ],
  },
  {
    baslik: "Kültür",
    icon: Sparkles,
    linkler: [
      { href: "/populer-kultur", label: "Popüler Kültür",  Icon: Sparkles },
      { href: "/kent-kultur",    label: "Kent & Kültür",   Icon: MapPin },
    ],
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [aktifMenu, setAktifMenu] = useState<string | null>(null);

  return (
    <nav className="bg-gray-950 border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* Brand */}
          <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="w-8 h-8 rounded-lg bg-amber-900/40 border border-amber-800/50 flex items-center justify-center">
              <Map className="w-4 h-4 text-amber-400" />
            </div>
            <div>
              <span className="text-white font-bold text-base leading-none block tracking-tight">
                Kültür &amp; Sanat
              </span>
              <span className="text-amber-400 text-[10px] font-semibold tracking-widest uppercase">
                Atlası
              </span>
            </div>
          </Link>

          {/* Desktop mega-menu */}
          <div className="hidden lg:flex items-center gap-0.5">
            {menuGruplari.map((grup) => {
              const GrupIcon = grup.icon;
              return (
                <div
                  key={grup.baslik}
                  className="relative"
                  onMouseEnter={() => setAktifMenu(grup.baslik)}
                  onMouseLeave={() => setAktifMenu(null)}
                >
                  <button className="flex items-center gap-1.5 text-gray-400 hover:text-white hover:bg-gray-800/70 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150">
                    <GrupIcon className="w-3.5 h-3.5" />
                    {grup.baslik}
                    <ChevronDown className="w-3 h-3 opacity-50" />
                  </button>

                  {aktifMenu === grup.baslik && (
                    <div className="absolute top-full left-0 mt-1.5 bg-gray-900 border border-gray-700/80 rounded-xl shadow-2xl shadow-black/60 p-1.5 min-w-[220px]">
                      {grup.linkler.map((link) => {
                        const LinkIcon = link.Icon;
                        return (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="flex items-center gap-2.5 text-gray-400 hover:text-white hover:bg-gray-800 px-3 py-2 rounded-lg text-sm transition-all"
                          >
                            <LinkIcon className="w-3.5 h-3.5 text-amber-500/70 flex-shrink-0" />
                            {link.label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-gray-400 hover:text-white p-2 rounded-lg hover:bg-gray-800 transition-all"
            aria-label="Menü"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden bg-gray-900 border-t border-gray-800 px-4 py-4 max-h-[80vh] overflow-y-auto">
          {menuGruplari.map((grup) => {
            const GrupIcon = grup.icon;
            return (
              <div key={grup.baslik} className="mb-5">
                <div className="flex items-center gap-2 text-gray-500 text-xs font-semibold uppercase tracking-widest px-2 mb-2">
                  <GrupIcon className="w-3 h-3" />
                  {grup.baslik}
                </div>
                <div className="grid grid-cols-2 gap-1">
                  {grup.linkler.map((link) => {
                    const LinkIcon = link.Icon;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-2 text-gray-300 hover:text-white hover:bg-gray-800 px-3 py-2 rounded-lg text-sm font-medium transition-all"
                      >
                        <LinkIcon className="w-3.5 h-3.5 text-amber-500/60 flex-shrink-0" />
                        <span className="truncate">{link.label}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </nav>
  );
}
