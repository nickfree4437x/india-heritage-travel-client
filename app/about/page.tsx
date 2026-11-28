
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
  title: "About Us | India Heritage Travel",

  description:
    "Discover India Heritage Travel, our team, and our passion for creating personalized heritage tours and cultural journeys across India.",

  keywords: [
    "About India Heritage Travel",
    "India Heritage Travel",
    "India Travel Experts",
    "India Tour Specialists",
    "Heritage Travel India",
    "Cultural Tours India",
    "Personalized India Tours",
    "Custom India Tours",
  ],

  alternates: {
    canonical: "/about",
  },

  openGraph: {
    title: "About Us | India Heritage Travel",
    description:
      "Discover India Heritage Travel, our team, and our passion for creating personalized heritage tours and cultural journeys across India.",
    url: "https://indiaheritagetravel.com/about",
    siteName: "India Heritage Travel",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "About Us | India Heritage Travel",
    description:
      "Discover India Heritage Travel, our team, and our passion for creating personalized heritage tours and cultural journeys across India.",
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
