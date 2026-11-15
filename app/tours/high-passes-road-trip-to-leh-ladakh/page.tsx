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
    "Leh Ladakh Tour Package | Road Trip, Pangong Lake & Himalayan Adventure",

  description:
    "Book a Leh Ladakh Tour Package and experience thrilling road trips, Pangong Lake, Nubra Valley, Khardung La Pass, Himalayan monasteries, breathtaking landscapes, and unforgettable adventure travel experiences.",

  keywords: [
    "Leh Ladakh Tour Package",
    "Leh Ladakh Road Trip",
    "Ladakh Tour Package",
    "Leh Ladakh Trip",
    "Leh Ladakh Adventure Tour",
    "Ladakh Road Trip",
    "Pangong Lake Tour",
    "Nubra Valley Tour",
    "Khardung La Pass Tour",
    "Leh Tour Package",
    "Ladakh Holiday Package",
    "Ladakh Travel Package",
    "Leh Ladakh Bike Trip",
    "Ladakh Motorcycle Tour",
    "Himalayan Road Trip India",
    "Leh Ladakh Sightseeing Tour",
    "Best Leh Ladakh Tour Package",
    "Leh Ladakh Family Tour",
    "Ladakh Mountain Tour",
    "Adventure Tour India",
  ],

  alternates: {
    canonical: "/tours/high-passes-road-trip-to-leh-ladakh",
  },

  openGraph: {
    title:
      "Leh Ladakh Tour Package | Road Trip, Pangong Lake & Himalayan Adventure",
    description:
      "Explore Leh Ladakh through breathtaking road trips, Pangong Lake, Nubra Valley, Khardung La Pass, monasteries, and unforgettable Himalayan adventures.",
    url:
      "https://indiaheritagetravel.com/tours/high-passes-road-trip-to-leh-ladakh",
    siteName: "India Heritage Travel",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Leh Ladakh Tour Package | Road Trip, Pangong Lake & Himalayan Adventure",
    description:
      "Discover Ladakh's stunning landscapes, mountain passes, lakes, monasteries, and thrilling Himalayan road trip experiences.",
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