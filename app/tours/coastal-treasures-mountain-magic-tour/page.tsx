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
  title: "South India Tour Package | Beaches & Hill Stations",

  description:
    "Explore South India on a tour featuring scenic beaches, misty hill stations, cultural heritage and local traditions across its diverse destinations.",

  keywords: [
    "South India Tour Package",
    "South India Tour",
    "South India Travel",
    "South India Holiday Package",
    "South India Beaches Tour",
    "South India Hill Stations Tour",
    "South India Cultural Tour",
    "South India Heritage Tour",
    "Kerala and Tamil Nadu Tour",
    "South India Family Tour",
  ],

  alternates: {
    canonical: "/tours/coastal-treasures-mountain-magic-tour",
  },

  openGraph: {
    title: "South India Tour Package | Beaches & Hill Stations",
    description:
      "Discover South India's scenic beaches, misty hill stations, cultural heritage and local traditions on a memorable journey.",
    url: "https://indiaheritagetravel.com/tours/coastal-treasures-mountain-magic-tour",
    siteName: "India Heritage Travel",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "South India Tour Package | Beaches & Hill Stations",
    description:
      "Explore South India's beaches, hill stations, cultural heritage and scenic landscapes on a memorable journey.",
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