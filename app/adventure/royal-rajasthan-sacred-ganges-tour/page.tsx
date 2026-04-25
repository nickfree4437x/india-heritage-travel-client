import HeroSection from "./components/HeroSection";
import SuitableFor from "./components/SuitableFor";
import TourLayout from "./components/TourLayout";
import BookingCard from "./components/BookingCard";
import CitiesSection from "./components/CitiesSection";
import ExcludedServices from "@/app/destinations/majestic-golden-triangle-tour/components/ExcludedServices";
import RecommendedTours from "@/app/destinations/majestic-golden-triangle-tour/components/RecommendedTours";
import Footer from "@/src/components/sections/footer/Footer";

export default function RoyalRajasthanPage() {
  return (
    <div>

      <HeroSection />
      <SuitableFor />

      <TourLayout sidebar={<BookingCard />}>
        <CitiesSection/>
        <ExcludedServices/>
      </TourLayout>

      <RecommendedTours/>
      <Footer/>

    </div>
  );
}