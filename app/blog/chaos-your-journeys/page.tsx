import type { Metadata } from "next";

import BreadcrumbSchema from "@/src/common/seo/BreadcrumbSchema";
import HeroSection from "./sections/hero/HeroSection";
import BlogContentSection from "./sections/content/BlogContentSection";
import BlogExtraContentSection from "./sections/extra-content/BlogExtraContentSection";
import BlogFinalSection from "./sections/final-content/BlogFinalSection";
import Moreblogs from "./sections/more-blogs/MoreBlogs";
import Footer from "@/src/sections/footer/Footer";

const articleSchema = {
  "@context": "https://schema.org",

  "@type": "Article",

  headline:
    "How the Right India Travel Agency Can Transform Your Journey",

  description:
    "Learn how expert travel planning, local knowledge, personalized itineraries, and trusted guidance can turn your India journey into a seamless experience.",

  image:
    "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779639547/blog-5_kpbanj.jpg",

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
  title:
    "How the Right India Travel Agency Can Transform Your Journey | Travel Planning Guide",

  description:
    "Learn how expert travel planning, local knowledge, personalized itineraries, and trusted guidance can turn your India journey into a seamless experience.",

  alternates: {
    canonical: "/blog/chaos-your-journeys",
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
            name: "How the Right India Travel Agency Can Transform Your Journey",
            url: "https://indiaheritagetravel.com/blog/chaos-your-journeys",
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

      <BlogContentSection />

      <BlogExtraContentSection />

      <BlogFinalSection />

      <Moreblogs />

      <Footer />
    </main>
  );
}