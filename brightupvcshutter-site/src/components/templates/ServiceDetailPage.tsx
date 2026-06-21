import type { ServiceDetail } from "@/types/service";
import Image from "next/image";
import { ImageGallery } from "@/components/sections/ImageGallery";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTABanner } from "@/components/sections/CTABanner";
import { BreadcrumbsDark } from "@/components/layout/Breadcrumbs";
import { breadcrumbSchema, faqSchema, imageObjectSchema, serviceSchema, webPageSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";

export function ServiceDetailPage({ service }: { service: ServiceDetail }) {
  const breadcrumbs = [
    { name: "الرئيسية", path: "/" },
    { name: "خدماتنا", path: "/our-services/" },
    { name: service.title, path: service.href },
  ];

  const heroIsGraphic = service.heroImage.endsWith(".png");

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: service.title,
            description: service.metaDescription,
            path: service.href,
          }),
          breadcrumbSchema(breadcrumbs),
          serviceSchema({
            name: service.title,
            description: service.metaDescription,
            path: service.href,
            image: service.heroImage,
          }),
          faqSchema(service.faqs),
          ...service.gallery.slice(0, 3).map((img) =>
            imageObjectSchema({
              name: `${service.title} — مشروع`,
              description: `صورة من أعمال ${service.title} لدى برايت شتر`,
              path: img,
            }),
          ),
        ]}
      />

      <section className="border-b border-slate-800/50 bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-16">
          <div>
            <BreadcrumbsDark items={breadcrumbs} />
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{service.title}</h1>
            <div className="mt-6 space-y-4 text-sm leading-8 text-slate-300 sm:text-base">
              {service.intro.map((p) => (
                <p key={p.slice(0, 32)}>{p}</p>
              ))}
            </div>
          </div>
          <div
            className={`relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 ${heroIsGraphic ? "bg-gradient-to-br from-slate-800 to-slate-900" : ""}`}
          >
            <Image
              src={service.heroImage}
              alt={`${service.title} — برايت شتر`}
              fill
              className={heroIsGraphic ? "object-contain p-4" : "object-cover object-center"}
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {service.sections?.map((section) => (
        <section key={section.title} className="section-pad mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">{section.title}</h2>
          <div className="mt-4 space-y-3 text-sm leading-8 text-slate-600 sm:text-base">
            {section.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </section>
      ))}

      <section className="section-pad mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900">مميزات الخدمة</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {service.features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-slate-200 border-t-4 border-t-[var(--color-secondary)] bg-white p-5 shadow-sm"
            >
              <h3 className="font-bold text-slate-900">{feature.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-bold text-slate-900">معرض الأعمال</h2>
          <ImageGallery images={service.gallery} title={service.title} />
        </div>
      </section>

      <section className="section-pad mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FAQSection id={`faq-${service.slug}`} title={`الأسئلة الشائعة عن ${service.title}`} faqs={service.faqs} />
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <CTABanner />
      </section>
    </>
  );
}
