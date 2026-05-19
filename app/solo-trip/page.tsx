import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import HowWorkSection from "./components/HowWorkSection";
import SectionFour from "./components/SectionFour";
import SectionFive from "./components/SectionFive";
import CommonForm from "@/src/components/tours/CommonForm";
import Footer from "@/src/components/sections/footer/Footer";

export default function SoloTripPage() {
  return (
    <>
      <HeroSection />
      <AboutSection/>
      <HowWorkSection/>
      <SectionFour/>
      <SectionFive/>
      <CommonForm/>
      <Footer/>
    </>
  );
}