import type { Metadata } from "next";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import HowWorkSection from "./components/HowWorkSection";
import SectionFour from "./components/SectionFour";
import SectionFive from "./components/SectionFive";
import CommonForm from "@/src/components/tours/CommonForm";
import Footer from "@/src/components/sections/footer/Footer";

export const metadata: Metadata = {
  title: "Solo Women Travel India | Safe India Tours for Women | Trusted Women's India Tours",
  description:
    "Travel India solo as a woman - safely, confidently, beautifully. Isha personally plans every trip. 24/7 WhatsApp support. Real testimonials from 100+ solo women. Start your India journey today.",
};

export default function SoloTripPage() {
  return (
    <>
      <HeroSection />
      <AboutSection/>
      <HowWorkSection/>
      <SectionFour/>
      <SectionFive/>
      <CommonForm tourName="Solo-Women-Tour"/>
      <Footer/>
    </>
  );
}