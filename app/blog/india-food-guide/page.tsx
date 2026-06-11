// app/blogs/india-food-guide/page.tsx
import type { Metadata } from "next";
import HeroSection from "./sections/hero/HeroSection";
import FoodIntroSection from "./sections/intro/FoodIntroSection";
import DishesSection from "./sections/dishes/DishesSection";
import TravelTipsSection from "./sections/travel-tips/TravelTipsSection";
import FinalThoughtsSection from "./sections/final-thoughts/FinalThoughtsSection";
import MoreFoodSection from "./sections/more-blogs/MoreFoodSection";
import Footer from "@/src/sections/footer/Footer";
import BreadcrumbSchema from "@/src/common/seo/BreadcrumbSchema";

const articleSchema = {
  "@context": "https://schema.org",

  "@type": "Article",

  headline:
    "Indian Food Guide | What to Eat, What to Avoid & Travel Food Tips",

  description:
    "Discover India's diverse cuisine with essential food recommendations, local specialties, travel dining tips, and practical advice on what to eat and avoid during your journey.",

  image:
    "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779634924/hero-1_xs9azf.jpg",

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
      "https://indiaheritagetravel.com/blog/india-food-guide",
  },
};

export const metadata: Metadata = {
  title: "Indian Food Guide | What to Eat, What to Avoid & Travel Food Tips",
  description:
    "Discover India's diverse cuisine with essential food recommendations, local specialties, travel dining tips, and practical advice on what to eat and avoid during your journey.",
  alternates: {
    canonical: "/blog/india-food-guide",
  },
};

export default function IndiaFoodGuidePage() {
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
            name: "India Food Guide",
            url: "https://indiaheritagetravel.com/blog/india-food-guide",
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

      <FoodIntroSection />

      <DishesSection />

      <TravelTipsSection />

      <FinalThoughtsSection />

      <MoreFoodSection />
      <Footer/>

    </main>
  );
}