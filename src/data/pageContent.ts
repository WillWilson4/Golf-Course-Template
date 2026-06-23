import { business } from "./business";

export const contactContent = {
  hero: {
    eyebrow: "Contact & directions",
    title: "Let’s make the next step easy.",
    intro:
      "Call for today’s course conditions and tee-time help, or email for events, memberships, and general questions.",
  },
  visit: {
    eyebrow: `Visit ${business.shortName}`,
    title: "Everything you need before you go.",
  },
  map: {
    eyebrow: "Find us",
    title: `Just outside ${business.address.city}.`,
    label: `Map location for ${business.name}`,
    heading: "Plan your visit",
    body: `${business.address.street}, ${business.address.city}, ${business.address.region} ${business.address.postalCode}`,
  },
} as const;

export const guideCta = {
  title: `Ready to play ${business.shortName}?`,
  body: "Review the course, find a time, and give the golf shop a call if you need a hand.",
  primaryLabel: "Book a tee time",
  secondaryLabel: "View the course",
} as const;

export const guideIndexContent = {
  hero: {
    eyebrow: "Guides",
    title: "Useful notes for better local golf.",
    intro:
      "Practical help for choosing a course, planning a round, joining a league, and getting more from the golf season.",
  },
  section: {
    eyebrow: "Latest guides",
    title: "Start with the question you have.",
  },
} as const;

export const privacyContent = {
  title: "Privacy",
  intro:
    "This static website does not collect or store personal information by default.",
} as const;

export const accessibilityContent = {
  title: "Accessibility",
  intro: `${business.name} is committed to providing a useful website experience for every visitor.`,
} as const;
