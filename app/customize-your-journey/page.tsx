import type { Metadata } from "next";

// Common components
import Footer from "@/src/sections/footer/Footer";

// Page sections
import HeroSection from "./sections/hero/HeroSection";
import JourneyFormSection from "./sections/journey-form/JourneyFormSection";

// ============================================
// SEO METADATA
// ============================================
export const metadata: Metadata = {
  title: "Custom India Tours | Tailor-Made Private Packages",

  description:
    "Plan custom India tour packages with private itineraries, cultural experiences and personalized journeys tailored to your travel interests.",

  keywords: [
    "Custom India Tours",
    "Custom India Tour Packages",
    "Tailor-Made India Tours",
    "Private India Tours",
    "Customized India Tours",
    "Personalized India Travel",
    "India Custom Itinerary",
    "Custom Rajasthan Tours",
  ],

  alternates: {
    canonical: "/customize-your-journey",
  },

  openGraph: {
    title: "Custom India Tours | Tailor-Made Private Packages",
    description:
      "Plan custom India tour packages with private itineraries, cultural experiences and personalized journeys tailored to your travel interests.",
    url: "https://indiaheritagetravel.com/customize-your-journey",
    siteName: "India Heritage Travel",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Custom India Tours | Tailor-Made Private Packages",
    description:
      "Plan your India journey with customized tours, private itineraries and personalized travel experiences.",
  },
};


// ============================================
// PAGE COMPONENT
// ============================================
export default function CustomizeJourneyPage() {
  return (
    <>
      <HeroSection />
      <JourneyFormSection />
      <Footer />
    </>
  );
}