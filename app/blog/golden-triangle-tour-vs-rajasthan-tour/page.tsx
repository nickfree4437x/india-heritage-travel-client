import type { Metadata } from "next";

// SEO Components
import BreadcrumbSchema from "@/src/common/seo/BreadcrumbSchema";

// Common Components
import Footer from "@/src/sections/footer/Footer";
import HeroSection from "./sections/hero-intro/HeroSection";
import KeyTakeaways from "./sections/hero-intro/KeyTakeaways";
import QuickAnswer from "./sections/hero-intro/QuickAnswer";
import GoldenTriangleSection from "./sections/golden-triangle/GoldenTriangle";
import RajasthanTourSection from "./sections/Rajasthan-tour/RajasthanSection";
import ComparisonTable from "./sections/comparison/Comparison";
import CityBreakdown from "./sections/comparison/CityComparison";
import ExperiencesCompared from "./sections/comparison/Experiences-compared";
import SignatureExpericnces from "./sections/comparison/Signature-experiences";
import BughetSection from "./sections/golden-triangle/BughetSection";
import VisitSection from "./sections/Rajasthan-tour/VisitSection";
import FAQSchema from "./sections/faq-conclusion/FAQSchema";
import FAQSection from "./sections/faq-conclusion/FAQSection";
import ConclusionSection from "./sections/faq-conclusion/Conclusion";
import MoreBlog from "./sections/more-blog/MoreBlog";

// ============================================
// ARTICLE SCHEMA (JSON-LD)
// ============================================

const articleSchema = {
  "@context": "https://schema.org",

  "@type": "Article",

  headline:
    "Golden Triangle Tour vs Rajasthan Tour: Which India Itinerary Is Right for You?",

  description:
    "Compare the Golden Triangle Tour and Rajasthan Tour to discover which India itinerary suits your travel style. Explore destinations, experiences, duration, budget, and expert travel recommendations.",

  image:
    "https://res.cloudinary.com/dja5yspwr/image/upload/v1782365101/sylwia-bartyzel-eU4pipU_8HA-unsplash_mvujnj.jpg",

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
      "https://indiaheritagetravel.com/blog/golden-triangle-tour-vs-rajasthan-tour",
  },
};

// ============================================
// SEO METADATA
// ============================================

export const metadata: Metadata = {
  title:
    "Golden Triangle Tour vs Rajasthan Tour: Which India Itinerary Is Right for You?",

  description:
    "Compare the Golden Triangle Tour and Rajasthan Tour to discover which India itinerary suits your travel style. Explore destinations, experiences, duration, budget, and expert travel recommendations.",

  alternates: {
    canonical:
      "/blog/golden-triangle-tour-vs-rajasthan-tour",
  },

  openGraph: {
    title:
      "Golden Triangle Tour vs Rajasthan Tour: Which India Itinerary Is Right for You?",

    description:
      "Compare the Golden Triangle Tour and Rajasthan Tour to discover which India itinerary suits your travel style. Explore destinations, experiences, duration, budget, and expert travel recommendations.",

    url:
      "https://indiaheritagetravel.com/blog/golden-triangle-tour-vs-rajasthan-tour",

    siteName: "India Heritage Travel",

    images: [
      {
        url:
          "https://res.cloudinary.com/dja5yspwr/image/upload/v1782365101/sylwia-bartyzel-eU4pipU_8HA-unsplash_mvujnj.jpg",

        width: 1200,

        height: 630,

        alt:
          "Golden Triangle Tour vs Rajasthan Tour",
      },
    ],

    locale: "en_US",

    type: "article",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Golden Triangle Tour vs Rajasthan Tour: Which India Itinerary Is Right for You?",

    description:
      "Compare the Golden Triangle Tour and Rajasthan Tour to discover which India itinerary suits your travel style. Explore destinations, experiences, duration, budget, and expert travel recommendations.",

    images: [
      "https://res.cloudinary.com/dja5yspwr/image/upload/v1782365101/sylwia-bartyzel-eU4pipU_8HA-unsplash_mvujnj.jpg",
    ],
  },
};

// ============================================
// PAGE COMPONENT
// ============================================

export default function GoldenTriangleVsRajasthanPage() {
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
            name: "Golden Triangle Tour vs Rajasthan Tour",
            url:
              "https://indiaheritagetravel.com/blog/golden-triangle-tour-vs-rajasthan-tour",
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

      {/* Blog Sections */}
      <HeroSection/>
      <KeyTakeaways/>
      <QuickAnswer/>
      <GoldenTriangleSection/>
      <RajasthanTourSection/>
      <ComparisonTable/>
      <CityBreakdown/>
      <ExperiencesCompared/>
      <SignatureExpericnces/>
      <BughetSection/>
      <VisitSection/>
      <FAQSection/>
      <ConclusionSection/>
      <MoreBlog/>
      <Footer />

    </main>
  );
}