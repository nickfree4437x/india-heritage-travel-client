import type { Metadata } from "next";

import Hero from "./components/hero/Hero";
import Suitable from "./components/sections/Suitable";
import DelhiSection from "./components/sections/DelhiSection";
import HightlightsInclusions from "./components/pricing/HighlightsInclusions";
import Itinerary from "./components/itinerary/Itinerary";
import ExcludedServices from "./components/pricing/ExcludedServices";
import RecommendedTours from "./components/sections/RecommendedTours";
import BookingCard from "./components/pricing/BookingCard";
import Footer from "@/src/components/sections/footer/Footer";
import DetailedItineraryIntro from "@/src/components/tours/DetailedItinerary";
import TourSteps from "@/src/components/tours/TourSteps";
import CommonForm from "@/src/components/tours/CommonForm";

export const metadata: Metadata = {
  title: "Golden Triangle Tour India | Delhi, Agra & Jaipur Heritage Journey",
  description:
    "Explore Delhi, Agra, and Jaipur through a personalized Golden Triangle Tour featuring iconic landmarks, cultural experiences, heritage sites, and unforgettable journeys across India.",
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function Page() {
  // ==========================================================================
  // MAIN RENDER
  // ==========================================================================

  return (
    <div className="bg-white min-h-screen">
      {/* ====================================================================
          HERO & SUITABLE SECTION
      ==================================================================== */}
      <Hero />
      <Suitable />

      {/* ====================================================================
          MAIN CONTENT GRID - LEFT (Tour Details) & RIGHT (Booking Card)
      ==================================================================== */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 md:grid-cols-[2.5fr_1fr] gap-6 md:gap-8">
        {/* LEFT COLUMN - Tour Information */}
        <div className="space-y-6">
          <DelhiSection />
          <HightlightsInclusions />
          <Itinerary />
          <ExcludedServices />
          <DetailedItineraryIntro />
        </div>

        {/* RIGHT COLUMN - Booking Widget */}
        <div className="flex justify-center md:justify-end">
          <div className="w-full max-w-[280px] sm:max-w-[300px] md:max-w-[320px] lg:max-w-[350px]">
            <BookingCard />
          </div>
        </div>
      </div>

      {/* ====================================================================
          ADDITIONAL SECTIONS
      ==================================================================== */}
      {/* <FAQSection /> - Temporarily commented */}
      <TourSteps />
      <CommonForm 
        tourName="majestic-golden-triangle-tour"/>
      <RecommendedTours />
      <Footer />
    </div>
  );
}