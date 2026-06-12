import type { Metadata } from "next";

import RecommendedTours from "../divine-kashmir-and-exciting-ladakh/sections/recommended-tours/RecommendedTours";
import HeroSection from "./sections/hero/HeroSection";
import SuitableFor from "./sections/suitable-for/SuitableFor";
import TourDetails from "./sections/tour-details/TourDetails";
import TourLayout from "./sections/layout/TourLayout";
import Footer from "@/src/sections/footer/Footer";
import CommonForm from "@/src/tours/CommonForm";
import TourSteps from "@/src/tours/book-now/sections/tour-steps/TourSteps";
import BreadcrumbSchema from "@/src/common/seo/BreadcrumbSchema";
import TourSchema from "@/src/common/seo/TourSchema";

export const metadata: Metadata = {
  title: "Leh Ladakh Road Trip | High Mountain Passes & Himalayan Adventure",
  description:
    "Embark on an unforgettable Leh Ladakh road trip featuring high mountain passes, breathtaking landscapes, monasteries, remote villages, and thrilling Himalayan experiences.",
  alternates: {
    canonical: "/tours/high-passes-road-trip-to-leh-ladakh",
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
            name: "Leh Ladakh Road Trip Tour",
            url: "https://indiaheritagetravel.com/tours/high-passes-road-trip-to-leh-ladakh",
          },
        ]}
      />

      <TourSchema
        name="Leh Ladakh Road Trip Tour"
        description="Embark on an unforgettable Leh Ladakh road trip featuring high mountain passes, breathtaking landscapes, monasteries, remote villages, and thrilling Himalayan experiences."
        url="https://indiaheritagetravel.com/tours/high-passes-road-trip-to-leh-ladakh"
      />

      <HeroSection />
      <SuitableFor />

      {/* MAIN SECTION */}
      <TourLayout>
        <TourDetails />
      </TourLayout>
      
      <TourSteps/>
      <CommonForm tourName="high-passes-road-trip-to-leh-ladakh-tour"/>
      <RecommendedTours/>
      <Footer/>
    </div>
  );
}