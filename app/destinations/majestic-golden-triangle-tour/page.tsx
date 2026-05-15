import Hero from "./components/Hero";
import Suitable from "./components/Suitable";
import DelhiSection from "./components/DelhiSection";
import HightlightsInclusions from "./components/HighlightsInclusions";
import Itinerary from "./components/Itinerary";
import ExcludedServices from "./components/ExcludedServices";
import RecommendedTours from "./components/RecommendedTours";
import BookingCard from "./components/BookingCard";
import Footer from "@/src/components/sections/footer/Footer";
import DetailedItineraryIntro from "@/src/components/tours/DetailedItinerary";
import TourSteps from "@/src/components/tours/TourSteps";
import CommonForm from "@/src/components/tours/CommonForm";
//import FAQSection from "@/src/components/tours/FaqSection";

export default function Page() {
  return (
    <div className="bg-[#f4f0ea] min-h-screen">

      <Hero />
      <Suitable />

      {/* 🔥 SAME GRID STRUCTURE */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 md:grid-cols-[2.5fr_1fr] gap-6 md:gap-8">

        {/* LEFT */}
        <div className="space-y-6">
          <DelhiSection />
          <HightlightsInclusions />
          <Itinerary />
          <ExcludedServices />
          <DetailedItineraryIntro/>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center md:justify-end">
          <div className="w-full max-w-[280px] sm:max-w-[300px] md:max-w-[320px] lg:max-w-[350px]">
            <BookingCard />
          </div>
        </div>

      </div>
      {/* <FAQSection/> */}
      <TourSteps/>
      <CommonForm/>
      <RecommendedTours />
      <Footer/>

    </div>
  );
}