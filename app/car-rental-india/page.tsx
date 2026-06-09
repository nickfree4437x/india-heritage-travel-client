import type { Metadata } from "next";

import FaqSection from "@/src/sections/festivals/common/FAQSection";
import Footer from "@/src/sections/footer/Footer";
import BookingSection from "./rent-car/booking/BookingSection";
import RentCarHero from "./rent-car/sections/hero/RentCarHero";
import VehicleSection from "./rent-car/sections/luxury-vehicles/LuxuryVehicleSection";
import WhyChooseSection from "./rent-car/sections/why-choose/WhyChooseSection";
import PremiumVehicleSection from "./rent-car/sections/premium-vehicles/PremiumVehicleSection";
import GroupVehicleSection from "./rent-car/sections/group-vehicles/GroupVehicleSection";
import HeritageVehicleSection from "./rent-car/sections/heritage-vehicles/HeritageVehicleSection";

export const metadata: Metadata = {
  title: "Car Rental India With Driver | India Heritage Travel | Rajasthan Road Trips",
  description:
    "Hire a car with driver in India - safe, reliable, affordable. Explore Rajasthan, Golden Triangle & beyond at your pace. English-speaking drivers. Flexible hire - hourly to multi-day. Book now!",
};

export default function RentCarPage() {
  return (
    <>
      <RentCarHero />
      <WhyChooseSection/>
      <VehicleSection/>
      <PremiumVehicleSection/>
      <GroupVehicleSection/>
      <HeritageVehicleSection/>
      <BookingSection/>
      <FaqSection/>
      <Footer/>
    </>
  );
}