import type { Metadata } from "next";

// Common components
import Footer from "@/src/sections/footer/Footer";

// Page sections
import ContactHero from "./sections/hero/ContactHero";
import ContactInfoSection from "./sections/contact-info/ContactInfoSection";
import ContactSection from "./sections/contact-form/ContactForm";

// ============================================
// SEO METADATA
// ============================================
export const metadata: Metadata = {
  title:
    "Contact India Heritage Travel | India Tour Planning & Travel Experts",

  description:
    "Get in touch with India Heritage Travel for customized India tours, private itineraries, cultural journeys, Rajasthan holidays, Golden Triangle tours, wellness retreats, and travel planning assistance.",

  keywords: [
    "Contact India Heritage Travel",
    "India Heritage Travel Contact",
    "India Tour Planning",
    "India Travel Experts",
    "India Tour Operator Contact",
    "Custom India Tours",
    "Private India Tours",
    "India Travel Agency",
    "Travel Consultant India",
    "India Holiday Planning",
    "Rajasthan Tour Planning",
    "Golden Triangle Tour Contact",
    "India Travel Assistance",
    "India Tour Specialists",
    "Travel Experts India",
  ],

  alternates: {
    canonical: "/contact",
  },

  openGraph: {
    title:
      "Contact India Heritage Travel | India Tour Planning & Travel Experts",
    description:
      "Contact our travel specialists for customized India tours, private itineraries, cultural journeys, Rajasthan holidays, and personalized travel experiences.",
    url: "https://indiaheritagetravel.com/contact",
    siteName: "India Heritage Travel",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Contact India Heritage Travel | India Tour Planning & Travel Experts",
    description:
      "Reach out to our team for customized India travel planning, private tours, and unforgettable cultural experiences.",
  },
};

// ============================================
// PAGE COMPONENT
// ============================================
export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactInfoSection />
      <ContactSection />
      <Footer />
    </>
  );
}