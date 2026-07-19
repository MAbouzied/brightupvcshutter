import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";
import type { ServiceDetail } from "@/types/service";
import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

export function buildServicePageExports(service: ServiceDetail): {
  metadata: Metadata;
  Page: () => React.JSX.Element;
} {
  return {
    metadata: pageMetadata({
      title: service.title,
      description: service.metaDescription,
      path: service.href,
      image: SITE.ogImage,
    }),
    Page: function ServicePage() {
      return <ServiceDetailPage service={service} />;
    },
  };
}
