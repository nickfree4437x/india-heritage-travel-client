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

export const metadata: Metadata = {
  title: "Spiti Valley Trek & Tour India | Himalayan Landscapes & Adventure Journey",
  description:
    "Experience the rugged beauty of Spiti Valley through scenic treks, mountain villages, monasteries, dramatic landscapes, and unforgettable Himalayan adventures.",
  alternates: {
    canonical: "/tours/spiti-valley-trek-and-tour",
  },
};

export default function SpitiValleyTrekAndTourPage() {
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
            name: "Spiti Valley Trek & Tour",
            url: "https://indiaheritagetravel.com/tours/spiti-valley-trek-and-tour",
          },
        ]}
      />

      <HeroSection />
      <SuitableFor />

      {/* ✅ MAIN SECTION */}
      <TourLayout>
        <TourDetails />
      </TourLayout>
      
      <TourSteps/>
      <CommonForm tourName="spiti-valley-trek-and-tour"/>
      <RecommendedTours/>
      <Footer/>
    </div>
  );
}