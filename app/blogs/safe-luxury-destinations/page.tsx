// app/blogs/safe-luxury-destinations/page.tsx

import HeroSection from "./components/HeroSection";
import SafetyIntroSection from "./components/SafetyIntroSection";
import DestinationsSection from "./components/DestinationsSection";
import MoreDestinationsSection from "./components/MoreDestinationsSection";
import Moreblogs from "./components/Moreblogs";
import Footer from "@/src/components/sections/footer/Footer";

export default function SafeLuxuryDestinationsPage() {
  return (
    <main className="w-full bg-[#f4f0ea]">

      <HeroSection />

      <SafetyIntroSection />

      <DestinationsSection />

      <MoreDestinationsSection />
      <Moreblogs/>
      <Footer/>

    </main>
  );
}