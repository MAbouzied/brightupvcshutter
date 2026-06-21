import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { PROJECTS, PROJECTS_FAQS } from "@/content/projects";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTABanner } from "@/components/sections/CTABanner";
import { PageHero } from "@/components/sections/PageHero";
import { breadcrumbSchema, faqSchema, imageObjectSchema, webPageSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata = pageMetadata({
  title: "مشاريعنا",
  description: "معرض مشاريع برايت شتر — الرولنج شاتر، شيش الحصيرة، UPVC، الألومنيوم، كبائن الاستحمام والدرابزين.",
  path: "/our-projects/",
  image: "/images/projects/bright-33.jpg",
});

export default function ProjectsPage() {
  const breadcrumbs = [
    { name: "الرئيسية", path: "/" },
    { name: "مشاريعنا", path: "/our-projects/" },
  ];

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "مشاريعنا",
            description: "معرض مشاريع برايت شتر",
            path: "/our-projects/",
          }),
          breadcrumbSchema(breadcrumbs),
          faqSchema(PROJECTS_FAQS),
          ...PROJECTS.slice(0, 4).map((p) =>
            imageObjectSchema({ name: p.title, description: p.alt, path: p.image }),
          ),
        ]}
      />

      <PageHero
        breadcrumbs={breadcrumbs}
        title="مشاريعنا"
        description="نماذج من أعمال التوريد والتركيب لدينا في مختلف الخدمات"
      />

      <section className="section-pad mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <Link
              key={project.title}
              href={project.href}
              className="card-hover group relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm"
            >
              <Image
                src={project.image}
                alt={project.alt}
                fill
                className="object-cover object-center transition duration-500 group-hover:scale-105"
                sizes="33vw"
                loading={index < 3 ? "eager" : "lazy"}
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-4 text-sm font-bold text-white">
                {project.title}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-pad mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FAQSection id="faq-projects" title="أسئلة شائعة عن مشاريعنا" faqs={PROJECTS_FAQS} />
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <CTABanner />
      </section>
    </>
  );
}
