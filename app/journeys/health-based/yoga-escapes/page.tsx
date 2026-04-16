import YogaHeroSection from "./sections/HeroSection";
import SuitableFor from "./sections/SuitableFor";
import YogaIntro from "./sections/YogaIntro";
import TourLayout from "./sections/TourLayout";
import Recommended from "./sections/Recommended";

export default function YogaEscapesPage() {
  return (
    <div>
      <YogaHeroSection />
      <SuitableFor />
      <YogaIntro />
      <TourLayout />
      <Recommended />
    </div>
  );
}