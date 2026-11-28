
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
  title:
    "Kashmir & Ladakh Tour Package | Srinagar & Leh",

  description:
    "Explore Kashmir and Ladakh with Srinagar, Leh, Pangong Lake, Nubra Valley, Himalayan monasteries and scenic landscapes on a memorable journey.",

  keywords: [
    "Kashmir Tour Package",
    "Ladakh Tour Package",
    "Kashmir and Ladakh Tour",
    "Kashmir Ladakh Trip",
    "Leh Ladakh Tour Package",
    "Srinagar Leh Tour",
    "Pangong Lake Tour",
    "Nubra Valley Tour",
  ],

  alternates: {
    canonical: "/tours/divine-kashmir-and-exciting-ladakh",
  },

  openGraph: {
    title:
      "Kashmir & Ladakh Tour Package | Srinagar & Leh",

    description:
      "Discover Kashmir and Ladakh through Srinagar, Leh, Pangong Lake, Nubra Valley, Himalayan monasteries and breathtaking mountain landscapes.",

    url: "https://indiaheritagetravel.com/tours/divine-kashmir-and-exciting-ladakh",
    siteName: "India Heritage Travel",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Kashmir & Ladakh Tour Package | Srinagar & Leh",

    description:
      "Explore Kashmir and Ladakh with Pangong Lake, Nubra Valley, Himalayan monasteries and scenic mountain landscapes.",
  },
};

// ============================================
// PAGE COMPONENT
// ============================================
export default function DivineKashmirLadakhPage() {
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
            name: "Divine Kashmir & Exciting Ladakh Tour",
            url: "https://indiaheritagetravel.com/tours/divine-kashmir-and-exciting-ladakh",
          },
        ]}
      />

      {/* Tour Schema - SEO */}
      <TourSchema
        name="Divine Kashmir & Exciting Ladakh Tour"
        description="Explore the breathtaking beauty of Kashmir and Ladakh through scenic valleys, mountain landscapes, monasteries, lakes, cultural experiences, and unforgettable Himalayan journeys."
        url="https://indiaheritagetravel.com/tours/divine-kashmir-and-exciting-ladakh"
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

      {/* Booking Form */}
      <CommonForm tourName="divine-kashmir-and-exciting-ladakh" />

      <RecommendedTours />
      <Footer />
    </div>
  );
}
