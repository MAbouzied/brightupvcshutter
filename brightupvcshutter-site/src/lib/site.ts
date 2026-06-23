export const SITE = {
  name: "برايت شاتر",
  legalName: "Bright UPVC & Shutter",
  tagline: "لأعمال الشاتر والألمنيوم",
  description:
    "نقدم خدمات متكاملة في التوريد والتركيب للرولنج شاتر، نوافذ وأبواب UPVC والألومنيوم، شيش الحصيرة، الدرابزين وكبائن الاستحمام في مصر.",
  url: "https://brightupvcshutter.com",
  locale: "ar_EG",
  language: "ar",
  phones: [
    { tel: "+201060042508", display: "01060042508", label: "واتساب" },
    { tel: "+201000605045", display: "01000605045", label: "تليفون" },
  ] as const,
  phone: "+201000605045",
  phoneDisplay: "01000605045",
  whatsapp: "201060042508",
  whatsappDisplay: "01060042508",
  address: {
    street: "أبراج سما - طريق دائري المعادي",
    city: "القاهرة",
    region: "القاهرة",
    country: "مصر",
    countryCode: "EG",
    display: "أبراج سما - طريق دائري المعادي - القاهرة",
  },
  mapQuery: "أبراج سما طريق المعادي الدائري القاهرة مصر",
  colors: {
    primary: "#1E2F97",
    secondary: "#3B8CF8",
    accent: "#4ADEDE",
  },
} as const;

export type NavItem = {
  label: string;
  href: string;
};

export const MAIN_NAV: NavItem[] = [
  { label: "الرئيسية", href: "/" },
  { label: "خدماتنا", href: "/our-services/" },
  { label: "أعمالنا", href: "/our-projects/" },
  { label: "من نحن", href: "/about-us/" },
  { label: "تواصل معنا", href: "/contact-us/" },
];

export const FOOTER_SERVICES = [
  { label: "الرولينج شاتر", href: "/shutter/" },
  { label: "نوافذ وأبواب UPVC", href: "/upvc-windows/" },
  { label: "نوافذ وأبواب الألومنيوم", href: "/aluminum-windows-and-doors/" },
  { label: "كبائن الاستحمام", href: "/shower-cabins/" },
] as const;
