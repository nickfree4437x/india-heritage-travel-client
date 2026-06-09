// app/blogs/safe-luxury-destinations/page.tsx
import type { Metadata } from "next";
import HeroSection from "./sections/hero/HeroSection";
import SafetyIntroSection from "./sections/safety-intro/SafetyIntroSection";
import DestinationsSection from "./sections/destination/DestinationsSection";
import MoreDestinationsSection from "./sections/more-destinations/MoreDestinationsSection";
import Moreblogs from "./sections/more-blogs/Moreblogs";
import Footer from "@/src/sections/footer/Footer";

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