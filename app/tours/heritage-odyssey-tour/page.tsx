
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
    "India Heritage Tour | Palaces, Forts & Cultural Sites",

  description:
    "Explore India's heritage through royal palaces, ancient forts, UNESCO sites, historic landmarks, cultural traditions and remarkable architecture.",

  keywords: [
    "India Heritage Tour",
    "Heritage Tour India",
    "India Cultural Tour",
    "Historical Tour India",
    "India Palace Tour",
    "India Forts Tour",
    "UNESCO Heritage Tour India",
    "Royal Heritage Tour India",
  ],

  alternates: {
    canonical: "/tours/heritage-odyssey-tour",
  },

  openGraph: {
    title:
      "India Heritage Tour | Palaces, Forts & Cultural Sites",

    description:
      "Discover India's royal palaces, ancient forts, UNESCO heritage sites, historic landmarks and rich cultural traditions.",

    url: "https://indiaheritagetravel.com/tours/heritage-odyssey-tour",
    siteName: "India Heritage Travel",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "India Heritage Tour | Palaces, Forts & Cultural Sites",

    description:
      "Experience India's royal palaces, historic forts, cultural traditions, architectural wonders and UNESCO heritage sites.",
  },
};

// ============================================
// PAGE COMPONENT
// ============================================
export default function HeritageOdysseyPage() {
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
