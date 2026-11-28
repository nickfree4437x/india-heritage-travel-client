
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
  title: "Spiti Valley Tour Package | Himalayan Adventure",

  description:
    "Explore Spiti Valley's ancient monasteries, remote villages and stunning Himalayan landscapes on an unforgettable adventure.",

  keywords: [
    "Spiti Valley Tour Package",
    "Spiti Valley Tour",
    "Spiti Valley Trip",
    "Spiti Valley Travel Package",
    "Spiti Valley Adventure Tour",
    "Spiti Valley Road Trip",
    "Spiti Valley Trek",
    "Spiti Valley Monastery Tour",
    "Spiti Valley Holiday Package",
    "Himachal Pradesh Tour Package",
    "Kaza Spiti Tour",
    "Spiti Valley Sightseeing Tour",
  ],

  alternates: {
    canonical: "/tours/spiti-valley-trek-and-tour",
  },

  openGraph: {
    title: "Spiti Valley Tour Package | Himalayan Adventure",
    description:
      "Discover Spiti Valley's ancient monasteries, remote villages and breathtaking Himalayan landscapes.",
    url: "https://indiaheritagetravel.com/tours/spiti-valley-trek-and-tour",
    siteName: "India Heritage Travel",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Spiti Valley Tour Package | Himalayan Adventure",
    description:
      "Explore Spiti Valley's monasteries, remote villages and stunning Himalayan landscapes.",
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
