# Migration Report — Pass 3 (Launch Ready)

**Date:** 2026-06-21  
**Project:** `brightupvcshutter-site/`  
**Status:** ✅ Launch-ready static export

## Final QA summary

| Check | Result |
|-------|--------|
| `npm run build` | ✅ Pass (16 static outputs, ~15 MB `out/`) |
| `npm run check-links` | ✅ Zero broken page links |
| `npm run validate-seo` | ✅ 12 pages — title, description, canonical, OG, single H1 |
| `npm run lint` | ✅ Pass |
| `sitemap.xml` / `robots.txt` | ✅ Present in `out/` |
| `.htaccess` / `_redirects` | ✅ Present in `out/` |
| `wp-content` in rendered HTML | ✅ None |
| PHP in deployable project | ✅ None (only unrelated `node_modules` dev file) |

## Completed routes (12)

`/`, `/our-services/`, `/shutter/`, `/mesh-shutters/`, `/smart-shutter/`, `/upvc-windows/`, `/aluminum-windows-and-doors/`, `/shower-cabins/`, `/handrail/`, `/about-us/`, `/our-projects/`, `/contact-us/`

## Pass 3 improvements

### Design / UX
- Shared `PageHero`, `SectionHeading`, `TrustBar` for consistent page rhythm
- Unified section spacing (`section-pad`), card hovers, focus styles
- Service card images: `object-contain` for PNG graphics, `object-cover` for photos
- Homepage trust bar with phone CTA; hero image visible on mobile
- CTAs upgraded with phone + WhatsApp on all banner sections
- Contact form success state directs to phone/WhatsApp (no dev jargon in UI)
- Gallery lazy-loading for images after the first 3
- Feature cards accent border; improved FAQ accordion styling

### SEO / Schema
- Added `WebPage` schema to all service detail pages
- SEO validation script (`npm run validate-seo`)
- Unique OG images per hub page (services, projects)
- JSON-LD multi-schema output uses `@graph` (avoids duplicate `@context` conflicts)
- FAQ content tightened (removed form-backend FAQ; added warranty/installation questions)

### Performance
- Resized large JPEGs (`bright-34.jpg`, mesh banner) to max 1400px width

## Deployment

See **`brightupvcshutter-site/DEPLOYMENT.md`** for full instructions.

**Deploy folder:** `brightupvcshutter-site/out/`  
**Contact form env:** `NEXT_PUBLIC_FORM_ENDPOINT` (optional, rebuild required)  
**Phone in schema/UI:** `010 6004 2508`, `010 0060 5045` (from WP Contact Us page)

## Owner-only TODOs

1. Set `NEXT_PUBLIC_FORM_ENDPOINT` when form provider is chosen
2. Deploy `out/` to clean hosting; remove compromised WordPress
3. Rotate hosting/DB/FTP/email credentials after cutover
4. Add social profile URLs to schema when available

## Do NOT deploy

- `brightupvcshutter.com/public_html/` (malware-compromised WordPress)
- SQL dumps, `src/`, `node_modules/`
