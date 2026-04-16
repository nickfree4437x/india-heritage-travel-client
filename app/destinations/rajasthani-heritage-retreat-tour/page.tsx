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
import ExcludedServices from "./components/ExcludeServices";
import Recommended from "./components/RecommendTous";

export default function Page() {
  return (
    <div className="bg-[#f4f0ea] min-h-screen">

      {/* 🔹 HERO */}
      <Hero />

      {/* 🔹 NAV + SUITABLE */}
      <Suitable />

      {/* 🔥 MAIN GRID LAYOUT */}
      <div className="max-w-[1400px] mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-[2.5fr_1fr] gap-12">

        {/* LEFT SIDE */}
        <div className="space-y-16">
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
          <ExcludedServices />
          {/* Next sections */}
        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-end">
          <div className="w-full max-w-[320px]">
            <BookingCard />
          </div>
        </div>
      </div>

      <Recommended />

    </div>
  );
}