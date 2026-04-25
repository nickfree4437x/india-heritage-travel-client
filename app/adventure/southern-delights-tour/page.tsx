import Footer from "@/src/components/sections/footer/Footer";
import HeroSection from "./components/HeroSection";
import RecommendedTours from "./components/RecommendedTours";
import SuitableFor from "./components/SuitableFor";
import TourLayout from "./components/TourLayout";

export default function RoyalRajasthanPage() {
  return (
    <div>
      <HeroSection />
      <SuitableFor />
      <TourLayout />
      <RecommendedTours />
      <Footer/>
    </div>
  );
}