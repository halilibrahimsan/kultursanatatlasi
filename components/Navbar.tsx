"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/resim-sanati", label: "Resim Sanatı", emoji: "🎨" },
  { href: "/ressamlar", label: "Ressamlar", emoji: "👨‍🎨" },
  { href: "/sanat-akimlari", label: "Sanat Akımları", emoji: "🏛️" },
  { href: "/edebiyat", label: "Edebiyat", emoji: "📚" },
  { href: "/edebiyat-akimlari", label: "Edebi Akımlar", emoji: "✍️" },
  { href: "/sinema", label: "Sinema", emoji: "🎬" },
  { href: "/sinema-tarihi", label: "Sinema Tarihi", emoji: "🎞️" },
  { href: "/populer-kultur", label: "Popüler Kültür", emoji: "🌟" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-950 border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl">🗺️</span>
            <div>
              <span className="text-white font-bold text-lg leading-none block">
                Kültür & Sanat
              </span>
              <span className="text-amber-400 text-xs font-medium">Atlası</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-400 hover:text-white hover:bg-gray-800 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-150 flex items-center gap-1.5"
              >
                <span className="text-base">{link.emoji}</span>
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-gray-400 hover:text-white p-2"
            aria-label="Menü"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-gray-900 border-t border-gray-800 px-4 py-3">
          <div className="grid grid-cols-2 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-gray-400 hover:text-white hover:bg-gray-800 px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2"
              >
                <span>{link.emoji}</span>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
