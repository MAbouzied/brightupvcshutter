import { aluminumService } from "@/content/service-details";
import { buildServicePageExports } from "@/lib/service-page";

const { metadata: pageMeta, Page } = buildServicePageExports(aluminumService);
export const metadata = pageMeta;
export default Page;
