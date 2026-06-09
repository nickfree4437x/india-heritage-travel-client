import type { Metadata } from "next";

import HeroSection from "./sections/hero/HeroSection";
import SuitableFor from "./sections/suitable-for/SuitableFor";
import TourLayout from "./sections/layout/TourLayout";
import BookingCard from "./sections/booking-card/BookingCard";
import CitiesSection from "./sections/cities-section/CitiesSection";
import ItinerarySection from "./sections/itinerary/ItinerarySection";
import ExcludedServices from "@/app/tours/majestic-golden-triangle-tour/components/pricing/ExcludedServices";
import RecommendedTours from "@/app/tours/majestic-golden-triangle-tour/components/sections/RecommendedTours";
import DetailedItineraryIntro from "@/src/tours/book-now/sections/itinerary/DetailedItinerary";
import Footer from "@/src/sections/footer/Footer";
import CommonForm from "@/src/tours/CommonForm";
import TourSteps from "@/src/tours/book-now/sections/tour-steps/TourSteps";

export const metadata: Metadata = {
  title: "Royal Rajasthan & Sacred Ganges Tour India | Heritage, Culture & Spiritual Journey",
  description:
    "Experience the royal heritage of Rajasthan and the spiritual beauty of the sacred Ganges through cultural landmarks, historic cities, local traditions, and unforgettable journeys across India.",
};

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