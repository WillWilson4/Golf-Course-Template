import { business } from "./business";

export const home = {
  hero: {
    eyebrow: `${business.address.city}, ${business.address.region}`,
    title: "Make a good day of it.",
    intro: business.tagline,
    primaryCta: { label: "Book a tee time", href: business.bookingUrl },
    secondaryCta: { label: "Plan an outing", href: "/events" },
    tertiaryCta: { label: "View rates", href: "/tee-times#rates" },
  },
  quickSection: {
    eyebrow: "Start here",
    title: "Golf that fits the day.",
    intro:
      "Come for a quick nine, a regular league night, a weekend round, or a well-run group event.",
  },
  quickCards: [
    {
      title: "The course",
      body: "A fair, engaging 18-hole layout with four sets of tees.",
      href: "/course",
      number: "01",
    },
    {
      title: "Events & outings",
      body: "Practical group packages, scoring support, and clubhouse meals.",
      href: "/events",
      number: "02",
    },
    {
      title: "Clubhouse menu",
      body: "Food and drinks for the turn, the table, or a casual visit.",
      href: "/menu",
      number: "03",
    },
    {
      title: "Memberships",
      body: "Straightforward options for regular local golfers.",
      href: "/memberships",
      number: "04",
    },
  ],
  stats: {
    eyebrow: "By the numbers",
    title: "A course with room to choose your game.",
  },
  outings: {
    eyebrow: "Groups welcome",
    title: "Outings without the guesswork.",
    intro:
      "We help organizers shape the golf, food, scoring, and schedule around the group—not the other way around.",
    cta: { label: "Explore event options", href: "/events" },
  },
  clubhouse: {
    eyebrow: "The clubhouse",
    title: "Good food. Cold drinks. No ceremony required.",
    intro:
      "Stop in before the round, grab something at the turn, or settle in afterward. Our menu stays familiar, useful, and seasonal.",
    featureLabel: "This week",
    feature:
      "Friday fish fry, league-night burgers, and breakfast sandwiches on the weekend.",
    hoursLabel: "Kitchen hours",
    hours: "Daily\n11 AM–8 PM",
  },
  finalCta: {
    title: "Ready when you are.",
    body: `${business.address.street}, ${business.address.city} · Call ${business.phone} for course conditions or same-day availability.`,
    primaryCta: { label: "Book a tee time", href: business.bookingUrl },
    secondaryCta: { label: "Get directions", href: "/contact" },
  },
} as const;
