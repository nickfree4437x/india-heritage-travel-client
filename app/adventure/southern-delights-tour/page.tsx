import Footer from "@/src/components/sections/footer/Footer";
import HeroSection from "./components/HeroSection";
import RecommendedTours from "./components/RecommendedTours";
import SuitableFor from "./components/SuitableFor";
import TourLayout from "./components/TourLayout";
import CommonForm from "@/src/components/tours/CommonForm";
import TourSteps from "@/src/components/tours/TourSteps";

export default function RoyalRajasthanPage() {
  return (
    <div>
      <HeroSection />
      <SuitableFor />
      <TourLayout />

      <TourSteps/>
      <CommonForm/>
      <RecommendedTours />
      <Footer/>
    </div>
  );
}