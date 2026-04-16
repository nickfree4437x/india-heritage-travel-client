import Hero from "./components/Hero";
import Suitable from "./components/Suitable";
import DelhiSection from "./components/DelhiSection";
import AgraSection from "./components/AgraSection";
import JaipurSection from "./components/JaipurSection";
import HightlightsInclusions from "./components/HighlightsInclusions";
import Itinerary from "./components/Itinerary";
import ExcludedServices from "./components/ExcludedServices";
import RecommendedTours from "./components/RecommendedTours";

export default function Page() {
  return (
    <div className="bg-[#f4f0ea] min-h-screen">

      <Hero />
      <Suitable />
      <DelhiSection />
      <AgraSection />
      <JaipurSection />
      <HightlightsInclusions />
      <Itinerary />
      <ExcludedServices />
      <RecommendedTours />

    </div>
  );
}