import type { Metadata } from "next";

import Footer from "@/src/sections/footer/Footer";
import FAQHero from "./FAQHero";
import FaqSection from "@/src/sections/festivals/common/FAQSection";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | India Heritage Travel",
  description:
    "Find answers to common questions about India tours, bookings, transportation, safety, accommodations, and travel planning.",
    alternates: {
    canonical: "/faq",
  },
};

export default function FAQPage() {
  return (
    <div className="bg-white">
      <FAQHero />
      <div className="mt-10">
        <FaqSection/>
      </div>
      <Footer/>
    </div>
  );
}