export const rates = [
  { label: "Weekday 18 holes", walking: "$38", riding: "$56" },
  { label: "Weekend 18 holes", walking: "$46", riding: "$64" },
  { label: "Weekday 9 holes", walking: "$24", riding: "$34" },
  { label: "Weekend 9 holes", walking: "$29", riding: "$39" },
  { label: "Twilight after 3 PM", walking: "$27", riding: "$39" },
  { label: "Junior (17 and under)", walking: "$18", riding: "—" },
  { label: "Senior weekday", walking: "$31", riding: "$47" },
] as const;
export const rateNotes = [
  "Rates include tax.",
  "Twilight start time may change seasonally.",
  "Junior riders must meet cart-operation requirements.",
  "Call the golf shop for same-day availability.",
];
export const rateDisclaimer =
  "Rates are demonstration content and may change by season, day, and time. Confirm current pricing before launch.";
