import type { Metadata } from "next";

// SEO Components
import BreadcrumbSchema from "@/src/common/seo/BreadcrumbSchema";
import TourSchema from "@/src/common/seo/TourSchema";

// Common components
import Footer from "@/src/sections/footer/Footer";
import CommonForm from "@/src/tours/CommonForm";
import TourSteps from "@/src/tours/book-now/sections/tour-steps/TourSteps";
import ExcludedServices from "@/app/tours/majestic-golden-triangle-tour/components/pricing/ExcludedServices";
import DetailedItineraryIntro from "@/src/tours/book-now/sections/itinerary/DetailedItinerary";

// Page sections
import HeroSection from "./sections/hero/HeroSection";
import SuitableFor from "./sections/suitable-for/SuitableFor";
import TourLayout from "./layout/TourLayout";
import CitiesSection from "./sections/city-section/CitiesSection";
import HighlightsInclusions from "./sections/hightlights/HighlightsInclusions";
import ItinerarySection from "./sections/itinerary/ItinerarySection";
import RecommendedTours from "./sections/recommended-tours/RecommendedTours";

// ============================================
// SEO METADATA
// ============================================
export const metadata: Metadata = {
  title: "Heritage & Wildlife Tour India | Wildlife Safari, Culture & Nature Experiences",
  description:
    "Experience the perfect blend of India's cultural heritage and wildlife adventures through historic landmarks, wildlife safaris, natural landscapes, cultural experiences, and unforgettable journeys.",
  alternates: {
    canonical: "/tours/journey-through-heritage-wildlife",
  },
};

// ============================================
// PAGE COMPONENT
// ============================================
export default function RoyalRajasthanPage() {
  return (
    <div>
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
            name: "Journey Through Heritage & Wildlife Tour",
            url: "https://indiaheritagetravel.com/tours/journey-through-heritage-wildlife",
          },
        ]}
      />

      {/* Tour Schema - SEO */}
      <TourSchema
        name="Journey Through Heritage & Wildlife Tour"
        description="Experience the perfect blend of India's cultural heritage and wildlife adventures through historic landmarks, natural landscapes, safari experiences, and unforgettable journeys."
        url="https://indiaheritagetravel.com/tours/journey-through-heritage-wildlife"
      />

      <HeroSection />
      <SuitableFor />

      {/* Tour Layout with Sections */}
      <TourLayout>
        <CitiesSection />
        <HighlightsInclusions />
        <div className="space-y-6">
          <ItinerarySection />
          <ExcludedServices />
          <DetailedItineraryIntro />
        </div>
      </TourLayout>
      <TourSteps />

      {/* Booking Form */}
      <CommonForm tourName="journey-through-heritage-wildlife" />

      <RecommendedTours />
      <Footer />
    </div>
  );
}