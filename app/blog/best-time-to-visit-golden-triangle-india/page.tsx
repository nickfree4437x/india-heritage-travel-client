import type { Metadata } from "next";

// SEO Components
import BreadcrumbSchema from "@/src/common/seo/BreadcrumbSchema";
import HeroSection from "./sections/hero-intro/HeroSection";
import IntroSection from "./sections/hero-intro/IntroSection";
import WeatherOverview from "./sections/weather-overview/WeatherOverview";
import WinterSeason from "./sections/weather-overview/WinterSeason";
import SummerSeason from "./sections/summer-mansoon/SummerSeason";
import MonsoonSeason from "./sections/summer-mansoon/MonsoonSeason";
import TravelerTypes from "./sections/traveler-types/TravelerTypes";
import FestivalsSection from "./sections/festivals/FestivalsSection";
import DestinationWeather from "./sections/destination-weather/DestinationWeather";
import WhyTravelWithIHT from "./sections/why-travel/WhyTravelWithIHT";
import FAQSchema from "./sections/faq-conclusion/FAQSchema";
import FaqSection from "./sections/faq-conclusion/FAQSection";
import Conclusion from "./sections/faq-conclusion/Conclusion";
import Moreblog from "../indian-traveller-guide/sections/more-blogs/MoreBlogs";
import Footer from "@/src/sections/footer/Footer";


// ============================================
// ARTICLE SCHEMA (JSON-LD)
// ============================================

const articleSchema = {
  "@context": "https://schema.org",

  "@type": "Article",

  headline:
    "The Best Time to Visit the Golden Triangle India | Complete Travel Guide",

  description:
    "Discover the best time to visit the Golden Triangle India with month-by-month weather insights, crowd levels, festivals, travel tips, and expert recommendations.",

  image:
    "https://res.cloudinary.com/dja5yspwr/image/upload/v1782104429/nils-huenerfuerst-T8X8vgj0Ink-unsplash_ayktot.jpg",

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
      "https://res.cloudinary.com/dja5yspwr/image/upload/v1782104429/nils-huenerfuerst-T8X8vgj0Ink-unsplash_ayktot.jpg",
  },
};

// ============================================
// SEO METADATA
// ============================================

export const metadata: Metadata = {
  title:
    "The Best Time to Visit the Golden Triangle India | Complete Travel Guide",

  description:
    "Discover the best time to visit the Golden Triangle India with month-by-month weather insights, crowd levels, festivals, travel tips, and expert recommendations.",

  alternates: {
    canonical:
      "/blog/best-time-to-visit-golden-triangle-india",
  },

  openGraph: {
    title:
      "The Best Time to Visit the Golden Triangle India | Complete Travel Guide",

    description:
      "Discover the best time to visit the Golden Triangle India with month-by-month weather insights, crowd levels, festivals, travel tips, and expert recommendations.",

    url:
      "https://indiaheritagetravel.com/blog/best-time-to-visit-golden-triangle-india",

    siteName: "India Heritage Travel",

    images: [
      {
        url:
          "https://res.cloudinary.com/dja5yspwr/image/upload/v1782104429/nils-huenerfuerst-T8X8vgj0Ink-unsplash_ayktot.jpg",

        width: 1200,

        height: 630,

        alt:
          "Best Time to Visit the Golden Triangle India Travel Guide",
      },
    ],

    locale: "en_US",

    type: "article",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "The Best Time to Visit the Golden Triangle India | Complete Travel Guide",

    description:
      "Discover the best time to visit the Golden Triangle India with month-by-month weather insights, crowd levels, festivals, travel tips, and expert recommendations.",

    images: [
      "https://res.cloudinary.com/dja5yspwr/image/upload/v1782104429/nils-huenerfuerst-T8X8vgj0Ink-unsplash_ayktot.jpg",
    ],
  },
};

// ============================================
// PAGE COMPONENT
// ============================================

export default function BestTimeToVisitGoldenTrianglePage() {
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
            name: "Best Time to Visit the Golden Triangle India",
            url:
              "https://indiaheritagetravel.com/blog/best-time-to-visit-golden-triangle-india",
          },
        ]}
      />

      {/* Article Schema */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      <FAQSchema/>

      {/* Blog Sections Will Be Added Here */}
      <HeroSection/>
      <IntroSection/>
      <WeatherOverview/>
      <WinterSeason/>
      <SummerSeason/>
      <MonsoonSeason/>
      <TravelerTypes/>
      <FestivalsSection/>
      <DestinationWeather/>
      <WhyTravelWithIHT/>
      <FaqSection/>
      <Conclusion/>
      <Moreblog/>
      <Footer/>

    </main>
  );
}