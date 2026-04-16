import HeroSection from "./components/HeroSection";
import SuitableFor from "./components/SuitableFor";
import DestinationSection from "./components/DestinationSection";
import RecommendedTours from "./components/RecommendedTours";

export default function Page() {
  return (
    <div className="bg-[#f4f0ea] min-h-screen">
      <HeroSection />
      <SuitableFor />
      <DestinationSection />
      <RecommendedTours />
    </div>
  );
}