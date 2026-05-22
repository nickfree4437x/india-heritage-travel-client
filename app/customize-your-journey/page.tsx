import HeroSection from "./components/HeroSection";
import RegionsSection from "./components/RegionsSection";
import JourneyFormSection from "./components/customize-form/JourneyFormSection";
import Footer from "@/src/components/sections/footer/Footer";

export default function CustomizeJourneyPage() {
  return (
    <>
      <HeroSection />
      <RegionsSection />
      <JourneyFormSection />
      <Footer/>
    </>
  );
}