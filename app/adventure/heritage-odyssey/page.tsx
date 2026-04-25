import Footer from "@/src/components/sections/footer/Footer";
import HeroSection from "./components/HeroSection";
import RecommendedTours from "./components/RecommendedTours";
import SuitableFor from "./components/SuitableFor";
import TourLayout from "./components/TourLayout";

export default function RoyalRajasthanPage() {
  return (
    <div>
      {/* 🔝 HERO */}
      <HeroSection />

      {/* 📍 STICKY NAV + SUITABLE */}
      <SuitableFor />

      {/* 🎯 MAIN TOUR CONTENT (LEFT + RIGHT SPLIT) */}
      <TourLayout />
      <RecommendedTours/>
      <Footer/>
    </div>
  );
}