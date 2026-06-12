import type { Metadata } from "next";

import HeroSection from "./sections/hero/HeroSection";
import SuitableFor from "./sections/suitable-for/SuitableFor";
import DestinationSection from "./sections/destinations/DestinationSection";
import RecommendedTours from "./sections/recommended/RecommendedTours";
import Footer from "@/src/sections/footer/Footer";
import CommonForm from "@/src/tours/CommonForm";
import TourSteps from "@/src/tours/book-now/sections/tour-steps/TourSteps";
import BreadcrumbSchema from "@/src/common/seo/BreadcrumbSchema";
import TourSchema from "@/src/common/seo/TourSchema";

export const metadata: Metadata = {
  title: "South India Coastal & Mountain Tour | Beaches, Hills & Cultural Experiences",
  description:
    "Discover the beauty of South India through scenic coastlines, misty mountains, cultural heritage, local traditions, and unforgettable travel experiences across diverse destinations.",
  alternates: {
    canonical: "/tours/coastal-treasures-mountain-magic-tour",
  },
};

export default function Page() {
  return (
    <div className="bg-white min-h-screen">

      {/* Breadcrumb Schema */}
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
            name: "Coastal Treasures & Mountain Magic Tour",
            url: "https://indiaheritagetravel.com/tours/coastal-treasures-mountain-magic-tour",
          },
        ]}
      />

      <TourSchema
        name="Coastal Treasures & Mountain Magic Tour"
        description="Discover the beauty of South India through scenic coastlines, misty mountains, cultural heritage, local traditions, and unforgettable travel experiences across diverse destinations."
        url="https://indiaheritagetravel.com/tours/coastal-treasures-mountain-magic-tour"
      />

      <HeroSection />

      <SuitableFor />

      <DestinationSection />

      <TourSteps />

      <CommonForm
        tourName="coastal-treasures-mountain-magic-tour"
      />

      <RecommendedTours />

      <Footer />
    </div>
  );
}