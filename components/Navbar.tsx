"use client";

import Link from "next/link";
import { useState } from "react";

const menuGruplari = [
  {
    baslik: "Görsel Sanatlar",
    linkler: [
      { href: "/resim-sanati", label: "Resim Sanatı", emoji: "🎨" },
      { href: "/ressamlar", label: "Dünya Ressamları", emoji: "👨‍🎨" },
      { href: "/sanat-akimlari", label: "Sanat Akımları", emoji: "🏛️" },
      { href: "/turk-resim-sanati", label: "Türk Resim Sanatı", emoji: "🖼️" },
      { href: "/turk-ressamlar", label: "Türk Ressamlar", emoji: "🇹🇷" },
      { href: "/geleneksel-sanatlar", label: "Geleneksel Sanatlar", emoji: "🏺" },
    ],
  },
  {
    baslik: "Edebiyat",
    linkler: [
      { href: "/edebiyat", label: "Dünya Edebiyatı", emoji: "📚" },
      { href: "/edebiyat-akimlari", label: "Edebi Akımlar", emoji: "✍️" },
      { href: "/turk-edebiyati", label: "Türk Edebiyatı", emoji: "📜" },
    ],
  },
  {
    baslik: "Sinema",
    linkler: [
      { href: "/sinema", label: "Sinema", emoji: "🎬" },
      { href: "/sinema-tarihi", label: "Sinema Tarihi", emoji: "🎞️" },
      { href: "/turk-sinemasi", label: "Türk Sineması", emoji: "🎥" },
      { href: "/dunya-sinemasi", label: "Dünya Sineması", emoji: "🌍" },
    ],
  },
  {
    baslik: "Kültür",
    linkler: [
      { href: "/populer-kultur", label: "Popüler Kültür", emoji: "🌟" },
    ],
  },
];

const tumLinkler = menuGruplari.flatMap((g) => g.linkler);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [aktifMenu, setAktifMenu] = useState<string | null>(null);

  return (
    <nav className="bg-gray-950 border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
            <span className="text-2xl">🗺️</span>
            <div>
              <span className="text-white font-bold text-lg leading-none block">Kültür &amp; Sanat</span>
              <span className="text-amber-400 text-xs font-medium">Atlası</span>
            </div>
          </Link>

          {/* Desktop — mega menu tetikleyicileri */}
          <div className="hidden lg:flex items-center gap-1">
            {menuGruplari.map((grup) => (
              <div key={grup.baslik} className="relative"
                onMouseEnter={() => setAktifMenu(grup.baslik)}
                onMouseLeave={() => setAktifMenu(null)}>
                <button className="text-gray-400 hover:text-white hover:bg-gray-800 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-150 flex items-center gap-1">
                  {grup.baslik}
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {aktifMenu === grup.baslik && (
                  <div className="absolute top-full left-0 mt-1 bg-gray-900 border border-gray-700 rounded-xl shadow-2xl p-2 min-w-[200px]">
                    {grup.linkler.map((link) => (
                      <Link key={link.href} href={link.href}
                        className="flex items-center gap-2 text-gray-400 hover:text-white hover:bg-gray-800 px-3 py-2 rounded-lg text-sm transition-all">
                        <span>{link.emoji}</span>
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Hamburger */}
          <button onClick={() => setOpen(!open)}
            className="lg:hidden text-gray-400 hover:text-white p-2" aria-label="Menü">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobil menü */}
      {open && (
        <div className="lg:hidden bg-gray-900 border-t border-gray-800 px-4 py-4 max-h-[80vh] overflow-y-auto">
          {menuGruplari.map((grup) => (
            <div key={grup.baslik} className="mb-4">
              <div className="text-gray-600 text-xs font-semibold uppercase tracking-wider px-3 mb-2">
                {grup.baslik}
              </div>
              <div className="grid grid-cols-2 gap-1">
                {grup.linkler.map((link) => (
                  <Link key={link.href} href={link.href} onClick={() => setOpen(false)}
                    className="text-gray-400 hover:text-white hover:bg-gray-800 px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2">
                    <span>{link.emoji}</span>
                    <span className="truncate">{link.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
