import AyurvedaHero from "./sections/AyurvedaHero";
import SuitableFor from "./sections/SuitableFor";
import AyurvedaOverview from "./sections/AyurvedaOverview";
import TourLayout from "./sections/TourLayout";
import RecommendedTours from "./sections/RecommendedTours";

export default function AyurvedaJourneyPage() {
  return (
    <main>
      <AyurvedaHero />
      <SuitableFor />
      <AyurvedaOverview />
      <TourLayout />
      <RecommendedTours />
    </main>
  );
}