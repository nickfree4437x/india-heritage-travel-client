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
import ToursLayout from "./layout/ToursLayout";
import CitiesSection from "./sections/cities-section/CitiesSection";
import HeroSection from "./sections/hero/HeroSection";
import SuitableFor from "./sections/suitable-for/SuitableFor";
import RightBookingCard from "./booking-card/RightBookingCard";
import HighlightsInclusions from "./sections/hightlights/HighlightsInclusions";
import DetailedItinerary from "./sections/itinerary/DetailedItinerary";
import RecommendedTours from "./sections/recommended-tours/RecommendedToures";

// ============================================
// SEO METADATA
// ============================================
export const metadata: Metadata = {
  title: "Royal Rajasthan Tour | Palaces, Forts & Heritage Experiences",
  description:
    "Experience the Royal Rajasthan Tour with majestic palaces, historic forts, vibrant culture, heritage cities, and authentic local experiences across Rajasthan's most iconic destinations.",
  alternates: {
    canonical: "/tours/the-royal-heritage-trail-tour",
  },
};

// ============================================
// PAGE COMPONENT
// ============================================
export default function RoyalRajasthanPage() {
  return (
    <main>
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
            name: "Royal Rajasthan Tour",
            url: "https://indiaheritagetravel.com/tours/the-royal-heritage-trail-tour",
          },
        ]}
      />

      {/* Tour Schema - SEO */}
      <TourSchema
        name="Royal Rajasthan Tour"
        description="Explore India's royal heritage through magnificent palaces, historic forts, cultural landmarks, local traditions, and immersive travel experiences across iconic destinations."
        url="https://indiaheritagetravel.com/tours/the-royal-heritage-trail-tour"
      />

      {/* Hero Section */}
      <HeroSection />
      <SuitableFor />

      {/* Tours Layout with Sidebar */}
      <ToursLayout rightContent={<RightBookingCard />}>
        <CitiesSection />
        <HighlightsInclusions />
        <div className="space-y-6">
          <DetailedItinerary />
          <ExcludedServices />
          <DetailedItineraryIntro />
        </div>
      </ToursLayout>

      <TourSteps />

      {/* Booking Form */}
      <CommonForm tourName="the-royal-heritage-trail-tour" />

      <RecommendedTours />
      <Footer />
    </main>
  );
}