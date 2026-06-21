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
    title: "الرولنج شاتر",
    shortDescription:
      "هو نوع خاص من الستائر المصنوعة من مواد قوية مثل الألومنيوم والفولاذ علي هيئة شرائح تنسدل من الأعلي للأسفل يدويا أو عن طريق جهاز تحكم",
    cardImage: "/images/services/shutter/card.png",
    href: "/shutter/",
    wpPageId: 4144,
  },
  {
    slug: "mesh-shutters",
    title: "شيش الحصيرة",
    shortDescription:
      "شيش الحصيرة الألومنيوم المحقون فوم يوفر عزلًا صوتيًا وحراريًا وحماية فعالة ضد عوامل الطقس مع إمكانية التحكم عن بعد.",
    cardImage: "/images/services/mesh/WhatsApp-Image-2024-11-03-at-14.39.33_6b9d2221.jpg",
    href: "/mesh-shutters/",
    wpPageId: 4218,
  },
  {
    slug: "smart-shutter",
    title: "الشتر الذكي",
    shortDescription:
      "خدمة الشتر الذكي تدمج تقنيات التحكم الذكي للتحكم في فتح وإغلاق الشتر عن بعد عبر الهاتف أو جهاز تحكم.",
    cardImage: "/images/services/mesh/Untitled-design-23.jpg",
    href: "/smart-shutter/",
    wpPageId: 4270,
  },
  {
    slug: "upvc-windows",
    title: "أبواب ونوافذ UPVC",
    shortDescription:
      "مادة ال UPVC هي مادة بلاستيكية واسعة الاستخدام وذات ميزات عديدة وجودة عالية، فهي تستخدم في الأبواب والنوافذ، وهي مادة سهلة التشكيل والتركيب، وأهم ما يميز هذه المادة أنها ذات عزل عالي جداً.",
    cardImage: "/images/services/upvc/card.png",
    href: "/upvc-windows/",
    wpPageId: 4157,
  },
  {
    slug: "aluminum-windows-and-doors",
    title: "نوافذ وأبواب الألومنيوم",
    shortDescription:
      "أصبحت النوافذ والأبواب الألومنيوم هي الرائدة في العالم في مجال تشطيب نوافذ وأبواب المنازل بسبب الكثير من الخصائص والمميزات التي تتميز بها. كالشكل الرائع وقدرتها علي مقاومة الصدأ وغير ذلك اللمسة الفنية الرائعة التي تعطيها للمنشئات أثناء تشطيب الديكور.",
    cardImage: "/images/services/aluminum/card.png",
    href: "/aluminum-windows-and-doors/",
    wpPageId: 4856,
  },
  {
    slug: "shower-cabins",
    title: "كبائن الاستحمام",
    shortDescription:
      "نقدم كبائن حمام مصنعة من الألومنيوم وزجاج السيكوريت أو البوليسترن وهو يعتبر من افضل المواد التى يمكن ان تستخدمها فى الحمامات. فهما يساعدان على جعل هذه المساحات اكثر اشراقا و اتساعا حتى فى المساحات الصغيرة",
    cardImage: "/images/services/shower/card.jpeg",
    href: "/shower-cabins/",
    wpPageId: 4285,
  },
  {
    slug: "handrail",
    title: "درابزين ألومنيوم (هاندريل)",
    shortDescription:
      "تتعدد أشكال الدرابزين (الهاندريل) إلى أكثر من صورة لتشمل الهاندريل الخطي والذي يأتي في صورة عيدان من الألومنيوم، أو في صورة هاندريل زجاجي شفاف أو ملون.",
    cardImage: "/images/services/handrail/card.png",
    href: "/handrail/",
    wpPageId: 4290,
  },
];

export function getServiceBySlug(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}
