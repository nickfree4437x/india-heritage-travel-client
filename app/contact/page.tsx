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
  title: "Contact India Heritage Travel | Plan Your India Tour",

  description:
    "Contact India Heritage Travel to plan personalized India tours, private journeys and cultural experiences with our travel team.",

  keywords: [
    "Contact India Heritage Travel",
    "India Heritage Travel Contact",
    "India Tour Operator Contact",
    "India Travel Experts",
    "Custom India Tours",
    "Private India Tours",
    "India Tour Planning",
  ],

  alternates: {
    canonical: "/contact",
  },

  openGraph: {
    title: "Contact India Heritage Travel | Plan Your India Tour",
    description:
      "Contact India Heritage Travel to plan personalized India tours, private journeys and cultural experiences with our travel team.",
    url: "https://indiaheritagetravel.com/contact",
    siteName: "India Heritage Travel",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact India Heritage Travel | Plan Your India Tour",
    description:
      "Contact our team to plan personalized India tours, private journeys and cultural experiences.",
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