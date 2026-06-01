import type { Metadata } from "next";
import HeroSection from "./components/HeroSection";
import LuxuryIndiaTourSection from "./components/LuxuryIndiaTourSection";
import RoyalCitiesSection from "./components/RoyalCitiesSection";
import SpiritualFinaleSection from "./components/SpiritualFinaleSection";
import Moreblogs from "./components/MoreBlogs";
import Footer from "@/src/components/sections/footer/Footer";

export const metadata: Metadata = {
  title: "Luxury India Tour Itinerary | Ultimate 10-Day Premium Travel Experience",
  description:
    "Discover the ultimate luxury India itinerary featuring royal palaces, heritage hotels, cultural landmarks, premium experiences, and unforgettable journeys across iconic destinations.",
};

export default function BlogDetailsPage() {
  return (
    <main>
      <HeroSection />
      <LuxuryIndiaTourSection />
      <RoyalCitiesSection />
      <SpiritualFinaleSection />
      <Moreblogs/>
      <Footer/>
    </main>
  );
}