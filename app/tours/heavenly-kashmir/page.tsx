import type { Metadata } from "next";

import HeroSection from "./sections/hero/HeroSection";
import SuitableFor from "./sections/suitable-for/SuitableFor";
import TourDetails from "./sections/tour-details/TourDetails";
import TourLayout from "./sections/layout/TourLayout";
import RecommendedTours from "./sections/recommended-tours/RecommendedTours";
import Footer from "@/src/sections/footer/Footer";
import CommonForm from "@/src/tours/CommonForm";
import TourSteps from "@/src/tours/book-now/sections/tour-steps/TourSteps";

export const metadata: Metadata = {
  title: "Heavenly Kashmir Tour Package | Lakes, Valleys & Scenic Experiences",
  description:
    "Discover the beauty of Kashmir through peaceful lakes, lush valleys, mountain views, local culture, and unforgettable travel experiences in one of India's most stunning destinations.",
  alternates: {
    canonical: "/tours/heavenly-kashmir-tour",
  },
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