export const SITE = {
  name: "برايت شتر",
  legalName: "Bright UPVC & Shutter",
  tagline: "لأعمال الشتر والألمنيوم",
  description:
    "نقدم خدمات متكاملة في التوريد والتركيب للرولنج شاتر، نوافذ وأبواب UPVC والألومنيوم، شيش الحصيرة، الدرابزين وكبائن الاستحمام في مصر والقاهرة.",
  url: "https://brightupvcshutter.com",
  locale: "ar_EG",
  language: "ar",
  email: "info@brightupvcshutter.com",
  phones: [
    { tel: "+201060042508", display: "010 6004 2508" },
    { tel: "+201000605045", display: "010 0060 5045" },
  ] as const,
  phone: "+201060042508",
  phoneDisplay: "010 6004 2508",
  whatsapp: "201060042508",
  address: {
    street: "أبراج سما - طريق المعادي الدائري",
    city: "القاهرة",
    region: "القاهرة",
    country: "مصر",
    countryCode: "EG",
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
  children?: NavItem[];
};

export const MAIN_NAV: NavItem[] = [
  { label: "الرئيسية", href: "/" },
  { label: "من نحن", href: "/about-us/" },
  {
    label: "خدماتنا",
    href: "/our-services/",
    children: [
      { label: "الرولنج شاتر", href: "/shutter/" },
      { label: "شيش الحصيرة", href: "/mesh-shutters/" },
      { label: "الشتر الذكي", href: "/smart-shutter/" },
      { label: "أبواب ونوافذ UPVC", href: "/upvc-windows/" },
      { label: "نوافذ وأبواب الألومنيوم", href: "/aluminum-windows-and-doors/" },
      { label: "كبائن الاستحمام", href: "/shower-cabins/" },
      { label: "الدرابزين (هاندريل)", href: "/handrail/" },
    ],
  },
  { label: "مشاريعنا", href: "/our-projects/" },
  { label: "تواصل معنا", href: "/contact-us/" },
];
