#!/usr/bin/env node
/**
 * Checks internal page links in static export (out/) for 404s.
 * Run after: npm run build && npm run check-links
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, "..", "out");

const PAGE_ROUTES = new Set([
  "/",
  "/about-us/",
  "/our-services/",
  "/our-projects/",
  "/contact-us/",
  "/shutter/",
  "/upvc-windows/",
  "/aluminum-windows-and-doors/",
  "/shower-cabins/",
]);

if (!fs.existsSync(OUT)) {
  console.error("Missing out/ — run npm run build first");
  process.exit(1);
}

function collectHtmlFiles(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) collectHtmlFiles(full, acc);
    else if (entry.name.endsWith(".html")) acc.push(full);
  }
  return acc;
}

function isPageLink(href) {
  if (!href || !href.startsWith("/")) return false;
  if (href.startsWith("/_next/") || href.startsWith("/images/") || href.startsWith("/api/")) return false;
  if (/\.[a-z0-9]+$/i.test(href.split("?")[0].split("#")[0])) return false;
  let p = href.split("?")[0].split("#")[0];
  if (!p.endsWith("/")) p += "/";
  return PAGE_ROUTES.has(p);
}

function resolvePage(href) {
  let p = href.split("?")[0].split("#")[0];
  if (!p.endsWith("/")) p += "/";
  if (p === "/") return path.join(OUT, "index.html");
  const candidate = path.join(OUT, p.slice(1), "index.html");
  return fs.existsSync(candidate) ? candidate : null;
}

const htmlFiles = collectHtmlFiles(OUT).filter((f) => !f.includes("_not-found") && !f.endsWith("404.html"));
const linkRe = /href=["']([^"']+)["']/g;
const broken = [];
const checked = new Set();

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, "utf8");
  let m;
  while ((m = linkRe.exec(content))) {
    const href = m[1];
    if (!isPageLink(href)) continue;
    const resolved = resolvePage(href);
    if (!resolved) {
      const key = `${path.relative(OUT, file)} -> ${href}`;
      if (!checked.has(key)) {
        checked.add(key);
        broken.push(key);
      }
    }
  }
}

if (broken.length) {
  console.error(`Found ${broken.length} broken page link(s):`);
  broken.forEach((b) => console.error("  ", b));
  process.exit(1);
}

console.log(`OK — checked ${htmlFiles.length} pages, ${PAGE_ROUTES.size} routes, zero broken page links.`);
