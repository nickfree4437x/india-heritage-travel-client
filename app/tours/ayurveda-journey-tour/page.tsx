import AyurvedaHero from "./sections/AyurvedaHero";
import SuitableFor from "./sections/SuitableFor";
import AyurvedaOverview from "./sections/AyurvedaOverview";
import TourLayout from "./sections/TourLayout";
import RecommendedTours from "./sections/RecommendedTours";
import Footer from "@/src/components/sections/footer/Footer";
import CommonForm from "@/src/components/tours/CommonForm";
import TourSteps from "@/src/components/tours/TourSteps";

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