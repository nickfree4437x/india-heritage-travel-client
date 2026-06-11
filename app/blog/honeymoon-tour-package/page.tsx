import type { Metadata } from "next";

import BreadcrumbSchema from "@/src/common/seo/BreadcrumbSchema";
import HeroSection from "./sections/hero/HeroSection";
import HoneymoonContentSection from "./sections/content/HoneymoonContentSection";
import RomanticEscapesSection from "./sections/romantic-escapes/RomanticEscapesSection";
import HoneymoonFinalSection from "./sections/final-content/HoneymoonFinalSection";
import HoneymoonFaqSection from "./sections/faq/HoneymoonFaqSection";
import Moreblogs from "./sections/more-blogs/MoreBlogs";
import Footer from "@/src/sections/footer/Footer";

const articleSchema = {
  "@context": "https://schema.org",

  "@type": "Article",

  headline:
    "Best Honeymoon Tour Packages in India | Romantic & Luxury Getaways",

  description:
    "Explore romantic honeymoon destinations in India featuring luxury stays, cultural experiences, scenic landscapes, personalized itineraries, and unforgettable memories.",

  image:
    "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779635049/hero-3_wj3zaa.jpg",

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
      "https://indiaheritagetravel.com/blog/honeymoon-tour-package",
  },
};

export const metadata: Metadata = {
  title: "Best Honeymoon Tour Packages in India | Romantic & Luxury Getaways",
  description:
    "Explore romantic honeymoon destinations in India featuring luxury stays, cultural experiences, scenic landscapes, personalized itineraries, and unforgettable memories.",
  alternates: {
    canonical: "/blog/honeymoon-tour-package",
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
            name: "Best Honeymoon Tour Packages in India",
            url: "https://indiaheritagetravel.com/blog/honeymoon-tour-package",
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
      <HoneymoonContentSection />
      <RomanticEscapesSection />
      <HoneymoonFinalSection />
      <HoneymoonFaqSection />
      <Moreblogs/>
      <Footer/>
    </main>
  );
}