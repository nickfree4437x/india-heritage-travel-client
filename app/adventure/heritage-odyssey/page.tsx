import Footer from "@/src/components/sections/footer/Footer";
import HeroSection from "./components/HeroSection";
import RecommendedTours from "./components/RecommendedTours";
import SuitableFor from "./components/SuitableFor";
import TourLayout from "./components/TourLayout";
import TourSteps from "@/src/components/tours/TourSteps";
import CommonForm from "@/src/components/tours/CommonForm";


export default function RoyalRajasthanPage() {
  return (
    <div>
      {/* 🔝 HERO */}
      <HeroSection />

      {/* 📍 STICKY NAV + SUITABLE */}
      <SuitableFor />

      {/* 🎯 MAIN TOUR CONTENT (LEFT + RIGHT SPLIT) */}
      <TourLayout />

      <TourSteps/>
      <CommonForm/>
      <RecommendedTours/>
      <Footer/>
    </div>
  );
}