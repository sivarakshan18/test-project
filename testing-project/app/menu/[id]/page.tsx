import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AddToOrderButton from "@/components/AddToOrderButton";
import Button from "@/components/Button";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { getMenuItem, menuItems } from "@/data/menu";

export function generateStaticParams() {
  return menuItems.map((item) => ({ id: String(item.id) }));
}

export async function generateMetadata({
  params,
}: PageProps<"/menu/[id]">): Promise<Metadata> {
  const { id } = await params;
  const item = getMenuItem(Number(id));

  if (!item) {
    return { title: "Item not found — Brew & Bean" };
  }

  return {
    title: `${item.name} — Brew & Bean`,
    description: item.description,
  };
}

export default async function ProductDetailPage({ params }: PageProps<"/menu/[id]">) {
  const { id } = await params;
  const item = getMenuItem(Number(id));

  if (!item) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 bg-white">
        <Container className="grid grid-cols-1 items-start gap-10 py-16 sm:py-24 md:grid-cols-2">
          <div className="flex h-72 items-center justify-center rounded-2xl bg-[var(--color-cream)] text-[8rem] sm:h-96 sm:text-[10rem]">
            {item.image}
          </div>

          <div className="flex flex-col gap-5">
            <span className="w-fit rounded-full bg-[var(--color-light-brown)]/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[var(--color-coffee-brown)]">
              {item.category}
            </span>

            <h1 className="font-heading text-3xl font-bold text-[var(--color-dark-brown)] sm:text-4xl">
              {item.name}
            </h1>

            <p className="text-base text-[var(--color-dark-brown)]/70 sm:text-lg">
              {item.description}
            </p>

            <span className="font-heading text-3xl font-bold text-[var(--color-coffee-brown)]">
              ₹{item.price}
            </span>

            <span
              className={`w-fit rounded-full px-3 py-1 text-sm font-semibold ${
                item.available
                  ? "bg-[var(--color-coffee-brown)]/10 text-[var(--color-coffee-brown)]"
                  : "bg-[var(--color-dark-brown)]/10 text-[var(--color-dark-brown)]/70"
              }`}
            >
              {item.available ? "Available today" : "Currently unavailable"}
            </span>

            <AddToOrderButton disabled={!item.available} />

            <Button href="/menu" variant="secondary" className="w-fit">
              Back to Menu
            </Button>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
