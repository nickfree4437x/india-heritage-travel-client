
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
  title: "Golden Triangle with Mandawa Tour | India Heritage",

  description:
    "Explore Delhi, Agra, Jaipur and Mandawa, featuring the Taj Mahal, Amber Fort, royal havelis and India's rich cultural heritage.",

  keywords: [
    "Golden Triangle with Mandawa Tour",
    "Delhi Agra Jaipur Mandawa Tour",
    "Golden Triangle Tour India",
    "Golden Triangle Tour with Mandawa",
    "Mandawa Heritage Tour",
    "Mandawa Haveli Tour",
    "Delhi Agra Jaipur Tour",
    "Golden Triangle Heritage Tour",
    "North India Heritage Tour",
    "Rajasthan Heritage Tour",
    "Golden Triangle Cultural Tour",
    "India Heritage Tour",
  ],

  alternates: {
    canonical: "/tours/the-royal-heritage-trail-tour",
  },

  openGraph: {
    title: "Golden Triangle with Mandawa Tour | India Heritage",
    description:
      "Discover Delhi, Agra, Jaipur and Mandawa through the Taj Mahal, Amber Fort, royal havelis and historic landmarks.",
    url: "https://indiaheritagetravel.com/tours/the-royal-heritage-trail-tour",
    siteName: "India Heritage Travel",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Golden Triangle with Mandawa Tour | India Heritage",
    description:
      "Explore the Taj Mahal, Amber Fort, Mandawa Havelis and the cultural heritage of North India.",
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
