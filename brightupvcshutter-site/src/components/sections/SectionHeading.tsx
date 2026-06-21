export function SectionHeading({
  title,
  description,
  align = "center",
}: {
  title: string;
  description?: string;
  align?: "center" | "start";
}) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-start";

  return (
    <div className={`mb-10 max-w-3xl ${alignClass}`}>
      <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">{title}</h2>
      {description && (
        <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">{description}</p>
      )}
    </div>
  );
}
