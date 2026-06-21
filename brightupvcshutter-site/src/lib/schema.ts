import { SITE } from "./site";

type FAQ = { question: string; answer: string };

export const SCHEMA_IDS = {
  localBusiness: `${SITE.url}/#localbusiness`,
  contactPoint: `${SITE.url}/#contactpoint`,
  website: `${SITE.url}/#website`,
} as const;

export function contactPointSchema() {
  return {
    "@type": "ContactPoint",
    "@id": SCHEMA_IDS.contactPoint,
    contactType: "customer service",
    telephone: SITE.phones.map((phone) => phone.tel),
    email: SITE.email,
    areaServed: {
      "@type": "Country",
      name: "Egypt",
    },
    availableLanguage: SITE.language,
  };
}

export function localBusinessSchema() {
  return {
    "@type": "LocalBusiness",
    "@id": SCHEMA_IDS.localBusiness,
    name: SITE.name,
    alternateName: SITE.legalName,
    description: SITE.description,
    url: SITE.url,
    email: SITE.email,
    telephone: SITE.phones.map((phone) => phone.tel),
    image: `${SITE.url}/images/brand/logo.png`,
    logo: `${SITE.url}/images/brand/logo.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      addressCountry: SITE.address.countryCode,
    },
    contactPoint: { "@id": SCHEMA_IDS.contactPoint },
    areaServed: {
      "@type": "Country",
      name: "Egypt",
    },
    priceRange: "$$",
  };
}

/** @deprecated Use localBusinessSchema — kept for layout import compatibility */
export function organizationSchema() {
  return localBusinessSchema();
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": SCHEMA_IDS.website,
    url: SITE.url,
    name: SITE.name,
    description: SITE.description,
    publisher: { "@id": SCHEMA_IDS.localBusiness },
    inLanguage: SITE.language,
  };
}

export function webPageSchema({
  title,
  description,
  path,
  type = "WebPage",
  mainEntityId,
}: {
  title: string;
  description: string;
  path: string;
  type?: "WebPage" | "AboutPage";
  mainEntityId?: string;
}) {
  const url = `${SITE.url}${path}`;
  const schema: Record<string, unknown> = {
    "@type": type,
    "@id": `${url}#webpage`,
    url,
    name: title,
    description,
    isPartOf: { "@id": SCHEMA_IDS.website },
    about: { "@id": SCHEMA_IDS.localBusiness },
    inLanguage: SITE.language,
  };

  if (mainEntityId) {
    schema.mainEntity = { "@id": mainEntityId };
  }

  return schema;
}

export function contactPageSchema({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  const url = `${SITE.url}${path}`;
  return {
    "@type": "ContactPage",
    "@id": `${url}#webpage`,
    url,
    name: title,
    description,
    isPartOf: { "@id": SCHEMA_IDS.website },
    about: { "@id": SCHEMA_IDS.localBusiness },
    mainEntity: { "@id": SCHEMA_IDS.localBusiness },
    inLanguage: SITE.language,
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE.url}${item.path}`,
    })),
  };
}

export function serviceSchema({
  name,
  description,
  path,
  image,
}: {
  name: string;
  description: string;
  path: string;
  image: string;
}) {
  return {
    "@type": "Service",
    name,
    description,
    url: `${SITE.url}${path}`,
    image: `${SITE.url}${image}`,
    provider: { "@id": SCHEMA_IDS.localBusiness },
    areaServed: {
      "@type": "Country",
      name: "Egypt",
    },
  };
}

export function faqSchema(faqs: readonly FAQ[], options?: { path: string }) {
  const schema: Record<string, unknown> = {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  if (options?.path) {
    const url = `${SITE.url}${options.path}`;
    schema["@id"] = `${url}#faq`;
    schema.url = url;
  }

  return schema;
}

export function imageObjectSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@type": "ImageObject",
    name,
    description,
    contentUrl: `${SITE.url}${path}`,
    inLanguage: SITE.language,
  };
}
