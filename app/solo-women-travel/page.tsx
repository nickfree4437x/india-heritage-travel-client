import type { Metadata } from "next";

// Common components
import CommonForm from "@/src/tours/CommonForm";
import Footer from "@/src/sections/footer/Footer";

// Page sections
import HeroSection from "./sections/hero/HeroSection";
import AboutSection from "./sections/about/AboutSection";
import HowWorkSection from "./sections/how-it-works/HowWorkSection";
import SectionFour from "./sections/section-four/SectionFour";
import SectionFive from "./sections/section-five/SectionFive";

// ============================================
// SEO METADATA
// ============================================
export const metadata: Metadata = {
  title:
    "Solo Women Travel India | Safe & Personalized India Tours for Women",

  description:
    "Explore India with confidence through safe and personalized solo women travel experiences. Enjoy custom itineraries, trusted local support, women-friendly accommodations, 24/7 assistance, and authentic cultural journeys designed specifically for female travelers.",

  keywords: [
    "Solo Women Travel India",
    "Solo Female Travel India",
    "Women Only Tours India",
    "India Tours For Women",
    "Safe India Tours For Women",
    "Female Travel India",
    "Solo Travel India Women",
    "Women Travel India",
    "Women Friendly Tours India",
    "Private India Tours For Women",
    "India Travel For Women",
    "Solo Female Traveler India",
    "Women Group Tours India",
    "Custom India Tours For Women",
    "Women Travel Packages India",
    "Safe Travel India For Women",
    "India Holiday For Women",
    "India Cultural Tours For Women",
    "Women Adventure Tours India",
    "India Travel Support For Women",
  ],

  alternates: {
    canonical: "/solo-women-travel",
  },

  openGraph: {
    title:
      "Solo Women Travel India | Safe & Personalized India Tours for Women",
    description:
      "Travel India confidently with women-focused tours, personalized itineraries, trusted local support, and authentic cultural experiences designed for solo female travelers.",
    url: "https://indiaheritagetravel.com/solo-women-travel",
    siteName: "India Heritage Travel",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Solo Women Travel India | Safe & Personalized India Tours for Women",
    description:
      "Discover India safely with women-focused travel experiences, custom itineraries, local support, and personalized journeys.",
  },
};

// ============================================
// PAGE COMPONENT
// ============================================
export default function SoloTripPage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <HowWorkSection />
      <SectionFour />
      <SectionFive />
      <div className="pb-16">
        <CommonForm tourName="Solo-Women-Tour" />
      </div>
      <Footer />
    </>
  );
}