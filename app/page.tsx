import Navbar from "@/src/components/layout/Navbar";
import Hero from "@/src/components/sections/hero/Hero";
import Difference from "@/src/components/sections/Difference";
import About from "@/src/components/sections/welcome-section/About";
import Destinations from "@/src/components/sections/Destinations";
import ReviewsSection from "@/src/components/sections/Reviews";
import IndeedQuoteSection from "@/src/components/sections/Indeed";
import Adventure from "@/src/components/sections/Adventure";
import Festival from "@/src/components/sections/Festivals";
import Blog from "@/src/components/sections/Blog";
import HealthJourneySection from "@/src/components/sections/Health";
import DestinationsSection from "@/src/components/sections/DestinationsImageSection";
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
      <IndeedQuoteSection />
      <Adventure />
      <Festival />
      <Blog />
      <HealthJourneySection />
      <DestinationsSection/>
      <GallerySection/>
      <CotactSection/>
      <Footer />
    </>
  );
}