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