import Link from "next/link";
import Image from "next/image";
import { SITE, MAIN_NAV, FOOTER_SERVICES } from "@/lib/site";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="space-y-4 lg:col-span-1">
          <Image
            src="/images/brand/bright-upvc-shutter-logo.png"
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
            {FOOTER_SERVICES.map((item) => (
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
            {MAIN_NAV.map((item) => (
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
              تليفون:{" "}
              <a href={`tel:${SITE.phones[1].tel}`} className="phone-ltr font-semibold text-white hover:underline">
                {SITE.phones[1].display}
              </a>
            </p>
            <p>
              واتساب:{" "}
              <a
                href={`https://wa.me/${SITE.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="phone-ltr font-semibold text-[#25D366] hover:underline"
              >
                {SITE.whatsappDisplay}
              </a>
            </p>
            <p>{SITE.address.display}</p>
            <div className="pt-1">
              <SocialLinks variant="dark" />
            </div>
          </address>
        </div>
      </div>

      <div className="border-t border-slate-800 py-5 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} {SITE.legalName}. جميع الحقوق محفوظة.</p>
        <p className="mt-2">
          Made by{" "}
          <a
            href="https://on-dm.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-slate-400 transition hover:text-white"
          >
            ON DM
          </a>
        </p>
      </div>
    </footer>
  );
}
