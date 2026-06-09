import type { Metadata } from "next";

import YogaHeroSection from "./sections/hero/HeroSection";
import SuitableFor from "./sections/suitable-for/SuitableFor";
import YogaIntro from "./sections/yoga-intro/YogaIntro";
import TourLayout from "./sections/layout/TourLayout";
import Recommended from "./sections/recommended-tours/Recommended";
import Footer from "@/src/sections/footer/Footer";
import CommonForm from "@/src/tours/CommonForm";
import TourSteps from "@/src/tours/book-now/sections/tour-steps/TourSteps";

export const metadata: Metadata = {
  title: "Yoga Retreat Tour India | Wellness, Meditation & Spiritual Experiences",
  description:
    "Reconnect your mind and body through yoga sessions, meditation practices, wellness retreats, spiritual experiences, and peaceful journeys across India.",
};

export default function YogaEscapesPage() {
  return (
    <div>
      <YogaHeroSection />
      <SuitableFor />
      <YogaIntro />
      <TourLayout />

      <TourSteps/>
      <CommonForm tourName="yoga-escapes-tour"/>
      <Recommended />
      <Footer/>
    </div>
  );
}