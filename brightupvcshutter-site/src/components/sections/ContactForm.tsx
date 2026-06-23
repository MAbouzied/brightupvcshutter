"use client";

import { useState } from "react";
import { SITE } from "@/lib/site";
import { PhoneLink } from "@/components/ui/PhoneLink";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!endpoint) {
      setSubmitted(true);
      return;
    }
    e.currentTarget.submit();
  }

  if (submitted && !endpoint) {
    return (
      <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-8 text-center shadow-sm">
        <p className="text-base font-semibold text-emerald-900">شكرًا لتواصلك معنا</p>
        <p className="mt-2 text-sm leading-7 text-emerald-800">
          للرد السريع، يمكنك الاتصال على{" "}
          <PhoneLink tel={SITE.phone} display={SITE.phoneDisplay} className="font-bold" /> أو المراسلة عبر واتساب.
        </p>
        <a
          href={`https://wa.me/${SITE.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-bold text-white"
        >
          فتح واتساب
        </a>
      </div>
    );
  }

  return (
    <form
      action={endpoint}
      method="POST"
      onSubmit={handleSubmit}
      className="space-y-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <h2 className="text-lg font-bold text-slate-900">أرسل رسالة</h2>
      <label className="block text-sm font-medium text-slate-700">
        الاسم *
        <input
          required
          name="name"
          type="text"
          autoComplete="name"
          className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
          placeholder="الاسم الكامل"
        />
      </label>

      <label className="block text-sm font-medium text-slate-700">
        رقم الجوال
        <input
          name="phone"
          type="tel"
          autoComplete="tel"
          className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[var(--color-primary)] phone-ltr"
          dir="ltr"
          placeholder={SITE.phoneDisplay}
        />
      </label>

      <label className="block text-sm font-medium text-slate-700">
        الموضوع
        <input
          name="subject"
          type="text"
          className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
          placeholder="استفسار عن خدمة أو مشروع"
        />
      </label>

      <label className="block text-sm font-medium text-slate-700">
        الرسالة *
        <textarea
          required
          name="message"
          rows={5}
          className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
          placeholder="اكتب تفاصيل طلبك: نوع الخدمة، الموقع، المقاسات التقريبية..."
        />
      </label>

      <button
        type="submit"
        className="w-full rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-bold text-white transition hover:bg-[var(--color-primary-dark)] sm:w-auto"
      >
        إرسال الرسالة
      </button>
    </form>
  );
}
