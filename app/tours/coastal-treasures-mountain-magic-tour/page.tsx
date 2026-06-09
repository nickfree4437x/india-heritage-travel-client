import type { Metadata } from "next";

import HeroSection from "./sections/hero/HeroSection";
import SuitableFor from "./sections/suitable-for/SuitableFor";
import DestinationSection from "./sections/destinations/DestinationSection";
import RecommendedTours from "./sections/recommended/RecommendedTours";
import Footer from "@/src/sections/footer/Footer";
import CommonForm from "@/src/tours/CommonForm";
import TourSteps from "@/src/tours/book-now/sections/tour-steps/TourSteps";

export const metadata: Metadata = {
  title: "South India Coastal & Mountain Tour | Beaches, Hills & Cultural Experiences",
  description:
    "Discover the beauty of South India through scenic coastlines, misty mountains, cultural heritage, local traditions, and unforgettable travel experiences across diverse destinations.",
};

export default function Page() {
  return (
    <div className="bg-white min-h-screen">
      <HeroSection />

      <SuitableFor />

      <DestinationSection />

      <TourSteps />

      <CommonForm
        tourName="coastal-treasures-mountain-magic-tour"
      />

      <RecommendedTours />

      <Footer />
    </div>
  );
}