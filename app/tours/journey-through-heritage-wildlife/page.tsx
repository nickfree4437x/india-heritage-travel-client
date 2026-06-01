import type { Metadata } from "next";

import HeroSection from "./components/HeroSection";
import SuitableFor from "./components/SuitableFor";
import TourLayout from "./components/TourLayout";
import CitiesSection from "./components/CitiesSection";
import HighlightsInclusions from "./components/HighlightsInclusions";
import ItinerarySection from "./components/ItinerarySection";
import RecommendedTours from "./components/RecommendedTours";
import ExcludedServices from "@/app/tours/majestic-golden-triangle-tour/components/pricing/ExcludedServices";
import Footer from "@/src/components/sections/footer/Footer";
import DetailedItineraryIntro from "@/src/components/tours/DetailedItinerary";
import TourSteps from "@/src/components/tours/TourSteps";
import CommonForm from "@/src/components/tours/CommonForm";

export const metadata: Metadata = {
  title: "Heritage & Wildlife Tour India | Culture, Nature & Safari Experiences",
  description:
    "Experience the perfect blend of India's cultural heritage and wildlife adventures through historic landmarks, natural landscapes, safari experiences, and unforgettable journeys.",
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