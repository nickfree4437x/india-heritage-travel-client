import ToursLayout from "./components/ToursLayout";
import CitiesSection from "./components/CitiesSection";
import HeroSection from "./components/HeroSection";
import SuitableFor from "./components/SuitableFor";
import RightBookingCard from "./components/RightBookingCard";
import HighlightsInclusions from "./components/HighlightsInclusions";
import DetailedItinerary from "./components/DetailedItinerary";
import RecommendedTours from "./components/RecommendedToures";

export default function RoyalRajasthanPage() {
  return (
    <>
      <HeroSection />
      <SuitableFor />
      <ToursLayout rightContent={<RightBookingCard />}>
        <CitiesSection/>
        <HighlightsInclusions />
        <DetailedItinerary />
      </ToursLayout>
      <RecommendedTours />
    </>
  );
}