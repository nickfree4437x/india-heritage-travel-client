import type { Metadata } from "next";

import HeroSection from "./components/HeroSection";
import RegionsSection from "./components/RegionsSection";
import JourneyFormSection from "./components/customize-form/JourneyFormSection";
import Footer from "@/src/components/sections/footer/Footer";

export const metadata: Metadata = {
  title: "Customize Your India Tour | Tailor-Made India Travel Packages | Free Consultation",
  description:
    "Your India, your way. Tell us your dream - we build the perfect itinerary. Tailor-made India tours for solo women, couples & families. Piyush & Isha personally design every trip. Get free quote!",
};

export default function CustomizeJourneyPage() {
  return (
    <>
      <HeroSection />
      <RegionsSection />
      <JourneyFormSection />
      <Footer/>
    </>
  );
}