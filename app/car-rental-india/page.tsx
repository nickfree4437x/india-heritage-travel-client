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
  title:
    "Car Rental India With Driver | Private Car Hire & Chauffeur Service",

  description:
    "Book a car rental in India with a professional driver. Explore Rajasthan, Delhi, Agra, Jaipur, the Golden Triangle, and more with safe, reliable, and comfortable private chauffeur-driven vehicles for day trips and multi-day tours.",

  keywords: [
    "Car Rental India",
    "Car Rental India With Driver",
    "Private Car Hire India",
    "Chauffeur Service India",
    "India Car Rental",
    "Driver Car Hire India",
    "Private Driver India",
    "Car Hire India",
    "Golden Triangle Car Rental",
    "Rajasthan Car Rental",
    "Delhi Car Rental With Driver",
    "Jaipur Car Rental",
    "India Travel Transportation",
    "Luxury Car Rental India",
    "SUV Rental India",
    "Tempo Traveller Rental India",
    "India Road Trip Car Rental",
    "Tourist Car Rental India",
    "Private Transport India",
    "Best Car Rental India",
  ],

  alternates: {
    canonical: "/car-rental-india",
  },

  openGraph: {
    title:
      "Car Rental India With Driver | Private Car Hire & Chauffeur Service",
    description:
      "Hire a private car with driver in India for Rajasthan tours, Golden Triangle journeys, airport transfers, day trips, and multi-day travel experiences.",
    url: "https://indiaheritagetravel.com/car-rental-india",
    siteName: "India Heritage Travel",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Car Rental India With Driver | Private Car Hire & Chauffeur Service",
    description:
      "Book reliable chauffeur-driven car rentals in India for Rajasthan, Golden Triangle, airport transfers, and customized road trips.",
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