
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
    "Leh Ladakh Tour Package | Pangong Lake & Road Trip",

  description:
    "Explore Leh Ladakh with Pangong Lake, Nubra Valley, Khardung La Pass, Himalayan monasteries and scenic mountain routes on an unforgettable journey.",

  keywords: [
    "Leh Ladakh Tour Package",
    "Leh Ladakh Road Trip",
    "Ladakh Tour Package",
    "Leh Ladakh Adventure Tour",
    "Pangong Lake Tour",
    "Nubra Valley Tour",
    "Khardung La Pass Tour",
    "Leh Ladakh Bike Trip",
  ],

  alternates: {
    canonical: "/tours/high-passes-road-trip-to-leh-ladakh",
  },

  openGraph: {
    title:
      "Leh Ladakh Tour Package | Pangong Lake & Road Trip",

    description:
      "Discover Leh Ladakh through Pangong Lake, Nubra Valley, Khardung La Pass, Himalayan monasteries and breathtaking mountain landscapes.",

    url: "https://indiaheritagetravel.com/tours/high-passes-road-trip-to-leh-ladakh",
    siteName: "India Heritage Travel",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Leh Ladakh Tour Package | Pangong Lake & Road Trip",

    description:
      "Explore Leh Ladakh with Pangong Lake, Nubra Valley, mountain passes, monasteries and spectacular Himalayan landscapes.",
  },
};

// ============================================
// PAGE COMPONENT
// ============================================
export default function HighPassesLehLadakhPage() {
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
            name: "Leh Ladakh Tour Package",
            url: "https://indiaheritagetravel.com/tours/high-passes-road-trip-to-leh-ladakh",
          },
        ]}
      />

      {/* Tour Schema - SEO */}
      <TourSchema
        name="Leh Ladakh Tour Package"
        description="Explore Leh Ladakh through high mountain passes, breathtaking Himalayan landscapes, monasteries, remote villages, Pangong Lake, Nubra Valley, and unforgettable road trip experiences."
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
