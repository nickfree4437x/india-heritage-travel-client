
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
    "Rajasthan & Varanasi Tour Package | Heritage & Ganges",

  description:
    "Explore Rajasthan's royal palaces and forts alongside Varanasi's sacred Ganges, spiritual traditions and cultural landmarks on an unforgettable journey.",

  keywords: [
    "Rajasthan and Varanasi Tour",
    "Rajasthan Varanasi Tour Package",
    "Rajasthan Tour Package",
    "Varanasi Tour Package",
    "Royal Rajasthan Tour",
    "Rajasthan Heritage Tour",
    "Varanasi Cultural Tour",
    "Varanasi Ganga Aarti Tour",
  ],

  alternates: {
    canonical: "/tours/royal-rajasthan-sacred-ganges-tour",
  },

  openGraph: {
    title:
      "Rajasthan & Varanasi Tour Package | Heritage & Ganges",

    description:
      "Discover Rajasthan's royal palaces and historic forts alongside Varanasi's sacred Ganges rituals, spiritual traditions and cultural experiences.",

    url: "https://indiaheritagetravel.com/tours/royal-rajasthan-sacred-ganges-tour",
    siteName: "India Heritage Travel",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Rajasthan & Varanasi Tour Package | Heritage & Ganges",

    description:
      "Experience Rajasthan's royal heritage and Varanasi's spiritual charm through historic forts, palaces and sacred Ganges traditions.",
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
