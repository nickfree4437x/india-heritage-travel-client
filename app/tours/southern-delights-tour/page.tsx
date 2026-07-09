import type { Metadata } from "next";

// SEO Components
import BreadcrumbSchema from "@/src/common/seo/BreadcrumbSchema";
import TourSchema from "@/src/common/seo/TourSchema";

// Common components
import Footer from "@/src/sections/footer/Footer";
import CommonForm from "@/src/tours/CommonForm";
import TourSteps from "@/src/tours/book-now/sections/tour-steps/TourSteps";

// Page sections
import HeroSection from "./sections/hero/HeroSection";
import SuitableFor from "./sections/suitable-for/SuitableFor";
import TourLayout from "./layout/TourLayout";
import RecommendedTours from "./sections/recommended-tours/RecommendedTours";

// ============================================
// SEO METADATA
// ============================================
export const metadata: Metadata = {
  title:
    "South India Cultural Tour | Temples, Heritage & Local Experiences",

  description:
    "Discover South India's rich culture through historic temples, heritage sites, scenic landscapes, local traditions, authentic cuisine, and unforgettable travel experiences across iconic destinations.",

  keywords: [
    "South India Cultural Tour",
    "South India Tour Package",
    "South India Temple Tour",
    "South India Heritage Tour",
    "South India Holiday Package",
    "South India Travel Package",
    "South India Sightseeing Tour",
    "South India Spiritual Tour",
    "South India Cultural Holiday",
    "South India Tourism",
    "Temple Tour India",
    "South India Vacation Package",
    "South India Family Tour",
    "South India Heritage Travel",
    "South India Cultural Experience",
    "Best South India Tour Package",
    "South India Traditional Tour",
    "South India Historical Tour",
    "South India Religious Tour",
    "South India Travel",
  ],

  alternates: {
    canonical: "/tours/southern-delights-tour",
  },

  openGraph: {
    title:
      "South India Cultural Tour | Temples, Heritage & Local Experiences",
    description:
      "Explore South India's temples, heritage sites, local traditions, authentic cuisine, and cultural experiences through an unforgettable journey.",
    url:
      "https://indiaheritagetravel.com/tours/southern-delights-tour",
    siteName: "India Heritage Travel",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "South India Cultural Tour | Temples, Heritage & Local Experiences",
    description:
      "Discover South India's rich culture, historic temples, local traditions, scenic beauty, and authentic travel experiences.",
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
            name: "Southern Delights Tour",
            url: "https://indiaheritagetravel.com/tours/southern-delights-tour",
          },
        ]}
      />

      {/* Tour Schema - SEO */}
      <TourSchema
        name="South India Cultural Tour"
        description="Explore the cultural richness of South India through historic temples, scenic landscapes, local traditions, authentic cuisine, and unforgettable travel experiences."
        url="https://indiaheritagetravel.com/tours/southern-delights-tour"
      />

      {/* Hero Section */}
      <HeroSection />
      <SuitableFor />
      <TourLayout />
      <TourSteps />

      {/* Booking Form */}
      <CommonForm tourName="southern-delights-tour" />

      <RecommendedTours />
      <Footer />
    </div>
  );
}