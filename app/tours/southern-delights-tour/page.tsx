
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
    "South India Cultural Tour | Temples, Heritage & Traditions",

  description:
    "Discover South India's historic temples, heritage sites, local traditions, authentic cuisine and scenic landscapes on a memorable cultural journey.",

  keywords: [
    "South India Cultural Tour",
    "South India Tour Package",
    "South India Temple Tour",
    "South India Heritage Tour",
    "South India Holiday Package",
    "South India Travel Package",
    "South India Spiritual Tour",
    "South India Historical Tour",
    "South India Cultural Experience",
    "South India Sightseeing Tour",
    "South India Religious Tour",
    "Temple Tour India",
  ],

  alternates: {
    canonical: "/tours/southern-delights-tour",
  },

  openGraph: {
    title:
      "South India Cultural Tour | Temples, Heritage & Traditions",

    description:
      "Explore South India's historic temples, heritage sites, authentic cuisine, local traditions and scenic landscapes through a memorable cultural journey.",

    url: "https://indiaheritagetravel.com/tours/southern-delights-tour",
    siteName: "India Heritage Travel",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "South India Cultural Tour | Temples, Heritage & Traditions",

    description:
      "Experience South India's historic temples, cultural heritage, local traditions, authentic cuisine and scenic beauty.",
  },
};

// ============================================
// PAGE COMPONENT
// ============================================
export default function SouthIndiaCulturalTourPage() {
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
            name: "South India Cultural Tour",
            url: "https://indiaheritagetravel.com/tours/southern-delights-tour",
          },
        ]}
      />

      {/* Tour Schema - SEO */}
      <TourSchema
        name="South India Cultural Tour"
        description="Explore South India through historic temples, heritage sites, scenic landscapes, local traditions, authentic cuisine, and unforgettable cultural experiences across iconic destinations."
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
