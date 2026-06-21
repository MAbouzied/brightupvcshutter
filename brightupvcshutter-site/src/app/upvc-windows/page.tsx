import { upvcWindowsService } from "@/content/service-details";
import { buildServicePageExports } from "@/lib/service-page";

const { metadata: pageMeta, Page } = buildServicePageExports(upvcWindowsService);
export const metadata = pageMeta;
export default Page;
