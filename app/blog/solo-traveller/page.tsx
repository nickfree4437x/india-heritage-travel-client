// app/blogs/solo-traveler/page.tsx
import type { Metadata } from "next";
import HeroSection from "./sections/hero/HeroSection";
import SlowTravelIntroSection from "./sections/solo-traveler/SoloTravelntroSection";
import WellnessSection from "./sections/wellness-section/WellnessSection";
import HiddenPlacesSection from "./sections/hidden-places/HiddenPlacesSection";
import PlanningSection from "./sections/planing-sections/PlanningSection";
import MoreBlogSection from "./sections/more-blogs/MoreBlogs";
import Footer from "@/src/sections/footer/Footer";
import BreadcrumbSchema from "@/src/common/seo/BreadcrumbSchema";

const articleSchema = {
  "@context": "https://schema.org",

  "@type": "Article",

  headline:
    "Solo Women Travel India | Safe, Meaningful & Empowering Travel Experiences",

  description:
    "Discover the freedom of solo travel in India through cultural experiences, personal growth, meaningful connections, and safe, unforgettable",

  image:
    "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779641987/blog-4_rarjqw.jpg",

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
      "https://indiaheritagetravel.com/blog/solo-traveller",
  },
};

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
            name: "Solo Traveler Guide | Safe & Empowering Experiences in India",
            url: "https://indiaheritagetravel.com/blog/solo-traveller",
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

      <SlowTravelIntroSection />

      <WellnessSection />

      <HiddenPlacesSection />

      <PlanningSection />
      <MoreBlogSection />
      <Footer/>

    </main>
  );
}