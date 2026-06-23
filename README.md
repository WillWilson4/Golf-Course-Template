# Cedar Ridge Golf Club website

A static-first, mobile-friendly golf course starter built with Astro, TypeScript, and Tailwind CSS. Business content is centralized in data files, guide articles use Markdown, and the production build contains static HTML with no client framework runtime.

## Local setup

Requirements: Node.js 22.12 or newer and npm.

```bash
npm install
npm run dev
```

Astro prints the local development URL. To create and inspect the production build:

```bash
npm run check
npm run build
npm run preview
```

The generated site is written to `dist/`.

## Cloudflare Pages

Connect this GitHub repository in Cloudflare Pages and use:

- Framework preset: **Astro**
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: `/`
- Node.js version: `22.12` or newer

No adapter, Pages Functions, database, or environment variables are required. The project uses Astro's static output.

Before deploying, replace the example domain in these three places:

- `astro.config.mjs` (`site`)
- `src/data/business.ts` (`siteUrl`)
- `public/robots.txt` (sitemap URL)

## Edit course content

Most site-specific content lives in `src/data/`:

- `business.ts` — name, address, phone, hours, booking link, and site URL
- `course.ts` — status, stats, tees, holes, and policies
- `rates.ts` — green fees and rate notes
- `menu.ts` — clubhouse sections, items, and specials
- `memberships.ts` — plans, prices, and benefits
- `events.ts` and `activities.ts` — card content
- `navigation.ts` — primary navigation
- `seo.ts` — default page titles and descriptions

The current course name, contact details, rates, dates, and links are demonstration content. Replace them before launch. Visual placeholders on the Course and Contact pages are intentionally lightweight; add optimized `.webp` or `.avif` photography under `public/images/` when real assets are available.

## Add a guide

Create a Markdown file in `src/content/guides/` with this frontmatter:

```md
---
title: Guide title
description: A concise search description.
published: 2026-06-22
eyebrow: Local golf guide
---
```

The guide index and static detail route are generated automatically. Internal Markdown links should use site paths such as `/tee-times`.

## Add a page

Add an `.astro` file under `src/pages/`, use `BaseLayout` for metadata and global structure, and compose the reusable components in `src/components/`. Add its navigation item and SEO copy to the related data files.

## SEO and forms

The site includes canonical URLs, unique page metadata, Open Graph and Twitter cards, a sitemap, `robots.txt`, local-business structured data, and FAQ/article schema where relevant.

The event and contact forms are accessible static UI placeholders. They do not transmit or store data. Connect a chosen form endpoint and update the explanatory copy before enabling submission.
