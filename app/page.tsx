import Navbar from "@/src/components/layout/Navbar";
import Hero from "@/src/components/sections/hero/Hero";
import Difference from "@/src/components/sections/how-make-difference/Difference";
import About from "@/src/components/sections/welcome-section/About";
import Destinations from "@/src/components/sections/destinations/Destinations";
import ReviewsSection from "@/src/components/sections/review/Reviews";
import Adventure from "@/src/components/sections/adventure/Adventure";
import Festival from "@/src/components/sections/Festivals";
import Blog from "@/src/components/sections/Blog";
import HealthJourneySection from "@/src/components/sections/Health";
import GallerySection from "@/src/components/sections/Gallery";
import CotactSection from "@/src/components/sections/Contact";
import Footer from "@/src/components/sections/Footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero/>
      <About />
      <Difference />
      <Destinations />
      <ReviewsSection/>
      <Adventure />
      <Festival />
      <Blog />
      <HealthJourneySection />
      <GallerySection/>
      <CotactSection/>
      <Footer />
    </>
  );
}