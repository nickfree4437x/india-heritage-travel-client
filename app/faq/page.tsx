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
  title: "India Travel FAQs | India Heritage Travel",

  description:
    "Find answers to common questions about India tours, bookings, travel safety and trip planning with India Heritage Travel.",

  keywords: [
    "India Travel FAQs",
    "India Tour FAQs",
    "India Travel Questions",
    "India Tour Planning",
    "India Tour Booking",
    "India Travel Safety",
    "Custom India Tours",
    "Solo Women Travel India",
  ],

  alternates: {
    canonical: "/faq",
  },

  openGraph: {
    title: "India Travel FAQs | India Heritage Travel",
    description:
      "Find answers to common questions about India tours, bookings, travel safety and trip planning with India Heritage Travel.",
    url: "https://www.indiaheritagetravel.com/faq",
    siteName: "India Heritage Travel",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "India Travel FAQs | India Heritage Travel",
    description:
      "Find answers to common questions about India tours, bookings, travel safety and trip planning with India Heritage Travel.",
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