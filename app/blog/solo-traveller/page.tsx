// app/blogs/solo-traveler/page.tsx
import type { Metadata } from "next";
import HeroSection from "./sections/hero/HeroSection";
import SlowTravelIntroSection from "./sections/solo-traveler/SoloTravelntroSection";
import WellnessSection from "./sections/wellness-section/WellnessSection";
import HiddenPlacesSection from "./sections/hidden-places/HiddenPlacesSection";
import PlanningSection from "./sections/planing-sections/PlanningSection";
import MoreBlogSection from "./sections/more-blogs/MoreBlogs";
import Footer from "@/src/sections/footer/Footer";

export const metadata: Metadata = {
  title: "Solo Women Travel India | Safe, Meaningful & Empowering Travel Experiences",
  description:
    "Discover the freedom of solo travel in India through cultural experiences, personal growth, meaningful connections, and safe, unforgettable journeys for women travelers.",
  alternates: {
    canonical: "/blog/solo-traveller",
  },
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