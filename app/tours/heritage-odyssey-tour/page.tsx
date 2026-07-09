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
    "India Heritage Tour | Palaces, Forts, Culture & Historic Landmarks",

  description:
    "Explore India's rich history on an India Heritage Tour featuring magnificent palaces, ancient forts, UNESCO World Heritage Sites, cultural traditions, architectural wonders, and unforgettable journeys across iconic destinations.",

  keywords: [
    "India Heritage Tour",
    "Heritage Tour India",
    "India Cultural Tour",
    "Cultural Heritage Tour India",
    "Historical Tour India",
    "India History Tour",
    "India Palace Tour",
    "India Forts Tour",
    "UNESCO Heritage Tour India",
    "India Heritage Travel",
    "Royal Heritage Tour India",
    "India Cultural Holiday",
    "Historical Places Tour India",
    "Indian Heritage Sites Tour",
    "Architecture Tour India",
    "Luxury Heritage Tour India",
    "North India Heritage Tour",
    "India Heritage Vacation",
    "India Monuments Tour",
    "Best Heritage Tour India",
  ],

  alternates: {
    canonical: "/tours/heritage-odyssey-tour",
  },

  openGraph: {
    title:
      "India Heritage Tour | Palaces, Forts, Culture & Historic Landmarks",
    description:
      "Discover India's heritage through royal palaces, ancient forts, UNESCO sites, cultural traditions, and remarkable architectural wonders.",
    url: "https://indiaheritagetravel.com/tours/heritage-odyssey-tour",
    siteName: "India Heritage Travel",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "India Heritage Tour | Palaces, Forts, Culture & Historic Landmarks",
    description:
      "Experience India's royal heritage, historic monuments, cultural traditions, forts, palaces, and UNESCO World Heritage Sites.",
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