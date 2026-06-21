import { smartShutterService } from "@/content/service-details";
import { buildServicePageExports } from "@/lib/service-page";

const { metadata: pageMeta, Page } = buildServicePageExports(smartShutterService);
export const metadata = pageMeta;
export default Page;
