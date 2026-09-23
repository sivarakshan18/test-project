import type { Metadata } from "next";
import Container from "@/components/Container";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import Footer from "@/components/Footer";
import LocationCard from "@/components/LocationCard";
import Navbar from "@/components/Navbar";
import OpeningHours from "@/components/OpeningHours";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Contact — Brew & Bean",
  description:
    "Find Brew & Bean in Anna Nagar, Chennai. Address, phone, email, opening hours and a message form.",
};

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <section className="bg-[var(--color-cream)] py-16 sm:py-24">
          <Container>
            <SectionTitle
              eyebrow="Contact Us"
              title="Come Say Hello"
              description="Everything you need to find us, reach us, and plan your next visit to Brew & Bean."
            />
          </Container>
        </section>

        <ContactInfo />

        <section className="bg-[var(--color-cream)] py-16 sm:py-24">
          <Container className="flex flex-col gap-10">
            <SectionTitle
              eyebrow="Plan Your Visit"
              title="Hours & Location"
              description="We are open every day of the week — here is when and where to find us."
            />

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <OpeningHours />
              <LocationCard />
            </div>
          </Container>
        </section>

        <section className="bg-white py-16 sm:py-24">
          <Container className="flex flex-col gap-10">
            <SectionTitle
              eyebrow="Send A Message"
              title="Write To Us"
              description="Questions, bookings or feedback — fill in the form and we will get back to you."
            />

            <div className="mx-auto w-full max-w-2xl">
              <ContactForm />
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
