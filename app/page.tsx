import type { Metadata } from "next";
import Script from "next/script";
import dynamic from "next/dynamic";

// Static components (no lazy loading)
import Hero from "@/src/sections/hero/Hero";
import About from "@/src/sections/welcome-section/About";

// Lazy loaded components
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

const LatestBlogsSection = dynamic(
  () => import("@/src/sections/blog-section/LatestBlogsSection")
);

const GallerySection = dynamic(
  () => import("@/src/sections/gallery/Gallery")
);

const ContactSection = dynamic(
  () => import("@/src/sections/contact/Contact")
);

const Footer = dynamic(
  () => import("@/src/sections/footer/Footer")
);

// ============================================
// SEO METADATA
// ============================================

export const metadata: Metadata = {
  title: "India Heritage Travel | Heritage Tours in India",
  description:
    "Explore India with personalized heritage and luxury tours. Discover the Golden Triangle, Rajasthan, Kerala and more with trusted local guides. Plan your trip today.",
  alternates: {
    canonical: "https://indiaheritagetravel.com",
  },
};


// ============================================
// SCHEMA DATA (JSON-LD)
// ============================================
const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "@id": "https://indiaheritagetravel.com/#organization",
  name: "India Heritage Travel",
  url: "https://indiaheritagetravel.com",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "7",
  },
};

// ============================================
// HOME PAGE
// ============================================
export default function Home() {
  return (
    <>
      {/* Review Schema - JSON-LD */}
      <Script
        id="review-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(reviewSchema),
        }}
      />

      {/* Page Sections */}
      <Hero />
      <About />
      <Difference />
      <Destinations />
      <SoloTravelSection />
      <Adventure />
      <Festival />
      <ReviewsSection />
      <LatestBlogsSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </>
  );
}
