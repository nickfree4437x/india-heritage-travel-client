import type { Metadata } from "next";

import Footer from "@/src/components/sections/footer/Footer";
import HeroSection from "./components/HeroSection";
import RecommendedTours from "./components/RecommendedTours";
import SuitableFor from "./components/SuitableFor";
import TourLayout from "./components/TourLayout";
import TourSteps from "@/src/components/tours/TourSteps";
import CommonForm from "@/src/components/tours/CommonForm";

export const metadata: Metadata = {
  title: "Heritage Odyssey Tour India | Royal Palaces, Culture & Historic Landmarks",
  description:
    "Experience India's rich heritage through magnificent palaces, historic landmarks, cultural traditions, architectural wonders, and unforgettable journeys across iconic destinations.",
};

export default function RoyalRajasthanPage() {
  return (
    <div>
      {/* 🔝 HERO */}
      <HeroSection />

      {/* 📍 STICKY NAV + SUITABLE */}
      <SuitableFor />

      {/* 🎯 MAIN TOUR CONTENT (LEFT + RIGHT SPLIT) */}
      <TourLayout />

      <TourSteps/>
      <CommonForm tourName="heritage-odyssey-tour"/>
      <RecommendedTours/>
      <Footer/>
    </div>
  );
}