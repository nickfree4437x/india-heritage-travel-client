import type { Metadata } from "next";

import HeroSection from "./sections/hero/HeroSection";
import RecommendedTours from "./sections/recommended-tours/RecommendedTours";
import SuitableFor from "./sections/suitable-for/SuitableFor";
import TourLayout from "./sections/layout/TourLayout";
import Footer from "@/src/sections/footer/Footer";
import CommonForm from "@/src/tours/CommonForm";
import TourSteps from "@/src/tours/book-now/sections/tour-steps/TourSteps";
import BreadcrumbSchema from "@/src/common/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Southern Delights Tour India | Temples, Culture & South India Experiences",
  description:
    "Explore the cultural richness of South India through historic temples, scenic landscapes, local traditions, authentic cuisine, and unforgettable travel experiences.",
  alternates: {
    canonical: "/tours/southern-delights-tour",
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
            name: "Southern Delights Tour",
            url: "https://indiaheritagetravel.com/tours/southern-delights-tour",
          },
        ]}
      />

      <HeroSection />
      <SuitableFor />
      <TourLayout />

      <TourSteps/>
      <CommonForm tourName="southern-delights-tour"/>
      <RecommendedTours />
      <Footer/>
    </div>
  );
}