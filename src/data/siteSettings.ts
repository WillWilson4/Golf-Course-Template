import { business } from "./business";

export const siteSettings = {
  locale: "en-US",
  themeColor: "#123C2D",
  defaultSocialImage: "/social-card.svg",
  robots: "index, follow",
  bookingLabel: "Book tee time",
  callLabel: "Call",
  announcement: {
    enabled: true,
    label: "Course open",
    detail: "Carts permitted · Range open until dusk",
    linkLabel: "Call the golf shop",
    linkHref: business.phoneHref,
  },
  footerUtilityLinks: [
    { label: "Privacy", href: "/privacy" },
    { label: "Accessibility", href: "/accessibility" },
  ],
} as const;
