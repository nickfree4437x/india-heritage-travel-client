import type { Metadata } from "next";
import Script from "next/script";
import dynamic from "next/dynamic";

import Hero from "@/src/sections/hero/Hero";
import About from "@/src/sections/welcome-section/About";

const Difference = dynamic(
  () => import("@/src/sections/how-make-difference/Difference")
);

const Destinations = dynamic(
  () => import("@/src/sections/destinations/Destinations")
);

const SoloTravelSection = dynamic(
  () => import("@/src/sections/solo-trip/Solo")
);

const Adventure = dynamic(
  () => import("@/src/sections/adventure/Adventure")
);

const Festival = dynamic(
  () => import("@/src/sections/festivals/Festivals")
);

const ReviewsSection = dynamic(
  () => import("@/src/sections/review/Reviews")
);

const GallerySection = dynamic(
  () => import("@/src/sections/gallery/Gallery")
);

const CotactSection = dynamic(
  () => import("@/src/sections/contact/Contact")
);

const Footer = dynamic(
  () => import("@/src/sections/footer/Footer")
);

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