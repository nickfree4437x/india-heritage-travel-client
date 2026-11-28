
import type { Metadata } from "next";

// SEO Components
import BreadcrumbSchema from "@/src/common/seo/BreadcrumbSchema";
import TourSchema from "@/src/common/seo/TourSchema";

// Common components
import Footer from "@/src/sections/footer/Footer";
import CommonForm from "@/src/tours/CommonForm";
import TourSteps from "@/src/tours/book-now/sections/tour-steps/TourSteps";

// Page sections
import YogaHeroSection from "./sections/hero/HeroSection";
import SuitableFor from "./sections/suitable-for/SuitableFor";
import YogaIntro from "./sections/yoga-intro/YogaIntro";
import TourLayout from "./layout/TourLayout";
import Recommended from "./sections/recommended-tours/Recommended";

// ============================================
// SEO METADATA
// ============================================
export const metadata: Metadata = {
  title: "Yoga Retreat India | Meditation & Wellness",

  description:
    "Experience yoga, meditation and wellness retreats in India with peaceful settings, mindful practices and rejuvenating experiences.",

  keywords: [
    "Yoga Retreat India",
    "Yoga Tour India",
    "Yoga Retreat Tour India",
    "Yoga and Meditation Retreat India",
    "Wellness Retreat India",
    "Spiritual Retreat India",
    "Yoga Holiday India",
    "Meditation Retreat India",
    "Yoga Wellness Tour",
    "Yoga Retreat Package India",
    "Mindfulness Retreat India",
    "Holistic Wellness Retreat India",
  ],

  alternates: {
    canonical: "/tours/yoga-escapes-tour",
  },

  openGraph: {
    title: "Yoga Retreat India | Meditation & Wellness",
    description:
      "Discover yoga, meditation and wellness retreats in India through peaceful settings and rejuvenating experiences.",
    url: "https://indiaheritagetravel.com/tours/yoga-escapes-tour",
    siteName: "India Heritage Travel",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Yoga Retreat India | Meditation & Wellness",
    description:
      "Explore yoga, meditation and wellness experiences across peaceful destinations in India.",
  },
};

// ============================================
// PAGE COMPONENT
// ============================================
export default function YogaEscapesPage() {
  return (
    <div>
      {/* Breadcrumb Schema - SEO */}
      <BreadcrumbSchema
        items={[
          {
            name: "Home",
            url: "https://indiaheritagetravel.com",
          },
          {
            name: "Yoga Escapes Tour",
            url: "https://indiaheritagetravel.com/tours/yoga-escapes-tour",
          },
        ]}
      />

      {/* Tour Schema - SEO */}
      <TourSchema
        name="Yoga Retreat India"
        description="Reconnect your mind and body through yoga sessions, meditation practices, wellness retreats, spiritual experiences, and peaceful journeys across India."
        url="https://indiaheritagetravel.com/tours/yoga-escapes-tour"
      />

      <YogaHeroSection />
      <SuitableFor />
      <YogaIntro />
      <TourLayout />
      <TourSteps />
      <CommonForm tourName="yoga-escapes-tour" />
      <Recommended />
      <Footer />
    </div>
  );
}
