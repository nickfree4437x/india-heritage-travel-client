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
  title: "Southern Delights Tour India | Temples, Culture & South India Experiences",
  description:
    "Explore the cultural richness of South India through historic temples, scenic landscapes, local traditions, authentic cuisine, and unforgettable travel experiences.",
  alternates: {
    canonical: "/tours/southern-delights-tour",
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
        name="Southern Delights Tour"
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