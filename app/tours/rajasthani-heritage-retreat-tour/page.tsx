import type { Metadata } from "next";

import Hero from "./sections/hero/Hero";
import Suitable from "./sections/suitable-for/Suitable";
import BookingCard from "./booking-card/BookingCard";
import TourContent from "./sections/tour-content/tour-content";
import ItinerarySection from "./sections/itinerary/ItinerarySection";
import ExcludedServices from "../majestic-golden-triangle-tour/components/pricing/ExcludedServices";
import RecommendedTours from "../majestic-golden-triangle-tour/components/sections/RecommendedTours";
import DetailedItineraryIntro from "@/src/tours/book-now/sections/itinerary/DetailedItinerary";
import Footer from "@/src/sections/footer/Footer";
import CommonForm from "@/src/tours/CommonForm";
import TourSteps from "@/src/tours/book-now/sections/tour-steps/TourSteps";
import BreadcrumbSchema from "@/src/common/seo/BreadcrumbSchema";
import TourSchema from "@/src/common/seo/TourSchema";

export const metadata: Metadata = {
title:
"Rajasthan Tour Package | Royal Palaces, Forts & Heritage Experiences",
description:
"Explore Rajasthan's royal forts, palaces, desert cities, cultural traditions, historic landmarks, and unforgettable heritage experiences across India's most iconic destinations.",
alternates: {
canonical: "/tours/rajasthani-heritage-retreat-tour",
},
};

export default function Page() {
return ( <div className="bg-white min-h-screen">

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
        name: "Rajasthan Heritage Retreat Tour",
        url: "https://indiaheritagetravel.com/tours/rajasthani-heritage-retreat-tour",
      },
    ]}
  />

  <TourSchema
    name="Rajasthan Heritage Retreat Tour"
    description="Explore the royal heritage of Rajasthan through majestic forts, historic palaces, vibrant culture, local traditions, and unforgettable travel experiences across India's most iconic destinations."
    url="https://indiaheritagetravel.com/tours/rajasthani-heritage-retreat-tour"
  />

  <Hero />

  <Suitable />

  <div
    className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 grid grid-cols-1 md:grid-cols-[2.5fr_1fr] gap-6 md:gap-8 lg:gap-10
    "
  >

    {/* LEFT SIDE */}
    <div className="space-y-8">

      <TourContent />

      <div className="space-y-4">
        <ItinerarySection />
        <ExcludedServices />
        <DetailedItineraryIntro />
      </div>

    </div>

    {/* RIGHT SIDE */}
    <div className="flex justify-center md:justify-end">

      <div
        className=" w-full  max-w-[280px] sm:max-w-[300px] md:max-w-[320px] lg:max-w-[350px]
        "
      >
        <BookingCard />
      </div>

    </div>

  </div>

  <TourSteps />

  <CommonForm
    tourName="rajasthani-heritage-retreat-tour"
  />

  <RecommendedTours />

  <Footer />

</div>

);
}
