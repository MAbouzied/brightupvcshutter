import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { HOME } from "@/content/home";
import { SERVICES } from "@/content/services";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTABanner } from "@/components/sections/CTABanner";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { TrustBar } from "@/components/sections/TrustBar";
import { faqSchema, webPageSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE } from "@/lib/site";

export const metadata = pageMetadata({
  title: SITE.name,
  description: SITE.description,
  path: "/",
  image: "/images/hero/bright-3.jpg",
});

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: SITE.name,
            description: SITE.description,
            path: "/",
            mainEntityId: `${SITE.url}/#faq`,
          }),
          faqSchema(HOME.faqs, { path: "/" }),
        ]}
      />

      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 opacity-35">
          <Image
            src={HOME.hero.image}
            alt=""
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-slate-950 via-slate-950/90 to-slate-950/60" />
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-24">
          <div>
            <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              {HOME.hero.title}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300">{HOME.hero.subtitle}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact-us/"
                className="rounded-full bg-[var(--color-secondary)] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-900/20 transition hover:brightness-110"
              >
                اطلب عرض سعر
              </Link>
              <Link
                href="/our-services/"
                className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                استعرض خدماتنا
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50 shadow-2xl">
            <Image
              src="/images/services/shutter/card.png"
              alt="الرولنج شاتر — برايت شتر"
              fill
              className="object-contain p-4"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </section>

      <TrustBar />

      <section className="section-pad mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="خدماتنا"
          description="حلول متكاملة للحماية والأمان — توريد وتركيب بجودة عالية وخدمة ما بعد البيع."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {SERVICES.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/our-services/"
            className="inline-flex rounded-full border border-slate-200 px-6 py-2.5 text-sm font-semibold text-[var(--color-primary)] transition hover:bg-slate-50"
          >
            عرض جميع الخدمات
          </Link>
        </div>
      </section>

      <section className="section-pad bg-slate-50">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative aspect-[570/630] overflow-hidden rounded-3xl shadow-lg">
            <Image
              src={HOME.aboutTeaser.image}
              alt="رولنج شاتر مثبت على واجهة مبنى — برايت شتر"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">{HOME.aboutTeaser.title}</h2>
            <p className="mt-5 text-sm leading-8 text-slate-600 sm:text-base">{HOME.aboutTeaser.body}</p>
            <Link
              href="/about-us/"
              className="mt-6 inline-flex rounded-lg text-sm font-semibold text-[var(--color-primary)] transition hover:underline"
            >
              اعرف المزيد عنا ←
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="لماذا برايت شتر؟" />
        <div className="grid gap-5 md:grid-cols-3">
          {HOME.process.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">مشاريعنا</h2>
              <p className="mt-2 text-sm text-slate-600">نماذج من أعمال التوريد والتركيب</p>
            </div>
            <Link href="/our-projects/" className="text-sm font-semibold text-[var(--color-primary)] hover:underline">
              عرض الكل ←
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {HOME.projectsPreview.map((project) => (
              <Link
                key={project.title}
                href={project.href}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-sm"
              >
                <Image
                  src={project.image}
                  alt={`${project.title} — مشروع برايت شتر`}
                  fill
                  className="object-cover object-center transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading="lazy"
                />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-4 text-sm font-bold text-white">
                  {project.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FAQSection id="faq-home" title="أسئلة شائعة" faqs={HOME.faqs} />
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <CTABanner />
      </section>
    </>
  );
}
