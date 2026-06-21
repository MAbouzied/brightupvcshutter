import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { ABOUT } from "@/content/about";
import { SERVICES } from "@/content/services";
import { SITE } from "@/lib/site";
import { BreadcrumbsDark } from "@/components/layout/Breadcrumbs";
import { CTABanner } from "@/components/sections/CTABanner";
import { FAQSection } from "@/components/sections/FAQSection";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";

const META_DESCRIPTION =
  "تعرف على برايت شتر — شركة متخصصة في توريد وتركيب الرولنج شاتر وUPVC والألومنيوم وشيش الحصيرة وكبائن الاستحمام في مصر. فريق هندسي وفني، ضمان ضد عيوب الصناعة، وخدمة ما بعد البيع.";

export const metadata = pageMetadata({
  title: "من نحن",
  description: META_DESCRIPTION,
  path: "/about-us/",
  image: ABOUT.intro.image,
});

export default function AboutPage() {
  const breadcrumbs = [
    { name: "الرئيسية", path: "/" },
    { name: "من نحن", path: "/about-us/" },
  ];

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "من نحن",
            description: META_DESCRIPTION,
            path: "/about-us/",
            type: "AboutPage",
          }),
          breadcrumbSchema(breadcrumbs),
          faqSchema(ABOUT.faqs),
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 opacity-40">
          <Image
            src={ABOUT.hero.image}
            alt=""
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-slate-950 via-slate-950/90 to-slate-950/50" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <BreadcrumbsDark items={breadcrumbs} />
          <h1 className="mt-6 max-w-3xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            {ABOUT.hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            {ABOUT.hero.subtitle}
          </p>
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
      </section>

      {/* Who we are */}
      <section className="section-pad mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative aspect-[570/630] overflow-hidden rounded-3xl shadow-xl">
            <Image
              src={ABOUT.intro.image}
              alt="رولنج شاتر مثبت على واجهة مبنى — برايت شتر"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">{ABOUT.intro.title}</h2>
            <p className="mt-5 text-sm leading-8 text-slate-600 sm:text-base">{ABOUT.intro.body}</p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-pad bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <span className="inline-flex rounded-full bg-[var(--color-primary)]/10 px-3 py-1 text-xs font-bold text-[var(--color-primary)]">
              {ABOUT.mission.title}
            </span>
            <p className="mt-5 text-sm leading-8 text-slate-600 sm:text-base">{ABOUT.mission.body}</p>
          </article>
          <article className="rounded-3xl border border-slate-200 bg-gradient-to-br from-[var(--color-primary)] to-[#2439a8] p-8 text-white shadow-lg">
            <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-bold text-white">
              {ABOUT.vision.title}
            </span>
            <p className="mt-5 text-sm leading-8 text-blue-100 sm:text-base">{ABOUT.vision.body}</p>
          </article>
        </div>
      </section>

      {/* Specializations */}
      <section className="section-pad mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="ما الذي نتخصص فيه؟"
          description="حلول متكاملة للحماية والعزل والتشطيب — من الشتر إلى النوافذ وكبائن الاستحمام."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {SERVICES.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      {/* Why choose us */}
      <section className="section-pad bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              لماذا يختار العملاء برايت شتر؟
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
              نركّز على الجودة والتفاصيل والخدمة المتكاملة — من أول تواصل حتى ما بعد التركيب.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ABOUT.whyUs.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:border-[var(--color-accent)]/30 hover:bg-white/10"
              >
                <span className="text-2xl" aria-hidden>
                  {item.icon}
                </span>
                <h3 className="mt-4 text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-pad mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="من الاستشارة إلى التركيب"
          description="مسار عمل واضح يبدأ بالتواصل وينتهي بتسليم مشروعك مع الضمان والمتابعة."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {ABOUT.process.map((step) => (
            <article
              key={step.step}
              className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <span className="text-3xl font-bold text-[var(--color-primary)]/20">{step.step}</span>
              <h3 className="mt-2 text-lg font-bold text-slate-900">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Quality & materials */}
      <section className="section-pad bg-slate-50">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">{ABOUT.quality.title}</h2>
            <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">{ABOUT.quality.description}</p>
            <ul className="mt-6 space-y-3">
              {ABOUT.quality.points.map((point) => (
                <li key={point} className="flex gap-3 text-sm leading-7 text-slate-700">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-xs font-bold text-[var(--color-primary)]">
                    ✓
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
            <Image
              src={ABOUT.quality.image}
              alt="منتجات برايت شتر — شتر وألومنيوم وUPVC"
              fill
              className="object-contain p-4"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Projects preview */}
      <section className="section-pad mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">نماذج من أعمالنا</h2>
            <p className="mt-2 text-sm text-slate-600">مشاريع توريد وتركيب في مختلف فئات الخدمات</p>
          </div>
          <Link
            href="/our-projects/"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            عرض جميع المشاريع ←
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ABOUT.projectsPreview.map((project) => (
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
      </section>

      {/* Service area */}
      <section className="section-pad bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 sm:p-10">
                <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">نطاق خدماتنا وتواصل معنا</h2>
                <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
                  نخدم عملاءنا في {SITE.address.city} و{SITE.address.country}، مع حلول مخصصة للمنازل
                  والشركات والفنادق. تواصلوا معنا لطلب معاينة أو عرض سعر يناسب مشروعكم.
                </p>
                <address className="mt-6 space-y-2 text-sm not-italic leading-7 text-slate-700">
                  <p>
                    <span className="font-semibold text-slate-900">العنوان: </span>
                    {SITE.address.street}، {SITE.address.country}
                  </p>
                  <p>
                    <span className="font-semibold text-slate-900">البريد: </span>
                    <a href={`mailto:${SITE.email}`} className="text-[var(--color-primary)] hover:underline">
                      {SITE.email}
                    </a>
                  </p>
                </address>
                <Link
                  href="/contact-us/"
                  className="mt-6 inline-flex rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-bold text-white transition hover:bg-[var(--color-primary-dark)]"
                >
                  تواصل معنا الآن
                </Link>
              </div>
              <div className="relative min-h-64 bg-slate-100 lg:min-h-full">
                <Image
                  src={ABOUT.intro.secondaryImage}
                  alt="أعمال برايت شتر — نوافذ UPVC"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FAQSection id="faq-about" title="أسئلة شائعة عن برايت شتر" faqs={ABOUT.faqs} />
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <CTABanner
          title="هل تبحث عن شريك موثوق لتنفيذ مشروعك؟"
          description="اطلب معاينة أو عرض سعر — فريقنا جاهز لمساعدتك في اختيار الحل المناسب للشتر والألومنيوم وUPVC."
        />
      </section>
    </>
  );
}
