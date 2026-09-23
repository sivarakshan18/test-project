export type MenuCategory = "Coffee" | "Tea" | "Snacks" | "Desserts";

export type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  image: string;
  available: boolean;
};

export const categories: MenuCategory[] = ["Coffee", "Tea", "Snacks", "Desserts"];

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Cappuccino",
    description: "Rich espresso topped with steamed milk foam.",
    price: 149,
    category: "Coffee",
    image: "☕",
    available: true,
  },
  {
    id: 2,
    name: "Latte",
    description: "Smooth espresso with creamy steamed milk.",
    price: 159,
    category: "Coffee",
    image: "🥛",
    available: true,
  },
  {
    id: 3,
    name: "Matcha Latte",
    description: "Creamy matcha with chilled or steamed milk.",
    price: 169,
    category: "Tea",
    image: "🍵",
    available: true,
  },
  {
    id: 4,
    name: "Croissant",
    description: "Buttery, flaky pastry baked fresh every morning.",
    price: 99,
    category: "Snacks",
    image: "🥐",
    available: true,
  },
  {
    id: 5,
    name: "Espresso",
    description: "A bold single shot for a quick pick-me-up.",
    price: 119,
    category: "Coffee",
    image: "☕",
    available: true,
  },
  {
    id: 6,
    name: "Cold Brew",
    description: "Slow-steeped for twelve hours, served over ice.",
    price: 179,
    category: "Coffee",
    image: "🧊",
    available: true,
  },
  {
    id: 7,
    name: "Mocha",
    description: "Espresso and dark chocolate with steamed milk.",
    price: 189,
    category: "Coffee",
    image: "🍫",
    available: false,
  },
  {
    id: 8,
    name: "Masala Chai",
    description: "Spiced black tea simmered with milk and ginger.",
    price: 89,
    category: "Tea",
    image: "🫖",
    available: true,
  },
  {
    id: 9,
    name: "Iced Lemon Tea",
    description: "Chilled black tea with fresh lemon and mint.",
    price: 129,
    category: "Tea",
    image: "🍋",
    available: true,
  },
  {
    id: 10,
    name: "Veg Sandwich",
    description: "Grilled sandwich with garden veggies and herb mayo.",
    price: 149,
    category: "Snacks",
    image: "🥪",
    available: true,
  },
  {
    id: 11,
    name: "Cheese Garlic Bread",
    description: "Toasted garlic bread loaded with melted cheese.",
    price: 139,
    category: "Snacks",
    image: "🧄",
    available: true,
  },
  {
    id: 12,
    name: "Chocolate Brownie",
    description: "Fudgy brownie served warm with a dusting of cocoa.",
    price: 129,
    category: "Desserts",
    image: "🍰",
    available: true,
  },
  {
    id: 13,
    name: "Blueberry Cheesecake",
    description: "Creamy baked cheesecake with a blueberry swirl.",
    price: 199,
    category: "Desserts",
    image: "🫐",
    available: true,
  },
  {
    id: 14,
    name: "Tiramisu",
    description: "Coffee-soaked layers with mascarpone cream.",
    price: 219,
    category: "Desserts",
    image: "🍮",
    available: false,
  },
];

const popularIds = [1, 2, 3, 4];

export const popularItems: MenuItem[] = popularIds
  .map((id) => menuItems.find((item) => item.id === id))
  .filter((item): item is MenuItem => Boolean(item));

export function getMenuItem(id: number): MenuItem | undefined {
  return menuItems.find((item) => item.id === id);
}
