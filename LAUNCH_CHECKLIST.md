# Launch checklist

Reference: [CUSTOMIZE.md](./CUSTOMIZE.md) · [CLIENT_ONBOARDING.md](./CLIENT_ONBOARDING.md) · [DEMO_CONTENT_CHECKLIST.md](./DEMO_CONTENT_CHECKLIST.md) · [QA_NOTES.md](./QA_NOTES.md)

- [ ] Confirm the onboarding questionnaire is complete.
- [ ] Complete every demo-content replacement check.
- [ ] Verify the production domain in `astro.config.mjs`, `business.ts`, and `robots.txt`.
- [ ] Verify booking URL, phone, email, address, directions, coordinates, and hours.
- [ ] Approve rates, menu items, specials, membership prices, policies, and guide content.
- [ ] Replace course-photo placeholders and review the generated social image.
- [ ] Connect contact/event forms and update privacy language, or remove the forms.
- [ ] Add real social and Google Business Profile links.
- [ ] Complete the manual desktop, mobile, accessibility, metadata, and 404 checks.
- [ ] Run `npm ci`, `npm run check`, `npm run build`, and `npm audit`.
- [ ] Deploy through Cloudflare Pages using output directory `dist`.
- [ ] Verify response headers and routes on the Cloudflare preview URL.
- [ ] Submit the sitemap in Google Search Console after production launch.
