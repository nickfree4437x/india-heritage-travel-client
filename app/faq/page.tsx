import type { Metadata } from "next";

import Footer from "@/src/components/sections/footer/Footer";
import FAQHero from "./FAQHero";
import FaqSection from "@/src/components/sections/festivals/common/FAQSection";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | India Heritage Travel",
  description:
    "Find answers to common questions about India tours, bookings, transportation, safety, accommodations, and travel planning.",
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