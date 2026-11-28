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
  title: "Solo Women Travel India | Personalized Tours for Women",

  description:
    "Discover personalized India tours for women with trusted local support, comfortable stays and authentic cultural experiences.",

  keywords: [
    "Solo Women Travel India",
    "Solo Female Travel India",
    "Women Tours India",
    "India Tours for Women",
    "Safe India Tours for Women",
    "Women Friendly Tours India",
    "Private India Tours for Women",
    "Custom India Tours for Women",
  ],

  alternates: {
    canonical: "/solo-women-travel",
  },

  openGraph: {
    title: "Solo Women Travel India | Personalized Tours for Women",
    description:
      "Discover personalized India tours for women with trusted local support, comfortable stays and authentic cultural experiences.",
    url: "https://indiaheritagetravel.com/solo-women-travel",
    siteName: "India Heritage Travel",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Solo Women Travel India | Personalized Tours for Women",
    description:
      "Explore India with personalized tours for women, trusted local support and authentic cultural experiences.",
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