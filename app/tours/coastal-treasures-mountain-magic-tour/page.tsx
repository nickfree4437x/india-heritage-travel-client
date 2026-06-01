import type { Metadata } from "next";

import HeroSection from "./components/HeroSection";
import SuitableFor from "./components/SuitableFor";
import DestinationSection from "./components/DestinationSection";
import RecommendedTours from "./components/RecommendedTours";
import Footer from "@/src/components/sections/footer/Footer";
import TourSteps from "@/src/components/tours/TourSteps";
import CommonForm from "@/src/components/tours/CommonForm";

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