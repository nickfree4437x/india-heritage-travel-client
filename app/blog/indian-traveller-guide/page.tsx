// app/blogs/indian-traveler-guide/page.tsx
import type { Metadata } from "next";
import HeroSection from "./components/HeroSection";
import TravelBasicsSection from "./components/TravelBasicsSection";
import SafetyAndMoneySection from "./components/SafetyAndMoneySection";
import FinalTravelTipsSection from "./components/FinalTravelTipsSection";
import Moreblogs from "./components/MoreBlogs";
import Footer from "@/src/components/sections/footer/Footer";

export const metadata: Metadata = {
  title: "First-Time Travel Guide to India | Essential Tips, Culture & Travel Advice",
  description:
    "Plan your India journey with practical travel tips, cultural insights, destination recommendations, safety advice, and essential information for first-time visitors.",
};

export default function IndianTravelerGuidePage() {
  return (
    <main className="w-full bg-white">

      <HeroSection />

      <TravelBasicsSection />

      <SafetyAndMoneySection />

      <FinalTravelTipsSection />
      <Moreblogs/>
      <Footer/>

    </main>
  );
}