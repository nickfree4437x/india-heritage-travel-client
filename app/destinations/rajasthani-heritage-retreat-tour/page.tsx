import Hero from "./components/Hero";
import Suitable from "./components/Suitable";
import DelhiSection from "./components/DelhiSection";
import BookingCard from "./components/BookingCard";
import MandawaSection from "./components/MandawaSection";
import BikanerSection from "./components/BikanerSection";
import JaisalmerSection from "./components/JaisalmerSection";
import JodhpurSection from "./components/JodhpurSection";
import UdaipurSection from "./components/UdaipurSection";
import PushkarSection from "./components/PushkarSection";
import JaipurSection from "./components/JaipurSection";
import AgraSection from "./components/AgraSection";
import HighlightsSection from "./components/HighlightsSection";
import ItinerarySection from "./components/ItinerarySection";
//import Recommended from "./components/RecommendTous";
import ExcludedServices from "../majestic-golden-triangle-tour/components/ExcludedServices";
import RecommendedTours from "../majestic-golden-triangle-tour/components/RecommendedTours";
import Footer from "@/src/components/sections/footer/Footer";
import DetailedItineraryIntro from "@/src/components/tours/DetailedItinerary";
import TourSteps from "@/src/components/tours/TourSteps";
import CommonForm from "@/src/components/tours/CommonForm";

export default function Page() {
  return (
    <div className="bg-[#f8f6f2] min-h-screen">

      {/* 🔹 HERO */}
      <Hero />

      {/* 🔹 NAV + SUITABLE */}
      <Suitable />

      {/* 🔥 MAIN GRID LAYOUT */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-2 md:py-2 grid grid-cols-1 md:grid-cols-[2.5fr_1fr] gap-6 md:gap-8 lg:gap-10">

        {/* LEFT SIDE */}
        <div className="space-y-8 sm:space-y-10 md:space-y-10 lg:space-y-10">
          <DelhiSection />
          <MandawaSection />
          <BikanerSection />
          <JaisalmerSection />
          <JodhpurSection />
          <UdaipurSection />
          <PushkarSection />
          <JaipurSection />
          <AgraSection />
          <HighlightsSection />
          <ItinerarySection />
          <ExcludedServices/>
          <DetailedItineraryIntro/>
          {/* Next sections */}
        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center md:justify-end md:mt-0">
          <div className="w-full max-w-[280px] sm:max-w-[300px] md:max-w-[320px] lg:max-w-[350px]">
            <BookingCard />
          </div>
        </div>
      </div>
      
      <TourSteps/>
      <CommonForm/>
      <RecommendedTours/>
      <Footer/>

    </div>
  );
}