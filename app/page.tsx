import type { Metadata } from "next";

import Navbar from "@/src/components/navbar-layout/navbar/Navbar";
import Hero from "@/src/components/sections/hero/Hero";
import Difference from "@/src/components/sections/how-make-difference/Difference";
import About from "@/src/components/sections/welcome-section/About";
import Destinations from "@/src/components/sections/destinations/Destinations";
import ReviewsSection from "@/src/components/sections/review/Reviews";
import Adventure from "@/src/components/sections/adventure/Adventure";
import Festival from "@/src/components/sections/festivals/Festivals";
import GallerySection from "@/src/components/sections/gallery/Gallery";
import CotactSection from "@/src/components/sections/contact/Contact";
import Footer from "@/src/components/sections/footer/Footer";
import SoloTravelSection from "@/src/components/sections/solo-trip/Solo";

export const metadata: Metadata = {
  title:
    "India Heritage Travel | Luxury Heritage Tours India | Solo Women Travel",
  description:
    "Experience India's rich heritage with a trusted local guide. From Golden Triangle to Kerala backwaters - personalized tours for solo women, couples & families. Free itinerary consultation. Book now!",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Difference />
      <Destinations />
      <SoloTravelSection />
      <Adventure />
      <Festival />
      <ReviewsSection />
      <GallerySection />
      <CotactSection />
      <Footer />
    </>
  );
}