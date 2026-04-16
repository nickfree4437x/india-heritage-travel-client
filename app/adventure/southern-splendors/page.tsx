import HeroSection from "./components/HeroSection";
import SuitableFor from "./components/SuitableFor";
import TourLayout from "./components/TourLayout";
import BookingCard from "./components/BookingCard";
import TourContent from "./components/TourContent";
import DetailedItinerary from "./components/DetailedItinerary";
import RecommendedTours from "./components/RecommendedTours";

export default function RoyalRajasthanPage() {
  return (
    <div>
      <HeroSection />
      <SuitableFor />

      <TourLayout sidebar={<BookingCard />}>
        <TourContent />
        <DetailedItinerary />
      </TourLayout>
      <RecommendedTours />
    </div>
  );
}