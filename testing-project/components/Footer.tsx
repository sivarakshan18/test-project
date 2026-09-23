import Link from "next/link";
import { AtSign, MessageCircle, Share2 } from "lucide-react";
import Container from "./Container";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://facebook.com", label: "Facebook", icon: Share2 },
  { href: "https://instagram.com", label: "Instagram", icon: AtSign },
  { href: "https://twitter.com", label: "Twitter", icon: MessageCircle },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-dark-brown)] text-[var(--color-cream)]">
      <Container className="flex flex-col gap-10 py-12 sm:flex-row sm:justify-between">
        <div className="flex max-w-sm flex-col gap-3">
          <span className="font-heading text-xl font-bold">Brew &amp; Bean</span>
          <p className="text-sm text-[var(--color-cream)]/70">
            Your cozy place for fresh coffee, conversations and good food.
          </p>
          <div className="text-sm text-[var(--color-cream)]/70">
            <p>Mon - Fri: 8:00 AM - 10:00 PM</p>
            <p>Sat - Sun: 9:00 AM - 11:00 PM</p>
          </div>
          <div className="text-sm text-[var(--color-cream)]/70">
            <p>123 Anna Nagar, Chennai</p>
            <p>+91 98765 43210</p>
            <p>hello@brewandbean.com</p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-sm font-semibold uppercase tracking-widest text-[var(--color-light-brown)]">
            Explore
          </span>
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--color-cream)]/80 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-sm font-semibold uppercase tracking-widest text-[var(--color-light-brown)]">
            Follow Us
          </span>
          <div className="flex gap-4">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-[var(--color-cream)]/80 hover:text-white"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </Container>

      <div className="border-t border-[var(--color-cream)]/10 py-4 text-center text-xs text-[var(--color-cream)]/60">
        © {new Date().getFullYear()} Brew &amp; Bean. All rights reserved.
      </div>
    </footer>
  );
}
