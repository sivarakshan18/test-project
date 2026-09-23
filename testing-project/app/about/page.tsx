import type { Metadata } from "next";
import { Bean, Coffee, HeartHandshake, Laptop } from "lucide-react";
import Container from "@/components/Container";
import FeatureCard from "@/components/FeatureCard";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SectionTitle from "@/components/SectionTitle";
import StatCard from "@/components/StatCard";
import StorySection from "@/components/StorySection";

export const metadata: Metadata = {
  title: "Our Story | Brew & Bean",
  description:
    "Learn how Brew & Bean brings carefully brewed coffee, fresh food, and a welcoming café atmosphere to Chennai.",
};

const stats = [
  { value: "5+", label: "Years" },
  { value: "20+", label: "Drinks Served" },
  { value: "10K+", label: "Happy Customers" },
];

const values = [
  {
    icon: Bean,
    title: "Fresh Ingredients",
    description:
      "From locally sourced milk to daily bakes, we choose ingredients that taste their best.",
  },
  {
    icon: HeartHandshake,
    title: "Friendly Atmosphere",
    description:
      "A genuine welcome, thoughtful service, and a space that always feels easy to settle into.",
  },
  {
    icon: Coffee,
    title: "Quality Coffee",
    description:
      "Balanced beans, careful brewing, and consistent cups prepared by people who love the craft.",
  },
  {
    icon: Laptop,
    title: "Comfortable Workspace",
    description:
      "Calm seating, free Wi-Fi, and plenty of space for a productive afternoon or creative break.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <StorySection />

        <section aria-label="Café statistics" className="bg-white py-10 sm:py-14">
          <Container>
            <div className="grid divide-y divide-[var(--color-light-brown)]/25 overflow-hidden rounded-3xl border border-[var(--color-light-brown)]/25 bg-[var(--color-cream)] shadow-sm sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {stats.map((stat) => (
                <StatCard key={stat.label} value={stat.value} label={stat.label} />
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-[var(--color-cream)] py-16 sm:py-24">
          <Container className="flex flex-col gap-10">
            <SectionTitle
              eyebrow="Why Choose Us"
              title="The little things matter"
              description="We care about what is in your cup, how you are welcomed, and how you feel while you are here."
            />
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <FeatureCard key={value.title} {...value} />
              ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}
