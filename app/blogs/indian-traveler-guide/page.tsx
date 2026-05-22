// app/blogs/indian-traveler-guide/page.tsx

import HeroSection from "./components/HeroSection";
import TravelBasicsSection from "./components/TravelBasicsSection";
import SafetyAndMoneySection from "./components/SafetyAndMoneySection";
import FinalTravelTipsSection from "./components/FinalTravelTipsSection";
import Moreblogs from "./components/MoreBlogs";
import Footer from "@/src/components/sections/footer/Footer";

export default function IndianTravelerGuidePage() {
  return (
    <main className="w-full bg-[#f4f0ea]">

      <HeroSection />

      <TravelBasicsSection />

      <SafetyAndMoneySection />

      <FinalTravelTipsSection />
      <Moreblogs/>
      <Footer/>

    </main>
  );
}