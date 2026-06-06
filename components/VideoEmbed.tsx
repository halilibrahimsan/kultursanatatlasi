import { Play } from "lucide-react";

interface Props {
  videoId?: string;
  title?: string;
  placeholder?: string;
}

export default function VideoEmbed({ videoId, title, placeholder }: Props) {
  if (!videoId) {
    return (
      <div className="relative w-full rounded-2xl overflow-hidden border border-gray-800 bg-gray-900" style={{ aspectRatio: "16/9" }}>
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
          <div className="w-14 h-14 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center">
            <Play className="w-6 h-6 text-gray-500 ml-0.5" />
          </div>
          <p className="text-gray-500 text-sm text-center max-w-xs px-4">
            {placeholder ?? "Video içeriği yakında eklenecek"}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full rounded-2xl overflow-hidden border border-gray-800 bg-gray-950" style={{ aspectRatio: "16/9" }}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
        title={title ?? "Video"}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="w-full h-full"
        loading="lazy"
      />
    </div>
  );
}
