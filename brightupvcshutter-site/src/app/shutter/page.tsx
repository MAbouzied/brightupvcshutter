import { shutterService } from "@/content/service-details";
import { buildServicePageExports } from "@/lib/service-page";

const { metadata: pageMeta, Page } = buildServicePageExports(shutterService);
export const metadata = pageMeta;
export default Page;
