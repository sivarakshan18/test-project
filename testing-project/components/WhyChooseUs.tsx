import { Coffee, Sofa, Wifi } from "lucide-react";
import Container from "./Container";
import SectionTitle from "./SectionTitle";

const highlights = [
  {
    icon: Coffee,
    title: "Freshly Brewed Daily",
    description: "Beans roasted and brewed fresh every single day.",
  },
  {
    icon: Sofa,
    title: "Cozy Workspace",
    description: "A relaxed spot to work, study, or catch up with friends.",
  },
  {
    icon: Wifi,
    title: "Free Wi-Fi",
    description: "Stay connected while you sip your favorite brew.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[var(--color-cream)] py-16 sm:py-24">
      <Container className="flex flex-col gap-10">
        <SectionTitle eyebrow="Why Choose Us" title="What Makes Us Special" />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {highlights.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col items-center gap-3 rounded-2xl bg-white p-6 text-center shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-coffee-brown)]/10 text-[var(--color-coffee-brown)]">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-[var(--color-dark-brown)]">
                {title}
              </h3>
              <p className="text-sm text-[var(--color-dark-brown)]/70">{description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
