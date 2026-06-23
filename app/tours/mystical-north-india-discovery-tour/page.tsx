import type { Metadata } from "next";

// SEO Components
import BreadcrumbSchema from "@/src/common/seo/BreadcrumbSchema";
import TourSchema from "@/src/common/seo/TourSchema";

// Common components
import Footer from "@/src/sections/footer/Footer";
import CommonForm from "@/src/tours/CommonForm";
import TourSteps from "@/src/tours/book-now/sections/tour-steps/TourSteps";
import ExcludedServices from "../majestic-golden-triangle-tour/components/pricing/ExcludedServices";
import DetailedItineraryIntro from "@/src/tours/book-now/sections/itinerary/DetailedItinerary";

// Page sections
import HeroSection from "./sections/hero/HeroSection";
import SuitableFor from "./sections/suitable-for/SuitableFor";
import BookingCard from "./booking-card/BookingCard";
import DestinationSection from "./sections/destination-section/DestinationSection";
import HighlightsInclusions from "./sections/hightlights/HighlightsInclusions";
import Itinerary from "./sections/itinerary/Itinerary";
import RecommendedTours from "./sections/recommended-tours/RecommendedTours";
import TourLayout from "./layout/TourLayout";

// ============================================
// SEO METADATA
// ============================================
export const metadata: Metadata = {
  title: "North India Tour Package | Heritage, Culture & Spiritual Experiences",
  description:
    "Explore North India through heritage landmarks, spiritual destinations, cultural experiences, historic cities, and unforgettable journeys across India's most iconic attractions.",
  alternates: {
    canonical: "/tours/mystical-north-india-discovery-tour",
  },
};

// ============================================
// PAGE COMPONENT
// ============================================
export default function Page() {
  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumb Schema - SEO */}
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
            name: "Mystical North India Discovery Tour",
            url: "https://indiaheritagetravel.com/tours/mystical-north-india-discovery-tour",
          },
        ]}
      />

      {/* Tour Schema - SEO */}
      <TourSchema
        name="Mystical North India Discovery Tour"
        description="Discover the cultural, spiritual, and historical wonders of North India through heritage landmarks, local traditions, iconic destinations, and immersive travel experiences."
        url="https://indiaheritagetravel.com/tours/mystical-north-india-discovery-tour"
      />

      {/* Hero Section */}
      <HeroSection />
      <SuitableFor />

      {/* Tour Layout with Sidebar */}
      <TourLayout sidebar={<BookingCard />}>
        <DestinationSection />
        <HighlightsInclusions />
        <div className="space-y-6">
          <Itinerary />
          <ExcludedServices />
          <DetailedItineraryIntro />
        </div>
      </TourLayout>
      <TourSteps />

      {/* Booking Form */}
      <CommonForm tourName="mystical-north-india-discovery-tour" />

      <RecommendedTours />
      <Footer />
    </div>
  );
}