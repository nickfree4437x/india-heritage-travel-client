import HeroSection from "./components/HeroSection";
import SuitableFor from "./components/SuitableFor";
import TourDetails from "./components/TourDetails";
import TourLayout from "./components/TourLayout";
import RecommendedTours from "./components/RecommendedTours";

export default function RoyalRajasthanPage() {
  return (
    <div>
      <HeroSection />
      <SuitableFor />

      {/* ✅ MAIN SECTION */}
      <TourLayout>
        <TourDetails />
      </TourLayout>

      <RecommendedTours />
    </div>
  );
}