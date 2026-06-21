type FAQ = { question: string; answer: string };

export function FAQSection({
  title,
  faqs,
  id = "faq",
}: {
  title: string;
  faqs: readonly FAQ[];
  id?: string;
}) {
  const headingId = `${id}-heading`;

  return (
    <section
      className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8"
      aria-labelledby={headingId}
    >
      <h2 id={headingId} className="text-2xl font-bold text-slate-900">
        {title}
      </h2>
      <div className="mt-6 space-y-3">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="group rounded-2xl border border-slate-200 bg-white p-5 open:border-[var(--color-primary)]/20 open:shadow-sm"
          >
            <summary className="cursor-pointer list-none text-base font-semibold text-slate-900 marker:content-none">
              <span className="flex items-center justify-between gap-4">
                {faq.question}
                <span
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-lg text-[var(--color-primary)] transition group-open:rotate-45 group-open:bg-[var(--color-primary)]/10"
                  aria-hidden
                >
                  +
                </span>
              </span>
            </summary>
            <p className="mt-3 text-sm leading-7 text-slate-600">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
