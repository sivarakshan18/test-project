"use client";

import Link from "next/link";
import { useState } from "react";
import { Coffee, Menu, X } from "lucide-react";
import Container from "./Container";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-light-brown)]/30 bg-[var(--color-cream)]/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-heading text-xl font-bold text-[var(--color-coffee-brown)]">
          <Coffee className="h-6 w-6" />
          Brew &amp; Bean
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[var(--color-dark-brown)] transition-colors hover:text-[var(--color-coffee-brown)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-[var(--color-dark-brown)] md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {isOpen && (
        <nav className="border-t border-[var(--color-light-brown)]/30 bg-[var(--color-cream)] md:hidden">
          <Container className="flex flex-col gap-1 py-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-2 py-2 text-sm font-medium text-[var(--color-dark-brown)] hover:bg-[var(--color-light-brown)]/20"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </Container>
        </nav>
      )}
    </header>
  );
}
