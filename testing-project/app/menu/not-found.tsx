import Button from "@/components/Button";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function MenuNotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 bg-white">
        <Container className="flex flex-col items-center gap-5 py-24 text-center sm:py-32">
          <span className="text-6xl">☕</span>
          <h1 className="font-heading text-3xl font-bold text-[var(--color-dark-brown)] sm:text-4xl">
            We couldn&apos;t find that item
          </h1>
          <p className="max-w-md text-base text-[var(--color-dark-brown)]/70">
            It may have been taken off the menu. Browse the full menu to find your next favourite.
          </p>
          <Button href="/menu" variant="primary">
            Back to Menu
          </Button>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
