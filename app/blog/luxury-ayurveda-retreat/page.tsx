import type { Metadata } from "next";
import HeroSection from "./components/HeroSection";
import AyurvedaRetreatSection from "./components/AyurvedaRetreatSection";
import MoreWellnessRetreatsSection from "./components/MoreWellnessRetreatsSection";
import LuxuryRetreatFinalSection from "./components/LuxuryRetreatFinalSection";
import Moreblogs from "./components/Moreblogs";
import Footer from "@/src/components/sections/footer/Footer";

export const metadata: Metadata = {
  title: "Luxury Ayurveda Retreats in India | Wellness, Healing & Relaxation Guide",
  description:
    "Explore India's finest luxury Ayurveda retreats offering holistic healing, wellness therapies, yoga experiences, relaxation programs, and rejuvenating escapes.",
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