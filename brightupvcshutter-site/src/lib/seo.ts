import type { Metadata } from "next";
import { SITE } from "./site";

type PageSeo = {
  title: string;
  description: string;
  path: string;
  image?: string;
  noIndex?: boolean;
};

export function pageMetadata({
  title,
  description,
  path,
  image = "/images/brand/logo.png",
  noIndex = false,
}: PageSeo): Metadata {
  const url = `${SITE.url}${path}`;
  const fullTitle = path === "/" ? `${SITE.name} | ${SITE.tagline}` : `${title} | ${SITE.name}`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: SITE.locale,
      url,
      siteName: SITE.name,
      title: fullTitle,
      description,
      images: [{ url: `${SITE.url}${image}`, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [`${SITE.url}${image}`],
    },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
  };
}
