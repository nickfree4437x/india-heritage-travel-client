import type { Metadata } from "next";

import HeroSection from "./sections/hero/HeroSection";
import SuitableFor from "./sections/suitable-for/SuitableFor";
import TourLayout from "./sections/layout/TourLayout";
import BookingCard from "./sections/booking-card/BookingCard";
import TourContent from "./sections/tour-content/TourContent";
import DetailedItinerary from "./sections/itinerary/DetailedItinerary";
import HightlightSection from "./sections/hightlights/HightlightSection";
import ExcludedServices from "@/app/tours/majestic-golden-triangle-tour/components/pricing/ExcludedServices";
import RecommendedTours from "@/app/tours/majestic-golden-triangle-tour/components/sections/RecommendedTours";
import DetailedItineraryIntro from "@/src/tours/book-now/sections/itinerary/DetailedItinerary";
import Footer from "@/src/sections/footer/Footer";
import CommonForm from "@/src/tours/CommonForm";
import TourSteps from "@/src/tours/book-now/sections/tour-steps/TourSteps";

export const metadata: Metadata = {
  title: "Southern Splendors Tour India | Heritage, Culture & Scenic Journeys",
  description:
    "Discover the heritage, architecture, natural beauty, and cultural traditions of South India through a carefully curated and immersive travel experience.",
};

export default function RoyalRajasthanPage() {
  return (
    <div>
      <HeroSection />
      <SuitableFor />

      <TourLayout sidebar={<BookingCard />}>
        <TourContent />
        <HightlightSection/>
        <div className="space-y-6">
          <DetailedItinerary />
          <ExcludedServices/>
          <DetailedItineraryIntro/>
        </div>
      </TourLayout>

      <TourSteps/>
      <CommonForm tourName="southern-splendors-tour"/>
      <RecommendedTours/>
      <Footer/>
    </div>
  );
}