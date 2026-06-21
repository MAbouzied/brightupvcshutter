/** Build public image paths for a service gallery folder (originals only). */
export function serviceGallery(folder: string, files: string[]): string[] {
  return files.map((f) => `/images/services/${folder}/${f}`);
}
