import Link from "next/link";
import { SITE } from "@/lib/site";
import { PhoneLink } from "@/components/ui/PhoneLink";

export function CTABanner({
  title = "جاهزون لبدء مشروعك؟",
  description = "اطلب معاينة أو عرض سعر — فريقنا يساعدك في اختيار الحل المناسب للشاتر والألومنيوم وUPVC.",
}: {
  title?: string;
  description?: string;
}) {
  const whatsappHref = `https://wa.me/${SITE.whatsapp}`;

  return (
    <section className="overflow-hidden rounded-3xl bg-gradient-to-l from-[var(--color-primary)] to-[#2439a8] px-6 py-10 text-white shadow-lg sm:px-10 sm:py-12">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
        <h2 className="text-2xl font-bold sm:text-3xl">{title}</h2>
        <p className="max-w-2xl text-sm leading-7 text-blue-100 sm:text-base">{description}</p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/contact-us/"
            className="rounded-full bg-white px-6 py-3 text-sm font-bold text-[var(--color-primary)] transition hover:bg-blue-50"
          >
            اطلب عرض سعر
          </Link>
          <PhoneLink
            tel={SITE.phone}
            display={SITE.phoneDisplay}
            className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          />
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1fb855]"
          >
            واتساب
          </a>
        </div>
      </div>
    </section>
  );
}
