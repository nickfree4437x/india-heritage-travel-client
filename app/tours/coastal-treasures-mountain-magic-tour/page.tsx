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
import DestinationSection from "./sections/destinations/DestinationSection";
import RecommendedTours from "./sections/recommended/RecommendedTours";

// ============================================
// SEO METADATA
// ============================================
export const metadata: Metadata = {
  title:
    "South India Tour Package | Beaches, Hill Stations & Cultural Heritage",

  description:
    "Explore the best South India Tour Package featuring scenic beaches, misty hill stations, cultural heritage sites, local traditions, coastal landscapes, and unforgettable travel experiences across South India.",

  keywords: [
    "South India Tour",
    "South India Tour Package",
    "South India Travel",
    "South India Holiday Package",
    "South India Cultural Tour",
    "South India Beaches Tour",
    "South India Hill Stations Tour",
    "Kerala and Tamil Nadu Tour",
    "South India Sightseeing Tour",
    "South India Vacation Package",
    "Coastal South India Tour",
    "South India Heritage Tour",
    "South India Family Tour",
    "Best South India Tour Package",
    "South India Nature Tour",
    "South India Mountains Tour",
    "South India Beach Holiday",
    "Kerala Tour Package",
    "Tamil Nadu Tour Package",
    "South India Tourism",
  ],

  alternates: {
    canonical: "/tours/coastal-treasures-mountain-magic-tour",
  },

  openGraph: {
    title:
      "South India Tour Package | Beaches, Hill Stations & Cultural Heritage",
    description:
      "Experience South India's stunning beaches, hill stations, cultural landmarks, heritage sites, and local traditions on an unforgettable journey through India's southern states.",
    url:
      "https://indiaheritagetravel.com/tours/coastal-treasures-mountain-magic-tour",
    siteName: "India Heritage Travel",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "South India Tour Package | Beaches, Hill Stations & Cultural Heritage",
    description:
      "Explore South India's beaches, hill stations, heritage sites, cultural experiences, and scenic landscapes with a carefully crafted travel experience.",
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
            name: "Tours",
            url: "https://indiaheritagetravel.com/tours",
          },
          {
            name: "Coastal Treasures & Mountain Magic Tour",
            url: "https://indiaheritagetravel.com/tours/coastal-treasures-mountain-magic-tour",
          },
        ]}
      />

      {/* Tour Schema - SEO */}
      <TourSchema
        name="Coastal Treasures & Mountain Magic Tour"
        description="Discover the beauty of South India through scenic coastlines, misty mountains, cultural heritage, local traditions, and unforgettable travel experiences across diverse destinations."
        url="https://indiaheritagetravel.com/tours/coastal-treasures-mountain-magic-tour"
      />
      <HeroSection />
      <SuitableFor />
      <DestinationSection />
      <TourSteps />

      {/* Booking Form */}
      <CommonForm tourName="coastal-treasures-mountain-magic-tour" />

      <RecommendedTours />
      <Footer />
    </div>
  );
}