import HeroSection from "./components/HeroSection";
import SuitableFor from "./components/SuitableFor";
import DestinationSection from "./components/DestinationSection";
import RecommendedTours from "./components/RecommendedTours";
import Footer from "@/src/components/sections/footer/Footer";
import TourSteps from "@/src/components/tours/TourSteps";
import CommonForm from "@/src/components/tours/CommonForm";
import Breadcrumb from "@/src/components/common/Breadcrumb/Breadcrumb";

export default function Page() {
  return (
    <div className="bg-white min-h-screen">
      <HeroSection />

      <SuitableFor />

      <DestinationSection />

      <TourSteps />

      <CommonForm
        tourName="coastal-treasures-mountain-magic-tour"
      />

      <RecommendedTours />

      <Footer />
    </div>
  );
}