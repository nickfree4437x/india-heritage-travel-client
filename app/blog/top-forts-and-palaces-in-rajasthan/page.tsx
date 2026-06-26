import type { Metadata } from "next";

// SEO Components
import BreadcrumbSchema from "@/src/common/seo/BreadcrumbSchema";

// Common Components
import Footer from "@/src/sections/footer/Footer";
import HeroSection from "./sections/hero-intro/HeroSection";
import IntroSection from "./sections/hero-intro/IntroSection";
import WhyPopularSection from "./sections/hero-intro/WhyPopularSection";
import TopFortsAndPalaces from "./sections/fort-section/TopfortSection";
import FAQSchema from "./sections/faq-conclusion/FAQSchema";
import FAQSection from "./sections/faq-conclusion/FaqSection";
import MoreBlogSection from "../golden-triangle-tour-vs-rajasthan-tour/sections/more-blog/MoreBlog";
import ConclusionSection from "./sections/faq-conclusion/Conclusion";

const articleSchema = {
  "@context": "https://schema.org",

  "@type": "Article",

  headline: "15 Forts & Palaces to See in Rajasthan, India",

  description:
    "Planning a Rajasthan trip? Discover the top 15 forts and palaces to visit in Rajasthan, including Amber Fort, Mehrangarh Fort, City Palace Udaipur, Jaisalmer Fort, Chittorgarh, Kumbhalgarh, and more with expert travel tips.",

  image:
    "https://res.cloudinary.com/dja5yspwr/image/upload/v1782461064/chirag-vashist-mnqLnEBHMp8-unsplash_fkxnnf.jpg",

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
      "https://indiaheritagetravel.com/blog/top-forts-and-palaces-in-rajasthan",
  },
};

// ======================================================
// SEO METADATA
// ======================================================

export const metadata: Metadata = {
  title: "15 Forts & Palaces to See in Rajasthan, India",

  description:
    "Planning a Rajasthan trip? Discover the top 15 forts and palaces to visit in Rajasthan, including Amber Fort, Mehrangarh Fort, City Palace Udaipur, Jaisalmer Fort, Chittorgarh, Kumbhalgarh, and more with expert travel tips.",

  alternates: {
    canonical: "/blog/top-forts-and-palaces-in-rajasthan",
  },

  openGraph: {
    title: "15 Forts & Palaces to See in Rajasthan, India",

    description:
      "Explore Rajasthan's most spectacular forts and palaces—from Amber Fort and Mehrangarh to City Palace Udaipur and Jaisalmer Fort. Plan your heritage journey with India Heritage Travel.",

    url:
      "https://indiaheritagetravel.com/blog/top-forts-and-palaces-in-rajasthan",

    siteName: "India Heritage Travel",

    images: [
      {
        url:
          "https://res.cloudinary.com/dja5yspwr/image/upload/v1782461064/chirag-vashist-mnqLnEBHMp8-unsplash_fkxnnf.jpg",

        width: 1200,

        height: 630,

        alt: "Top Forts and Palaces in Rajasthan",
      },
    ],

    locale: "en_US",

    type: "article",
  },

  twitter: {
    card: "summary_large_image",

    title: "15 Forts & Palaces to See in Rajasthan, India",

    description:
      "Discover Rajasthan's top forts and palaces, from Amber Fort and Mehrangarh to City Palace Udaipur and Chittorgarh, with expert travel insights.",

    images: [
      "https://res.cloudinary.com/dja5yspwr/image/upload/v1782461064/chirag-vashist-mnqLnEBHMp8-unsplash_fkxnnf.jpg",
    ],
  },
};

// ======================================================
// PAGE COMPONENT
// ======================================================

export default function TopFortsAndPalacesPage() {
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
            name: "Top Forts and Palaces in Rajasthan",
            url:
              "https://indiaheritagetravel.com/blog/top-forts-and-palaces-in-rajasthan",
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

      {/* FAQ Schema */}
      <FAQSchema/>

      {/* <HeroSection /> */}
      <HeroSection/>
      <IntroSection/>
      <WhyPopularSection/>
      <TopFortsAndPalaces/>
      <FAQSection/>
      <ConclusionSection/>
      <MoreBlogSection/>
      <Footer />

    </main>
  );
}