import type { Metadata } from "next";

import RoyalTriangleHero from "./sections/hero/HeroSection";
import SuitableForSection from "./sections/suitable-for/SuitableFor";
import ToursLayout from "./sections/layout/ToursLayout";
import RightBookingCard from "./sections/booking-card/RightBookingCard";
import OdysseyCitiesSection from "./sections/odyssey-cities/OdysseyCitiesSection";
import OdysseyHighlightsSection from "./sections/hightlights/OdysseyHighlights";
import ItinerarySection from "./sections/itinerary/ItinerarySection";
import RecommendedTours from "./sections/recommended-tours/RecommendedTours";
import ExcludedServices from "../../tours/majestic-golden-triangle-tour/components/pricing/ExcludedServices";
import DetailedItineraryIntro from "@/src/tours/book-now/sections/itinerary/DetailedItinerary";
import Footer from "@/src/sections/footer/Footer";
import CommonForm from "@/src/tours/CommonForm";
import TourSteps from "@/src/tours/book-now/sections/tour-steps/TourSteps";

export const metadata: Metadata = {
  title: "Royal Triangle Odyssey Tour India | Heritage, Culture & Iconic Destinations",
  description:
    "Explore India's rich heritage, cultural landmarks, historic cities, and unforgettable experiences through a carefully curated Royal Triangle journey across iconic destinations.",
};

export default function RoyalRajasthanPage() {
  return (
    <div>

      <RoyalTriangleHero />
      <SuitableForSection />

      <ToursLayout right={<RightBookingCard/>}>
         <OdysseyCitiesSection />
         <OdysseyHighlightsSection />
         <div className="space-y-4">
          <ItinerarySection />
          <ExcludedServices />
          <DetailedItineraryIntro/>
         </div>
      </ToursLayout>
      
      <TourSteps/>
      <CommonForm tourName="royal-triangle-odyssey-tour"/>
      <RecommendedTours />
      <Footer/>

    </div>
  );
}