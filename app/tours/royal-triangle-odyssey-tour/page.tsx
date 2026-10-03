import type { Metadata } from "next";

// SEO Components
import BreadcrumbSchema from "@/src/common/seo/BreadcrumbSchema";
import TourSchema from "@/src/common/seo/TourSchema";

// Common components
import Footer from "@/src/sections/footer/Footer";
import CommonForm from "@/src/tours/CommonForm";
import TourSteps from "@/src/tours/book-now/sections/tour-steps/TourSteps";
import ExcludedServices from "../../tours/majestic-golden-triangle-tour/components/pricing/ExcludedServices";
import DetailedItineraryIntro from "@/src/tours/book-now/sections/itinerary/DetailedItinerary";

// Page sections
import RoyalTriangleHero from "./sections/hero/HeroSection";
import SuitableForSection from "./sections/suitable-for/SuitableFor";
import ToursLayout from "./layout/ToursLayout";
import RightBookingCard from "./booking-card/RightBookingCard";
import OdysseyCitiesSection from "./sections/odyssey-cities/OdysseyCitiesSection";
import OdysseyHighlightsSection from "./sections/hightlights/OdysseyHighlights";
import ItinerarySection from "./sections/itinerary/ItinerarySection";
import RecommendedTours from "./sections/recommended-tours/RecommendedTours";

// ============================================
// SEO METADATA
// ============================================
export const metadata: Metadata = {
  title:
    "Golden Triangle with Varanasi Tour | Delhi Agra Jaipur & Varanasi",

  description:
    "Explore Delhi, Agra, Jaipur, Mandawa, and Varanasi on a Golden Triangle with Varanasi Tour featuring the Taj Mahal, Amber Fort, heritage cities, sacred Ganges experiences, and unforgettable cultural journeys.",

  keywords: [
    "Golden Triangle with Varanasi Tour",
    "Golden Triangle and Varanasi Tour",
    "Delhi Agra Jaipur Varanasi Tour",
    "Golden Triangle Tour with Varanasi",
    "North India Heritage Tour",
    "Golden Triangle Cultural Tour",
    "Varanasi Tour Package",
    "Golden Triangle Holiday Package",
    "India Heritage Tour",
    "Delhi Agra Jaipur Tour",
    "Varanasi Ganga Aarti Tour",
    "Golden Triangle Travel India",
    "Golden Triangle Family Tour",
    "Golden Triangle Spiritual Tour",
    "Mandawa Heritage Tour",
    "North India Cultural Tour",
    "Golden Triangle Sightseeing Tour",
    "India Cultural Heritage Tour",
    "Best Golden Triangle with Varanasi Tour",
    "Golden Triangle Vacation Package",
  ],

  alternates: {
    canonical: "/tours/royal-triangle-odyssey-tour",
  },

  openGraph: {
    title:
      "Golden Triangle with Varanasi Tour | Delhi Agra Jaipur & Varanasi",
    description:
      "Experience Delhi, Agra, Jaipur, Mandawa, and Varanasi through heritage landmarks, cultural traditions, sacred Ganges rituals, and unforgettable journeys across North India.",
    url:
      "https://indiaheritagetravel.com/tours/royal-triangle-odyssey-tour",
    siteName: "India Heritage Travel",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Golden Triangle with Varanasi Tour | Delhi Agra Jaipur & Varanasi",
    description:
      "Discover the Taj Mahal, Amber Fort, Mandawa Havelis, and Varanasi's sacred Ganges traditions on an unforgettable North India journey.",
  },
};

// ============================================
// PAGE COMPONENT
// ============================================
export default function GoldenTriangleVaranasiTourPage() {
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
            name: "The Royal Heritage Trail Tour",
            url: "https://indiaheritagetravel.com/tours/royal-triangle-odyssey-tour",
          },
        ]}
      />

      {/* Tour Schema - SEO */}
      <TourSchema
        name="Golden Triangle with Varanasi Tour"
        description="Explore India's rich heritage, cultural landmarks, historic cities, and unforgettable experiences through a carefully curated Royal Triangle journey across iconic destinations."
        url="https://indiaheritagetravel.com/tours/royal-triangle-odyssey-tour"
      />

      {/* Hero Section */}
      <RoyalTriangleHero />
      <SuitableForSection />

      {/* Tours Layout with Sidebar */}
      <ToursLayout right={<RightBookingCard />}>
        <OdysseyCitiesSection />
        <OdysseyHighlightsSection />
        <div className="space-y-4">
          <ItinerarySection />
          <ExcludedServices />
          <DetailedItineraryIntro />
        </div>
      </ToursLayout>

      <TourSteps />

      {/* Booking Form */}
      <CommonForm tourName="royal-triangle-odyssey-tour" />

      <RecommendedTours />
      <Footer />
    </div>
  );
}