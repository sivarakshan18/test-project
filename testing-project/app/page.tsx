import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PopularItems from "@/components/PopularItems";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <PopularItems />
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  );
}
