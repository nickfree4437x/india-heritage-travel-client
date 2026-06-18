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
  title: "Car Rental India With Driver | India Heritage Travel | Rajasthan Road Trips",
  description:
    "Hire a car with driver in India - safe, reliable, affordable. Explore Rajasthan, Golden Triangle & beyond at your pace. English-speaking drivers. Flexible hire - hourly to multi-day. Book now!",
  alternates: {
    canonical: "/car-rental-india",
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