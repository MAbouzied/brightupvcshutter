import Link from "next/link";
import Image from "next/image";
import { SITE, MAIN_NAV } from "@/lib/site";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <div className="lg:hidden">
          <MobileNav />
        </div>

        <Link href="/" className="flex shrink-0 items-center gap-3" aria-label={SITE.name}>
          <Image
            src="/images/brand/logo.png"
            alt={SITE.name}
            width={160}
            height={45}
            className="h-10 w-auto object-contain sm:h-11"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="القائمة الرئيسية">
          {MAIN_NAV.map((item) =>
            item.children ? (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-[var(--color-primary)]"
                >
                  {item.label}
                </Link>
                <div className="invisible absolute start-0 top-full z-50 min-w-56 rounded-xl border border-slate-200 bg-white p-2 opacity-0 shadow-xl transition group-hover:visible group-hover:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block rounded-lg px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-50 hover:text-[var(--color-primary)]"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-[var(--color-primary)]"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <PhoneLink
            tel={SITE.phone}
            display={SITE.phoneDisplay}
            className="text-sm font-semibold text-[var(--color-primary)]"
          />
          <Link
            href="/contact-us/"
            className="rounded-full bg-[var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--color-primary-dark)]"
          >
            اطلب عرض سعر
          </Link>
        </div>
      </div>
    </header>
  );
}
