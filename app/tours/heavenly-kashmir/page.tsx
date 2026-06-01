import type { Metadata } from "next";

import HeroSection from "./components/HeroSection";
import SuitableFor from "./components/SuitableFor";
import TourDetails from "./components/TourDetails";
import TourLayout from "./components/TourLayout";
import RecommendedTours from "./components/RecommendedTours";
import Footer from "@/src/components/sections/footer/Footer";
import CommonForm from "@/src/components/tours/CommonForm";
import TourSteps from "@/src/components/tours/TourSteps";

export const metadata: Metadata = {
  title: "Heavenly Kashmir Tour Package | Lakes, Valleys & Scenic Experiences",
  description:
    "Discover the beauty of Kashmir through peaceful lakes, lush valleys, mountain views, local culture, and unforgettable travel experiences in one of India's most stunning destinations.",
};

export default function RoyalRajasthanPage() {
  return (
    <div>
      <HeroSection />
      <SuitableFor />

      <TourLayout>
        <TourDetails />
      </TourLayout>

      <TourSteps/>
      <CommonForm tourName="heavenly-kashmir-tour"/>
      <RecommendedTours />
      <Footer/>
    </div>
  );
}