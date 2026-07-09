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
  title:
    "India Travel FAQs | Tour Planning, Safety & Travel Questions",

  description:
    "Get answers to frequently asked questions about India travel, tour packages, transportation, accommodations, solo women travel, safety, bookings, custom itineraries, and travel planning with India Heritage Travel.",

  keywords: [
    "India Travel FAQs",
    "India Tour FAQs",
    "India Travel Questions",
    "India Tour Planning",
    "India Travel Guide",
    "India Travel Tips",
    "India Tour Information",
    "India Travel Advice",
    "India Holiday FAQ",
    "Travel India Questions",
    "Solo Women Travel India",
    "India Tour Booking",
    "India Travel Safety",
    "India Transportation Guide",
    "Custom India Tours",
    "India Itinerary Planning",
    "India Travel Assistance",
    "India Tourism FAQ",
    "Private India Tours",
    "India Travel Support",
  ],

  alternates: {
    canonical: "/faq",
  },

  openGraph: {
    title:
      "India Travel FAQs | Tour Planning, Safety & Travel Questions",
    description:
      "Find answers to common questions about India tours, travel planning, accommodations, transportation, safety, bookings, and customized itineraries.",
    url: "https://indiaheritagetravel.com/faq",
    siteName: "India Heritage Travel",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "India Travel FAQs | Tour Planning, Safety & Travel Questions",
    description:
      "Explore answers to common India travel questions, tour planning advice, booking information, and travel tips.",
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