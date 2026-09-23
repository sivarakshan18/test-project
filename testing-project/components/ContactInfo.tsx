import { Mail, MapPin, Phone, type LucideIcon } from "lucide-react";
import { contactDetails, type ContactDetailId } from "@/data/contact";
import Container from "./Container";
import SectionTitle from "./SectionTitle";

const icons: Record<ContactDetailId, LucideIcon> = {
  address: MapPin,
  phone: Phone,
  email: Mail,
};

export default function ContactInfo() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container className="flex flex-col gap-10">
        <SectionTitle
          eyebrow="Get In Touch"
          title="Café Information"
          description="Drop by for a cup, give us a call, or send a note — we would love to hear from you."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {contactDetails.map((detail) => {
            const Icon = icons[detail.id];

            return (
              <div
                key={detail.id}
                className="flex flex-col items-center gap-3 rounded-2xl border border-[var(--color-light-brown)]/30 bg-[var(--color-cream)] p-6 text-center shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-coffee-brown)]/10 text-[var(--color-coffee-brown)]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-[var(--color-dark-brown)]">
                  {detail.label}
                </h3>
                {detail.href ? (
                  <a
                    href={detail.href}
                    className="font-medium text-[var(--color-coffee-brown)] transition-colors hover:text-[var(--color-dark-brown)]"
                  >
                    {detail.value}
                  </a>
                ) : (
                  <p className="font-medium text-[var(--color-coffee-brown)]">{detail.value}</p>
                )}
                <p className="text-sm text-[var(--color-dark-brown)]/70">{detail.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
