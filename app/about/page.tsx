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
  title: "About India Heritage Travel | Trusted India Tour Experts",
  description:
    "Meet Piyush and Isha, the founders of India Heritage Travel. Jaipur-based travel experts specializing in solo women travel, heritage tours, cultural journeys, and personalized India travel experiences.",
  alternates: {
    canonical: "/about",
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