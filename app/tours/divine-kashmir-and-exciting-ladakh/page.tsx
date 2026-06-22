import type { Metadata } from "next";

// SEO Components
import BreadcrumbSchema from "@/src/common/seo/BreadcrumbSchema";
import TourSchema from "@/src/common/seo/TourSchema";

// Common components
import Footer from "@/src/sections/footer/Footer";
import CommonForm from "@/src/tours/CommonForm";
import TourSteps from "@/src/tours/book-now/sections/tour-steps/TourSteps";
import ExcludedServices from "@/app/tours/majestic-golden-triangle-tour/components/pricing/ExcludedServices";
import DetailedItineraryIntro from "@/src/tours/book-now/sections/itinerary/DetailedItinerary";

// Page sections
import HeroSection from "./sections/hero/HeroSection";
import SuitableFor from "./sections/suitablefor/SuitableFor";
import TourDetails from "./sections/tour-details/TourDetails";
import TourLayout from "./layout/TourLayout";
import RecommendedTours from "./sections/recommended-tours/RecommendedTours";

// ============================================
// SEO METADATA
// ============================================
export const metadata: Metadata = {
  title: "Kashmir & Ladakh Tour Package | Mountains, Lakes & Himalayan Adventures",
  description:
    "Explore a Kashmir & Ladakh Tour Package featuring scenic valleys, Himalayan mountains, monasteries, pristine lakes, cultural experiences, and unforgettable adventures.",
  alternates: {
    canonical: "/tours/divine-kashmir-and-exciting-ladakh-tour",
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
            name: "Divine Kashmir & Exciting Ladakh Tour",
            url: "https://indiaheritagetravel.com/tours/divine-kashmir-and-exciting-ladakh-tour",
          },
        ]}
      />

      {/* Tour Schema - SEO */}
      <TourSchema
        name="Divine Kashmir & Exciting Ladakh Tour"
        description="Explore the breathtaking beauty of Kashmir and Ladakh through scenic valleys, mountain landscapes, monasteries, lakes, cultural experiences, and unforgettable Himalayan journeys."
        url="https://indiaheritagetravel.com/tours/divine-kashmir-and-exciting-ladakh-tour"
      />

      {/* Hero Section */}
      <HeroSection />
      <SuitableFor />

      {/* Tour Layout with Details */}
      <TourLayout>
        <TourDetails />
        <ExcludedServices />
        <DetailedItineraryIntro />
      </TourLayout>
      <TourSteps />
      <CommonForm tourName="divine-kashmir-and-exciting-ladakh-tour" />
      <RecommendedTours />
      <Footer />
    </div>
  );
}