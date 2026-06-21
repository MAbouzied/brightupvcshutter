import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { SERVICES } from "@/content/services";

export const dynamic = "force-static";

const STATIC_PATHS = ["/", "/about-us/", "/our-services/", "/our-projects/", "/contact-us/"];

export default function sitemap(): MetadataRoute.Sitemap {
  const servicePaths = SERVICES.map((s) => s.href);
  const allPaths = [...STATIC_PATHS, ...servicePaths];
  const now = new Date();

  return allPaths.map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority:
      path === "/"
        ? 1
        : path === "/our-services/" || servicePaths.includes(path)
          ? 0.9
          : 0.7,
  }));
}
