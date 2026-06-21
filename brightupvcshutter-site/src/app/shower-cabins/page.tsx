import { showerCabinsService } from "@/content/service-details";
import { buildServicePageExports } from "@/lib/service-page";

const { metadata: pageMeta, Page } = buildServicePageExports(showerCabinsService);
export const metadata = pageMeta;
export default Page;
