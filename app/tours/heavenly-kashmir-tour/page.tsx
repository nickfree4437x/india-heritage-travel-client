
import type { Metadata } from "next";

import HeroSection from "./sections/hero/HeroSection";
import SuitableFor from "./sections/suitable-for/SuitableFor";
import TourDetails from "./sections/tour-details/TourDetails";
import TourLayout from "./layout/TourLayout";
import RecommendedTours from "./sections/recommended-tours/RecommendedTours";
import Footer from "@/src/sections/footer/Footer";
import CommonForm from "@/src/tours/CommonForm";
import TourSteps from "@/src/tours/book-now/sections/tour-steps/TourSteps";
import BreadcrumbSchema from "@/src/common/seo/BreadcrumbSchema";
import TourSchema from "@/src/common/seo/TourSchema";

// ============================================
// SEO METADATA
// ============================================
export const metadata: Metadata = {
  title:
    "Kashmir Tour Package | Srinagar, Gulmarg & Pahalgam",

  description:
    "Explore Kashmir with Srinagar, Gulmarg, Pahalgam, Sonamarg, Dal Lake, scenic valleys, houseboat stays and breathtaking Himalayan landscapes.",

  keywords: [
    "Kashmir Tour Package",
    "Kashmir Holiday Package",
    "Kashmir Trip",
    "Srinagar Tour Package",
    "Gulmarg Tour Package",
    "Pahalgam Tour Package",
    "Sonamarg Tour Package",
    "Kashmir Sightseeing Tour",
  ],

  alternates: {
    canonical: "/tours/heavenly-kashmir-tour",
  },

  openGraph: {
    title:
      "Kashmir Tour Package | Srinagar, Gulmarg & Pahalgam",

    description:
      "Discover Kashmir's beauty with Srinagar, Gulmarg, Pahalgam, Sonamarg, Dal Lake, scenic valleys and memorable houseboat stays.",

    url: "https://indiaheritagetravel.com/tours/heavenly-kashmir-tour",
    siteName: "India Heritage Travel",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Kashmir Tour Package | Srinagar, Gulmarg & Pahalgam",

    description:
      "Explore Kashmir's scenic valleys, Dal Lake, Gulmarg, Pahalgam, Sonamarg and beautiful Himalayan landscapes.",
  },
};

// ============================================
// PAGE COMPONENT
// ============================================
export default function HeavenlyKashmirTourPage() {
  return (
    <div>
      {/* Breadcrumb Schema */}
      <BreadcrumbSchema
        items={[
          {
            name: "Home",
            url: "https://indiaheritagetravel.com",
          },
          {
            name: "Kashmir Tour Package",
            url: "https://indiaheritagetravel.com/tours/heavenly-kashmir-tour",
          },
        ]}
      />

      {/* Tour Schema */}
      <TourSchema
        name="Kashmir Tour Package"
        description="Explore Kashmir through Srinagar, Gulmarg, Pahalgam, Sonamarg, Dal Lake, scenic valleys, mountain landscapes, houseboat stays, and unforgettable cultural experiences."
        url="https://indiaheritagetravel.com/tours/heavenly-kashmir-tour"
      />

      <HeroSection />
      <SuitableFor />

      <TourLayout>
        <TourDetails />
      </TourLayout>

      <TourSteps />
      <CommonForm tourName="heavenly-kashmir-tour" />
      <RecommendedTours />
      <Footer />
    </div>
  );
}
