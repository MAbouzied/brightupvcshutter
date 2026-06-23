import { pageMetadata } from "@/lib/seo";
import { SERVICES } from "@/content/services";
import { SERVICES_HUB_FAQS } from "@/content/services-hub";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTABanner } from "@/components/sections/CTABanner";
import { PageHero } from "@/components/sections/PageHero";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata = pageMetadata({
  title: "خدماتنا",
  description:
    "خدمات برايت شاتر: الرولينج شاتر، نوافذ وأبواب UPVC، نوافذ وأبواب الألومنيوم، وكبائن الاستحمام — توريد وتركيب في مصر.",
  path: "/our-services/",
  image: "/images/home/2.jpeg",
});

export default function ServicesPage() {
  const breadcrumbs = [
    { name: "الرئيسية", path: "/" },
    { name: "خدماتنا", path: "/our-services/" },
  ];

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "خدماتنا",
            description: "خدمات التوريد والتركيب لدى برايت شاتر",
            path: "/our-services/",
          }),
          breadcrumbSchema(breadcrumbs),
          faqSchema(SERVICES_HUB_FAQS),
        ]}
      />

      <PageHero
        breadcrumbs={breadcrumbs}
        title="خدماتنا"
        description="نقدم لعملائنا أفضل خدمة لحماية المنازل والشركات والفنادق من أضرار الطقس وحرارة الشمس والأمطار، مع فرق تركيب محترفة وضمان ضد عيوب الصناعة."
      />

      <section className="section-pad mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {SERVICES.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      <section className="section-pad mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FAQSection id="faq-services" title="أسئلة شائعة عن خدماتنا" faqs={SERVICES_HUB_FAQS} />
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <CTABanner />
      </section>
    </>
  );
}
