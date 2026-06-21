import { meshShuttersService } from "@/content/service-details";
import { buildServicePageExports } from "@/lib/service-page";

const { metadata: pageMeta, Page } = buildServicePageExports(meshShuttersService);
export const metadata = pageMeta;
export default Page;
