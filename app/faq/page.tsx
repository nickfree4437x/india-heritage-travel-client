import type { Metadata } from "next";

// Common components
import Footer from "@/src/sections/footer/Footer";
import FaqSection from "@/src/sections/festivals/common/FAQSection";

// Page sections
import FAQHero from "./FAQHero";

// ============================================
// SEO METADATA
// ============================================
export const metadata: Metadata = {
  title: "India Tour FAQs | Travel Questions Answered | India Heritage Travel",
  description:
    "Find answers to common questions about India tours, travel planning, solo women travel, transportation, accommodations, bookings, safety, and customized India itineraries.",
  alternates: {
    canonical: "/faq",
  },
};

// ============================================
// PAGE COMPONENT
// ============================================
export default function FAQPage() {
  return (
    <div className="bg-white">
      <FAQHero />
      <div className="mt-10">
        <FaqSection />
      </div>
      <Footer />
    </div>
  );
}