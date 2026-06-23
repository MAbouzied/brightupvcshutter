import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { HOME } from "@/content/home";
import { SERVICES } from "@/content/services";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTABanner } from "@/components/sections/CTABanner";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { faqSchema, webPageSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE } from "@/lib/site";

const META_TITLE = "برايت UPVC & شاتر | نوافذ وأبواب وشاتر وكبائن استحمام";
const META_DESCRIPTION =
  "برايت UPVC & شاتر تقدم حلول الرولينج شاتر، نوافذ وأبواب UPVC، نوافذ وأبواب الألومنيوم، وكبائن الاستحمام بجودة تنفيذ عالية وتصميمات عصرية.";

export const metadata = pageMetadata({
  title: META_TITLE,
  description: META_DESCRIPTION,
  path: "/",
  image: "/images/home/1.jpeg",
});

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: META_TITLE,
            description: META_DESCRIPTION,
            path: "/",
            mainEntityId: `${SITE.url}/#faq`,
          }),
          faqSchema(HOME.faqs, { path: "/" }),
        ]}
      />

      {/* Hero */}
      <section className="hero relative min-h-[min(100svh,920px)] overflow-hidden bg-slate-950 text-white">
        <div className="hero__media absolute inset-0">
          <Image
            src={HOME.hero.image}
            alt="واجهة منزل مع رولينج شاتر — برايت UPVC & شاتر"
            fill
            className="hero__image object-cover object-center"
            priority
            sizes="100vw"
          />
        </div>
        <div className="hero__overlay absolute inset-0" aria-hidden />

        <div className="relative mx-auto flex min-h-[min(100svh,920px)] max-w-7xl items-center px-4 py-28 sm:px-6 lg:px-8 lg:py-32">
          <div className="hero__content max-w-2xl">
            <p className="hero__eyebrow">
              <span className="hero__eyebrow-dot" aria-hidden />
              {HOME.hero.eyebrow}
              <span className="text-white/50"> · </span>
              {SITE.tagline}
            </p>

            <h1 className="hero__title mt-5 text-4xl font-bold leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">
              {HOME.hero.title}
            </h1>

            <p className="hero__lead mt-5 text-lg font-semibold leading-8 text-blue-100 sm:text-xl">
              {HOME.hero.lead}
            </p>

            <p className="hero__description mt-4 max-w-xl text-sm leading-8 text-slate-300 sm:text-base">
              {HOME.hero.description}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/contact-us/" className="hero__btn hero__btn--primary">
                تواصل معنا
              </Link>
              <Link href="/our-projects/" className="hero__btn hero__btn--secondary">
                أعمالنا
              </Link>
            </div>

            <ul className="hero__highlights mt-10 flex flex-wrap gap-2.5">
              {HOME.hero.highlights.map((item) => (
                <li key={item} className="hero__chip">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-pad mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="خدماتنا" description={HOME.servicesIntro} />
        <div className="grid gap-6 md:grid-cols-2">
          {SERVICES.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      {/* Why Bright */}
      <section className="section-pad bg-slate-50">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
            <Image
              src={HOME.why.image}
              alt="Bright UPVC & شاتر — رولينج شاتر عالي الجودة"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">{HOME.why.title}</h2>
            <p className="mt-5 text-base leading-8 text-slate-600">{HOME.why.body}</p>
            <Link
              href="/about-us/"
              className="mt-6 inline-flex rounded-lg text-sm font-semibold text-[var(--color-primary)] transition hover:underline"
            >
              اعرف المزيد عنا ←
            </Link>
          </div>
        </div>
      </section>

      {/* Why highlights */}
      <section className="section-pad bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title={HOME.whyHighlights.title} />
          <div className="grid gap-6 md:grid-cols-3">
            {HOME.whyHighlights.items.map((item) => (
              <article
                key={item.title}
                className="card-hover group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <Image
                    src={item.image}
                    alt={`${item.title} — برايت شاتر`}
                    fill
                    className="object-cover object-center transition duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 text-right">
                  <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="section-pad mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">{HOME.projects.title}</h2>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">{HOME.projects.subtitle}</p>
          </div>
          <Link href="/our-projects/" className="text-sm font-semibold text-[var(--color-primary)] hover:underline">
            عرض الكل ←
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {HOME.projects.items.map((project) => (
            <Link
              key={project.title}
              href={project.href}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md"
            >
              <Image
                src={project.image}
                alt={`${project.title} — مشروع برايت شاتر`}
                fill
                className="object-cover object-center transition duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-5 text-base font-bold text-white">
                {project.title}
              </span>
            </Link>
          ))}
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
