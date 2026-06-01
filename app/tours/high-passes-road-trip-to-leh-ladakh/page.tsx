import type { Metadata } from "next";

import Footer from "@/src/components/sections/footer/Footer";
import RecommendedTours from "../divine-kashmir-and-exciting-ladakh/components/RecommendedTours";
import HeroSection from "./components/HeroSection";
import SuitableFor from "./components/SuitableFor";
import TourDetails from "./components/TourDetails";
import TourLayout from "./components/TourLayout";
import CommonForm from "@/src/components/tours/CommonForm";
import TourSteps from "@/src/components/tours/TourSteps";

export const metadata: Metadata = {
  title: "Leh Ladakh Road Trip | High Mountain Passes & Himalayan Adventure",
  description:
    "Embark on an unforgettable Leh Ladakh road trip featuring high mountain passes, breathtaking landscapes, monasteries, remote villages, and thrilling Himalayan experiences.",
};

export default function RoyalRajasthanPage() {
  return (
    <div>
      <HeroSection />
      <SuitableFor />

      {/* MAIN SECTION */}
      <TourLayout>
        <TourDetails />
      </TourLayout>
      
      <TourSteps/>
      <CommonForm tourName="high-passes-road-trip-to-leh-ladakh-tour"/>
      <RecommendedTours/>
      <Footer/>
    </div>
  );
}