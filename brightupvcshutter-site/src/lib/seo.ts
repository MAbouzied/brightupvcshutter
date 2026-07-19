import type { Metadata } from "next";
import { SITE } from "./site";

type PageSeo = {
  title: string;
  description: string;
  path: string;
  image?: string;
  noIndex?: boolean;
};

const OG_WIDTH = 1288;
const OG_HEIGHT = 360;

function ogImageMeta(imagePath: string, alt: string) {
  const url = `${SITE.url}${imagePath}`;
  const type = imagePath.endsWith(".png") ? "image/png" : "image/jpeg";

  return {
    url,
    width: OG_WIDTH,
    height: OG_HEIGHT,
    alt,
    type,
  };
}

export function pageMetadata({
  title,
  description,
  path,
  image = SITE.ogImage,
  noIndex = false,
}: PageSeo): Metadata {
  const url = `${SITE.url}${path}`;
  const fullTitle = path === "/" ? title : `${title} | ${SITE.name}`;
  const ogImage = ogImageMeta(image, title);

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: SITE.locale,
      url,
      siteName: SITE.legalName,
      title: fullTitle,
      description,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [{ url: ogImage.url, alt: ogImage.alt }],
    },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    other: {
      "og:image:width": String(OG_WIDTH),
      "og:image:height": String(OG_HEIGHT),
      "og:image:alt": title,
    },
  };
}
