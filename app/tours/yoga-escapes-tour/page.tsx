import type { Metadata } from "next";

import YogaHeroSection from "./sections/HeroSection";
import SuitableFor from "./sections/SuitableFor";
import YogaIntro from "./sections/YogaIntro";
import TourLayout from "./sections/TourLayout";
import Recommended from "./sections/Recommended";
import Footer from "@/src/components/sections/footer/Footer";
import CommonForm from "@/src/components/tours/CommonForm";
import TourSteps from "@/src/components/tours/TourSteps";

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