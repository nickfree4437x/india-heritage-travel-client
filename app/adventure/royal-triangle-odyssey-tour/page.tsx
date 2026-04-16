import RoyalTriangleHero from "./components/HeroSection";
import SuitableForSection from "./components/SuitableFor";
import ToursLayout from "./components/ToursLayout";
import RightBookingCard from "./components/RightBookingCard";
import OdysseyCitiesSection from "./components/OdysseyCitiesSection";
import OdysseyHighlightsSection from "./components/OdysseyHighlights";
import ItinerarySection from "./components/ItinerarySection";
import RecommendedTours from "./components/RecommendedTours";

export default function RoyalRajasthanPage() {
  return (
    <div>

      <RoyalTriangleHero />
      <SuitableForSection />

      <ToursLayout right={<RightBookingCard/>}>
         <OdysseyCitiesSection />
         <OdysseyHighlightsSection />
         <ItinerarySection />
      </ToursLayout>

      <RecommendedTours />

    </div>
  );
}