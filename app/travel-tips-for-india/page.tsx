import type { Metadata } from "next";

// Common components
import Footer from "@/src/sections/footer/Footer";

// Page sections
import TravelTipsHero from "./components/TravelTipsHero";
import TravelTipsContent from "./components/TravelTipsContent";

// ============================================
// SEO METADATA
// ============================================
export const metadata: Metadata = {
  title:
    "India Travel Tips | Essential Guide for First-Time Visitors",

  description:
    "Discover essential India travel tips covering safety, culture, transportation, packing, money, local customs, food, and practical advice for a smooth and memorable journey across India.",

  keywords: [
    "India Travel Tips",
    "India Travel Guide",
    "Travel Tips For India",
    "First Time Travel To India",
    "India Travel Advice",
    "India Tourism Guide",
    "India Travel Information",
    "India Travel Planning",
    "India Travel Safety",
    "India Packing Tips",
    "India Travel Essentials",
    "India Travel Checklist",
    "India Vacation Guide",
    "India Travel Recommendations",
    "India Cultural Tips",
    "India Transportation Guide",
    "India Travel Resources",
    "Visiting India Guide",
    "India Tourist Tips",
    "India Travel Preparation",
  ],

  alternates: {
    canonical: "/travel-tips-for-india",
  },

  openGraph: {
    title:
      "India Travel Tips | Essential Guide for First-Time Visitors",
    description:
      "Learn everything you need to know before visiting India, including safety advice, cultural etiquette, transportation, packing tips, food recommendations, and travel planning guidance.",
    url: "https://indiaheritagetravel.com/travel-tips-for-india",
    siteName: "India Heritage Travel",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "India Travel Tips | Essential Guide for First-Time Visitors",
    description:
      "Get practical India travel advice, safety tips, cultural insights, packing recommendations, and planning guidance for your trip.",
  },
};

// ============================================
// PAGE COMPONENT
// ============================================
export default function TravelTipsPage() {
  return (
    <>
      <TravelTipsHero />
      <TravelTipsContent />
      <Footer />
    </>
  );
}