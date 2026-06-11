import type { Metadata } from "next";

import HeroSection from "./sections/hero/HeroSection";
import SuitableFor from "./sections/suitablefor/SuitableFor";
import TourDetails from "./sections/tour-details/TourDetails";
import TourLayout from "./sections/layout/TourLayout";
import RecommendedTours from "./sections/recommended-tours/RecommendedTours";
import ExcludedServices from "@/app/tours/majestic-golden-triangle-tour/components/pricing/ExcludedServices";
import DetailedItineraryIntro from "@/src/tours/book-now/sections/itinerary/DetailedItinerary";
import Footer from "@/src/sections/footer/Footer";
import CommonForm from "@/src/tours/CommonForm";
import TourSteps from "@/src/tours/book-now/sections/tour-steps/TourSteps";
import BreadcrumbSchema from "@/src/common/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Kashmir & Ladakh Tour Package | Mountains, Lakes & Himalayan Adventures",
  description:
    "Explore the breathtaking beauty of Kashmir and Ladakh through scenic valleys, mountain landscapes, monasteries, lakes, cultural experiences, and unforgettable Himalayan journeys.",
  alternates: {
    canonical: "/tours/divine-kashmir-and-exciting-ladakh-tour",
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
            name: "Divine Kashmir & Exciting Ladakh Tour",
            url: "https://indiaheritagetravel.com/tours/divine-kashmir-and-exciting-ladakh-tour",
          },
        ]}
      />

      <HeroSection />
      <SuitableFor />

      <TourLayout>
        <TourDetails />
        <ExcludedServices/>
        <DetailedItineraryIntro/>
      </TourLayout>
      
      <TourSteps/>
      <CommonForm tourName="divine-kashmir-and-exciting-ladakh-tour"/>
      <RecommendedTours />
      <Footer/>
    </div>
  );
}