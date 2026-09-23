import Image from "next/image";
import { Coffee } from "lucide-react";
import Container from "./Container";

export default function StorySection() {
  return (
    <section className="bg-[var(--color-cream)] py-16 sm:py-24">
      <Container className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div className="order-2 flex flex-col items-start gap-5 lg:order-1">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-coffee-brown)]">
            Our Story
          </span>
          <h1 className="max-w-2xl font-heading text-4xl font-bold leading-tight text-[var(--color-dark-brown)] sm:text-5xl lg:text-6xl">
            Good coffee brings people together.
          </h1>
          <div className="max-w-xl space-y-4 text-base leading-7 text-[var(--color-dark-brown)]/75 sm:text-lg">
            <p>
              Brew &amp; Bean began with one simple idea: create a warm neighborhood
              café where every cup is made with care and everyone feels at home.
            </p>
            <p>
              Since opening our doors, we have brought thoughtfully sourced beans,
              fresh bakes, and unhurried moments to the heart of Chennai—one friendly
              conversation at a time.
            </p>
          </div>
          <div className="flex items-center gap-3 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-[var(--color-coffee-brown)] shadow-sm ring-1 ring-[var(--color-light-brown)]/25">
            <Coffee className="h-5 w-5" aria-hidden="true" />
            Roasted with care. Served with heart.
          </div>
        </div>

        <div className="relative order-1 overflow-hidden rounded-[2rem] bg-[var(--color-light-brown)]/20 shadow-[0_24px_60px_rgba(46,33,24,0.14)] lg:order-2">
          <Image
            src="/images/about-gallery/our-story.svg"
            alt="A warm Brew and Bean café counter with fresh coffee and pastries"
            width={960}
            height={760}
            priority
            className="h-auto w-full"
          />
          <div className="absolute bottom-5 left-5 rounded-2xl bg-[var(--color-dark-brown)]/90 px-5 py-4 text-[var(--color-cream)] shadow-lg backdrop-blur sm:bottom-7 sm:left-7">
            <p className="font-heading text-2xl font-bold">Est. 2021</p>
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-cream)]/70">
              Chennai, India
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
