import type { Metadata } from "next";

import HeroSection from "./components/HeroSection";
import SuitableFor from "./components/SuitableFor";
import TourDetails from "./components/TourDetails";
import TourLayout from "./components/TourLayout";
import RecommendedTours from "./components/RecommendedTours";
import ExcludedServices from "@/app/tours/majestic-golden-triangle-tour/components/pricing/ExcludedServices";
import Footer from "@/src/components/sections/footer/Footer";
import DetailedItineraryIntro from "@/src/components/tours/DetailedItinerary";
import CommonForm from "@/src/components/tours/CommonForm";
import TourSteps from "@/src/components/tours/TourSteps";

export const metadata: Metadata = {
  title: "Kashmir & Ladakh Tour Package | Mountains, Lakes & Himalayan Adventures",
  description:
    "Explore the breathtaking beauty of Kashmir and Ladakh through scenic valleys, mountain landscapes, monasteries, lakes, cultural experiences, and unforgettable Himalayan journeys.",
};

export default function RoyalRajasthanPage() {
  return (
    <div>
      <HeroSection />
      <SuitableFor />

      <TourLayout>
        <TourDetails />
        <ExcludedServices/>
        <DetailedItineraryIntro/>
      </TourLayout>
      
      <TourSteps/>
      <CommonForm tourName="divine-kashmir-and-exciting-ladakh-tour"/>
      <RecommendedTours />
      <Footer/>
    </div>
  );
}