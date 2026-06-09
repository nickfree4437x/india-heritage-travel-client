import type { Metadata } from "next";
import HeroSection from "./sections/hero/HeroSection";
import AyurvedaRetreatSection from "./sections/ayurveda-retreat/AyurvedaRetreatSection";
import MoreWellnessRetreatsSection from "./sections/wellness-retreat/MoreWellnessRetreatsSection";
import LuxuryRetreatFinalSection from "./sections/luxury-retreat/LuxuryRetreatFinalSection";
import Moreblogs from "./sections/more-blogs/Moreblogs";
import Footer from "@/src/sections/footer/Footer";

export const metadata: Metadata = {
  title: "Luxury Ayurveda Retreats in India | Wellness, Healing & Relaxation Guide",
  description:
    "Explore India's finest luxury Ayurveda retreats offering holistic healing, wellness therapies, yoga experiences, relaxation programs, and rejuvenating escapes.",
  alternates: {
    canonical: "/blog/luxury-ayurveda-retreat",
  },
};

export default function BlogDetailsPage() {
  return (
    <main>
      <HeroSection />
      <AyurvedaRetreatSection />
      <MoreWellnessRetreatsSection />
      <LuxuryRetreatFinalSection />
      <Moreblogs/>
      <Footer/>
    </main>
  );
}