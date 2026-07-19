#!/usr/bin/env node
/**
 * Renames public images to SEO-friendly filenames and updates source references.
 * Run: node scripts/rename-images-seo.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const PUBLIC = path.join(ROOT, "public");

/** @type {Record<string, string>} old public-relative path -> new */
const RENAMES = {};

function map(oldRel, newRel) {
  RENAMES[oldRel.replace(/^\//, "")] = newRel.replace(/^\//, "");
}

function pad(n) {
  return String(n).padStart(2, "0");
}

function galleryMaps(folder, slug, files) {
  const sorted = [...files].sort();
  sorted.forEach((file, i) => {
    const ext = path.extname(file);
    map(
      `/images/services/${folder}/${file}`,
      `/images/services/${folder}/bright-${slug}-gallery-${pad(i + 1)}${ext}`,
    );
  });
  return sorted.map((_, i) => {
    const ext = path.extname(sorted[i]);
    return `bright-${slug}-gallery-${pad(i + 1)}${ext}`;
  });
}

// --- Hero / card images ---
map("/images/brand/logo.png", "/images/brand/bright-upvc-shutter-logo.png");
map("/images/services/shutter/card.png", "/images/services/shutter/bright-rolling-shutter-service-hero.png");
map("/images/services/upvc/card.png", "/images/services/upvc/bright-upvc-windows-service-hero.png");
map("/images/services/aluminum/card.png", "/images/services/aluminum/bright-aluminum-windows-service-hero.png");
map("/images/services/shower/card.jpeg", "/images/services/shower/bright-shower-cabin-service-hero.jpeg");
map("/images/services/handrail/card.png", "/images/services/handrail/bright-handrail-service-hero.png");

map("/images/cards/aluminum.png", "/images/cards/bright-service-card-aluminum-windows.png");
map("/images/cards/shower-cabin.png", "/images/cards/bright-service-card-shower-cabin.png");

map("/images/projects/rolling-shutter.png", "/images/projects/bright-project-rolling-shutter-egypt.png");
map("/images/projects/upvc.png", "/images/projects/bright-project-upvc-windows-egypt.png");
map("/images/projects/aluminum.png", "/images/projects/bright-project-aluminum-windows-egypt.png");
map("/images/projects/shower-cabin.png", "/images/projects/bright-project-shower-cabin-egypt.png");

// --- Home ---
const homeMap = {
  "1.jpeg": "bright-home-hero-facade.jpeg",
  "2.jpeg": "bright-home-card-rolling-shutter.jpeg",
  "3.jpeg": "bright-home-card-upvc-windows.jpeg",
  "4.jpeg": "bright-home-card-shower-cabin.jpeg",
  "5.jpeg": "bright-home-card-aluminum-windows.jpeg",
  "6.jpeg": "bright-home-about-section.jpeg",
  "7.jpeg": "bright-home-why-professional-service.jpeg",
  "8.jpeg": "bright-home-why-delivery.jpeg",
  "9.jpeg": "bright-home-why-details.jpeg",
  "10.jpeg": "bright-home-project-rolling-shutter.jpeg",
  "11.jpeg": "bright-home-project-upvc-windows.jpeg",
  "12.jpeg": "bright-home-project-shower-cabin.jpeg",
  "13.jpeg": "bright-home-project-aluminum-windows.jpeg",
};
for (const [oldName, newName] of Object.entries(homeMap)) {
  map(`/images/home/${oldName}`, `/images/home/${newName}`);
}

// --- Service galleries (order preserved from current content arrays) ---
const shutterGallery = galleryMaps("shutter", "rolling-shutter", [
  "WhatsApp-Image-2026-06-24-at-14.46.45.jpeg",
  "WhatsApp-Image-2026-06-24-at-14.46.46-1.jpeg",
  "WhatsApp-Image-2026-06-24-at-14.46.46-2.jpeg",
  "WhatsApp-Image-2026-06-24-at-14.46.46.jpeg",
  "WhatsApp-Image-2026-06-24-at-14.46.47-1.jpeg",
  "WhatsApp-Image-2026-06-24-at-14.46.47-2.jpeg",
  "WhatsApp-Image-2026-06-24-at-14.46.47-3.jpeg",
  "WhatsApp-Image-2026-06-24-at-14.46.47.jpeg",
  "WhatsApp-Image-2026-06-24-at-14.46.48-1.jpeg",
  "WhatsApp-Image-2026-06-24-at-14.46.48-2.jpeg",
  "WhatsApp-Image-2026-06-24-at-14.46.48.jpeg",
  "WhatsApp-Image-2026-06-24-at-14.46.49-1.jpeg",
  "WhatsApp-Image-2026-06-24-at-14.46.49-2.jpeg",
  "WhatsApp-Image-2026-06-24-at-14.46.49.jpeg",
  "WhatsApp-Image-2026-06-24-at-14.46.50-1.jpeg",
  "WhatsApp-Image-2026-06-24-at-14.46.50-2.jpeg",
  "WhatsApp-Image-2026-06-24-at-14.46.50-3.jpeg",
  "WhatsApp-Image-2026-06-24-at-14.46.50.jpeg",
  "WhatsApp-Image-2026-06-24-at-14.46.51-1.jpeg",
  "WhatsApp-Image-2026-06-24-at-14.46.51.jpeg",
]);

const upvcGallery = galleryMaps("upvc", "upvc-windows", [
  "WhatsApp-Image-2026-06-24-at-15.04.13-1.jpeg",
  "WhatsApp-Image-2026-06-24-at-15.04.13.jpeg",
  "WhatsApp-Image-2026-06-24-at-15.04.14-1.jpeg",
  "WhatsApp-Image-2026-06-24-at-15.04.14.jpeg",
  "WhatsApp-Image-2026-06-24-at-15.04.15.jpeg",
  "WhatsApp-Image-2026-06-24-at-15.04.16.jpeg",
  "WhatsApp-Image-2026-06-24-at-15.04.18.jpeg",
  "WhatsApp-Image-2026-06-24-at-15.04.19-1.jpeg",
  "WhatsApp-Image-2026-06-24-at-15.04.19-2.jpeg",
  "WhatsApp-Image-2026-06-24-at-15.04.19.jpeg",
  "WhatsApp-Image-2026-06-24-at-15.04.20-1.jpeg",
  "WhatsApp-Image-2026-06-24-at-15.04.20-2.jpeg",
  "WhatsApp-Image-2026-06-24-at-15.04.20-3.jpeg",
  "WhatsApp-Image-2026-06-24-at-15.04.20.jpeg",
  "WhatsApp-Image-2026-06-24-at-15.04.21-1.jpeg",
  "WhatsApp-Image-2026-06-24-at-15.04.21-2.jpeg",
  "WhatsApp-Image-2026-06-24-at-15.04.21.jpeg",
  "WhatsApp-Image-2026-06-24-at-15.04.22-1.jpeg",
  "WhatsApp-Image-2026-06-24-at-15.04.22-2.jpeg",
  "WhatsApp-Image-2026-06-24-at-15.04.22.jpeg",
]);

const aluminumGallery = galleryMaps("aluminum", "aluminum-windows", [
  "WhatsApp-Image-2026-06-24-at-16.17.08-1.jpeg",
  "WhatsApp-Image-2026-06-24-at-16.17.08.jpeg",
  "WhatsApp-Image-2026-06-24-at-16.17.09.jpeg",
  "WhatsApp-Image-2026-06-24-at-16.17.10.jpeg",
  "WhatsApp-Image-2026-06-24-at-16.17.11-1.jpeg",
  "WhatsApp-Image-2026-06-24-at-16.17.11.jpeg",
  "WhatsApp-Image-2026-06-24-at-16.17.12-1.jpeg",
  "WhatsApp-Image-2026-06-24-at-16.17.12-2.jpeg",
  "WhatsApp-Image-2026-06-24-at-16.17.12.jpeg",
  "WhatsApp-Image-2026-06-24-at-16.17.13-1.jpeg",
  "WhatsApp-Image-2026-06-24-at-16.17.13-2.jpeg",
  "WhatsApp-Image-2026-06-24-at-16.17.13-3.jpeg",
  "WhatsApp-Image-2026-06-24-at-16.17.13.jpeg",
  "WhatsApp-Image-2026-06-24-at-16.17.14.jpeg",
]);

const showerGallery = galleryMaps("shower", "shower-cabin", [
  "WhatsApp-Image-2026-06-24-at-15.55.41-1.jpeg",
  "WhatsApp-Image-2026-06-24-at-15.55.41.jpeg",
  "WhatsApp-Image-2026-06-24-at-15.55.42-1.jpeg",
  "WhatsApp-Image-2026-06-24-at-15.55.42-2.jpeg",
  "WhatsApp-Image-2026-06-24-at-15.55.42-3.jpeg",
  "WhatsApp-Image-2026-06-24-at-15.55.42.jpeg",
  "WhatsApp-Image-2026-06-24-at-15.55.43-1.jpeg",
  "WhatsApp-Image-2026-06-24-at-15.55.43-2.jpeg",
  "WhatsApp-Image-2026-06-24-at-15.55.43.jpeg",
  "WhatsApp-Image-2026-06-24-at-15.55.44-1.jpeg",
  "WhatsApp-Image-2026-06-24-at-15.55.44-2.jpeg",
  "WhatsApp-Image-2026-06-24-at-15.55.44.jpeg",
  "WhatsApp-Image-2026-06-24-at-15.55.45-1.jpeg",
  "WhatsApp-Image-2026-06-24-at-15.55.45-2.jpeg",
  "WhatsApp-Image-2026-06-24-at-15.55.45.jpeg",
  "WhatsApp-Image-2026-06-24-at-15.55.46-1.jpeg",
  "WhatsApp-Image-2026-06-24-at-15.55.46-2.jpeg",
  "WhatsApp-Image-2026-06-24-at-15.55.46.jpeg",
  "WhatsApp-Image-2026-06-24-at-15.55.47.jpeg",
  "WhatsApp-Image-2026-06-24-at-15.57.10-1.jpeg",
]);

// Handrail & mesh (legacy content, still in repo)
const handrailDir = path.join(PUBLIC, "images/services/handrail");
if (fs.existsSync(handrailDir)) {
  const handrailFiles = fs
    .readdirSync(handrailDir)
    .filter((f) => f !== "card.png" && !f.startsWith("bright-"))
    .sort();
  handrailFiles.forEach((file, i) => {
    const ext = path.extname(file);
    map(
      `/images/services/handrail/${file}`,
      `/images/services/handrail/bright-handrail-gallery-${pad(i + 1)}${ext}`,
    );
  });
}

const meshDir = path.join(PUBLIC, "images/services/mesh");
if (fs.existsSync(meshDir)) {
  const meshFiles = fs.readdirSync(meshDir).filter((f) => !f.startsWith("bright-")).sort();
  meshFiles.forEach((file, i) => {
    const ext = path.extname(file);
    map(
      `/images/services/mesh/${file}`,
      `/images/services/mesh/bright-mesh-shutter-gallery-${pad(i + 1)}${ext}`,
    );
  });
}

// Unused legacy folders — rename for consistency
map("/images/hero/bright.jpg", "/images/hero/bright-upvc-shutter-hero-legacy.jpg");
map("/images/hero/bright-3.jpg", "/images/hero/bright-upvc-shutter-hero-alt.jpg");
map("/images/about/bright-570.jpg", "/images/about/bright-upvc-shutter-about-legacy.jpg");
for (let i = 31; i <= 35; i++) {
  map(`/images/projects/bright-${i}.jpg`, `/images/projects/bright-project-gallery-${i - 30}.jpg`);
}

// --- Apply file renames (two-phase to avoid collisions) ---
const tempSuffix = ".seo-rename-tmp";
const entries = Object.entries(RENAMES);

for (const [oldRel, newRel] of entries) {
  const oldAbs = path.join(PUBLIC, oldRel);
  if (!fs.existsSync(oldAbs)) {
    console.warn(`skip missing: ${oldRel}`);
    continue;
  }
  fs.renameSync(oldAbs, oldAbs + tempSuffix);
}

for (const [oldRel, newRel] of entries) {
  const oldAbs = path.join(PUBLIC, oldRel);
  const newAbs = path.join(PUBLIC, newRel);
  const tmpAbs = oldAbs + tempSuffix;
  if (!fs.existsSync(tmpAbs)) continue;
  fs.mkdirSync(path.dirname(newAbs), { recursive: true });
  fs.renameSync(tmpAbs, newAbs);
}

// --- Update source files ---
function walk(dir, acc = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, acc);
    else if (/\.(ts|tsx|mjs|js|json|md)$/.test(ent.name)) acc.push(p);
  }
  return acc;
}

