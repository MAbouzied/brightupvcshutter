import Link from "next/link";
import Image from "next/image";
import { SITE, MAIN_NAV } from "@/lib/site";
import { PhoneLinks } from "@/components/ui/PhoneLink";

export function Footer() {
  const serviceLinks = MAIN_NAV.find((n) => n.children)?.children ?? [];

  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="space-y-4">
          <Image
            src="/images/brand/logo.png"
            alt={SITE.name}
            width={180}
            height={50}
            className="h-11 w-auto brightness-0 invert"
          />
          <p className="text-sm leading-7 text-slate-400">{SITE.description}</p>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-bold text-white">خدماتنا</h2>
          <ul className="space-y-2 text-sm">
            {serviceLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-slate-400 transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-bold text-white">روابط سريعة</h2>
          <ul className="space-y-2 text-sm">
            {MAIN_NAV.filter((n) => !n.children).map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-slate-400 transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-bold text-white">تواصل معنا</h2>
          <address className="space-y-3 text-sm not-italic text-slate-400">
            <p>
              {SITE.address.street}، {SITE.address.country}
            </p>
            <p>
              <PhoneLinks linkClassName="font-semibold text-white hover:underline" />
            </p>
            <p>
              <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#25D366] hover:underline">
                واتساب
              </a>
            </p>
            <p>
              <a href={`mailto:${SITE.email}`} className="hover:text-white hover:underline">
                {SITE.email}
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-slate-800 py-5 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {SITE.legalName}. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
}
