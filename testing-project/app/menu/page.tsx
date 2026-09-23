import type { Metadata } from "next";
import Footer from "@/components/Footer";
import MenuBrowser from "@/components/MenuBrowser";
import MenuHeader from "@/components/MenuHeader";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Menu — Brew & Bean",
  description:
    "Browse the Brew & Bean menu: freshly brewed coffee, teas, snacks and desserts made in-house every day.",
};

export default function MenuPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <MenuHeader />
        <MenuBrowser />
      </main>
      <Footer />
    </div>
  );
}
