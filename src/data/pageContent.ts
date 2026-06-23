import { business } from "./business";

export const contactContent = {
  hero: {
    eyebrow: "Contact & directions",
    title: "Let’s make the next step easy.",
    intro:
      "Call for today’s course conditions and tee-time help, or email for events, memberships, and general questions.",
  },
  visit: {
    eyebrow: "Visit Cedar Ridge",
    title: "Everything you need before you go.",
  },
  map: {
    eyebrow: "Find us",
    title: `Just outside ${business.address.city}.`,
    label: `Map location for ${business.name}`,
    heading: "Interactive map placeholder",
    body: "Replace this block with a privacy-conscious map embed or an optimized static map image.",
  },
} as const;

export const guideCta = {
  title: `Ready to play ${business.shortName}?`,
  body: "Review the course, find a time, and give the golf shop a call if you need a hand.",
  primaryLabel: "Book a tee time",
  secondaryLabel: "View the course",
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
