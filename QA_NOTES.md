# Manual QA notes

Use a production build or Cloudflare preview deployment. Record issues and the tested browser/device beside each item.

## Desktop

- [ ] Homepage hero, status, quick links, sections, and final CTA are balanced.
- [ ] Header links, booking action, and current-page state work.
- [ ] Footer booking, call, navigation, contact, and utility links work.
- [ ] Course scorecard and hole cards are readable.
- [ ] Rates, menu, event, activity, membership, and contact layouts are aligned.

## Mobile

- [ ] Homepage at 320px, 375px, and 430px has no horizontal overflow.
- [ ] Call, Book, and Menu actions remain visible and easy to tap.
- [ ] Mobile navigation opens, reports state, and supports keyboard use.
- [ ] Scorecard and rates tables scroll horizontally with visible guidance.
- [ ] Cards, CTA groups, forms, and footer links have comfortable spacing.

## Content and interactions

- [ ] Booking, telephone, email, directions, menu, membership, and outing links are correct.
- [ ] Form fields have labels and required states; disabled forms explain the limitation.
- [ ] Guide index lists every article and article links work.
- [ ] Guide typography, headings, lists, internal links, and final CTA are readable.
- [ ] Custom 404 returns a helpful page and links to working destinations.

## Accessibility and SEO

- [ ] Skip link is visible on focus and reaches the main content.
- [ ] Keyboard focus is visible across navigation and controls.
- [ ] Each page has one H1 and a logical heading order.
- [ ] Decorative visuals are hidden; meaningful placeholders have labels.
- [ ] Titles, descriptions, canonicals, social image, robots, and structured data are correct.
- [ ] Run Lighthouse on representative desktop and mobile pages.

## Deployment

- [ ] `npm run check` and `npm run build` pass.
- [ ] Cloudflare preview serves all routes, `_headers`, sitemap, robots, and custom 404.
- [ ] Production-domain redirects and Search Console sitemap submission are ready.
