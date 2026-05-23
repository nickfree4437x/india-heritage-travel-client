import HeroSection from "./components/HeroSection";
import SuitableFor from "./components/SuitableFor";
import TourLayout from "./components/TourLayout";
import CitiesSection from "./components/CitiesSection";
import HighlightsInclusions from "./components/HighlightsInclusions";
import ItinerarySection from "./components/ItinerarySection";
import RecommendedTours from "./components/RecommendedTours";
import ExcludedServices from "@/app/destinations/majestic-golden-triangle-tour/components/pricing/ExcludedServices";
import Footer from "@/src/components/sections/footer/Footer";
import DetailedItineraryIntro from "@/src/components/tours/DetailedItinerary";
import TourSteps from "@/src/components/tours/TourSteps";
import CommonForm from "@/src/components/tours/CommonForm";

export default function RoyalRajasthanPage() {
  return (
    <div>
      <HeroSection />
      <SuitableFor />
      <TourLayout>
        <CitiesSection />
        <HighlightsInclusions />
        <ItinerarySection/>
        <ExcludedServices/>
        <DetailedItineraryIntro/>
      </TourLayout>
     
      <TourSteps/>
      <CommonForm/>
      <RecommendedTours />
      <Footer/>
    </div>
  );
}