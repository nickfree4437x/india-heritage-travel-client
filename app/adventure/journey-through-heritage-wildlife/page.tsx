import HeroSection from "./components/HeroSection";
import SuitableFor from "./components/SuitableFor";
import TourLayout from "./components/TourLayout";
import CitiesSection from "./components/CitiesSection";
import HighlightsInclusions from "./components/HighlightsInclusions";
import ItinerarySection from "./components/ItinerarySection";
import RecommendedTours from "./components/RecommendedTours";

export default function RoyalRajasthanPage() {
  return (
    <div>
      <HeroSection />
      <SuitableFor />
      <TourLayout>
        <CitiesSection />
        <HighlightsInclusions />
        <ItinerarySection/>
      </TourLayout>
      <RecommendedTours />
    </div>
  );
}