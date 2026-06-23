export const course = {
  overview: {
    eyebrow: "The course",
    title: "Interesting choices. Honest golf.",
    intro:
      "Our 18-hole layout moves through open meadows, mature cedar stands, and a rolling ridge—with a tee that fits your day.",
  },
  par: 72,
  holesCount: 18,
  length: "6,742 yards",
  opened: 1998,
  status: {
    label: "Course open",
    detail: "Carts permitted · Range open until dusk",
  },
  stats: [
    { value: "18", label: "thoughtful holes" },
    { value: "72", label: "course par" },
    { value: "6,742", label: "yards from the back tees" },
    { value: "4", label: "sets of tees" },
  ],
  tees: [
    { name: "Cedar", color: "#123C2D", yards: 6742, rating: 72.8, slope: 132 },
    { name: "Ridge", color: "#C6A15B", yards: 6230, rating: 70.4, slope: 126 },
    { name: "Meadow", color: "#EEF1EC", yards: 5658, rating: 68.1, slope: 119 },
    {
      name: "Forward",
      color: "#B34C43",
      yards: 4984,
      rating: 70.2,
      slope: 122,
    },
  ],
  holes: Array.from({ length: 18 }, (_, i) => ({
    number: i + 1,
    name: [
      "Opening Line",
      "The Bend",
      "Overlook",
      "Long Meadow",
      "Pines",
      "The Carry",
      "Ridge Run",
      "Corner",
      "Homeward",
      "Fresh Start",
      "Split Fairway",
      "The Shelf",
      "Cedar Lane",
      "High Point",
      "Creekside",
      "Long View",
      "The Narrows",
      "Clubhouse",
    ][i],
    par: [4, 4, 3, 5, 4, 3, 5, 4, 4, 4, 3, 5, 4, 4, 3, 5, 4, 4][i],
    yards: [
      386, 402, 164, 521, 377, 181, 538, 349, 424, 391, 173, 510, 405, 358, 156,
      544, 372, 391,
    ][i],
    tip:
      i % 3 === 0
        ? "Favor the left center for the best angle in."
        : i % 3 === 1
          ? "Club selection matters more than distance here."
          : "The green rewards a shot below the hole.",
  })),
  policies: [
    "Please arrive 20 minutes before your tee time.",
    "Each player must have a set of clubs.",
    "Outside alcohol is not permitted.",
    "Appropriate golf attire is requested.",
    "Rain checks are issued at the golf shop when play is suspended.",
  ],
  teeGuide: {
    title: "Which tee should I play?",
    body: "Choose a set of tees that lets you reach most par fours in regulation and keeps long approach shots occasional—not constant. The golf shop can help if you are between tees.",
  },
  gallery: {
    eyebrow: "Course gallery",
    title: "The view changes with the round.",
    intro:
      "Replace these lightweight placeholders with optimized WebP or AVIF course photography.",
    placeholders: [
      {
        label: "Course photography placeholder: opening fairway",
        tone: "forest",
      },
      {
        label: "Course photography placeholder: putting green",
        tone: "fairway",
      },
      {
        label: "Course photography placeholder: clubhouse at sunset",
        tone: "gold",
      },
    ],
  },
} as const;
