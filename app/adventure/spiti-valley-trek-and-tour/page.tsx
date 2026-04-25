import Footer from "@/src/components/sections/footer/Footer";
import RecommendedTours from "../divine-kashmir-and-exciting-ladakh/components/RecommendedTours";
import HeroSection from "./components/HeroSection";
import SuitableFor from "./components/SuitableFor";
import TourDetails from "./components/TourDetails";
import TourLayout from "./components/TourLayout";
import ExcludedServices from "@/app/destinations/majestic-golden-triangle-tour/components/ExcludedServices";

export default function RoyalRajasthanPage() {
  return (
    <div>
      <HeroSection />
      <SuitableFor />

      {/* ✅ MAIN SECTION */}
      <TourLayout>
        <TourDetails />
        <ExcludedServices/>
      </TourLayout>

      <RecommendedTours/>
      <Footer/>
    </div>
  );
}