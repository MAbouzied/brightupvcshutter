import { handrailService } from "@/content/service-details";
import { buildServicePageExports } from "@/lib/service-page";

const { metadata: pageMeta, Page } = buildServicePageExports(handrailService);
export const metadata = pageMeta;
export default Page;
