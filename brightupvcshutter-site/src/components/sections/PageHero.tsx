import type { Crumb } from "@/components/layout/Breadcrumbs";
import { BreadcrumbsDark } from "@/components/layout/Breadcrumbs";

export function PageHero({
  title,
  description,
  breadcrumbs,
}: {
  title: string;
  description?: string;
  breadcrumbs?: Crumb[];
}) {
  return (
    <section className="border-b border-slate-800/50 bg-slate-950 py-12 text-white sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {breadcrumbs && <BreadcrumbsDark items={breadcrumbs} />}
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
        {description && (
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">{description}</p>
        )}
      </div>
    </section>
  );
}
