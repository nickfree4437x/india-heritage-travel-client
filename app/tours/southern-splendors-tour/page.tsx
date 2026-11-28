
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
import RecommendedTours from "@/app/tours/majestic-golden-triangle-tour/components/sections/RecommendedTours";

// Page sections
import HeroSection from "./sections/hero/HeroSection";
import SuitableFor from "./sections/suitable-for/SuitableFor";
import TourLayout from "./layout/TourLayout";
import BookingCard from "./booking-card/BookingCard";
import TourContent from "./sections/tour-content/TourContent";
import DetailedItinerary from "./sections/itinerary/DetailedItinerary";
import HightlightSection from "./sections/hightlights/HightlightSection";

// ============================================
// SEO METADATA
// ============================================
export const metadata: Metadata = {
  title: "South India Heritage Tour | Temples & Culture",

  description:
    "Explore South India's ancient temples, historic landmarks, traditional architecture, cultural heritage and scenic destinations on a memorable tour.",

  keywords: [
    "South India Heritage Tour",
    "South India Heritage Tour Package",
    "South India Tour Package",
    "South India Temple Tour",
    "South India Cultural Tour",
    "South India Historical Tour",
    "South India Heritage Travel",
    "South India Architecture Tour",
    "Ancient Temples South India",
    "South India Sightseeing Tour",
    "South India Holiday Package",
    "UNESCO Heritage Tour India",
  ],

  alternates: {
    canonical: "/tours/southern-splendors-tour",
  },

  openGraph: {
    title: "South India Heritage Tour | Temples & Culture",
    description:
      "Explore South India's ancient temples, historic landmarks, cultural heritage, traditional architecture and scenic destinations.",
    url: "https://indiaheritagetravel.com/tours/southern-splendors-tour",
    siteName: "India Heritage Travel",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "South India Heritage Tour | Temples & Culture",
    description:
      "Discover South India's ancient temples, historic landmarks, cultural heritage and traditional architecture on an unforgettable journey.",
  },
};

// ============================================
// PAGE COMPONENT
// ============================================
export default function SouthernSplendorsPage() {
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
            name: "South India Heritage Tour",
            url: "https://indiaheritagetravel.com/tours/southern-splendors-tour",
          },
        ]}
      />

      {/* Tour Schema - SEO */}
      <TourSchema
        name="South India Heritage Tour"
        description="Explore South India on a heritage tour featuring ancient temples, cultural landmarks, scenic landscapes, authentic local experiences, and carefully planned itineraries."
        url="https://indiaheritagetravel.com/tours/southern-splendors-tour"
      />

      {/* Hero Section */}
      <HeroSection />
      <SuitableFor />

      {/* Tour Layout with Sidebar */}
      <TourLayout sidebar={<BookingCard />}>
        <TourContent />
        <HightlightSection />
        <div className="space-y-6">
          <DetailedItinerary />
          <ExcludedServices />
          <DetailedItineraryIntro />
        </div>
      </TourLayout>
      <TourSteps />

      {/* Booking Form */}
      <CommonForm tourName="southern-splendors-tour" />

      <RecommendedTours />
      <Footer />
    </div>
  );
}
