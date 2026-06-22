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
  title: "Heritage Odyssey Tour India | Royal Palaces, Culture & Historic Landmarks",
  description:
    "Experience the Heritage Odyssey Tour India featuring royal palaces, historic landmarks, cultural traditions, architectural wonders, and unforgettable heritage journeys across iconic destinations.",
  alternates: {
    canonical: "/tours/heritage-odyssey-tour",
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
            name: "Heritage Odyssey Tour",
            url: "https://indiaheritagetravel.com/tours/heritage-odyssey-tour",
          },
        ]}
      />

      {/* Tour Schema - SEO */}
      <TourSchema
        name="Heritage Odyssey"
        description="Experience India's rich heritage through magnificent palaces, historic landmarks, cultural traditions, architectural wonders, and unforgettable journeys across iconic destinations."
        url="https://indiaheritagetravel.com/tours/heritage-odyssey-tour"
      />
      
      <HeroSection />
      <SuitableFor />
      <TourLayout />
      <TourSteps />

      {/* Booking Form */}
      <CommonForm tourName="heritage-odyssey-tour" />
      <RecommendedTours />
      <Footer />
    </div>
  );
}