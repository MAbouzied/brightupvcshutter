import { SITE } from "@/lib/site";

const items = [
  { label: "توريد وتركيب", value: "خدمة متكاملة" },
  { label: "ضمان", value: "ضد عيوب الصناعة" },
  { label: "الموقع", value: "القاهرة ومصر" },
];

export function TrustBar() {
  return (
    <section className="border-b border-slate-200 bg-white" aria-label="مميزات سريعة">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 py-5 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-sm font-bold text-[var(--color-primary)]">
              ✓
            </span>
            <div>
              <p className="text-xs font-medium text-slate-500">{item.label}</p>
              <p className="text-sm font-bold text-slate-900">{item.value}</p>
            </div>
          </div>
        ))}
        <a
          href={`tel:${SITE.phone}`}
          className="flex items-center gap-3 rounded-xl bg-[var(--color-primary)] px-4 py-3 text-white transition hover:bg-[var(--color-primary-dark)] sm:col-span-2 lg:col-span-1"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15 text-sm">☎</span>
          <div>
            <p className="text-xs font-medium text-blue-100">اتصل الآن</p>
            <p className="phone-ltr text-sm font-bold" dir="ltr">
              {SITE.phoneDisplay}
            </p>
          </div>
        </a>
      </div>
    </section>
  );
}
