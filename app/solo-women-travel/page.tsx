import type { Metadata } from "next";
import HeroSection from "./sections/hero/HeroSection";
import AboutSection from "./sections/about/AboutSection";
import HowWorkSection from "./sections/how-it-works/HowWorkSection";
import SectionFour from "./sections/section-four/SectionFour";
import SectionFive from "./sections/section-five/SectionFive";
import CommonForm from "@/src/tours/CommonForm";
import Footer from "@/src/sections/footer/Footer";

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