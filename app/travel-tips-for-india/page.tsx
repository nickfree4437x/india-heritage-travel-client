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
  title: "India Travel Tips | Plan Your India Trip",

  description:
    "Plan your India trip with practical tips on safety, culture, transport, food, packing and local customs for a smoother journey.",

  keywords: [
    "India Travel Tips",
    "Travel Tips for India",
    "India Travel Guide",
    "First Time Visiting India",
    "India Travel Safety",
    "India Travel Planning",
    "India Cultural Tips",
    "India Packing Tips",
  ],

  alternates: {
    canonical: "/travel-tips-for-india",
  },

  openGraph: {
    title: "India Travel Tips | Plan Your India Trip",
    description:
      "Plan your India trip with practical tips on safety, culture, transport, food, packing and local customs for a smoother journey.",
    url: "https://indiaheritagetravel.com/travel-tips-for-india",
    siteName: "India Heritage Travel",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "India Travel Tips | Plan Your India Trip",
    description:
      "Plan your India trip with practical tips on safety, culture, transport, food, packing and local customs for a smoother journey.",
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