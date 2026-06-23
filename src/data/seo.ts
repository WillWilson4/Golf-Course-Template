import { business } from "./business";
export const seoDefaults = {
  title: business.name,
  description: business.description,
  image: "/social-card.svg",
};
export const pageSeo = {
  home: {
    title: `${business.name} | Public Golf in ${business.address.city}`,
    description: business.tagline,
  },
  course: {
    title: `The Course | ${business.name}`,
    description: `Explore the scorecard, hole-by-hole guide, course details, and playing policies at ${business.name}.`,
  },
  teeTimes: {
    title: `Tee Times & Rates | ${business.name}`,
    description: `View public golf rates and book a tee time at ${business.name}.`,
  },
  events: {
    title: `Golf Outings & Events | ${business.name}`,
    description: `Plan a golf outing, tournament, league, or clubhouse event in ${business.address.city}.`,
  },
  menu: {
    title: `Clubhouse Menu | ${business.name}`,
    description:
      "See current clubhouse food, drinks, specials, and kitchen hours.",
  },
  activities: {
    title: `Practice & Activities | ${business.name}`,
    description:
      "Explore the range, lessons, junior golf, simulators, clinics, and pro shop.",
  },
  memberships: {
    title: `Golf Memberships | ${business.name}`,
    description: `Compare membership options, pricing, and benefits at ${business.name}.`,
  },
  contact: {
    title: `Contact & Directions | ${business.name}`,
    description: `Find hours, directions, phone, email, and contact information for ${business.name}.`,
  },
  guides: {
    title: `Local Golf Guides | ${business.name}`,
    description: `Useful local golf guides, course tips, and planning resources from ${business.name}.`,
  },
} as const;

export const utilitySeo = {
  privacy: {
    title: `Privacy | ${business.name}`,
    description: `Privacy information for the ${business.name} website.`,
  },
  accessibility: {
    title: `Accessibility | ${business.name}`,
    description: `${business.name}'s practical commitment to an accessible website experience.`,
  },
  notFound: {
    title: `Page Not Found | ${business.name}`,
    description:
      "The requested page could not be found. Continue to course information, tee times, events, or contact details.",
  },
} as const;
