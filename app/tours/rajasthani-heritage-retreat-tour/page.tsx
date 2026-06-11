import type { Metadata } from "next";

import Hero from "./sections/hero/Hero";
import Suitable from "./sections/suitable-for/Suitable";
import DelhiSection from "./sections/destinations/DelhiSection";
import BookingCard from "./sections/booking-card/BookingCard";
import MandawaSection from "./sections/destinations/MandawaSection";
import BikanerSection from "./sections/destinations/BikanerSection";
import JaisalmerSection from "./sections/destinations/JaisalmerSection";
import JodhpurSection from "./sections/destinations/JodhpurSection";
import UdaipurSection from "./sections/destinations/UdaipurSection";
import PushkarSection from "./sections/destinations/PushkarSection";
import JaipurSection from "./sections/destinations/JaipurSection";
import AgraSection from "./sections/destinations/AgraSection";
import HighlightsSection from "./sections/hightlights/HighlightsSection";
import ItinerarySection from "./sections/itinerary/ItinerarySection";
import ExcludedServices from "../majestic-golden-triangle-tour/components/pricing/ExcludedServices";
import RecommendedTours from "../majestic-golden-triangle-tour/components/sections/RecommendedTours";
import DetailedItineraryIntro from "@/src/tours/book-now/sections/itinerary/DetailedItinerary";
import Footer from "@/src/sections/footer/Footer";
import CommonForm from "@/src/tours/CommonForm";
import TourSteps from "@/src/tours/book-now/sections/tour-steps/TourSteps";
import BreadcrumbSchema from "@/src/common/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Rajasthan Heritage Retreat Tour | Royal Palaces, Culture & Heritage",
  description:
    "Explore the royal heritage of Rajasthan through majestic forts, historic palaces, vibrant culture, local traditions, and unforgettable travel experiences across India's most iconic destinations.",
  alternates: {
    canonical: "/tours/rajasthani-heritage-retreat-tour",
  },
};

export default function Page() {
  return (
    <div className="bg-white min-h-screen">

      {/* Breadcrumb Schema */}
      <BreadcrumbSchema
        items={[
          {
            name: "Home",
            url: "https://indiaheritagetravel.com",
          },
          {
            name: "Tours",
            url: "https://indiaheritagetravel.com/tours",
          },
          {
            name: "Rajasthan Heritage Retreat Tour",
            url: "https://indiaheritagetravel.com/tours/rajasthani-heritage-retreat-tour",
          },
        ]}
      />

      {/* 🔹 HERO */}
      <Hero />

      {/* 🔹 NAV + SUITABLE */}
      <Suitable />

      {/* 🔥 MAIN GRID LAYOUT */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-2 md:py-2 grid grid-cols-1 md:grid-cols-[2.5fr_1fr] gap-6 md:gap-8 lg:gap-10">

        {/* LEFT SIDE */}
        <div className="space-y-8 sm:space-y-8 md:space-y-8 lg:space-y-8">
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
          <div className="space-y-4">
            <ItinerarySection />
            <ExcludedServices />
            <DetailedItineraryIntro />
          </div>
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
      <CommonForm tourName="rajasthani-heritage-retreat-tour"/>
      <RecommendedTours/>
      <Footer/>

    </div>
  );
}