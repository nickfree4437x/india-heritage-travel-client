
import type { Metadata } from "next";

// Common components
import Footer from "@/src/sections/footer/Footer";

// Page sections
import AboutHero from "./sections/hero/AboutHero";
import AboutLayout from "./components/AboutLayout";

// ============================================
// SEO METADATA
// ============================================
export const metadata: Metadata = {
  title:
    "About Us | India Tour Experts & Cultural Travel Specialists",

  description:
    "Learn about India Heritage Travel and meet the founders behind our personalized travel experiences. We specialize in heritage tours, cultural journeys, solo women travel, wellness retreats, and customized India tour packages.",

  keywords: [
    "India Heritage Travel",
    "About India Heritage Travel",
    "India Travel Experts",
    "India Tour Specialists",
    "Heritage Travel India",
    "Cultural Tours India",
    "Custom India Tours",
    "Private India Tours",
    "India Travel Company",
    "India Tour Operators",
    "Solo Women Travel India",
    "Luxury India Travel",
    "India Heritage Tours",
    "India Cultural Travel",
    "Travel Experts India",
    "Personalized India Tours",
    "India Travel Agency",
    "India Holiday Experts",
    "Trusted India Tour Company",
    "India Travel Experiences",
  ],

  alternates: {
    canonical: "/about",
  },

  openGraph: {
    title:
      "About India Heritage Travel | India Tour Experts & Cultural Travel Specialists",
    description:
      "Meet the team behind India Heritage Travel and discover our passion for creating personalized cultural, heritage, wellness, and adventure journeys across India.",
    url: "https://indiaheritagetravel.com/about",
    siteName: "India Heritage Travel",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "About India Heritage Travel | India Tour Experts & Cultural Travel Specialists",
    description:
      "Learn about India Heritage Travel, our founders, and our commitment to authentic travel experiences across India.",
  },
};

// ============================================
// PAGE COMPONENT
// ============================================
export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutLayout />
      <Footer />
    </>
  );
}
