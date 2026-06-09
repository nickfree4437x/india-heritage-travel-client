import type { Metadata } from "next";

import ToursLayout from "./sections/layout/ToursLayout";
import CitiesSection from "./sections/cities-section/CitiesSection";
import HeroSection from "./sections/hero/HeroSection";
import SuitableFor from "./sections/suitable-for/SuitableFor";
import RightBookingCard from "./sections/booking-card/RightBookingCard";
import HighlightsInclusions from "./sections/hightlights/HighlightsInclusions";
import DetailedItinerary from "./sections/itinerary/DetailedItinerary";
import RecommendedTours from "./sections/recommended-tours/RecommendedToures";
import ExcludedServices from "@/app/tours/majestic-golden-triangle-tour/components/pricing/ExcludedServices";

import Footer from "@/src/sections/footer/Footer";
import CommonForm from "@/src/tours/CommonForm";
import TourSteps from "@/src/tours/book-now/sections/tour-steps/TourSteps";
import DetailedItineraryIntro from "@/src/tours/book-now/sections/itinerary/DetailedItinerary";

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