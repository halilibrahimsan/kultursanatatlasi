"use client";

import { useRef } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

export interface TimelineItem {
  yil: string;
  baslik: string;
  aciklama?: string;
  renk?: string;
  aktif?: boolean;
}

interface Props {
  items: TimelineItem[];
  accent?: string;
}

export default function Timeline({ items, accent = "amber" }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "right" ? 280 : -280, behavior: "smooth" });
  };

  const accentMap: Record<string, { dot: string; line: string; label: string; ring: string }> = {
    amber: { dot: "bg-amber-500", line: "bg-amber-800/40", label: "text-amber-400", ring: "ring-amber-500/30" },
    violet: { dot: "bg-violet-500", line: "bg-violet-800/40", label: "text-violet-400", ring: "ring-violet-500/30" },
    blue: { dot: "bg-blue-500", line: "bg-blue-800/40", label: "text-blue-400", ring: "ring-blue-500/30" },
  };
  const c = accentMap[accent] ?? accentMap.amber;

  return (
    <div className="relative border border-gray-800 rounded-2xl bg-gray-900/50 p-6 mb-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-widest">
          Kronoloji
        </h2>
        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="w-7 h-7 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-gray-400 hover:text-white transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-7 h-7 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-gray-400 hover:text-white transition-all"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="overflow-x-auto pb-2"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="flex items-start gap-0 min-w-max">
          {items.map((item, i) => (
            <div key={i} className="flex items-start">
              {/* Node */}
              <div className="flex flex-col items-center w-36">
                <div className="flex items-center w-full">
                  {/* Left connector */}
                  <div className={`flex-1 h-px ${i === 0 ? "opacity-0" : c.line}`} />
                  {/* Dot */}
                  <div className={`w-4 h-4 rounded-full ${c.dot} ring-4 ${c.ring} flex-shrink-0 z-10`} />
                  {/* Right connector */}
                  <div className={`flex-1 h-px ${i === items.length - 1 ? "opacity-0" : c.line}`} />
                </div>
                <div className="mt-3 text-center px-2">
                  <div className={`text-xs font-bold ${c.label} mb-1`}>{item.yil}</div>
                  <div className="text-white text-xs font-semibold leading-tight">{item.baslik}</div>
                  {item.aciklama && (
                    <div className="text-gray-500 text-xs mt-1 leading-snug">{item.aciklama}</div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
