
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

// ============================================
// SEO METADATA
// ============================================
export const metadata: Metadata = {
  title:
    "Golden Triangle Tour India | Delhi, Agra & Jaipur",

  description:
    "Explore Delhi, Agra and Jaipur on a Golden Triangle Tour featuring the Taj Mahal, Amber Fort, historic landmarks and India's rich cultural heritage.",

  keywords: [
    "Golden Triangle Tour India",
    "Golden Triangle Tour Package",
    "Delhi Agra Jaipur Tour",
    "Delhi Agra Jaipur Tour Package",
    "India Golden Triangle Tour",
    "Private Golden Triangle Tour",
    "Luxury Golden Triangle Tour",
    "Golden Triangle Cultural Tour",
  ],

  alternates: {
    canonical: "/tours/majestic-golden-triangle-tour",
  },

  openGraph: {
    title:
      "Golden Triangle Tour India | Delhi, Agra & Jaipur",

    description:
      "Discover Delhi, Agra and Jaipur through the Taj Mahal, Amber Fort, historic landmarks and unforgettable cultural experiences.",

    url: "https://indiaheritagetravel.com/tours/majestic-golden-triangle-tour",
    siteName: "India Heritage Travel",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Golden Triangle Tour India | Delhi, Agra & Jaipur",

    description:
      "Explore Delhi, Agra and Jaipur with the Taj Mahal, Amber Fort, historic sites and India's fascinating cultural heritage.",
  },
};

// ============================================
// PAGE COMPONENT
// ============================================
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
            name: "Golden Triangle Tour India",
            url: "https://indiaheritagetravel.com/tours/majestic-golden-triangle-tour",
          },
        ]}
      />

      {/* Tour Schema */}
      <TourSchema
        name="Golden Triangle Tour India"
        description="Explore Delhi, Agra, and Jaipur through a personalized Golden Triangle Tour featuring iconic landmarks, cultural experiences, heritage sites, and unforgettable journeys across India"
        url="https://indiaheritagetravel.com/tours/majestic-golden-triangle-tour"
      />

      {/* Hero & Suitable Section */}
      <Hero />
      <Suitable />

      {/* Main Content Grid */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 md:grid-cols-[2.5fr_1fr] gap-6 md:gap-8">

        {/* Left Column - Tour Information */}
        <div className="space-y-6">
          <DelhiSection />
          <HightlightsInclusions />
          <Itinerary />
          <ExcludedServices />
          <DetailedItineraryIntro />
        </div>

        {/* Right Column - Booking Widget */}
        <div className="flex justify-center md:justify-end">
          <div className="w-full max-w-[280px] sm:max-w-[300px] md:max-w-[320px] lg:max-w-[350px]">
            <BookingCard />
          </div>
        </div>
      </div>

      {/* Additional Sections */}
      {/* <FAQSection /> - Temporarily commented */}
      <TourSteps />

      <CommonForm tourName="majestic-golden-triangle-tour" />

      <RecommendedTours />
      <Footer />
    </div>
  );
}
