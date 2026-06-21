import Image from "next/image";

export function ImageGallery({ images, title }: { images: string[]; title: string }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" aria-label={`معرض صور ${title}`}>
      {images.map((src, index) => (
        <figure
          key={src}
          className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100"
        >
          <Image
            src={src}
            alt={`${title} — صورة ${index + 1} من أعمال برايت شتر`}
            fill
            className="object-cover object-center transition duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
            loading={index < 3 ? "eager" : "lazy"}
          />
        </figure>
      ))}
    </div>
  );
}
