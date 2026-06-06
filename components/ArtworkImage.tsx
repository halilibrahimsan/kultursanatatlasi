import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  credit: string;
}

export default function ArtworkImage({ src, alt, credit }: Props) {
  return (
    <figure className="rounded-xl overflow-hidden border border-gray-800 bg-gray-900/50 group">
      <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <figcaption className="text-xs text-gray-500 text-center py-2 px-3 border-t border-gray-800 bg-gray-900/80">
        {credit}
      </figcaption>
    </figure>
  );
}
