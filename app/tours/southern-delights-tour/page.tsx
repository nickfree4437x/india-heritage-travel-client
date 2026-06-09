import type { Metadata } from "next";

import HeroSection from "./sections/hero/HeroSection";
import RecommendedTours from "./sections/recommended-tours/RecommendedTours";
import SuitableFor from "./sections/suitable-for/SuitableFor";
import TourLayout from "./sections/layout/TourLayout";
import Footer from "@/src/sections/footer/Footer";
import CommonForm from "@/src/tours/CommonForm";
import TourSteps from "@/src/tours/book-now/sections/tour-steps/TourSteps";

export const metadata: Metadata = {
  title: "Southern Delights Tour India | Temples, Culture & South India Experiences",
  description:
    "Explore the cultural richness of South India through historic temples, scenic landscapes, local traditions, authentic cuisine, and unforgettable travel experiences.",
  alternates: {
    canonical: "/tours/southern-delights-tour",
  },
};

export default function RoyalRajasthanPage() {
  return (
    <div>
      <HeroSection />
      <SuitableFor />
      <TourLayout />

      <TourSteps/>
      <CommonForm tourName="southern-delights-tour"/>
      <RecommendedTours />
      <Footer/>
    </div>
  );
}