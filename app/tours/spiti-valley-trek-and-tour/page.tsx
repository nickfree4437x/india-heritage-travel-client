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
import TourDetails from "./sections/tour-details/TourDetails";
import TourLayout from "./layout/TourLayout";
import RecommendedTours from "../divine-kashmir-and-exciting-ladakh/sections/recommended-tours/RecommendedTours";

// ============================================
// SEO METADATA
// ============================================
export const metadata: Metadata = {
  title:
    "Spiti Valley Tour Package | Monasteries, Villages & Himalayan Adventure",

  description:
    "Book the best Spiti Valley Tour Package and explore ancient monasteries, high-altitude villages, dramatic mountain landscapes, scenic treks, and unforgettable Himalayan adventures in Himachal Pradesh.",

  keywords: [
    "Spiti Valley Tour Package",
    "Spiti Valley Tour",
    "Spiti Valley Trip",
    "Spiti Valley Travel Package",
    "Spiti Valley Trek",
    "Spiti Valley Adventure Tour",
    "Spiti Valley Holiday Package",
    "Himachal Pradesh Tour Package",
    "Spiti Valley Road Trip",
    "Spiti Valley Monastery Tour",
    "Kaza Spiti Tour",
    "Spiti Valley Sightseeing Tour",
    "Spiti Valley Travel",
    "Best Spiti Valley Tour Package",
    "Spiti Valley Family Tour",
    "Spiti Valley Vacation Package",
    "Himalayan Adventure Tour",
    "Spiti Valley Itinerary",
    "Spiti Valley Tourism",
    "High Altitude Tour India",
  ],

  alternates: {
    canonical: "/tours/spiti-valley-trek-and-tour",
  },

  openGraph: {
    title:
      "Spiti Valley Tour Package | Monasteries, Villages & Himalayan Adventure",
    description:
      "Discover Spiti Valley through ancient monasteries, mountain villages, rugged landscapes, scenic treks, and unforgettable Himalayan experiences.",
    url:
      "https://indiaheritagetravel.com/tours/spiti-valley-trek-and-tour",
    siteName: "India Heritage Travel",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Spiti Valley Tour Package | Monasteries, Villages & Himalayan Adventure",
    description:
      "Explore Spiti Valley's monasteries, villages, mountain landscapes, and breathtaking Himalayan adventures.",
  },
};

// ============================================
// PAGE COMPONENT
// ============================================
export default function SpitiValleyTourPackagePage() {
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
            name: "Spiti Valley Tour Package",
            url: "https://indiaheritagetravel.com/tours/spiti-valley-trek-and-tour",
          },
        ]}
      />

      {/* Tour Schema - SEO */}
      <TourSchema
        name="Spiti Valley Tour Package"
        description="Explore Spiti Valley through ancient monasteries, high-altitude villages, dramatic Himalayan landscapes, scenic treks, and unforgettable adventure experiences."
        url="https://indiaheritagetravel.com/tours/spiti-valley-trek-and-tour"
      />

      {/* Hero Section */}
      <HeroSection />
      <SuitableFor />
      <TourLayout>
        <TourDetails />
      </TourLayout>
      <TourSteps />

      {/* Booking Form */}
      <CommonForm tourName="spiti-valley-trek-and-tour" />

      <RecommendedTours />
      <Footer />
    </div>
  );
}