const sourceFiles = walk(path.join(ROOT, "src")).concat(
  walk(path.join(ROOT, "scripts")).filter((f) => !f.endsWith("rename-images-seo.mjs")),
);

// Sort by path length descending so longer paths replace first (avoid partial matches)
const replacements = entries
  .map(([oldRel, newRel]) => [`/${oldRel}`, `/${newRel}`])
  .sort((a, b) => b[0].length - a[0].length);

for (const file of sourceFiles) {
  let content = fs.readFileSync(file, "utf8");
  let changed = false;
  for (const [from, to] of replacements) {
    if (content.includes(from)) {
      content = content.split(from).join(to);
      changed = true;
    }
  }
  if (changed) fs.writeFileSync(file, content);
}

// --- Patch gallery arrays in content files ---
function formatGalleryArray(files) {
  return files.map((f) => `    "${f}"`).join(",\n");
}

function replaceGalleryBlock(filePath, marker, newFiles) {
  let content = fs.readFileSync(filePath, "utf8");
  const re = new RegExp(
    `(gallery: serviceGallery\\("${marker}"[^\\]]*\\[\\n)([\\s\\S]*?)(\\n  \\])`,
    "m",
  );
  if (!re.test(content)) {
    console.warn(`gallery block not found in ${filePath} for ${marker}`);
    return;
  }
  content = content.replace(re, `$1${formatGalleryArray(newFiles)}$3`);
  fs.writeFileSync(filePath, content);
}

