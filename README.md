# Golf Course Website Starter

A premium, static-first golf course website template built with Astro, TypeScript, and Tailwind CSS. It includes public golf, rates, outings, menu, activities, memberships, contact, local guides, SEO metadata, structured data, and utility pages without a client-side framework runtime.

The included Cedar Ridge Golf Club content is demonstration data. Use the handoff documents before adapting the starter for a real course:

- [CLIENT_ONBOARDING.md](./CLIENT_ONBOARDING.md) — collect course-owner content and requirements
- [CUSTOMIZE.md](./CUSTOMIZE.md) — make file-based content and branding changes
- [DEMO_CONTENT_CHECKLIST.md](./DEMO_CONTENT_CHECKLIST.md) — remove every demo value
- [LAUNCH_CHECKLIST.md](./LAUNCH_CHECKLIST.md) — prepare and deploy the production site
- [QA_NOTES.md](./QA_NOTES.md) — complete manual desktop, mobile, SEO, and deploy checks

## Stack

- Astro with static output
- TypeScript
- Tailwind CSS
- Markdown content collections
- Astro sitemap integration
- Cloudflare Pages-compatible static assets and headers

No database, authentication, CMS, server functions, or paid backend service is required.

## Local setup

Requires Node.js 22.12 or newer and npm.

```bash
npm ci
npm run dev
```

Production validation and preview:

```bash
npm run check
npm run build
npm run preview
```

The generated site is written to `dist/`, which is intentionally not committed.

## Cloudflare Pages settings

- Framework preset: **Astro**
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: `/`
- Node.js version: `22.12` or newer

No adapter, Pages Functions, database, or environment variables are currently required. Conservative response headers live in `public/_headers`.

## Where to edit

- Course identity, contact details, domain, booking link, hours: `src/data/business.ts`
- Homepage and calls to action: `src/data/home.ts`
- Scorecard, holes, policies, gallery labels: `src/data/course.ts`
- Rates, menu, memberships, events, activities: matching files in `src/data/`
- Navigation, announcement, social image, site behavior: `src/data/siteSettings.ts`
- Titles and descriptions: `src/data/seo.ts`
- Colors and typography tokens: `src/styles/global.css`
- Guide articles: `src/content/guides/`

See [CUSTOMIZE.md](./CUSTOMIZE.md) for the complete file map.

## Demo content and forms

Rates, prices, contact details, location, booking URL, and local guide references are sample content. Complete [DEMO_CONTENT_CHECKLIST.md](./DEMO_CONTENT_CHECKLIST.md) before launch.

The contact and event forms are accessible UI placeholders only. They do not transmit or store data. Connect an approved form destination and update the privacy page, or remove the forms.

## SEO and maintenance

The starter includes unique page metadata, canonicals, Open Graph and Twitter tags, a generated social card, sitemap, `robots.txt`, LocalBusiness/GolfCourse schema, breadcrumb schema, FAQ schema, and guide article schema.

Dependency audit notes are recorded in [MAINTENANCE.md](./MAINTENANCE.md). Do not use `npm audit fix --force` without reviewing the resulting major tooling changes.
