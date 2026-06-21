import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { CONTACT_FAQS } from "@/content/contact";
import { ContactForm } from "@/components/sections/ContactForm";
import { FAQSection } from "@/components/sections/FAQSection";
import { PageHero } from "@/components/sections/PageHero";
import { PhoneLinks } from "@/components/ui/PhoneLink";
import { breadcrumbSchema, contactPageSchema, contactPointSchema, faqSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata = pageMetadata({
  title: "تواصل معنا",
  description:
    "تواصل مع برايت شتر لطلب عرض سعر أو استفسار عن الرولنج شاتر ونوافذ UPVC والألومنيوم في مصر. هاتف: 010 6004 2508",
  path: "/contact-us/",
});

export default function ContactPage() {
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(SITE.mapQuery)}&t=m&z=12&output=embed&iwloc=near`;
  const whatsappHref = `https://wa.me/${SITE.whatsapp}`;
  const breadcrumbs = [
    { name: "الرئيسية", path: "/" },
    { name: "تواصل معنا", path: "/contact-us/" },
  ];

  return (
    <>
      <JsonLd
        data={[
          contactPageSchema({
            title: "تواصل معنا",
            description:
              "تواصل مع برايت شتر لطلب عرض سعر أو استفسار عن الرولنج شاتر ونوافذ UPVC والألومنيوم في مصر.",
            path: "/contact-us/",
          }),
          breadcrumbSchema(breadcrumbs),
          faqSchema(CONTACT_FAQS, { path: "/contact-us/" }),
          contactPointSchema(),
        ]}
      />

      <PageHero
        breadcrumbs={breadcrumbs}
        title="تواصل معنا"
        description="نحن نهتم بملاحظاتك واستفساراتك ونسعد بمساعدتك فيما يتعلق بخدماتنا ومنتجاتنا"
      />

      <section className="section-pad mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">بيانات التواصل</h2>
            <address className="mt-4 space-y-4 text-sm not-italic leading-7 text-slate-600">
              <p>
                {SITE.address.street}، {SITE.address.country}
              </p>
              <p>
                <PhoneLinks linkClassName="font-semibold text-[var(--color-primary)]" />
              </p>
              <p>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 font-semibold text-white transition hover:bg-[#1fb855]"
                >
                  مراسلة واتساب
                </a>
              </p>
              <p>
                <a href={`mailto:${SITE.email}`} className="text-[var(--color-primary)] hover:underline">
                  {SITE.email}
                </a>
              </p>
            </address>
          </div>
          <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
            <iframe
              title="موقع برايت شتر على الخريطة"
              src={mapSrc}
              className="h-72 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        <ContactForm />
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <FAQSection id="faq-contact" title="أسئلة شائعة عن التواصل" faqs={CONTACT_FAQS} />
      </section>
    </>
  );
}
