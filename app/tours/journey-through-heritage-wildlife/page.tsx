import type { Metadata } from "next";

import HeroSection from "./sections/hero/HeroSection";
import SuitableFor from "./sections/suitable-for/SuitableFor";
import TourLayout from "./sections/layout/TourLayout";
import CitiesSection from "./sections/city-section/CitiesSection";
import HighlightsInclusions from "./sections/hightlights/HighlightsInclusions";
import ItinerarySection from "./sections/itinerary/ItinerarySection";
import RecommendedTours from "./sections/recommended-tours/RecommendedTours";
import ExcludedServices from "@/app/tours/majestic-golden-triangle-tour/components/pricing/ExcludedServices";
import DetailedItineraryIntro from "@/src/tours/book-now/sections/itinerary/DetailedItinerary";
import Footer from "@/src/sections/footer/Footer";
import CommonForm from "@/src/tours/CommonForm";
import TourSteps from "@/src/tours/book-now/sections/tour-steps/TourSteps";

export const metadata: Metadata = {
  title: "Heritage & Wildlife Tour India | Culture, Nature & Safari Experiences",
  description:
    "Experience the perfect blend of India's cultural heritage and wildlife adventures through historic landmarks, natural landscapes, safari experiences, and unforgettable journeys.",
  alternates: {
    canonical: "/tours/journey-through-heritage-wildlife",
  },
};

export default function RoyalRajasthanPage() {
  return (
    <div>
      <HeroSection />
      <SuitableFor />
      <TourLayout>
        <CitiesSection />
        <HighlightsInclusions />
        <div className="space-y-6">
          <ItinerarySection/>
          <ExcludedServices/>
          <DetailedItineraryIntro/>
        </div>
      </TourLayout>
     
      <TourSteps/>
      <CommonForm tourName="journey-through-heritage-wildlife"/>
      <RecommendedTours />
      <Footer/>
    </div>
  );
}