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
  title: "Travel Tips For India | Essential India Travel Guide | India Heritage Travel",
  description:
    "Discover essential India travel tips, cultural insights, safety advice, packing recommendations, and practical information to help you explore India with confidence.",
  alternates: {
    canonical: "/travel-tips-for-india",
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