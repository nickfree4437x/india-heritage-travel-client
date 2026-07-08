"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

import { faqs } from "./data/faqData";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full bg-white py-2 sm:py-4 pb-10 md:pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-2 md:mb-4">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Khajuraho Temples FAQ
          </h2>

          <p className="mt-2 text-[12px] sm:text-[14px] text-gray-600 font-light text-justify leading-relaxed">
            Everything you need to know before planning your visit to
            Khajuraho's UNESCO World Heritage temples.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border border-[#ece7de] rounded-md overflow-hidden transition-all duration-300 hover:border-[#AF956C]/30"
              >
                {/* Question Button */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between text-left p-5 bg-white hover:bg-[#faf8f5] transition-colors duration-300"
                >
                  <span className="text-[14px] sm:text-[15px] text-[#2c2c2c] pr-4">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`w-5 h-5 text-[#AF956C] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Answer with Animation */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5 pt-3 border-t border-[#ece7de] bg-[#faf8f5]">
                      <p className="text-[12px] sm:text-[13.5px] text-gray-700 leading-relaxed text-justify font-light">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-10 bg-[#faf8f5] rounded-md p-6 sm:p-8">
          <h3 className="text-[14px] sm:text-[16px] font-semibold text-[#2c2c2c] mb-2">
            Explore Khajuraho with India Heritage Travel
          </h3>

          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[13px] text-gray-700 font-light text-justify mb-3 md:mb-4">
            Combine Khajuraho with Orchha, Gwalior, Agra, Varanasi, or
            a wildlife safari in Panna National Park and discover one
            of India's richest heritage circuits through a carefully
            curated private journey.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-[#AF956C] px-6 py-2 md:py-2.5 text-[12px] sm:text-[13px] font-light text-white transition-colors duration-300 hover:bg-[#9d8157]"
          >
            Design My Khajuraho Journey
          </Link>
        </div>
      </div>
    </section>
  );
}