// app/blogs/indian-traveler-guide/page.tsx
import type { Metadata } from "next";
import HeroSection from "./sections/hero/HeroSection";
import TravelBasicsSection from "./sections/travel-basics/TravelBasicsSection";
import SafetyAndMoneySection from "./sections/safety-and-money/SafetyAndMoneySection";
import FinalTravelTipsSection from "./sections/travel-tips/FinalTravelTipsSection";
import Moreblogs from "./sections/more-blogs/MoreBlogs";
import Footer from "@/src/sections/footer/Footer";

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