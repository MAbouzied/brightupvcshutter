# Deployment Guide — brightupvcshutter.com

Static site built with Next.js `output: 'export'`. No server, database, or WordPress required at runtime.

## What to deploy

Upload the **contents** of:

```
brightupvcshutter-site/out/
```

This folder contains `index.html`, all page folders, `images/`, `_next/`, `sitemap.xml`, `robots.txt`, `.htaccess`, and `_redirects`.

**Do not deploy:**

- `brightupvcshutter.com/public_html/` (compromised WordPress)
- SQL dumps (`*.sql`)
- `brightupvcshutter-site/src/` or `node_modules/` (source only)

## Build before deploy

```bash
cd brightupvcshutter-site
npm ci
npm run build
npm run check-links
node scripts/validate-seo.mjs
```

The deployable artifact is `out/` after a successful build.

## Hostinger (Apache)

1. Back up the old site, then **remove** compromised WordPress files from `public_html/`.
2. Upload everything inside `out/` to `public_html/` (or domain document root).
3. Ensure `.htaccess` from `out/` is present — it handles:
   - Trailing slashes
   - Legacy URL redirects (`/upvc-windows-and-doors/` → `/upvc-windows/`, Arabic slugs, `/wp-admin/`, etc.)
4. Enable **SSL** (Let's Encrypt) in Hostinger panel.
5. Test key URLs and redirects after DNS propagates.

## Other static hosts

| Host | Notes |
|------|--------|
| **Netlify / Cloudflare Pages** | Use `out/` as publish directory; `_redirects` is included |
| **S3 + CloudFront** | Upload `out/`; configure redirects at CDN level |
| **Any static host** | Serve `out/` as document root |

## Contact form (optional)

The form is UI-only until configured. Before build, set:

```bash
# .env.local (then rebuild)
NEXT_PUBLIC_FORM_ENDPOINT=https://formspree.io/f/YOUR_ID
```

Rebuild after setting the variable so it is baked into the static export.

Until then, users can call **010 6004 2508** / **010 0060 5045** or use WhatsApp.

## Post-launch security (required)

1. **Do not** restore old WordPress PHP/plugins/themes to production.
2. **Rotate** all credentials exposed in the old environment:
   - Hosting panel (Hostinger)
   - FTP/SFTP
   - MySQL database
   - WordPress admin accounts
   - Email accounts used on the old site
3. Delete or archive the compromised WordPress tree offline only.
4. Submit `https://brightupvcshutter.com/sitemap.xml` in Google Search Console.

## Verify after deploy

- [ ] Homepage loads with RTL Arabic layout
- [ ] All 12 pages return 200
- [ ] `sitemap.xml` and `robots.txt` accessible
- [ ] Legacy URLs redirect correctly
- [ ] Phone and WhatsApp links work
- [ ] No `/wp-content/` paths in page HTML
- [ ] SSL certificate valid

## Local preview

```bash
npm run dev          # http://localhost:3000
# or
npm run build && npx serve out
```
