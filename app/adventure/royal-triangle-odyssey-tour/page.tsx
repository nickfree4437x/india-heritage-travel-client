import RoyalTriangleHero from "./components/HeroSection";
import SuitableForSection from "./components/SuitableFor";
import ToursLayout from "./components/ToursLayout";
import RightBookingCard from "./components/RightBookingCard";
import OdysseyCitiesSection from "./components/OdysseyCitiesSection";
import OdysseyHighlightsSection from "./components/OdysseyHighlights";
import ItinerarySection from "./components/ItinerarySection";
import RecommendedTours from "./components/RecommendedTours";
import Footer from "@/src/components/sections/footer/Footer";
import ExcludedServices from "../../destinations/majestic-golden-triangle-tour/components/ExcludedServices";
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
         <ItinerarySection />
         <ExcludedServices />
         <DetailedItineraryIntro/>
      </ToursLayout>
      
      <TourSteps/>
      <CommonForm/>
      <RecommendedTours />
      <Footer/>

    </div>
  );
}