import type { Metadata } from "next";

import Hero from "./components/hero/Hero";
import Suitable from "./components/sections/Suitable";
import DelhiSection from "./components/sections/DelhiSection";
import HightlightsInclusions from "./components/pricing/HighlightsInclusions";
import Itinerary from "./components/itinerary/Itinerary";
import ExcludedServices from "./components/pricing/ExcludedServices";
import RecommendedTours from "./components/sections/RecommendedTours";
import BookingCard from "./components/pricing/BookingCard";
import DetailedItineraryIntro from "@/src/tours/book-now/sections/itinerary/DetailedItinerary";
import Footer from "@/src/sections/footer/Footer";
import CommonForm from "@/src/tours/CommonForm";
import TourSteps from "@/src/tours/book-now/sections/tour-steps/TourSteps";
import BreadcrumbSchema from "@/src/common/seo/BreadcrumbSchema";
import TourSchema from "@/src/common/seo/TourSchema";

export const metadata: Metadata = {
  title:
    "Golden Triangle Tour India | Delhi Agra Jaipur Tour Package",

  description:
    "Book the best Golden Triangle Tour India and explore Delhi, Agra, and Jaipur. Visit the Taj Mahal, Amber Fort, City Palace, and iconic heritage landmarks on an unforgettable cultural journey through India.",

  keywords: [
    "Golden Triangle Tour India",
    "Golden Triangle Tour",
    "Delhi Agra Jaipur Tour",
    "Golden Triangle Tour Package",
    "India Golden Triangle Tour",
    "Golden Triangle Holiday Package",
    "Delhi Agra Jaipur Tour Package",
    "Golden Triangle Travel India",
    "Private Golden Triangle Tour",
    "Luxury Golden Triangle Tour",
    "Golden Triangle Sightseeing Tour",
    "Taj Mahal Tour Package",
    "North India Heritage Tour",
    "Golden Triangle Family Tour",
    "Golden Triangle Vacation Package",
    "Best Golden Triangle Tour India",
    "Golden Triangle Cultural Tour",
    "India Heritage Tour",
    "Delhi Jaipur Agra Trip",
    "Golden Triangle Tourism India",
  ],

  alternates: {
    canonical: "/tours/majestic-golden-triangle-tour",
  },

  openGraph: {
    title:
      "Golden Triangle Tour India | Delhi Agra Jaipur Tour Package",
    description:
      "Explore Delhi, Agra, and Jaipur on India's most popular Golden Triangle Tour featuring the Taj Mahal, Amber Fort, heritage sites, and cultural experiences.",
    url:
      "https://indiaheritagetravel.com/tours/majestic-golden-triangle-tour",
    siteName: "India Heritage Travel",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Golden Triangle Tour India | Delhi Agra Jaipur Tour Package",
    description:
      "Discover Delhi, Agra, Jaipur, the Taj Mahal, Amber Fort, and India's rich cultural heritage on a memorable Golden Triangle journey.",
  },
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function Page() {
  // ==========================================================================
  // MAIN RENDER
  // ==========================================================================

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
            name: "Golden Triangle Tour India",
            url: "https://indiaheritagetravel.com/tours/majestic-golden-triangle-tour",
          },
        ]}
      />

      <TourSchema
        name="Golden Triangle Tour India"
        description="Explore Delhi, Agra, and Jaipur through a personalized Golden Triangle Tour featuring iconic landmarks, cultural experiences, heritage sites, and unforgettable journeys across India"
        url="https://indiaheritagetravel.com/tours/majestic-golden-triangle-tour"
      />

      {/* ====================================================================
          HERO & SUITABLE SECTION
      ==================================================================== */}
      <Hero />
      <Suitable />

      {/* ====================================================================
          MAIN CONTENT GRID - LEFT (Tour Details) & RIGHT (Booking Card)
      ==================================================================== */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 md:grid-cols-[2.5fr_1fr] gap-6 md:gap-8">
        {/* LEFT COLUMN - Tour Information */}
        <div className="space-y-6">
          <DelhiSection />
          <HightlightsInclusions />
          <Itinerary />
          <ExcludedServices />
          <DetailedItineraryIntro />
        </div>

        {/* RIGHT COLUMN - Booking Widget */}
        <div className="flex justify-center md:justify-end">
          <div className="w-full max-w-[280px] sm:max-w-[300px] md:max-w-[320px] lg:max-w-[350px]">
            <BookingCard />
          </div>
        </div>
      </div>

      {/* ====================================================================
          ADDITIONAL SECTIONS
      ==================================================================== */}
      {/* <FAQSection /> - Temporarily commented */}
      <TourSteps />
      <CommonForm 
        tourName="majestic-golden-triangle-tour"/>
      <RecommendedTours />
      <Footer />
    </div>
  );
}