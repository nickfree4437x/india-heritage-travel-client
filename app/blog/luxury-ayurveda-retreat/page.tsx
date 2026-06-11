import type { Metadata } from "next";
import HeroSection from "./sections/hero/HeroSection";
import AyurvedaRetreatSection from "./sections/ayurveda-retreat/AyurvedaRetreatSection";
import MoreWellnessRetreatsSection from "./sections/wellness-retreat/MoreWellnessRetreatsSection";
import LuxuryRetreatFinalSection from "./sections/luxury-retreat/LuxuryRetreatFinalSection";
import Moreblogs from "./sections/more-blogs/Moreblogs";
import Footer from "@/src/sections/footer/Footer";
import BreadcrumbSchema from "@/src/common/seo/BreadcrumbSchema";

const articleSchema = {
  "@context": "https://schema.org",

  "@type": "Article",

  headline:
    "Luxury Ayurveda Retreats in India | Wellness, Healing & Relaxation Guide",

  description:
    "Explore India's finest luxury Ayurveda retreats offering holistic healing, wellness therapies, yoga experiences, relaxation programs, and rejuvenating escapes.",

  image:
    "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779801053/blog-8_rtahzc.jpg",

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
      "https://indiaheritagetravel.com/blog/luxury-ayurveda-retreat",
  },
};

export const metadata: Metadata = {
  title: "Luxury Ayurveda Retreats in India | Wellness, Healing & Relaxation Guide",
  description:
    "Explore India's finest luxury Ayurveda retreats offering holistic healing, wellness therapies, yoga experiences, relaxation programs, and rejuvenating escapes.",
  alternates: {
    canonical: "/blog/luxury-ayurveda-retreat",
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
            name: "Luxury Ayurveda Retreats in India",
            url: "https://indiaheritagetravel.com/blog/luxury-ayurveda-retreat",
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
      <AyurvedaRetreatSection />
      <MoreWellnessRetreatsSection />
      <LuxuryRetreatFinalSection />
      <Moreblogs/>
      <Footer/>
    </main>
  );
}