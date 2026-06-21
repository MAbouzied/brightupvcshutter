"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { MAIN_NAV, SITE } from "@/lib/site";
import { PhoneLink } from "@/components/ui/PhoneLink";

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const close = () => setOpen(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const drawer =
    mounted &&
    createPortal(
      <div className={`fixed inset-0 z-[60] lg:hidden ${open ? "" : "pointer-events-none"}`}>
        <button
          type="button"
          className={`absolute inset-0 bg-slate-950/50 transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={close}
          aria-label="إغلاق القائمة"
          tabIndex={open ? 0 : -1}
        />

        <aside
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="القائمة الجوال"
          aria-hidden={!open}
          className={`absolute inset-y-0 right-0 flex w-[min(100vw-2rem,20rem)] flex-col bg-white shadow-2xl transition-transform duration-300 ease-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between gap-4 border-b border-slate-200 px-5 py-4">
            <Link href="/" onClick={close} className="shrink-0" aria-label={SITE.name}>
              <Image
                src="/images/brand/logo.png"
                alt={SITE.name}
                width={140}
                height={40}
                className="h-9 w-auto object-contain"
              />
            </Link>
            <button
              type="button"
              onClick={close}
              className="flex h-10 w-10 items-center justify-center rounded-full text-slate-600 transition hover:bg-slate-100"
              aria-label="إغلاق القائمة"
            >
              <CloseIcon />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-4 py-5" aria-label="روابط القائمة">
            <ul className="space-y-1">
              {MAIN_NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={close}
                    className="block rounded-xl px-4 py-3.5 text-base font-semibold text-slate-900 transition hover:bg-slate-50 hover:text-[var(--color-primary)]"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <ul className="mb-2 space-y-1 border-s-2 border-slate-100 ps-3 ms-3">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={close}
                            className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-[var(--color-primary)]"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-3 border-t border-slate-200 p-4">
            <PhoneLink
              tel={SITE.phone}
              display={SITE.phoneDisplay}
              className="flex w-full items-center justify-center rounded-xl border border-slate-200 px-4 py-3.5 text-base font-semibold text-[var(--color-primary)] transition hover:bg-slate-50"
            />
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className="flex w-full items-center justify-center rounded-xl bg-[#25D366] px-4 py-3.5 text-base font-semibold text-white transition hover:bg-[#1fb855]"
            >
              مراسلة واتساب
            </a>
            <Link
              href="/contact-us/"
              onClick={close}
              className="flex w-full items-center justify-center rounded-full bg-[var(--color-primary)] px-4 py-3.5 text-base font-bold text-white transition hover:bg-[var(--color-primary-dark)]"
            >
              اطلب عرض سعر
            </Link>
          </div>
        </aside>
      </div>,
      document.body,
    );

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
        aria-label="فتح القائمة"
        aria-expanded={open}
        aria-controls="mobile-menu"
      >
        <MenuIcon />
      </button>
      {drawer}
    </>
  );
}
