#!/usr/bin/env node
/**
 * Validates SEO metadata in static export HTML.
 * Run after: npm run build && node scripts/validate-seo.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, "..", "out");

const ROUTES = [
  "/",
  "/about-us/",
  "/our-services/",
  "/our-projects/",
  "/contact-us/",
  "/shutter/",
  "/upvc-windows/",
  "/aluminum-windows-and-doors/",
  "/shower-cabins/",
];

function htmlPath(route) {
  return route === "/" ? path.join(OUT, "index.html") : path.join(OUT, route.slice(1), "index.html");
}

function extract(html, re) {
  const m = html.match(re);
  return m ? m[1].trim() : null;
}

const issues = [];

for (const route of ROUTES) {
  const file = htmlPath(route);
  if (!fs.existsSync(file)) {
    issues.push(`${route}: missing HTML file`);
    continue;
  }
  const html = fs.readFileSync(file, "utf8");
  const title = extract(html, /<title>([^<]*)<\/title>/i);
  const desc = extract(html, /<meta name="description" content="([^"]*)"/i);
  const canonical = extract(html, /<link rel="canonical" href="([^"]*)"/i);
  const ogTitle = extract(html, /<meta property="og:title" content="([^"]*)"/i);
  const ogDesc = extract(html, /<meta property="og:description" content="([^"]*)"/i);
  const ogImage = extract(html, /<meta property="og:image" content="([^"]*)"/i);
  const h1Count = (html.match(/<h1[\s>]/gi) || []).length;

  if (!title) issues.push(`${route}: missing <title>`);
  if (!desc) issues.push(`${route}: missing meta description`);
  if (!canonical) issues.push(`${route}: missing canonical`);
  if (!ogTitle) issues.push(`${route}: missing og:title`);
  if (!ogDesc) issues.push(`${route}: missing og:description`);
  if (!ogImage) issues.push(`${route}: missing og:image`);
  if (h1Count !== 1) issues.push(`${route}: expected 1 H1, found ${h1Count}`);
  if (html.includes("wp-content/uploads")) issues.push(`${route}: wp-content reference in HTML`);
}

if (issues.length) {
  console.error(`SEO validation failed (${issues.length} issues):`);
  issues.forEach((i) => console.error(" ", i));
  process.exit(1);
}

console.log(`SEO OK — ${ROUTES.length} pages validated (title, description, canonical, OG, single H1).`);
