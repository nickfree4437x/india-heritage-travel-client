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
  title:
    "Custom India Tour Packages | Tailor-Made & Private India Tours",

  description:
    "Design your perfect India journey with custom India tour packages. Get tailor-made itineraries, private tours, cultural experiences, heritage journeys, wellness retreats, and personalized travel plans created around your interests and travel style.",

  keywords: [
    "Custom India Tour",
    "Custom India Tour Package",
    "Tailor Made India Tour",
    "Private India Tour",
    "Customized India Tour",
    "Personalized India Travel",
    "India Travel Planner",
    "India Custom Itinerary",
    "Private Tour India",
    "India Holiday Package",
    "Luxury India Tour",
    "India Travel Package",
    "Bespoke India Tours",
    "Custom Rajasthan Tour",
    "Custom Golden Triangle Tour",
    "Private India Travel",
    "India Tour Specialist",
    "India Travel Consultant",
    "Tailor Made Holiday India",
    "Custom Travel India",
  ],

  alternates: {
    canonical: "/customize-your-journey",
  },

  openGraph: {
    title:
      "Custom India Tour Packages | Tailor-Made & Private India Tours",
    description:
      "Create a personalized India itinerary with custom tour packages designed around your interests, travel style, pace, and preferred destinations.",
    url: "https://indiaheritagetravel.com/customize-your-journey",
    siteName: "India Heritage Travel",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Custom India Tour Packages | Tailor-Made & Private India Tours",
    description:
      "Plan a tailor-made India journey with private tours, custom itineraries, cultural experiences, and personalized travel planning.",
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