import Container from "./Container";
import SectionTitle from "./SectionTitle";

export default function MenuHeader() {
  return (
    <section className="bg-[var(--color-cream)]">
      <Container className="grid grid-cols-1 items-center gap-10 py-16 sm:py-20 md:grid-cols-[2fr_1fr]">
        <SectionTitle
          eyebrow="Our Menu"
          title="Brewed Fresh, Served Warm"
          description="Browse our coffees, teas, snacks and desserts — all made fresh in-house every day."
          align="left"
        />

        <div className="flex items-center justify-center md:justify-end">
          <div className="flex h-40 w-40 items-center justify-center rounded-full bg-[var(--color-light-brown)]/30 text-[5rem] sm:h-52 sm:w-52 sm:text-[7rem]">
            ☕
          </div>
        </div>
      </Container>
    </section>
  );
}
