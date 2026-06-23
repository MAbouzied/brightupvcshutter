export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  cardImage: string;
  href: string;
  wpPageId: number;
};

export const SERVICES: Service[] = [
  {
    slug: "shutter",
    title: "الرولينج شاتر",
    shortDescription:
      "نظام عملي وأنيق يساعد على الحماية والخصوصية والتحكم في الإضاءة، مناسب للمنازل والفيلات والمحال.",
    cardImage: "/images/home/2.jpeg",
    href: "/shutter/",
    wpPageId: 4144,
  },
  {
    slug: "upvc-windows",
    title: "نوافذ وأبواب UPVC",
    shortDescription:
      "حلول عزل قوية ضد الحرارة والصوت، بتصميمات حديثة ومتانة عالية تناسب الاستخدام اليومي.",
    cardImage: "/images/home/3.jpeg",
    href: "/upvc-windows/",
    wpPageId: 4157,
  },
  {
    slug: "aluminum-windows-and-doors",
    title: "نوافذ وأبواب الألومنيوم",
    shortDescription:
      "تصميمات عملية وعصرية للنوافذ والأبواب، تجمع بين الشكل الأنيق وقوة التحمل.",
    cardImage: "/images/home/5.jpeg",
    href: "/aluminum-windows-and-doors/",
    wpPageId: 4856,
  },
  {
    slug: "shower-cabins",
    title: "كبائن الاستحمام",
    shortDescription:
      "كبائن زجاجية بتصميمات مختلفة تضيف لمسة فخامة وتنظيم لمساحات الحمام.",
    cardImage: "/images/home/4.jpeg",
    href: "/shower-cabins/",
    wpPageId: 4285,
  },
];

export function getServiceBySlug(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}
