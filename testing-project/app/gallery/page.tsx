import type { Metadata } from "next";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import GalleryGrid from "@/components/GalleryGrid";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Gallery | Brew & Bean",
  description:
    "Step inside Brew & Bean through photos of our coffee, café, baristas, desserts, seating, and fresh bakery items.",
};

export default function GalleryPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-[var(--color-dark-brown)] py-16 text-[var(--color-cream)] sm:py-24">
          <div
            className="absolute -right-24 -top-24 h-72 w-72 rounded-full border-[48px] border-[var(--color-light-brown)]/10"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-28 -left-24 h-64 w-64 rounded-full bg-[var(--color-coffee-brown)]/35 blur-3xl"
            aria-hidden="true"
          />
          <Container className="relative flex flex-col items-center gap-4 text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-light-brown)]">
              Inside Brew &amp; Bean
            </span>
            <h1 className="max-w-3xl font-heading text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Coffee, comfort, and a little everyday magic.
            </h1>
            <p className="max-w-2xl text-base leading-7 text-[var(--color-cream)]/70 sm:text-lg">
              Take a look around our café—from your first fresh pour to the
              corner you will want to make your own.
            </p>
          </Container>
        </section>

        <section className="bg-[var(--color-cream)] py-16 sm:py-24">
          <Container>
            <GalleryGrid />
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}
