import HeroSection from "./components/HeroSection";
import SuitableFor from "./components/SuitableFor";
import TourLayout from "./components/TourLayout";
import BookingCard from "./components/BookingCard";
import CitiesSection from "./components/CitiesSection";
import ItinerarySection from "./components/ItinerarySection";
import ExcludedServices from "@/app/tours/majestic-golden-triangle-tour/components/pricing/ExcludedServices";
import RecommendedTours from "@/app/tours/majestic-golden-triangle-tour/components/sections/RecommendedTours";
import Footer from "@/src/components/sections/footer/Footer";
import DetailedItineraryIntro from "@/src/components/tours/DetailedItinerary";
import TourSteps from "@/src/components/tours/TourSteps";
import CommonForm from "@/src/components/tours/CommonForm";

export default function RoyalRajasthanPage() {
  return (
    <div>

      <HeroSection />
      <SuitableFor />

      <TourLayout sidebar={<BookingCard />}>
        <CitiesSection/>
        <div className="space-y-6">
          <ItinerarySection/>
          <ExcludedServices/>
          <DetailedItineraryIntro/>
        </div>
      </TourLayout>
        
      <TourSteps/>
      <CommonForm tourName="royal-rajasthan-sacred-ganges-tour"/>
      <RecommendedTours/>
      <Footer/>

    </div>
  );
}