
import type { Metadata } from "next";

// ============================================
// SEO COMPONENTS
// ============================================
import BreadcrumbSchema from "@/src/common/seo/BreadcrumbSchema";
import TourSchema from "@/src/common/seo/TourSchema";

// ============================================
// COMMON COMPONENTS
// ============================================
import Footer from "@/src/sections/footer/Footer";
import CommonForm from "@/src/tours/CommonForm";
import TourSteps from "@/src/tours/book-now/sections/tour-steps/TourSteps";
import ExcludedServices from "../majestic-golden-triangle-tour/components/pricing/ExcludedServices";
import DetailedItineraryIntro from "@/src/tours/book-now/sections/itinerary/DetailedItinerary";
import RecommendedTours from "../majestic-golden-triangle-tour/components/sections/RecommendedTours";

// ============================================
// PAGE SECTIONS
// ============================================
import Hero from "./sections/hero/Hero";
import Suitable from "./sections/suitable-for/Suitable";
import BookingCard from "./booking-card/BookingCard";
import TourContent from "./sections/tour-content/tour-content";
import ItinerarySection from "./sections/itinerary/ItinerarySection";

// ============================================
// SEO METADATA
// ============================================
export const metadata: Metadata = {
  title:
    "Rajasthan Tour Package | Jaipur, Udaipur & Jaisalmer",

  description:
    "Explore Rajasthan through Jaipur, Udaipur, Jodhpur and Jaisalmer, with royal palaces, historic forts, desert landscapes and rich cultural experiences.",

  keywords: [
    "Rajasthan Tour Package",
    "Rajasthan Tour",
    "Rajasthan Heritage Tour",
    "Rajasthan Cultural Tour",
    "Jaipur Udaipur Jodhpur Tour",
    "Royal Rajasthan Tour",
    "Rajasthan Desert Tour",
    "Rajasthan Forts and Palaces Tour",
  ],

  alternates: {
    canonical: "/tours/rajasthani-heritage-retreat-tour",
  },

  openGraph: {
    title:
      "Rajasthan Tour Package | Jaipur, Udaipur & Jaisalmer",

    description:
      "Discover Rajasthan through Jaipur, Udaipur, Jodhpur and Jaisalmer, featuring royal palaces, historic forts, desert landscapes and cultural traditions.",

    url: "https://indiaheritagetravel.com/tours/rajasthani-heritage-retreat-tour",
    siteName: "India Heritage Travel",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Rajasthan Tour Package | Jaipur, Udaipur & Jaisalmer",

    description:
      "Explore Rajasthan's royal palaces, historic forts, desert landscapes and cultural heritage across its iconic cities.",
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
            name: "Rajasthan Heritage Retreat Tour",
            url: "https://indiaheritagetravel.com/tours/rajasthani-heritage-retreat-tour",
          },
        ]}
      />

      {/* Tour Schema - SEO */}
      <TourSchema
        name="Rajasthan Tour Package"
        description="Explore the royal heritage of Rajasthan through majestic forts, historic palaces, vibrant culture, local traditions, and unforgettable travel experiences across India's most iconic destinations."
        url="https://indiaheritagetravel.com/tours/rajasthani-heritage-retreat-tour"
      />

      {/* Hero Section */}
      <Hero />

      {/* Suitable For Section */}
      <Suitable />

      {/* Tour Layout - Left Content + Right Sidebar */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 grid grid-cols-1 md:grid-cols-[2.5fr_1fr] gap-6 md:gap-8 lg:gap-10">
        {/* Left Side - Main Content */}
        <div className="space-y-8">
          <TourContent />
          <div className="space-y-4">
            <ItinerarySection />
            <ExcludedServices />
            <DetailedItineraryIntro />
          </div>
        </div>

        {/* Right Side - Booking Card */}
        <div className="flex justify-center md:justify-end">
          <div className="w-full max-w-[280px] sm:max-w-[300px] md:max-w-[320px] lg:max-w-[350px]">
            <BookingCard />
          </div>
        </div>
      </div>

      <TourSteps />

      {/* Booking Form */}
      <CommonForm tourName="rajasthani-heritage-retreat-tour" />

      <RecommendedTours />
      <Footer />
    </div>
  );
}
