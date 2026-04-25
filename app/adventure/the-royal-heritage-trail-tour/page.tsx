import ToursLayout from "./components/ToursLayout";
import CitiesSection from "./components/CitiesSection";
import HeroSection from "./components/HeroSection";
import SuitableFor from "./components/SuitableFor";
import RightBookingCard from "./components/RightBookingCard";
import HighlightsInclusions from "./components/HighlightsInclusions";
import DetailedItinerary from "./components/DetailedItinerary";
import RecommendedTours from "./components/RecommendedToures";
import ExcludedServices from "@/app/destinations/rajasthani-heritage-retreat-tour/components/ExcludeServices";
import Footer from "@/src/components/sections/footer/Footer";

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
      </ToursLayout>
      <RecommendedTours />
      <Footer/>
    </>
  );
}