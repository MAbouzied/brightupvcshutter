export type ServiceDetail = {
  slug: string;
  title: string;
  metaDescription: string;
  href: string;
  heroImage: string;
  intro: string[];
  sections?: { title: string; paragraphs: string[] }[];
  gallery: string[];
  features: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
};
