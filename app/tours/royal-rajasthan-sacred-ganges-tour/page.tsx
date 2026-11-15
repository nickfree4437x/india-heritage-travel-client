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
import CitiesSection from "./sections/cities-section/CitiesSection";
import ItinerarySection from "./sections/itinerary/ItinerarySection";

// ============================================
// SEO METADATA
// ============================================
export const metadata: Metadata = {
  title:
    "Rajasthan & Varanasi Tour Package | Royal Heritage & Sacred Ganges",

  description:
    "Explore Rajasthan and Varanasi on a cultural journey featuring royal palaces, historic forts, sacred Ganges experiences, spiritual traditions, heritage landmarks, and unforgettable travel experiences across India.",

  keywords: [
    "Rajasthan and Varanasi Tour",
    "Rajasthan Varanasi Tour Package",
    "Rajasthan Tour Package",
    "Varanasi Tour Package",
    "Royal Rajasthan Tour",
    "Sacred Ganges Tour",
    "Rajasthan Heritage Tour",
    "Rajasthan Cultural Tour",
    "Varanasi Cultural Tour",
    "India Spiritual Tour",
    "Rajasthan and Ganges Tour",
    "North India Heritage Tour",
    "Varanasi Ganga Aarti Tour",
    "Rajasthan Holiday Package",
    "Rajasthan Spiritual Tour",
    "Heritage and Spiritual Tour India",
    "Best Rajasthan and Varanasi Tour",
    "India Cultural Heritage Tour",
    "Royal Rajasthan and Ganges Journey",
    "Rajasthan Travel Package",
  ],

  alternates: {
    canonical: "/tours/royal-rajasthan-sacred-ganges-tour",
  },

  openGraph: {
    title:
      "Rajasthan & Varanasi Tour Package | Royal Heritage & Sacred Ganges",
    description:
      "Experience Rajasthan's royal heritage and Varanasi's spiritual charm through palaces, forts, sacred Ganges rituals, and unforgettable cultural journeys.",
    url:
      "https://indiaheritagetravel.com/tours/royal-rajasthan-sacred-ganges-tour",
    siteName: "India Heritage Travel",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Rajasthan & Varanasi Tour Package | Royal Heritage & Sacred Ganges",
    description:
      "Discover Rajasthan's palaces and forts alongside Varanasi's sacred Ganges traditions and spiritual experiences.",
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
            name: "Rajasthan & Varanasi Tour Package",
            url: "https://indiaheritagetravel.com/tours/royal-rajasthan-sacred-ganges-tour",
          },
        ]}
      />

      {/* Tour Schema - SEO */}
      <TourSchema
        name="Rajasthan & Varanasi Tour Package"
        description="Experience the royal heritage of Rajasthan and the spiritual beauty of the sacred Ganges through cultural landmarks, historic cities, local traditions, and unforgettable journeys across India."
        url="https://indiaheritagetravel.com/tours/royal-rajasthan-sacred-ganges-tour"
      />

      {/* Hero Section */}
      <HeroSection />
      <SuitableFor />

      {/* Tour Layout with Sidebar */}
      <TourLayout sidebar={<BookingCard />}>
        <CitiesSection />
        <div className="space-y-6">
          <ItinerarySection />
          <ExcludedServices />
          <DetailedItineraryIntro />
        </div>
      </TourLayout>
      <TourSteps />

      {/* Booking Form */}
      <CommonForm tourName="royal-rajasthan-sacred-ganges-tour" />

      <RecommendedTours />
      <Footer />
    </div>
  );
}