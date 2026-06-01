import type { Metadata } from "next";

import RoyalTriangleHero from "./components/HeroSection";
import SuitableForSection from "./components/SuitableFor";
import ToursLayout from "./components/ToursLayout";
import RightBookingCard from "./components/RightBookingCard";
import OdysseyCitiesSection from "./components/OdysseyCitiesSection";
import OdysseyHighlightsSection from "./components/OdysseyHighlights";
import ItinerarySection from "./components/ItinerarySection";
import RecommendedTours from "./components/RecommendedTours";
import Footer from "@/src/components/sections/footer/Footer";
import ExcludedServices from "../../tours/majestic-golden-triangle-tour/components/pricing/ExcludedServices";
import DetailedItineraryIntro from "@/src/components/tours/DetailedItinerary";
import TourSteps from "@/src/components/tours/TourSteps";
import CommonForm from "@/src/components/tours/CommonForm";

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