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
  title: "Spiti Valley Trek & Tour India | Himalayan Landscapes & Adventure Journey",
  description:
    "Experience the rugged beauty of Spiti Valley through scenic treks, mountain villages, monasteries, dramatic landscapes, and unforgettable Himalayan adventures.",
};

export default function RoyalRajasthanPage() {
  return (
    <div>
      <HeroSection />
      <SuitableFor />

      {/* ✅ MAIN SECTION */}
      <TourLayout>
        <TourDetails />
      </TourLayout>
      
      <TourSteps/>
      <CommonForm tourName="spiti-valley-trek-and-tour"/>
      <RecommendedTours/>
      <Footer/>
    </div>
  );
}