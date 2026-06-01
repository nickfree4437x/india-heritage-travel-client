// app/blogs/solo-traveler/page.tsx
import type { Metadata } from "next";
import HeroSection from "./components/HeroSection";
import SlowTravelIntroSection from "./components/SlowTravelIntroSection";
import WellnessSection from "./components/WellnessSection";
import HiddenPlacesSection from "./components/HiddenPlacesSection";
import PlanningSection from "./components/PlanningSection";
import MoreBlogSection from "./components/MoreBlogs";
import Footer from "@/src/components/sections/footer/Footer";

export const metadata: Metadata = {
  title: "Solo Women Travel India | Safe, Meaningful & Empowering Travel Experiences",
  description:
    "Discover the freedom of solo travel in India through cultural experiences, personal growth, meaningful connections, and safe, unforgettable journeys for women travelers.",
};

export default function SoloTravelerPage() {
  return (
    <main className="w-full bg-white">

      <HeroSection />

      <SlowTravelIntroSection />

      <WellnessSection />

      <HiddenPlacesSection />

      <PlanningSection />
      <MoreBlogSection />
      <Footer/>

    </main>
  );
}