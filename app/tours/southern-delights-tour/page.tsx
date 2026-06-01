import type { Metadata } from "next";

import Footer from "@/src/components/sections/footer/Footer";
import HeroSection from "./components/HeroSection";
import RecommendedTours from "./components/RecommendedTours";
import SuitableFor from "./components/SuitableFor";
import TourLayout from "./components/TourLayout";
import CommonForm from "@/src/components/tours/CommonForm";
import TourSteps from "@/src/components/tours/TourSteps";

export const metadata: Metadata = {
  title: "Southern Delights Tour India | Temples, Culture & South India Experiences",
  description:
    "Explore the cultural richness of South India through historic temples, scenic landscapes, local traditions, authentic cuisine, and unforgettable travel experiences.",
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