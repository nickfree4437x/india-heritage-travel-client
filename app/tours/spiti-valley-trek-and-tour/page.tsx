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
  title: "Spiti Valley Tour Package | Himalayan Trek & Adventure",
  description:
    "Experience the rugged beauty of Spiti Valley through scenic treks, mountain villages, monasteries, dramatic landscapes, and unforgettable Himalayan adventures.",
  alternates: {
    canonical: "/tours/spiti-valley-trek-and-tour",
  },
};

// ============================================
// PAGE COMPONENT
// ============================================
export default function SpitiValleyTrekAndTourPage() {
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
            name: "Spiti Valley Trek & Tour",
            url: "https://indiaheritagetravel.com/tours/spiti-valley-trek-and-tour",
          },
        ]}
      />

      {/* Tour Schema - SEO */}
      <TourSchema
        name="Spiti Valley Tour Package"
        description="Experience the rugged beauty of Spiti Valley through scenic treks, mountain villages, monasteries, dramatic landscapes, and unforgettable Himalayan adventures."
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