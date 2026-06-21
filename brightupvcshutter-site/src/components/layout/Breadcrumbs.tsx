import Link from "next/link";

export type Crumb = { name: string; path: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="مسار التنقل" className="mb-4 text-sm text-blue-200">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, i) => (
          <li key={item.path} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden className="text-slate-400">/</span>}
            {i < items.length - 1 ? (
              <Link href={item.path} className="text-slate-500 transition hover:text-[var(--color-primary)]">
                {item.name}
              </Link>
            ) : (
              <span className="font-medium text-slate-800">{item.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function BreadcrumbsDark({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="مسار التنقل" className="mb-4 text-sm text-blue-200">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, i) => (
          <li key={item.path} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden>/</span>}
            {i < items.length - 1 ? (
              <Link href={item.path} className="hover:text-white">
                {item.name}
              </Link>
            ) : (
              <span className="text-white">{item.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
