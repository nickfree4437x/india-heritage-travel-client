import type { Metadata } from "next";

// SEO Components
import BreadcrumbSchema from "@/src/common/seo/BreadcrumbSchema";

// Common Components
import Footer from "@/src/sections/footer/Footer";
import HeroSection from "./sections/hero-intro/HeroSection";
import IntroSection from "./sections/hero-intro/IntroSection";
import LocationSection from "./sections/rooms-location/Location";
import RoomsSection from "./sections/rooms-location/RoomSection";
import MealSection from "./sections/meals-facilities/MealSection";
import Facilities from "./sections/meals-facilities/Facilities";
import MoreFacilities from "./sections/meals-facilities/MoreFacilities";
import BestTimeToVisitSection from "./sections/suitable/VisitSection";
import SuitableForSection from "./sections/suitable/SuitableForSection";
import FAQSchema from "./sections/faq-conclusion/FAQSchema";
import FAQSection from "./sections/faq-conclusion/FaqSection";
import ConclusionSection from "./sections/faq-conclusion/Conclusion";
import MoreblogSection from "./sections/more-blogs/MoreBlog";

// ============================================
// ARTICLE SCHEMA (JSON-LD)
// ============================================

const articleSchema = {
  "@context": "https://schema.org",

  "@type": "Article",

  headline:
    "Rawla Narlai: Rajasthan's Most Enchanting Luxury Heritage Hotel",

  description:
    "Discover Rawla Narlai, a 17th-century royal hunting lodge transformed into one of Rajasthan's finest luxury heritage hotels. Explore stepwell dinners, leopard safaris, heritage suites, and unforgettable experiences in the Aravalli Hills.",

  image:
    "https://res.cloudinary.com/dja5yspwr/image/upload/v1782297620/23.06.2026_11.28.01_REC_xq38bb.jpg",

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
      "https://indiaheritagetravel.com/blog/rawla-narlai-luxury-heritage-hotel-rajasthan",
  },
};

// ============================================
// SEO METADATA
// ============================================

export const metadata: Metadata = {
  title:
    "Rawla Narlai: Rajasthan's Most Enchanting Luxury Heritage Hotel",

  description:
    "Discover Rawla Narlai, a 17th-century royal hunting lodge transformed into one of Rajasthan's finest luxury heritage hotels. Explore stepwell dinners, leopard safaris, heritage suites, and unforgettable experiences in the Aravalli Hills.",

  alternates: {
    canonical:
      "/blog/rawla-narlai-luxury-heritage-hotel-rajasthan",
  },

  openGraph: {
    title:
      "Rawla Narlai: Rajasthan's Most Enchanting Luxury Heritage Hotel",

    description:
      "Discover Rawla Narlai, a 17th-century royal hunting lodge transformed into one of Rajasthan's finest luxury heritage hotels. Explore stepwell dinners, leopard safaris, heritage suites, and unforgettable experiences in the Aravalli Hills.",

    url:
      "https://indiaheritagetravel.com/blog/rawla-narlai-luxury-heritage-hotel-rajasthan",

    siteName: "India Heritage Travel",

    images: [
      {
        url:
          "https://res.cloudinary.com/dja5yspwr/image/upload/v1782297620/23.06.2026_11.28.01_REC_xq38bb.jpg",

        width: 1200,

        height: 630,

        alt:
          "Rawla Narlai Luxury Heritage Hotel Rajasthan",
      },
    ],

    locale: "en_US",

    type: "article",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Rawla Narlai: Rajasthan's Most Enchanting Luxury Heritage Hotel",

    description:
      "Discover Rawla Narlai, a 17th-century royal hunting lodge transformed into one of Rajasthan's finest luxury heritage hotels. Explore stepwell dinners, leopard safaris, heritage suites, and unforgettable experiences in the Aravalli Hills.",

    images: [
      "https://res.cloudinary.com/dja5yspwr/image/upload/v1782297620/23.06.2026_11.28.01_REC_xq38bb.jpg",
    ],
  },
};

// ============================================
// PAGE COMPONENT
// ============================================

export default function RawlaNarlaiPage() {
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
            name: "Rawla Narlai Luxury Heritage Hotel Rajasthan",
            url:
              "https://indiaheritagetravel.com/blog/rawla-narlai-luxury-heritage-hotel-rajasthan",
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
      <LocationSection/>
      <RoomsSection/>
      <MealSection/>
      <Facilities/>
      <MoreFacilities/>
      <BestTimeToVisitSection/>
      <SuitableForSection/>
      <FAQSection/>
      <ConclusionSection/>
      <MoreblogSection/>

      <Footer />

    </main>
  );
}