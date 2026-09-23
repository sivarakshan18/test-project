import Link from "next/link";
import { MenuItem } from "@/data/menu";

type ProductCardProps = {
  item: MenuItem;
  href?: string;
  showCategory?: boolean;
};

export default function ProductCard({ item, href, showCategory = false }: ProductCardProps) {
  const unavailable = !item.available;

  const card = (
    <div
      className={`flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--color-light-brown)]/30 bg-white shadow-sm transition-shadow hover:shadow-md ${
        unavailable ? "opacity-60" : ""
      }`}
    >
      <div className="relative flex h-40 items-center justify-center bg-[var(--color-cream)] text-6xl">
        {item.image}
        {unavailable && (
          <span className="absolute bottom-3 rounded-full bg-[var(--color-dark-brown)]/80 px-3 py-1 text-xs font-semibold text-[var(--color-cream)]">
            Currently unavailable
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-heading text-lg font-semibold text-[var(--color-dark-brown)]">
            {item.name}
          </h3>
          <span className="whitespace-nowrap font-semibold text-[var(--color-coffee-brown)]">
            ₹{item.price}
          </span>
        </div>
        {showCategory && (
          <span className="w-fit rounded-full bg-[var(--color-light-brown)]/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[var(--color-coffee-brown)]">
            {item.category}
          </span>
        )}
        <p className="text-sm text-[var(--color-dark-brown)]/70">{item.description}</p>
      </div>
    </div>
  );

  if (!href) {
    return card;
  }

  return (
    <Link
      href={href}
      className="h-full rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-coffee-brown)]"
    >
      {card}
    </Link>
  );
}
