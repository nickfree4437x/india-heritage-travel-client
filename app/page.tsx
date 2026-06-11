import type { Metadata } from "next";
import Script from "next/script";

import Navbar from "@/src/navbar-layout/navbar/Navbar";
import Hero from "@/src/sections/hero/Hero";
import Difference from "@/src/sections/how-make-difference/Difference";
import About from "@/src/sections/welcome-section/About";
import Destinations from "@/src/sections/destinations/Destinations";
import ReviewsSection from "@/src/sections/review/Reviews";
import Adventure from "@/src/sections/adventure/Adventure";
import Festival from "@/src/sections/festivals/Festivals";
import GallerySection from "@/src/sections/gallery/Gallery";
import CotactSection from "@/src/sections/contact/Contact";
import Footer from "@/src/sections/footer/Footer";
import SoloTravelSection from "@/src/sections/solo-trip/Solo";

export const metadata: Metadata = {
  title:
    "India Heritage Travel | Luxury Heritage Tours India | Tailor-Made India Tours",
  description:
    "Experience India's rich heritage with a trusted local guide. From Golden Triangle to Kerala backwaters - personalized tours for solo women, couples & families. Free itinerary consultation. Book now!",
  alternates: {
    canonical: "https://indiaheritagetravel.com",
  },
};

const reviewSchema = {
  "@context": "https://schema.org",

  "@type": "TravelAgency",

  name: "India Heritage Travel",

  url: "https://indiaheritagetravel.com",

  aggregateRating: {
    "@type": "AggregateRating",

    ratingValue: "5",

    reviewCount: "7",
  },
};

export default function Home() {
  return (
    <>
      <Script
        id="review-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(reviewSchema),
        }}
      />
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