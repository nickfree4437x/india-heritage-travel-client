import HeroSection from "./components/HeroSection";
import SuitableFor from "./components/SuitableFor";
import TourDetails from "./components/TourDetails";
import TourLayout from "./components/TourLayout";
import RecommendedTours from "./components/RecommendedTours";
import ExcludedServices from "@/app/destinations/majestic-golden-triangle-tour/components/ExcludedServices";
import Footer from "@/src/components/sections/footer/Footer";

export default function RoyalRajasthanPage() {
  return (
    <div>
      <HeroSection />
      <SuitableFor />

      <TourLayout>
        <TourDetails />
        <ExcludedServices/>
      </TourLayout>

      <RecommendedTours />
      <Footer/>
    </div>
  );
}