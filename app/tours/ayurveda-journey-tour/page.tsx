import type { Metadata } from "next";

import AyurvedaHero from "./sections/hero/AyurvedaHero";
import SuitableFor from "./sections/suitable-for/SuitableFor";
import AyurvedaOverview from "./sections/overview/AyurvedaOverview";
import TourLayout from "./layout/TourLayout";
import RecommendedTours from "./sections/recommended-tours/RecommendedTours";
import Footer from "@/src/sections/footer/Footer";
import CommonForm from "@/src/tours/CommonForm";
import TourSteps from "@/src/tours/book-now/sections/tour-steps/TourSteps";

export const metadata: Metadata = {
  title: "Ayurveda Tour India | Wellness, Healing & Holistic Retreat Experiences",
  description:
    "Experience authentic Ayurveda therapies, holistic healing, wellness treatments, yoga practices, and rejuvenating journeys designed to restore balance and well-being.",
  alternates: {
    canonical: "/tours/ayurveda-journey-tour",
  },
};

export default function AyurvedaJourneyPage() {
  return (
    <main>
      <AyurvedaHero />
      <SuitableFor />
      <AyurvedaOverview />
      <TourLayout />

      <TourSteps/>
      <CommonForm tourName="ayurveda-journey-tour"/>
      <RecommendedTours />
      <Footer/>
    </main>
  );
}