import { SOCIAL_LINKS } from "@/lib/site";

const variantClasses = {
  light:
    "inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white transition hover:border-[var(--color-primary)]",
  dark: "inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900 transition hover:border-slate-500 hover:bg-slate-800",
} as const;

function iconUrl(icon: string, variant: keyof typeof variantClasses) {
  if (variant === "dark" && icon.includes("tiktok/000000")) {
    return icon.replace("tiktok/000000", "tiktok/FFFFFF");
  }
  return icon;
}

export function SocialLinks({ variant = "light" }: { variant?: keyof typeof variantClasses }) {
  return (
    <div className="flex flex-wrap gap-2">
      {SOCIAL_LINKS.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={variantClasses[variant]}
          aria-label={social.label}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={iconUrl(social.icon, variant)} alt="" width={20} height={20} className="h-5 w-5" />
        </a>
      ))}
    </div>
  );
}
