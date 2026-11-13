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
    "Kashmir & Ladakh Tour Package | Srinagar, Leh, Lakes & Himalayan Adventures",

  description:
    "Book a Kashmir & Ladakh Tour Package and explore Srinagar, Leh, Pangong Lake, Nubra Valley, Himalayan monasteries, scenic valleys, mountain landscapes, and unforgettable cultural adventures.",

  keywords: [
    "Kashmir Tour Package",
    "Ladakh Tour Package",
    "Kashmir and Ladakh Tour",
    "Kashmir Ladakh Trip",
    "Leh Ladakh Tour Package",
    "Kashmir Holiday Package",
    "Ladakh Holiday Package",
    "Kashmir Travel Package",
    "Ladakh Travel Package",
    "Srinagar Leh Tour",
    "Pangong Lake Tour",
    "Nubra Valley Tour",
    "Himalayan Tour India",
    "Kashmir Sightseeing Tour",
    "Ladakh Adventure Tour",
    "Best Kashmir Ladakh Tour Package",
    "Kashmir Family Tour",
    "Ladakh Road Trip",
    "Kashmir Mountains Tour",
    "India Himalayan Tour",
  ],

  alternates: {
    canonical: "/tours/divine-kashmir-and-exciting-ladakh",
  },

  openGraph: {
    title:
      "Kashmir & Ladakh Tour Package | Srinagar, Leh, Lakes & Himalayan Adventures",
    description:
      "Discover Kashmir and Ladakh through scenic valleys, Pangong Lake, Nubra Valley, Himalayan monasteries, mountain landscapes, and unforgettable cultural experiences.",
    url:
      "https://indiaheritagetravel.com/tours/divine-kashmir-and-exciting-ladakh",
    siteName: "India Heritage Travel",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Kashmir & Ladakh Tour Package | Srinagar, Leh, Lakes & Himalayan Adventures",
    description:
      "Explore Kashmir and Ladakh with stunning valleys, lakes, monasteries, Himalayan adventures, and breathtaking mountain landscapes.",
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
      <CommonForm tourName="divine-kashmir-and-exciting-ladakh" />
      <RecommendedTours />
      <Footer />
    </div>
  );
}