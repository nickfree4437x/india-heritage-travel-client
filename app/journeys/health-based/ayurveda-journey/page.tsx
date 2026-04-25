import AyurvedaHero from "./sections/AyurvedaHero";
import SuitableFor from "./sections/SuitableFor";
import AyurvedaOverview from "./sections/AyurvedaOverview";
import TourLayout from "./sections/TourLayout";
import RecommendedTours from "./sections/RecommendedTours";
import Footer from "@/src/components/sections/footer/Footer";

export default function AyurvedaJourneyPage() {
  return (
    <main>
      <AyurvedaHero />
      <SuitableFor />
      <AyurvedaOverview />
      <TourLayout />
      <RecommendedTours />
      <Footer/>
    </main>
  );
}