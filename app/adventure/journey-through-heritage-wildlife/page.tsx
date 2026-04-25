import HeroSection from "./components/HeroSection";
import SuitableFor from "./components/SuitableFor";
import TourLayout from "./components/TourLayout";
import CitiesSection from "./components/CitiesSection";
import HighlightsInclusions from "./components/HighlightsInclusions";
import ItinerarySection from "./components/ItinerarySection";
import RecommendedTours from "./components/RecommendedTours";
import ExcludedServices from "@/app/destinations/majestic-golden-triangle-tour/components/ExcludedServices";
import Footer from "@/src/components/sections/footer/Footer";

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
      </TourLayout>
      <RecommendedTours />
      <Footer/>
    </div>
  );
}