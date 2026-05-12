import HeroSection from "./components/HeroSection";
import SuitableFor from "./components/SuitableFor";
import DestinationSection from "./components/DestinationSection";
import RecommendedTours from "./components/RecommendedTours";
import Footer from "@/src/components/sections/footer/Footer";
import TourSteps from "@/src/components/tours/TourSteps";

export default function Page() {
  return (
    <div className="bg-[#f4f0ea] min-h-screen">
      <HeroSection />
      <SuitableFor />
      <DestinationSection />
      <TourSteps/>
      <RecommendedTours />
      <Footer/>  
    </div>
  );
}