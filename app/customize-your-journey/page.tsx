import type { Metadata } from "next";

import HeroSection from "./sections/hero/HeroSection";
import RegionsSection from "./sections/regions/RegionsSection";
import JourneyFormSection from "./sections/journey-form/JourneyFormSection";
import Footer from "@/src/sections/footer/Footer";

export const metadata: Metadata = {
  title: "Customize Your India Tour | Tailor-Made India Travel Packages | Free Consultation",
  description:
    "Your India, your way. Tell us your dream - we build the perfect itinerary. Tailor-made India tours for solo women, couples & families. Piyush & Isha personally design every trip. Get free quote!",
    alternates: {
    canonical: "/customize-your-journey",
  },
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