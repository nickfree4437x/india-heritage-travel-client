import HeroSection from "./components/HeroSection";
import LuxuryIndiaTourSection from "./components/LuxuryIndiaTourSection";
import RoyalCitiesSection from "./components/RoyalCitiesSection";
import SpiritualFinaleSection from "./components/SpiritualFinaleSection";
import Moreblogs from "./components/MoreBlogs";
import Footer from "@/src/components/sections/footer/Footer";

export default function BlogDetailsPage() {
  return (
    <main>
      <HeroSection />
      <LuxuryIndiaTourSection />
      <RoyalCitiesSection />
      <SpiritualFinaleSection />
      <Moreblogs/>
      <Footer/>
    </main>
  );
}