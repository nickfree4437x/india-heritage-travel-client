import Hero from "./components/Hero";
import Suitable from "./components/Suitable";
import DelhiSection from "./components/DelhiSection";
import HightlightsInclusions from "./components/HighlightsInclusions";
import Itinerary from "./components/Itinerary";
import ExcludedServices from "./components/ExcludedServices";
import RecommendedTours from "./components/RecommendedTours";
import BookingCard from "./components/BookingCard";
import Footer from "@/src/components/sections/footer/Footer";

export default function Page() {
  return (
    <div className="bg-[#f4f0ea] min-h-screen">

      <Hero />
      <Suitable />

      {/* 🔥 SAME GRID STRUCTURE */}
      <div className="max-w-[1400px] mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-[2.5fr_1fr] gap-2">

        {/* LEFT */}
        <div className="space-y-6">
          <DelhiSection />
          <HightlightsInclusions />
          <Itinerary />
          <ExcludedServices />
        </div>

        {/* RIGHT */}
        <div className="flex justify-end">
          <div className="w-full max-w-[320px]">
            <BookingCard />
          </div>
        </div>

      </div>
      <RecommendedTours />
      <Footer/>

    </div>
  );
}