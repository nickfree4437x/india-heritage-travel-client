import type { Metadata } from "next";

import HeroSection from "./sections/hero/HeroSection";
import SuitableFor from "./sections/suitable-for/SuitableFor";
import TourLayout from "./sections/layout/TourLayout";
import BookingCard from "./sections/booking-card/BookingCard";
import TourContent from "./sections/tour-content/TourContent";
import DetailedItinerary from "./sections/itinerary/DetailedItinerary";
import HightlightSection from "./sections/hightlights/HightlightSection";
import ExcludedServices from "@/app/tours/majestic-golden-triangle-tour/components/pricing/ExcludedServices";
import RecommendedTours from "@/app/tours/majestic-golden-triangle-tour/components/sections/RecommendedTours";
import DetailedItineraryIntro from "@/src/tours/book-now/sections/itinerary/DetailedItinerary";
import Footer from "@/src/sections/footer/Footer";
import CommonForm from "@/src/tours/CommonForm";
import TourSteps from "@/src/tours/book-now/sections/tour-steps/TourSteps";
import BreadcrumbSchema from "@/src/common/seo/BreadcrumbSchema";
import TourSchema from "@/src/common/seo/TourSchema";

export const metadata: Metadata = {
  title: "Southern Splendors Tour India | Heritage, Culture & Scenic Journeys",
  description:
    "Discover the heritage, architecture, natural beauty, and cultural traditions of South India through a carefully curated and immersive travel experience.",
  alternates: {
    canonical: "/tours/southern-splendors-tour",
  },
};

export default function SouthernSplendorsPage() {
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
            name: "Southern Splendors Tour",
            url: "https://indiaheritagetravel.com/tours/southern-splendors-tour",
          },
        ]}
      />

      <TourSchema
        name="Southern Splendors Tour"
        description="Discover the heritage, architecture, natural beauty, and cultural traditions of South India through a carefully curated and immersive travel experience."
        url="https://indiaheritagetravel.com/tours/southern-splendors-tour"
      />

      <HeroSection />
      <SuitableFor />

      <TourLayout sidebar={<BookingCard />}>
        <TourContent />
        <HightlightSection/>
        <div className="space-y-6">
          <DetailedItinerary />
          <ExcludedServices/>
          <DetailedItineraryIntro/>
        </div>
      </TourLayout>

      <TourSteps/>
      <CommonForm tourName="southern-splendors-tour"/>
      <RecommendedTours/>
      <Footer/>
    </div>
  );
}