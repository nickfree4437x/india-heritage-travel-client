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
  title:
    "India Wildlife Tour | Tiger Safaris, Heritage Sites & Cultural Experiences",

  description:
    "Explore an India Wildlife Tour featuring thrilling tiger safaris, national parks, UNESCO heritage sites, cultural landmarks, natural landscapes, and unforgettable travel experiences across India.",

  keywords: [
    "India Wildlife Tour",
    "Wildlife Safari Tour India",
    "Tiger Safari Tour India",
    "India Heritage and Wildlife Tour",
    "Wildlife Holiday India",
    "India Nature Tour",
    "India Safari Tour",
    "Ranthambore Safari Tour",
    "Bandhavgarh Safari Tour",
    "India Tiger Tour",
    "Wildlife Photography Tour India",
    "National Parks Tour India",
    "India Cultural and Wildlife Tour",
    "Luxury Wildlife Tour India",
    "India Adventure and Wildlife Tour",
    "Best Wildlife Tour India",
    "India Eco Tourism Tour",
    "Heritage Tour India",
    "India Travel Safari",
    "Wildlife Vacation India",
  ],

  alternates: {
    canonical: "/tours/journey-through-heritage-wildlife",
  },

  openGraph: {
    title:
      "India Wildlife Tour | Tiger Safaris, Heritage Sites & Cultural Experiences",
    description:
      "Experience India's wildlife and heritage through tiger safaris, national parks, UNESCO sites, cultural landmarks, and unforgettable nature adventures.",
    url:
      "https://indiaheritagetravel.com/tours/journey-through-heritage-wildlife",
    siteName: "India Heritage Travel",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "India Wildlife Tour | Tiger Safaris, Heritage Sites & Cultural Experiences",
    description:
      "Discover India's wildlife, tiger safaris, heritage sites, cultural experiences, and breathtaking natural landscapes.",
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
        name="India Wildlife Tour"
        description="Experience India's wildlife and cultural heritage through tiger safaris, national parks, UNESCO heritage sites, historic landmarks, natural landscapes, and unforgettable travel experiences."
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