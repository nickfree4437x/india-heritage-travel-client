import HeroSection from "./components/HeroSection";
import SuitableFor from "./components/SuitableFor";
import TourDetails from "./components/TourDetails";
import TourLayout from "./components/TourLayout";
import RecommendedTours from "./components/RecommendedTours";
import ExcludedServices from "@/app/destinations/majestic-golden-triangle-tour/components/pricing/ExcludedServices";
import Footer from "@/src/components/sections/footer/Footer";
import DetailedItineraryIntro from "@/src/components/tours/DetailedItinerary";
import CommonForm from "@/src/components/tours/CommonForm";
import TourSteps from "@/src/components/tours/TourSteps";

export default function RoyalRajasthanPage() {
  return (
    <div>
      <HeroSection />
      <SuitableFor />

      <TourLayout>
        <TourDetails />
        <ExcludedServices/>
        <DetailedItineraryIntro/>
      </TourLayout>
      
      <TourSteps/>
      <CommonForm/>
      <RecommendedTours />
      <Footer/>
    </div>
  );
}