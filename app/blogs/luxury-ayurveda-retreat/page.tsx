import HeroSection from "./components/HeroSection";
import AyurvedaRetreatSection from "./components/AyurvedaRetreatSection";
import MoreWellnessRetreatsSection from "./components/MoreWellnessRetreatsSection";
import LuxuryRetreatFinalSection from "./components/LuxuryRetreatFinalSection";
import Moreblogs from "./components/Moreblogs";
import Footer from "@/src/components/sections/footer/Footer";

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