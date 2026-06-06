"use client";

import { ArrowRight } from "lucide-react";

export default function NewsletterForm() {
  return (
    <form
      className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="email"
        placeholder="e-posta adresiniz"
        className="flex-1 bg-gray-800 border border-gray-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-amber-600 transition-colors"
      />
      <button
        type="submit"
        className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-gray-950 font-semibold text-sm px-5 py-2.5 rounded-xl transition-all hover:scale-[1.02] whitespace-nowrap"
      >
        Abone Ol
        <ArrowRight className="w-4 h-4" />
      </button>
    </form>
  );
}