replaceGalleryBlock(path.join(ROOT, "src/content/shutter.ts"), "shutter", shutterGallery);
replaceGalleryBlock(path.join(ROOT, "src/content/service-details/index.ts"), "upvc", upvcGallery);
replaceGalleryBlock(path.join(ROOT, "src/content/service-details/index.ts"), "aluminum", aluminumGallery);
replaceGalleryBlock(path.join(ROOT, "src/content/service-details/index.ts"), "shower", showerGallery);

// Update mesh/handrail hero paths in service-details if present
const serviceDetails = path.join(ROOT, "src/content/service-details/index.ts");
let sd = fs.readFileSync(serviceDetails, "utf8");
sd = sd.replace(
  /heroImage: "\/images\/services\/mesh\/[^"]+"/g,
  'heroImage: "/images/services/mesh/bright-mesh-shutter-gallery-01.jpg"',
);
sd = sd.replace(
  /serviceGallery\("mesh", \[[^\]]+\]\)/gs,
  () => {
    const meshFiles = fs
      .readdirSync(meshDir)
      .filter((f) => f.startsWith("bright-mesh-shutter-gallery-"))
      .sort();
    return `serviceGallery("mesh", [\n${formatGalleryArray(meshFiles)}\n  ])`;
  },
);
sd = sd.replace(
  /serviceGallery\("handrail", \[[^\]]+\]\)/gs,
  () => {
    const files = fs
      .readdirSync(handrailDir)
      .filter((f) => f.startsWith("bright-handrail-gallery-"))
      .sort();
    return `serviceGallery("handrail", [\n${formatGalleryArray(files)}\n  ])`;
  },
);
fs.writeFileSync(serviceDetails, sd);

console.log(`Renamed ${entries.length} images and updated source references.`);
