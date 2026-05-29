// app/blogs/solo-traveler/page.tsx

import HeroSection from "./components/HeroSection";
import SlowTravelIntroSection from "./components/SlowTravelIntroSection";
import WellnessSection from "./components/WellnessSection";
import HiddenPlacesSection from "./components/HiddenPlacesSection";
import PlanningSection from "./components/PlanningSection";
import MoreBlogSection from "./components/MoreBlogs";
import Footer from "@/src/components/sections/footer/Footer";

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