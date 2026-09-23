import { MenuItem } from "@/data/menu";

export default function ProductCard({ item }: { item: MenuItem }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-[var(--color-light-brown)]/30 bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="flex h-40 items-center justify-center bg-[var(--color-cream)] text-6xl">
        {item.image}
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
        <p className="text-sm text-[var(--color-dark-brown)]/70">{item.description}</p>
      </div>
    </div>
  );
}
