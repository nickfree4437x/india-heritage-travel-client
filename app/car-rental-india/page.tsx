import type { Metadata } from "next";

// Common components
import FaqSection from "@/src/sections/festivals/common/FAQSection";
import Footer from "@/src/sections/footer/Footer";

// Page sections
import RentCarHero from "./rent-car/sections/hero/RentCarHero";
import WhyChooseSection from "./rent-car/sections/why-choose/WhyChooseSection";
import VehicleSection from "./rent-car/sections/luxury-vehicles/LuxuryVehicleSection";
import PremiumVehicleSection from "./rent-car/sections/premium-vehicles/PremiumVehicleSection";
import GroupVehicleSection from "./rent-car/sections/group-vehicles/GroupVehicleSection";
import BookingSection from "./rent-car/booking/BookingSection";

// ============================================
// SEO METADATA
// ============================================
export const metadata: Metadata = {
  title: "Car Rental India With Driver | Private Chauffeur Service",

  description:
    "Book a car rental in India with a professional driver for Rajasthan tours, Golden Triangle trips, airport transfers and comfortable private journeys.",

  keywords: [
    "Car Rental India",
    "Car Rental India With Driver",
    "Private Car Hire India",
    "Chauffeur Service India",
    "Private Driver India",
    "Rajasthan Car Rental",
    "Golden Triangle Car Rental",
    "Luxury Car Rental India",
  ],

  alternates: {
    canonical: "/car-rental-india",
  },

  openGraph: {
    title: "Car Rental India With Driver | Private Chauffeur Service",
    description:
      "Book a car rental in India with a professional driver for Rajasthan tours, Golden Triangle trips, airport transfers and comfortable private journeys.",
    url: "https://indiaheritagetravel.com/car-rental-india",
    siteName: "India Heritage Travel",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Car Rental India With Driver | Private Chauffeur Service",
    description:
      "Book a car rental in India with a professional driver for Rajasthan tours, Golden Triangle trips, airport transfers and comfortable private journeys.",
  },
};


// ============================================
// PAGE COMPONENT
// ============================================
export default function RentCarPage() {
  return (
    <>
      <RentCarHero />
      <WhyChooseSection />
      <VehicleSection />
      <PremiumVehicleSection />
      <GroupVehicleSection />
      <BookingSection />
      <FaqSection />
      <Footer />
    </>
  );
}