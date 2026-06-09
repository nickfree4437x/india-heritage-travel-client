import type { Metadata } from "next";

import Footer from "@/src/sections/footer/Footer";
import HeroSection from "./sections/hero/HeroSection";
import RecommendedTours from "./sections/recommended-tours/RecommendedTours";
import SuitableFor from "./sections/suitable-for/SuitableFor";
import TourLayout from "./sections/layout/TourLayout";
import CommonForm from "@/src/tours/CommonForm";
import TourSteps from "@/src/tours/book-now/sections/tour-steps/TourSteps";

export const metadata: Metadata = {
  title: "Heritage Odyssey Tour India | Royal Palaces, Culture & Historic Landmarks",
  description:
    "Experience India's rich heritage through magnificent palaces, historic landmarks, cultural traditions, architectural wonders, and unforgettable journeys across iconic destinations.",
  alternates: {
    canonical: "/tours/heritage-odyssey-tour",
  },
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