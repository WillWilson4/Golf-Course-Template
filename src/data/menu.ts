export const menuSections = [
  {
    title: "From the grill",
    items: [
      {
        name: "Cedar Burger",
        description: "Two patties, cheddar, caramelized onion, house sauce",
        price: "$14",
      },
      {
        name: "Grilled Chicken Club",
        description: "Bacon, lettuce, tomato, herb aioli",
        price: "$13",
      },
      {
        name: "Wisconsin Brat",
        description: "Grilled onions, mustard, toasted roll",
        price: "$10",
      },
    ],
  },
  {
    title: "Quick turns",
    items: [
      {
        name: "Turkey Wrap",
        description: "Turkey, greens, tomato, cheddar, ranch",
        price: "$11",
      },
      {
        name: "Clubhouse Caesar",
        description: "Romaine, parmesan, croutons; add chicken +$4",
        price: "$10",
      },
      {
        name: "Basket of Fries",
        description: "Sea salt, house dipping sauce",
        price: "$6",
      },
    ],
  },
  {
    title: "Drinks",
    items: [
      {
        name: "Local Draft",
        description: "Rotating Wisconsin tap",
        price: "$6",
      },
      {
        name: "Transfusion",
        description: "Vodka, grape, ginger ale, lime",
        price: "$9",
      },
      {
        name: "Zero-Proof Cooler",
        description: "Citrus, mint, soda",
        price: "$5",
      },
    ],
  },
] as const;
export const specials = [
  "Friday fish fry · 4–8 PM",
  "Wednesday league burger · $10",
  "Weekend breakfast sandwich · until 11 AM",
];
export const menuDisclaimer =
  "Items, availability, and prices are sample content. Update them before launch.";
