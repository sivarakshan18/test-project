export type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: "Coffee" | "Tea" | "Snacks" | "Desserts";
  image: string;
};

export const popularItems: MenuItem[] = [
  {
    id: 1,
    name: "Cappuccino",
    description: "Rich espresso topped with steamed milk foam.",
    price: 149,
    category: "Coffee",
    image: "☕",
  },
  {
    id: 2,
    name: "Latte",
    description: "Smooth espresso with creamy steamed milk.",
    price: 159,
    category: "Coffee",
    image: "🥛",
  },
  {
    id: 3,
    name: "Matcha Latte",
    description: "Creamy matcha with chilled or steamed milk.",
    price: 169,
    category: "Tea",
    image: "🍵",
  },
  {
    id: 4,
    name: "Croissant",
    description: "Buttery, flaky pastry baked fresh every morning.",
    price: 99,
    category: "Snacks",
    image: "🥐",
  },
];
