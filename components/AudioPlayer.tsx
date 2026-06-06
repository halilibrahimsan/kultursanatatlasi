"use client";

import { useState, useRef, useCallback } from "react";
import { Play, Pause, SkipBack, Volume2, Headphones } from "lucide-react";

interface Props {
  title: string;
  duration?: string;
}

export default function AudioPlayer({ title, duration = "~8 dk" }: Props) {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const toggle = useCallback(() => {
    if (playing) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      setPlaying(false);
    } else {
      setPlaying(true);
      intervalRef.current = setInterval(() => {
        setProgress((p) => {
          if (p >= 100) {
            clearInterval(intervalRef.current!);
            setPlaying(false);
            return 0;
          }
          return p + 0.3;
        });
      }, 100);
    }
  }, [playing]);

  const reset = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setPlaying(false);
    setProgress(0);
  }, []);

  return (
    <div className="border border-gray-800 rounded-2xl p-4 mb-8 bg-gray-900/60 backdrop-blur-sm">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-xl bg-amber-900/30 border border-amber-800/40 flex items-center justify-center flex-shrink-0">
          <Headphones className="w-5 h-5 text-amber-400" />
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-xs text-gray-500 font-medium uppercase tracking-widest mb-0.5">
            Makaleyi Dinle
          </p>
          <p className="text-sm font-semibold text-gray-200 truncate">{title}</p>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={reset}
            className="p-1.5 rounded-lg text-gray-500 hover:text-gray-300 hover:bg-gray-800 transition-all"
            aria-label="Başa sar"
          >
            <SkipBack className="w-4 h-4" />
          </button>
          <button
            onClick={toggle}
            className="w-9 h-9 rounded-xl bg-amber-500 hover:bg-amber-400 flex items-center justify-center transition-all hover:scale-105"
            aria-label={playing ? "Durdur" : "Oynat"}
          >
            {playing ? (
              <Pause className="w-4 h-4 text-gray-950" />
            ) : (
              <Play className="w-4 h-4 text-gray-950 ml-0.5" />
            )}
          </button>
          <div className="hidden sm:flex items-center gap-1.5 text-gray-600">
            <Volume2 className="w-3.5 h-3.5" />
            <span className="text-xs">{duration}</span>
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mt-3 px-14">
        <div className="relative h-1 bg-gray-800 rounded-full overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 bg-amber-500 rounded-full transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
