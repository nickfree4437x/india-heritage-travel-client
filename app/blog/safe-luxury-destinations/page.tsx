// app/blogs/safe-luxury-destinations/page.tsx
import type { Metadata } from "next";
import HeroSection from "./sections/hero/HeroSection";
import SafetyIntroSection from "./sections/safety-intro/SafetyIntroSection";
import DestinationsSection from "./sections/destination/DestinationsSection";
import MoreDestinationsSection from "./sections/more-destinations/MoreDestinationsSection";
import Moreblogs from "./sections/more-blogs/Moreblogs";
import Footer from "@/src/sections/footer/Footer";
import BreadcrumbSchema from "@/src/common/seo/BreadcrumbSchema";

const articleSchema = {
  "@context": "https://schema.org",

  "@type": "Article",

  headline:
    "Safe Luxury Destinations in India | Premium Travel Experiences & Hidden Gems",

  description:
    "Explore safe and luxurious destinations across India featuring heritage stays, cultural experiences, scenic landscapes, personalized journeys, and premium hospitality.",

  image:
    "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779637769/blog-2_ma62qv.jpg",

  author: {
    "@type": "Organization",

    name: "India Heritage Travel",
  },

  publisher: {
    "@type": "Organization",

    name: "India Heritage Travel",

    logo: {
      "@type": "ImageObject",

      url:
        "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779742948/logo2_yhlwmt.png",
    },
  },

  mainEntityOfPage: {
    "@type": "WebPage",

    "@id":
      "https://indiaheritagetravel.com/blog/safe-luxury-destinations",
  },
};

export const metadata: Metadata = {
  title: "Safe Luxury Destinations in India | Premium Travel Experiences & Hidden Gems",
  description:
    "Explore safe and luxurious destinations across India featuring heritage stays, cultural experiences, scenic landscapes, personalized journeys, and premium hospitality.",
  alternates: {
    canonical: "/blog/safe-luxury-destinations",
  },
};

export default function SafeLuxuryDestinationsPage() {
  return (
    <main className="w-full bg-white">

      {/* Breadcrumb Schema */}
      <BreadcrumbSchema
        items={[
          {
            name: "Home",
            url: "https://indiaheritagetravel.com",
          },
          {
            name: "Blog",
            url: "https://indiaheritagetravel.com/blog",
          },
          {
            name: "Safe Luxury Destinations in India",
            url: "https://indiaheritagetravel.com/blog/safe-luxury-destinations",
          },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema
          ),
        }}
      />

      <HeroSection />

      <SafetyIntroSection />

      <DestinationsSection />

      <MoreDestinationsSection />
      <Moreblogs/>
      <Footer/>

    </main>
  );
}