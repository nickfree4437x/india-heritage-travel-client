import type { Metadata } from "next";

// Common components
import Footer from "@/src/sections/footer/Footer";

// Page sections
import HeroSection from "./sections/hero/HeroSection";
import RegionsSection from "./sections/regions/RegionsSection";
import JourneyFormSection from "./sections/journey-form/JourneyFormSection";

// ============================================
// SEO METADATA
// ============================================
export const metadata: Metadata = {
  title: "Customize Your India Tour | Tailor-Made India Travel Packages | India Heritage Travel",
  description:
    "Your India, your way. Share your travel ideas and India Heritage Travel will create a tailor-made itinerary designed around your interests, travel style, and pace. Personalized India tours for solo women, couples, families, and private groups.",
  alternates: {
    canonical: "/customize-your-journey",
  },
};

// ============================================
// PAGE COMPONENT
// ============================================
export default function CustomizeJourneyPage() {
  return (
    <>
      <HeroSection />
      <RegionsSection />
      <JourneyFormSection />
      <Footer />
    </>
  );
}