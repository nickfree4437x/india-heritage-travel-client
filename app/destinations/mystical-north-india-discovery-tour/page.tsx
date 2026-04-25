import HeroSection from "./components/HeroSection";
import SuitableFor from "./components/SuitableFor";
import DestinationSection from "./components/DestinationSection";
import RecommendedTours from "./components/RecommendedTours";
import TourLayout from "./components/TourLayout";
import HighlightsInclusions from "./components/HighlightsInclusions";
import Itinerary from "./components/Itinerary";
import ExcludedServices from "../majestic-golden-triangle-tour/components/ExcludedServices";
import Footer from "@/src/components/sections/footer/Footer";


export default function Page() {
  return (
    <div className="bg-[#f4f0ea] min-h-screen">
      <HeroSection />
      <SuitableFor />

      <TourLayout>
       <DestinationSection />
       <HighlightsInclusions/>
       <Itinerary/>
       <ExcludedServices/>
      </TourLayout>

      <RecommendedTours />
      <Footer/>
    </div>
  );
}