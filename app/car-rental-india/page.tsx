import type { Metadata } from "next";

import FaqSection from "@/src/components/sections/festivals/common/FAQSection";
import Footer from "@/src/components/sections/footer/Footer";
import BookingSection from "@/src/home/rent-car/booking/BookingSection";
import RentCarHero from "@/src/home/rent-car/RentCarHero";
import VehicleSection from "@/src/home/rent-car/LuxuryVehicleSection";
import WhyChooseSection from "@/src/home/rent-car/WhyChooseSection";
import PremiumVehicleSection from "@/src/home/rent-car/PremiumVehicleSection";
import GroupVehicleSection from "@/src/home/rent-car/GroupVehicleSection";
import HeritageVehicleSection from "@/src/home/rent-car/HeritageVehicleSection";

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