// app/blogs/safe-luxury-destinations/page.tsx
import type { Metadata } from "next";
import HeroSection from "./components/HeroSection";
import SafetyIntroSection from "./components/SafetyIntroSection";
import DestinationsSection from "./components/DestinationsSection";
import MoreDestinationsSection from "./components/MoreDestinationsSection";
import Moreblogs from "./components/Moreblogs";
import Footer from "@/src/components/sections/footer/Footer";

export const metadata: Metadata = {
  title: "Safe Luxury Destinations in India | Premium Travel Experiences & Hidden Gems",
  description:
    "Explore safe and luxurious destinations across India featuring heritage stays, cultural experiences, scenic landscapes, personalized journeys, and premium hospitality.",
};

export default function SafeLuxuryDestinationsPage() {
  return (
    <main className="w-full bg-[#f4f0ea]">

      <HeroSection />

      <SafetyIntroSection />

      <DestinationsSection />

      <MoreDestinationsSection />
      <Moreblogs/>
      <Footer/>

    </main>
  );
}