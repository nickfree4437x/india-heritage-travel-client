import type { Metadata } from "next";

// SEO Components
import BreadcrumbSchema from "@/src/common/seo/BreadcrumbSchema";
import TourSchema from "@/src/common/seo/TourSchema";

// Common components
import Footer from "@/src/sections/footer/Footer";
import CommonForm from "@/src/tours/CommonForm";
import TourSteps from "@/src/tours/book-now/sections/tour-steps/TourSteps";

// Page sections
import AyurvedaHero from "./sections/hero/AyurvedaHero";
import SuitableFor from "./sections/suitable-for/SuitableFor";
import AyurvedaOverview from "./sections/overview/AyurvedaOverview";
import TourLayout from "./layout/TourLayout";
import RecommendedTours from "./sections/recommended-tours/RecommendedTours";

// ============================================
// SEO METADATA
// ============================================
export const metadata: Metadata = {
  title: "Ayurveda Tour India | Authentic Wellness & Healing Retreats",
  description:
    "Experience authentic Ayurveda Tour India with holistic healing, wellness therapies, yoga, meditation, and rejuvenation retreats. Discover your path to balance and well-being.",
  alternates: {
    canonical: "/tours/ayurveda-journey-tour",
  },
};

// ============================================
// PAGE COMPONENT
// ============================================
export default function AyurvedaJourneyPage() {
  return (
    <main>
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
            name: "Ayurveda Wellness Tour India",
            url: "https://indiaheritagetravel.com/tours/ayurveda-journey-tour",
          },
        ]}
      />

      {/* Tour Schema - SEO */}
      <TourSchema
        name="Ayurveda Wellness Tour India"
        description="Experience authentic Ayurveda therapies, holistic healing, wellness treatments, yoga practices, and rejuvenating journeys designed to restore balance and well-being."
        url="https://indiaheritagetravel.com/tours/ayurveda-journey-tour"
      />

      <AyurvedaHero />
      <SuitableFor />
      <AyurvedaOverview />
      <TourLayout />
      <TourSteps />
      <CommonForm tourName="ayurveda-journey-tour" />
      <RecommendedTours />
      <Footer />
    </main>
  );
}