export const memberships = [
  {
    name: "Weekday",
    price: "$1,250",
    detail: "Monday–Friday access",
    featured: false,
    benefits: [
      "Unlimited weekday green fees",
      "Range discount",
      "Member events",
    ],
  },
  {
    name: "Full Golf",
    price: "$1,850",
    detail: "Seven-day access",
    featured: true,
    benefits: [
      "Unlimited green fees",
      "14-day booking window",
      "League eligibility",
      "Guest rate",
    ],
  },
  {
    name: "Young Adult",
    price: "$950",
    detail: "Ages 18–29",
    featured: false,
    benefits: ["Unlimited green fees", "Seven-day access", "Range discount"],
  },
] as const;

export const membershipBenefits = [
  {
    title: "Earlier booking",
    body: "Plan the times that work for your schedule.",
  },
  {
    title: "A golf routine",
    body: "Make regular golf easier to put on the calendar.",
  },
  {
    title: "A club connection",
    body: "Join events, leagues, and a familiar local group.",
  },
] as const;

export const membershipFaqs = [
  {
    question: "Are cart fees included?",
    answer:
      "Season cart plans are available separately. Daily cart fees apply unless a cart plan is added.",
  },
  {
    question: "Can I pay in installments?",
    answer:
      "A two-payment option is available when the first payment is made before the season.",
  },
  {
    question: "Do memberships renew automatically?",
    answer:
      "No. Members receive renewal information each year and choose whether to continue.",
  },
  {
    question: "Are memberships transferable?",
    answer:
      "Memberships are assigned to the named player and cannot be transferred.",
  },
] as const;

export const membershipDisclaimer =
  "Prices are sample content and should be updated before launch.";
