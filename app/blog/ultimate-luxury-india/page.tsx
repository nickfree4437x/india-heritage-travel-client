import type { Metadata } from "next";
import HeroSection from "./sections/hero/HeroSection";
import LuxuryIndiaTourSection from "./sections/luxury-india/LuxuryIndiaTourSection";
import RoyalCitiesSection from "./sections/royal-cities/RoyalCitiesSection";
import SpiritualFinaleSection from "./sections/spiritual-final/SpiritualFinaleSection";
import Moreblogs from "./sections/more-blogs/MoreBlogs";
import Footer from "@/src/sections/footer/Footer";
import BreadcrumbSchema from "@/src/common/seo/BreadcrumbSchema";

const articleSchema = {
  "@context": "https://schema.org",

  "@type": "Article",

  headline:
    "Luxury India Tour Itinerary | Ultimate 10-Day Premium Travel Experience",

  description:
    "Discover the ultimate luxury India itinerary featuring royal palaces, heritage hotels, cultural landmarks, premium experiences, and unforgettable journeys across iconic destinations.",

  image:
    "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779819835/blog-10_ex9fic.webp",

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
      "https://indiaheritagetravel.com/blog/chaos-your-journeys",
  },
};

export const metadata: Metadata = {
  title: "Luxury India Tour Itinerary | Ultimate 10-Day Premium Travel Experience",
  description:
    "Discover the ultimate luxury India itinerary featuring royal palaces, heritage hotels, cultural landmarks, premium experiences, and unforgettable journeys across iconic destinations.",
  alternates: {
    canonical: "/blog/ultimate-luxury-india",
  },
};

export default function BlogDetailsPage() {
  return (
    <main>

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
            name: "New Delhi Travel Guide | Essential Tips for First-Time Visitors",
            url: "https://indiaheritagetravel.com/blog/delhi-tour-guide",
          },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ 
          __html: JSON.stringify(articleSchema) 
        }}
      />

      <HeroSection />
      <LuxuryIndiaTourSection />
      <RoyalCitiesSection />
      <SpiritualFinaleSection />
      <Moreblogs/>
      <Footer/>
    </main>
  );
}