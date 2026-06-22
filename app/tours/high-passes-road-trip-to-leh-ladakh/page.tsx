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
  title: "Leh Ladakh Road Trip | High Mountain Passes & Himalayan Adventure",
  description:
    "Embark on an unforgettable Leh Ladakh Road Trip Tour featuring high mountain passes, breathtaking landscapes, monasteries, remote villages, scenic valleys, and thrilling Himalayan adventures.",
  alternates: {
    canonical: "/tours/high-passes-road-trip-to-leh-ladakh",
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
            name: "Leh Ladakh Road Trip Tour",
            url: "https://indiaheritagetravel.com/tours/high-passes-road-trip-to-leh-ladakh",
          },
        ]}
      />

      {/* Tour Schema - SEO */}
      <TourSchema
        name="Leh Ladakh Road Trip Tour"
        description="Embark on an unforgettable Leh Ladakh road trip featuring high mountain passes, breathtaking landscapes, monasteries, remote villages, and thrilling Himalayan experiences."
        url="https://indiaheritagetravel.com/tours/high-passes-road-trip-to-leh-ladakh"
      />

      {/* Hero Section */}
      <HeroSection />
      <SuitableFor />

      <TourLayout>
        <TourDetails />
      </TourLayout>
      <TourSteps />

      {/* Booking Form */}
      <CommonForm tourName="high-passes-road-trip-to-leh-ladakh-tour" />
      <RecommendedTours />
      <Footer />
    </div>
  );
}