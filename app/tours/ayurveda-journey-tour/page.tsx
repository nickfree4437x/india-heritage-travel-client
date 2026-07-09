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
  title:
    "Ayurveda Tour India | Authentic Ayurveda Wellness Retreats & Healing Journeys",

  description:
    "Experience an authentic Ayurveda Tour India with traditional Ayurvedic therapies, wellness retreats, yoga, meditation, Panchakarma treatments, and holistic healing experiences. Rejuvenate your body, mind, and spirit through India's ancient wellness traditions.",

  keywords: [
    "Ayurveda Tour India",
    "Ayurveda Wellness Tour India",
    "Ayurveda Retreat India",
    "Wellness Tour India",
    "Ayurvedic Healing Tour India",
    "Ayurveda Holiday India",
    "Yoga and Ayurveda Tour India",
    "Holistic Wellness Tour India",
    "Ayurveda Rejuvenation Tour",
    "Ayurvedic Therapy Tour India",
    "Panchakarma Retreat India",
    "Traditional Ayurveda Treatments",
    "Luxury Ayurveda Retreat India",
    "Wellness Retreat India",
    "Healing Retreat India",
    "Kerala Ayurveda Tour",
    "Ayurveda Detox Retreat",
    "Yoga Meditation Retreat India",
    "Ayurvedic Wellness Holidays",
    "India Wellness Travel",
  ],

  alternates: {
    canonical: "/tours/ayurveda-journey-tour",
  },

  openGraph: {
    title:
      "Ayurveda Tour India | Authentic Ayurveda Wellness Retreats & Healing Journeys",
    description:
      "Discover authentic Ayurveda wellness experiences in India with Ayurvedic therapies, yoga, meditation, Panchakarma treatments, and holistic healing retreats designed for complete rejuvenation.",
    url: "https://indiaheritagetravel.com/tours/ayurveda-journey-tour",
    siteName: "India Heritage Travel",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Ayurveda Tour India | Authentic Ayurveda Wellness Retreats & Healing Journeys",
    description:
      "Experience Ayurveda wellness retreats, yoga, meditation, Panchakarma therapies, and holistic healing journeys across India.",
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