import type { Metadata } from "next";
import HeroSection from "./sections/hero/HeroSection";
import LuxuryIndiaTourSection from "./sections/luxury-india/LuxuryIndiaTourSection";
import RoyalCitiesSection from "./sections/royal-cities/RoyalCitiesSection";
import SpiritualFinaleSection from "./sections/spiritual-final/SpiritualFinaleSection";
import Moreblogs from "./sections/more-blogs/MoreBlogs";
import Footer from "@/src/sections/footer/Footer";

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