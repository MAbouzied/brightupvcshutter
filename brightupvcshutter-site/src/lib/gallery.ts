/** Build public image paths for a service gallery folder. Files use SEO names: bright-{service}-gallery-NN.ext */
export function serviceGallery(folder: string, files: string[]): string[] {
  return files.map((f) => `/images/services/${folder}/${f}`);
}

/** Derive descriptive alt text from an SEO image filename. */
export function imageAltFromPath(src: string, context: string, index?: number): string {
  const filename = src.split("/").pop() ?? "";
  const base = filename.replace(/\.[^.]+$/, "").replace(/-/g, " ");
  const suffix = index !== undefined ? ` — صورة ${index + 1}` : "";
  return `${context}${suffix} — ${base} — برايت شاتر`;
}
