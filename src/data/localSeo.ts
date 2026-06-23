import { business } from "./business";

export const localSeo = {
  eyebrow: `Golf near ${business.address.city}`,
  title: "Public golf with a local rhythm.",
  body: `${business.name} serves daily-fee players, league golfers, families, and groups throughout the ${business.address.city} area. Four tees, clear rates, practice options, and a full clubhouse make planning a round simple.`,
  link: {
    label: "Read our local golf guide",
    href: "/guides/best-public-golf-near-cedar-ridge",
  },
} as const;
