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

export const metadata: Metadata = {
  title:
    "Kashmir Tour Package | Srinagar, Gulmarg, Pahalgam & Sonmarg",

  description:
    "Explore the best Kashmir Tour Package with Srinagar, Gulmarg, Pahalgam, Sonmarg, Dal Lake, scenic valleys, mountain landscapes, houseboat stays, and unforgettable travel experiences.",

  keywords: [
    "Kashmir Tour Package",
    "Kashmir Holiday Package",
    "Kashmir Trip",
    "Kashmir Travel Package",
    "Best Kashmir Tour Package",
    "Kashmir Family Tour",
    "Kashmir Vacation Package",
    "Srinagar Tour Package",
    "Gulmarg Tour Package",
    "Pahalgam Tour Package",
    "Sonmarg Tour Package",
    "Kashmir Sightseeing Tour",
    "Kashmir Tourism",
    "Dal Lake Tour",
    "Kashmir Houseboat Tour",
    "Kashmir Mountains Tour",
    "Kashmir Nature Tour",
    "Kashmir Travel India",
    "Luxury Kashmir Tour",
    "Kashmir Holiday",
  ],

  alternates: {
    canonical: "/tours/heavenly-kashmir-tour",
  },

  openGraph: {
    title:
      "Kashmir Tour Package | Srinagar, Gulmarg, Pahalgam & Sonmarg",
    description:
      "Discover Kashmir's breathtaking beauty with Dal Lake, Gulmarg, Pahalgam, Sonmarg, scenic valleys, mountain landscapes, and unforgettable travel experiences.",
    url: "https://indiaheritagetravel.com/tours/heavenly-kashmir-tour",
    siteName: "India Heritage Travel",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Kashmir Tour Package | Srinagar, Gulmarg, Pahalgam & Sonmarg",
    description:
      "Explore Kashmir with beautiful valleys, Dal Lake, houseboats, snow-capped mountains, and unforgettable travel experiences.",
  },
};

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

      <TourSchema
        name="Kashmir Tour Package"
        description="Explore Kashmir through Srinagar, Gulmarg, Pahalgam, Sonmarg, Dal Lake, scenic valleys, mountain landscapes, houseboat stays, and unforgettable cultural experiences."
        url="https://indiaheritagetravel.com/tours/heavenly-kashmir-tour"
      />

      <HeroSection />
      <SuitableFor />

      <TourLayout>
        <TourDetails />
      </TourLayout>

      <TourSteps/>
      <CommonForm tourName="heavenly-kashmir-tour"/>
      <RecommendedTours />
      <Footer/>
    </div>
  );
}