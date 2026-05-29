import HeroSection from "./components/HeroSection";
import SuitableFor from "./components/SuitableFor";
import BookingCard from "./components/BookingCard";
import DestinationSection from "./components/DestinationSection";
import RecommendedTours from "./components/RecommendedTours";
import TourLayout from "./components/TourLayout";
import HighlightsInclusions from "./components/HighlightsInclusions";
import Itinerary from "./components/Itinerary";
import ExcludedServices from "../majestic-golden-triangle-tour/components/pricing/ExcludedServices";
import Footer from "@/src/components/sections/footer/Footer";
import DetailedItineraryIntro from "@/src/components/tours/DetailedItinerary";
import TourSteps from "@/src/components/tours/TourSteps";
import CommonForm from "@/src/components/tours/CommonForm";


export default function Page() {
  return (
    <div className="bg-white min-h-screen">
      <HeroSection />
      <SuitableFor />

      <TourLayout sidebar={<BookingCard />}>
       <DestinationSection />
       <HighlightsInclusions/>
       <div className="space-y-6">
        <Itinerary/>
        <ExcludedServices/>
        <DetailedItineraryIntro/>
       </div>
      </TourLayout>

      <TourSteps/>
      <CommonForm tourName="mystical-north-india-discovery-tour"/>
      <RecommendedTours />
      <Footer/>
    </div>
  );
}