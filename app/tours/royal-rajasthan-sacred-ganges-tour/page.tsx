import type { Metadata } from "next";

// SEO Components
import BreadcrumbSchema from "@/src/common/seo/BreadcrumbSchema";
import TourSchema from "@/src/common/seo/TourSchema";

// Common components
import Footer from "@/src/sections/footer/Footer";
import CommonForm from "@/src/tours/CommonForm";
import TourSteps from "@/src/tours/book-now/sections/tour-steps/TourSteps";
import ExcludedServices from "@/app/tours/majestic-golden-triangle-tour/components/pricing/ExcludedServices";
import DetailedItineraryIntro from "@/src/tours/book-now/sections/itinerary/DetailedItinerary";
import RecommendedTours from "@/app/tours/majestic-golden-triangle-tour/components/sections/RecommendedTours";

// Page sections
import HeroSection from "./sections/hero/HeroSection";
import SuitableFor from "./sections/suitable-for/SuitableFor";
import TourLayout from "./layout/TourLayout";
import BookingCard from "./booking-card/BookingCard";
import CitiesSection from "./sections/cities-section/CitiesSection";
import ItinerarySection from "./sections/itinerary/ItinerarySection";

// ============================================
// SEO METADATA
// ============================================
export const metadata: Metadata = {
  title: "Royal Rajasthan & Sacred Ganges Tour | Rajasthan, Ganges & Cultural Heritage Journey",
  description:
    "Experience the royal heritage of Rajasthan and the spiritual beauty of the sacred Ganges through cultural landmarks, historic cities, local traditions, and unforgettable journeys across India.",
  alternates: {
    canonical: "/tours/royal-rajasthan-sacred-ganges-tour",
  },
};

// ============================================
// PAGE COMPONENT
// ============================================
export default function RoyalRajasthanPage() {
  return (
    <div>
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
            name: "Royal Rajasthan & Sacred Ganges Tour",
            url: "https://indiaheritagetravel.com/tours/royal-rajasthan-sacred-ganges-tour",
          },
        ]}
      />

      {/* Tour Schema - SEO */}
      <TourSchema
        name="Royal Rajasthan & Sacred Ganges Tour"
        description="Experience the royal heritage of Rajasthan and the spiritual beauty of the sacred Ganges through cultural landmarks, historic cities, local traditions, and unforgettable journeys across India."
        url="https://indiaheritagetravel.com/tours/royal-rajasthan-sacred-ganges-tour"
      />

      {/* Hero Section */}
      <HeroSection />
      <SuitableFor />

      {/* Tour Layout with Sidebar */}
      <TourLayout sidebar={<BookingCard />}>
        <CitiesSection />
        <div className="space-y-6">
          <ItinerarySection />
          <ExcludedServices />
          <DetailedItineraryIntro />
        </div>
      </TourLayout>
      <TourSteps />

      {/* Booking Form */}
      <CommonForm tourName="royal-rajasthan-sacred-ganges-tour" />

      <RecommendedTours />
      <Footer />
    </div>
  );
}