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
  title:
    "Golden Triangle with Mandawa Tour | Delhi Agra Jaipur Heritage Journey",

  description:
    "Explore Delhi, Agra, Jaipur, and Mandawa on a Golden Triangle with Mandawa Tour featuring the Taj Mahal, Amber Fort, heritage havelis, cultural landmarks, and unforgettable North India experiences.",

  keywords: [
    "Golden Triangle with Mandawa Tour",
    "Delhi Agra Jaipur Mandawa Tour",
    "Golden Triangle Heritage Tour",
    "Golden Triangle Tour with Mandawa",
    "Golden Triangle Tour India",
    "North India Heritage Tour",
    "Mandawa Heritage Tour",
    "Delhi Agra Jaipur Tour",
    "Golden Triangle Holiday Package",
    "India Heritage Tour",
    "Mandawa Haveli Tour",
    "Golden Triangle Cultural Tour",
    "Best Golden Triangle Tour India",
    "Golden Triangle Family Tour",
    "Golden Triangle Sightseeing Tour",
    "North India Cultural Tour",
    "Rajasthan Heritage Tour",
    "Delhi Jaipur Agra Trip",
    "Golden Triangle Travel India",
    "Heritage Tour India",
  ],

  alternates: {
    canonical: "/tours/the-royal-heritage-trail-tour",
  },

  openGraph: {
    title:
      "Golden Triangle with Mandawa Tour | Delhi Agra Jaipur Heritage Journey",
    description:
      "Discover Delhi, Agra, Jaipur, and Mandawa through heritage landmarks, royal architecture, cultural traditions, and unforgettable North India journeys.",
    url:
      "https://indiaheritagetravel.com/tours/the-royal-heritage-trail-tour",
    siteName: "India Heritage Travel",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Golden Triangle with Mandawa Tour | Delhi Agra Jaipur Heritage Journey",
    description:
      "Explore the Taj Mahal, Amber Fort, Mandawa Havelis, and North India's rich cultural heritage.",
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
            name: "The Royal Heritage Trail Tour",
            url: "https://indiaheritagetravel.com/tours/the-royal-heritage-trail-tour",
          },
        ]}
      />

      {/* Tour Schema - SEO */}
      <TourSchema
        name="Golden Triangle with Mandawa Tour"
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