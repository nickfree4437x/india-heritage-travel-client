import type { Metadata } from "next";

import ToursLayout from "./components/ToursLayout";
import CitiesSection from "./components/CitiesSection";
import HeroSection from "./components/HeroSection";
import SuitableFor from "./components/SuitableFor";
import RightBookingCard from "./components/RightBookingCard";
import HighlightsInclusions from "./components/HighlightsInclusions";
import DetailedItinerary from "./components/DetailedItinerary";
import RecommendedTours from "./components/RecommendedToures";
import Footer from "@/src/components/sections/footer/Footer";
import ExcludedServices from "@/app/tours/majestic-golden-triangle-tour/components/pricing/ExcludedServices";
import DetailedItineraryIntro from "@/src/components/tours/DetailedItinerary";
import TourSteps from "@/src/components/tours/TourSteps";
import CommonForm from "@/src/components/tours/CommonForm";

export const metadata: Metadata = {
  title: "Royal Heritage Trail Tour India | Palaces, Forts & Cultural Experiences",
  description:
    "Explore India's royal heritage through magnificent palaces, historic forts, cultural landmarks, local traditions, and immersive travel experiences across iconic destinations.",
};

export default function RoyalRajasthanPage() {
  return (
    <>
      <HeroSection />
      <SuitableFor />
      <ToursLayout rightContent={<RightBookingCard />}>
        <CitiesSection/>
        <HighlightsInclusions />
        <div className="space-y-6">
          <DetailedItinerary />
          <ExcludedServices/>
          <DetailedItineraryIntro/>
        </div>
      </ToursLayout>
      
      <TourSteps/>
      <CommonForm tourName="the-royal-heritage-trail-tour"/>
      <RecommendedTours />
      <Footer/>
    </>
  );
}