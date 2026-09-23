import Button from "./Button";
import Container from "./Container";

export default function Hero() {
  return (
    <section className="bg-[var(--color-cream)]">
      <Container className="grid grid-cols-1 items-center gap-10 py-16 sm:py-24 md:grid-cols-2">
        <div className="flex flex-col items-center gap-6 text-center md:items-start md:text-left">
          <h1 className="font-heading text-4xl font-bold leading-tight text-[var(--color-dark-brown)] sm:text-5xl lg:text-6xl">
            Fresh Coffee. Good Moments.
          </h1>
          <p className="max-w-md text-lg text-[var(--color-dark-brown)]/75">
            Your cozy place for fresh coffee, conversations and good food.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button href="/menu" variant="primary">
              Explore Menu
            </Button>
            <Button href="/about" variant="secondary">
              Learn More
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="flex h-64 w-64 items-center justify-center rounded-full bg-[var(--color-light-brown)]/30 text-[9rem] sm:h-80 sm:w-80">
            ☕
          </div>
        </div>
      </Container>
    </section>
  );
}
