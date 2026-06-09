import type { Metadata } from "next";

import HeroSection from "./sections/hero/HeroSection";
import SuitableFor from "./sections/suitable-for/SuitableFor";
import BookingCard from "./sections/booking-card/BookingCard";
import DestinationSection from "./sections/destination-section/DestinationSection";
import RecommendedTours from "./sections/recommended-tours/RecommendedTours";
import TourLayout from "./sections/layout/TourLayout";
import HighlightsInclusions from "./sections/hightlights/HighlightsInclusions";
import Itinerary from "./sections/itinerary/Itinerary";
import ExcludedServices from "../majestic-golden-triangle-tour/components/pricing/ExcludedServices";
import DetailedItineraryIntro from "@/src/tours/book-now/sections/itinerary/DetailedItinerary";
import Footer from "@/src/sections/footer/Footer";
import CommonForm from "@/src/tours/CommonForm";
import TourSteps from "@/src/tours/book-now/sections/tour-steps/TourSteps";

export const metadata: Metadata = {
  title: "North India Discovery Tour | Culture, Heritage & Spiritual Journeys",
  description:
    "Discover the cultural, spiritual, and historical wonders of North India through heritage landmarks, local traditions, iconic destinations, and immersive travel experiences.",
};

export default function Page() {
  return (
    <div className="bg-white min-h-screen">
      <HeroSection />
      <SuitableFor />

      <TourLayout sidebar={<BookingCard />}>
       <DestinationSection />
       <HighlightsInclusions/>
       <div className="space-y-6">
        <Itinerary/>
        <ExcludedServices/>
        <DetailedItineraryIntro/>
       </div>
      </TourLayout>

      <TourSteps/>
      <CommonForm tourName="mystical-north-india-discovery-tour"/>
      <RecommendedTours />
      <Footer/>
    </div>
  );
}