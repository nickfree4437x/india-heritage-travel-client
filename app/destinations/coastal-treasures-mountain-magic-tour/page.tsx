import HeroSection from "./components/HeroSection";
import SuitableFor from "./components/SuitableFor";
import DestinationSection from "./components/DestinationSection";
import RecommendedTours from "./components/RecommendedTours";
import Footer from "@/src/components/sections/footer/Footer";

export default function Page() {
  return (
    <div className="bg-[#f4f0ea] min-h-screen">
      <HeroSection />
      <SuitableFor />
      <DestinationSection />
      <RecommendedTours />
      <Footer/>  
    </div>
  );
}