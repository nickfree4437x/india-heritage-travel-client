import ToursLayout from "./components/ToursLayout";
import CitiesSection from "./components/CitiesSection";
import HeroSection from "./components/HeroSection";
import SuitableFor from "./components/SuitableFor";
import RightBookingCard from "./components/RightBookingCard";
import HighlightsInclusions from "./components/HighlightsInclusions";
import DetailedItinerary from "./components/DetailedItinerary";
import RecommendedTours from "./components/RecommendedToures";
import Footer from "@/src/components/sections/footer/Footer";
import ExcludedServices from "@/app/destinations/majestic-golden-triangle-tour/components/ExcludedServices";
import DetailedItineraryIntro from "@/src/components/tours/DetailedItinerary";
import TourSteps from "@/src/components/tours/TourSteps";
import CommonForm from "@/src/components/tours/CommonForm";

export default function RoyalRajasthanPage() {
  return (
    <>
      <HeroSection />
      <SuitableFor />
      <ToursLayout rightContent={<RightBookingCard />}>
        <CitiesSection/>
        <HighlightsInclusions />
        <DetailedItinerary />
        <ExcludedServices/>
        <DetailedItineraryIntro/>
      </ToursLayout>
      
      <TourSteps/>
      <CommonForm/>
      <RecommendedTours />
      <Footer/>
    </>
  );
}