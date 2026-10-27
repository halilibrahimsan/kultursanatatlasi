import { isSafeHref } from "@/lib/validation";

export function Avatar({ src, name, size = 96, ring }: { src: string | null; name: string; size?: number; ring?: string }) {
  const initials = name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");
  const style = { width: size, height: size, boxShadow: ring ? `0 0 0 3px ${ring}` : undefined };

  if (isSafeHref(src)) {
    return <img src={src} alt={name} style={style} className="rounded-full object-cover" />;
  }
  return (
    <div style={{ ...style, fontSize: size * 0.36 }} className="flex items-center justify-center rounded-full bg-brand font-semibold text-white">
      {initials || "?"}
    </div>
  );
}
