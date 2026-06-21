import Link from "next/link";
import Image from "next/image";
import type { Service } from "@/content/services";

function imageFit(src: string) {
  return src.endsWith(".png") ? "object-contain p-3" : "object-cover";
}

export function ServiceCard({ service }: { service: Service }) {
  const isGraphic = service.cardImage.endsWith(".png");

  return (
    <article className="card-hover group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div
        className={`relative aspect-[574/420] overflow-hidden ${isGraphic ? "bg-gradient-to-br from-slate-50 to-slate-100" : "bg-slate-100"}`}
      >
        <Image
          src={service.cardImage}
          alt={`${service.title} — صورة الخدمة`}
          fill
          className={`${imageFit(service.cardImage)} transition duration-500 group-hover:scale-[1.02]`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-lg font-bold text-slate-900 sm:text-xl">{service.title}</h3>
        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-7 text-slate-600">
          {service.shortDescription}
        </p>
        <Link
          href={service.href}
          className="mt-4 inline-flex items-center gap-2 rounded-lg text-sm font-semibold text-[var(--color-primary)] transition hover:gap-3"
        >
          المزيد من التفاصيل
          <span aria-hidden>←</span>
        </Link>
      </div>
    </article>
  );
}
