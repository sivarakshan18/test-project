"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { categories, menuItems } from "@/data/menu";
import CategoryFilter, { CategoryOption } from "./CategoryFilter";
import Container from "./Container";
import ProductCard from "./ProductCard";

const categoryOptions: CategoryOption[] = ["All", ...categories];

export default function MenuBrowser() {
  const [activeCategory, setActiveCategory] = useState<CategoryOption>("All");
  const [query, setQuery] = useState("");

  const filteredItems = useMemo(() => {
    const search = query.trim().toLowerCase();

    return menuItems.filter((item) => {
      const matchesCategory = activeCategory === "All" || item.category === activeCategory;
      const matchesSearch =
        search === "" ||
        item.name.toLowerCase().includes(search) ||
        item.description.toLowerCase().includes(search) ||
        item.category.toLowerCase().includes(search);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, query]);

  const emptyMessage =
    menuItems.length === 0
      ? "Our menu is being updated. Please check back soon."
      : query.trim() !== ""
        ? `No items match “${query.trim()}”.`
        : "No items available in this category.";

  return (
    <section className="bg-white py-16 sm:py-24">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col gap-6">
          <div className="relative mx-auto w-full max-w-md">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[var(--color-light-brown)]" />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search coffee, tea, snacks…"
              aria-label="Search the menu"
              className="w-full rounded-full border-2 border-[var(--color-light-brown)]/40 bg-[var(--color-cream)] py-3 pl-12 pr-5 text-sm text-[var(--color-dark-brown)] transition-colors placeholder:text-[var(--color-dark-brown)]/50 focus:border-[var(--color-coffee-brown)] focus:outline-none sm:text-base"
            />
          </div>

          <CategoryFilter
            categories={categoryOptions}
            active={activeCategory}
            onChange={setActiveCategory}
          />
        </div>

        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item) => (
              <ProductCard key={item.id} item={item} href={`/menu/${item.id}`} showCategory />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-3 rounded-2xl border border-[var(--color-light-brown)]/30 bg-[var(--color-cream)] px-6 py-16 text-center">
            <span className="text-5xl">🍽️</span>
            <p className="text-base text-[var(--color-dark-brown)]/70">{emptyMessage}</p>
          </div>
        )}
      </Container>
    </section>
  );
}
