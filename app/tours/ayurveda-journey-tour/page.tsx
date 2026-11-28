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
  title: "Ayurveda Tour India | Wellness Retreats",

  description:
    "Experience an Ayurveda tour in India with traditional therapies, yoga, meditation and wellness retreats inspired by ancient healing traditions.",

  keywords: [
    "Ayurveda Tour India",
    "Ayurveda Wellness Tour India",
    "Ayurveda Retreat India",
    "Wellness Retreat India",
    "Panchakarma Retreat India",
    "Kerala Ayurveda Tour",
    "Yoga and Ayurveda Tour India",
    "Ayurvedic Healing India",
  ],

  alternates: {
    canonical: "/tours/ayurveda-journey-tour",
  },

  openGraph: {
    title: "Ayurveda Tour India | Wellness Retreats",
    description:
      "Experience an Ayurveda tour in India with traditional therapies, yoga, meditation and wellness retreats inspired by ancient healing traditions.",
    url: "https://indiaheritagetravel.com/tours/ayurveda-journey-tour",
    siteName: "India Heritage Travel",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ayurveda Tour India | Wellness Retreats",
    description:
      "Experience traditional Ayurveda therapies, yoga, meditation and wellness retreats across India.",
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