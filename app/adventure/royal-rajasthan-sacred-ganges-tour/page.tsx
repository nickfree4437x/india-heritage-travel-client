import HeroSection from "./components/HeroSection";
import SuitableFor from "./components/SuitableFor";
import TourLayout from "./components/TourLayout";
import BookingCard from "./components/BookingCard";
import CitiesSection from "./components/CitiesSection";
import RecommendedTours from "./components/RecommendedTours";

export default function RoyalRajasthanPage() {
  return (
    <div>

      <HeroSection />
      <SuitableFor />

      <TourLayout sidebar={<BookingCard />}>
        <CitiesSection/>
      </TourLayout>

      <RecommendedTours />

    </div>
  );
}