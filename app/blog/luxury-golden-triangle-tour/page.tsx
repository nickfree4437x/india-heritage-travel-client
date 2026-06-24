import type { Metadata } from "next";

// SEO Components
import BreadcrumbSchema from "@/src/common/seo/BreadcrumbSchema";

// Common Components
import Footer from "@/src/sections/footer/Footer";
import HeroSection from "./sections/hero-intro/HeroSection";
import IntroSection from "./sections/hero-intro/IntroSection";
import WhatIsLuxuryTourSection from "./sections/luxury-golden/LuxurySection";
import WhyLuxuryTourSection from "./sections/luxury-golden/WhyChoose";
import DelhiLuxuryExperiences from "./sections/luxurious-experiences/DelhiSection";
import AgraLuxuryExperiences from "./sections/luxurious-experiences/AgraSection";
import JaipurLuxuryExperiences from "./sections/luxurious-experiences/JaipurSection";
import LuxuryHotelsSection from "./sections/luxurious-experiences/HotelSection";
import LuxuryTransportSection from "./sections/luxury-transport/TranspotSection";
import LuxuryTourCostSection from "./sections/luxury-transport/CostSection";
import BestTimeLuxuryTourSection from "./sections/time-to-visit/BestTimeSection";
import WhyChooseIHTSection from "./sections/time-to-visit/WhyChooseSection";
import FAQSchema from "./sections/faq-conclusion/FAQSchema";
import FAQSection from "./sections/faq-conclusion/FaqSection";
import ConclusionSection from "./sections/faq-conclusion/Conclusion";
import Moreblog from "./sections/more-blog/MoreBlog";

// ============================================
// ARTICLE SCHEMA (JSON-LD)
// ============================================

const articleSchema = {
  "@context": "https://schema.org",

  "@type": "Article",

  headline:
    "Luxury Golden Triangle Tour: Premium India Travel",

  description:
    "Experience Delhi, Agra, and Jaipur in ultimate comfort with a luxury Golden Triangle tour featuring palace hotels, private chauffeurs, expert guides, and personalized itineraries.",

  image:
    "https://res.cloudinary.com/dja5yspwr/image/upload/v1782279641/pexels-axp-photography-500641970-19195961_aqlgse.jpg",

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
      "https://indiaheritagetravel.com/blog/luxury-golden-triangle-tour",
  },
};

// ============================================
// SEO METADATA
// ============================================

export const metadata: Metadata = {
  title:
    "Luxury Golden Triangle Tour | Premium India Travel",

  description:
    "Experience Delhi, Agra, and Jaipur in ultimate comfort with a luxury Golden Triangle tour featuring palace hotels, private chauffeurs, expert guides, and personalized itineraries.",

  alternates: {
    canonical:
      "/blog/luxury-golden-triangle-tour",
  },

  openGraph: {
    title:
      "Luxury Golden Triangle Tour | Premium India Travel",

    description:
      "Experience Delhi, Agra, and Jaipur in ultimate comfort with a luxury Golden Triangle tour featuring palace hotels, private chauffeurs, expert guides, and personalized itineraries.",

    url:
      "https://indiaheritagetravel.com/blog/luxury-golden-triangle-tour",

    siteName: "India Heritage Travel",

    images: [
      {
        url:
          "https://res.cloudinary.com/dja5yspwr/image/upload/v1782279641/pexels-axp-photography-500641970-19195961_aqlgse.jpg",

        width: 1200,

        height: 630,

        alt:
          "Luxury Golden Triangle Tour India",
      },
    ],

    locale: "en_US",

    type: "article",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Luxury Golden Triangle Tour | Premium India Travel",

    description:
      "Experience Delhi, Agra, and Jaipur in ultimate comfort with a luxury Golden Triangle tour featuring palace hotels, private chauffeurs, expert guides, and personalized itineraries.",

    images: [
      "https://res.cloudinary.com/dja5yspwr/image/upload/v1782279641/pexels-axp-photography-500641970-19195961_aqlgse.jpg",
    ],
  },
};

// ============================================
// PAGE COMPONENT
// ============================================

export default function LuxuryGoldenTriangleTourPage() {
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
            name: "Luxury Golden Triangle Tour",
            url:
              "https://indiaheritagetravel.com/blog/luxury-golden-triangle-tour",
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
      <WhatIsLuxuryTourSection/>
      <WhyLuxuryTourSection/>
      <DelhiLuxuryExperiences/>
      <AgraLuxuryExperiences/>
      <JaipurLuxuryExperiences/>
      <LuxuryHotelsSection/>
      <LuxuryTransportSection/>
      <LuxuryTourCostSection/>
      <BestTimeLuxuryTourSection/>
      <WhyChooseIHTSection/>
      <FAQSection/>
      <ConclusionSection/>
      <Moreblog/>

      <Footer />

    </main>
  );
}