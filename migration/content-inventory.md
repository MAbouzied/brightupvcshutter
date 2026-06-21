# Content Inventory — brightupvcshutter.com

> Extracted read-only from WordPress SQL dump and uploads. No PHP executed.

## All public pages (Pass 2 — complete)

| Route | WP ID | Status | Notes |
|-------|-------|--------|-------|
| `/` | 1752 | ✅ Built | Home — hero, 7 services grid, about, projects, FAQs |
| `/our-services/` | 4125 | ✅ Built | Services hub + FAQs |
| `/shutter/` | 4144 | ✅ Built | Rolling shutter |
| `/mesh-shutters/` | 4218 | ✅ Built | شيش الحصيرة (new slug; WP slug conflicted) |
| `/smart-shutter/` | 4270 | ✅ Built | الشتر الذكي |
| `/upvc-windows/` | 4157, 4234 | ✅ Built | UPVC windows & doors |
| `/aluminum-windows-and-doors/` | 4856 | ✅ Built | Aluminum windows & doors |
| `/shower-cabins/` | 4285, 4171 | ✅ Built | Shower cabins |
| `/handrail/` | 4290, 4180 | ✅ Built | Handrail / درابزين |
| `/about-us/` | 682 | ✅ Built | About |
| `/our-projects/` | 4137 | ✅ Built | Project gallery (7 items, linked to services) |
| `/contact-us/` | 32 | ✅ Built | Contact + WhatsApp + FAQs (form UI only) |

## Services (7 — original copy & images preserved)

| Service | Route | Card image | WP ID |
|---------|-------|------------|-------|
| الرولنج شاتر | `/shutter/` | `services/shutter/card.png` | 4144 |
| شيش الحصيرة | `/mesh-shutters/` | mesh WhatsApp photo | 4218 |
| الشتر الذكي | `/smart-shutter/` | `Untitled-design-23.jpg` | 4270 |
| أبواب ونوافذ UPVC | `/upvc-windows/` | `services/upvc/card.png` | 4157 |
| نوافذ وأبواب الألومنيوم | `/aluminum-windows-and-doors/` | `services/aluminum/card.png` | 4856 |
| كبائن الاستحمام | `/shower-cabins/` | `services/shower/card.jpeg` | 4285 |
| درابزين (هاندريل) | `/handrail/` | `services/handrail/card.png` | 4290 |

## Navigation (menu ID 42 — preserved + expanded)

1. الرئيسية → `/`
2. من نحن → `/about-us/`
3. خدماتنا → `/our-services/` (+ 7 sub-services)
4. مشاريعنا → `/our-projects/`
5. تواصل معنا → `/contact-us/`

## Brand assets copied

- Logo: `uploads/2020/06/Bright-Logo.png` → `public/images/brand/logo.png`
- Hero: `uploads/2024/10/Bright-3.jpg`
- Service cards: original WP card images per service
- Service galleries: vetted WhatsApp / design images per service folder
- Projects: `Bright-1288-x-1080-px-{31..35}.jpg` + service gallery picks
- About: `Bright-570-x-630-px.jpg`

## Contact details

| Field | Value used | Source |
|-------|------------|--------|
| Email | info@brightupvcshutter.com | WP Contact Us page |
| Phone | 010 6004 2508, 010 0060 5045 | WP Contact Us page |
| WhatsApp | 010 6004 2508 (`+201060042508`) | WP Contact Us page |
| Address | أبراج سما - طريق المعادي الدائري، مصر | WP Contact Us page |

### Excluded wrong data (Schema Pro / old client)

- `+966 553 027 623`, `+966 537359416`, Riyadh/Saudi address — not used in the new site

## Excluded content

- All PHP files, plugins, themes, web shells
- Theme demo pages (Stoni interior design English content)
- Page 2422 — wrong business (أفق التقدم)
- Blog posts, spam submissions, SEO spam comments
- `uploads/2019/` demo assets
- Malware: `123.php`, `cd9600d0.php`, eval shells

## Redirects

See `public/.htaccess`, `public/_redirects`, and `migration/url-map.csv`
