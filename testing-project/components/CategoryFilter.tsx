"use client";

import { MenuCategory } from "@/data/menu";

export type CategoryOption = "All" | MenuCategory;

type CategoryFilterProps = {
  categories: CategoryOption[];
  active: CategoryOption;
  onChange: (category: CategoryOption) => void;
};

export default function CategoryFilter({ categories, active, onChange }: CategoryFilterProps) {
  return (
    <div className="-mx-6 flex gap-3 overflow-x-auto px-6 pb-1 sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0">
      {categories.map((category) => {
        const isActive = category === active;

        return (
          <button
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(category)}
            className={`whitespace-nowrap rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
              isActive
                ? "bg-[var(--color-coffee-brown)] text-white"
                : "border-2 border-[var(--color-coffee-brown)] text-[var(--color-coffee-brown)] hover:bg-[var(--color-coffee-brown)] hover:text-white"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
