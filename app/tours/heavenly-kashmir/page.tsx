import type { Metadata } from "next";

import HeroSection from "./sections/hero/HeroSection";
import SuitableFor from "./sections/suitable-for/SuitableFor";
import TourDetails from "./sections/tour-details/TourDetails";
import TourLayout from "./sections/layout/TourLayout";
import RecommendedTours from "./sections/recommended-tours/RecommendedTours";
import Footer from "@/src/sections/footer/Footer";
import CommonForm from "@/src/tours/CommonForm";
import TourSteps from "@/src/tours/book-now/sections/tour-steps/TourSteps";
import BreadcrumbSchema from "@/src/common/seo/BreadcrumbSchema";
import TourSchema from "@/src/common/seo/TourSchema";

export const metadata: Metadata = {
  title: "Heavenly Kashmir Tour Package | Lakes, Valleys & Scenic Experiences",
  description:
    "Discover the beauty of Kashmir through peaceful lakes, lush valleys, mountain views, local culture, and unforgettable travel experiences in one of India's most stunning destinations.",
  alternates: {
    canonical: "/tours/heavenly-kashmir-tour",
  },
};

export default function RoyalRajasthanPage() {
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
            name: "Tours",
            url: "https://indiaheritagetravel.com/tours",
          },
          {
            name: "Heavenly Kashmir Tour",
            url: "https://indiaheritagetravel.com/tours/heavenly-kashmir-tour",
          },
        ]}
      />

      <TourSchema
        name="Heavenly Kashmir Tour"
        description="Discover the beauty of Kashmir through peaceful lakes, lush valleys, mountain views, local culture, and unforgettable travel experiences in one of India's most stunning destinations."
        url="https://indiaheritagetravel.com/tours/heavenly-kashmir"
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