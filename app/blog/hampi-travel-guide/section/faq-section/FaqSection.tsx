"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

import { faqs } from "./data/faqData";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full bg-white py-4 sm:py-6 pb-10 md:pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-2 md:mb-4">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] tracking-wide font-semibold text-[#2c2c2c]">
            Hampi Travel Guide FAQ
          </h2>

          <p className="mt-1 text-[12px] sm:text-[14px] text-gray-600 leading-relaxed text-justify font-light">
            Essential information about planning a visit to Hampi,
            Karnataka's extraordinary UNESCO World Heritage Site.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border border-gray-200 rounded-md overflow-hidden transition-all duration-300 hover:border-[#AF956C]/30"
              >
                {/* Question Button */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between text-left p-4 bg-white hover:bg-[#faf8f5] transition-colors duration-300"
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
                    <div className="px-5 pb-5 pt-4 border-t border-[#ece7de] bg-white">
                      <p className="text-[12px] sm:text-[13px] text-gray-700 leading-relaxed font-light text-justify">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-10 bg-[#faf8f5] rounded-md p-6 sm:p-8">
          <h3 className="text-[14px] sm:text-[16px] font-semibold text-[#2c2c2c] mb-2">
            Planning a Hampi Heritage Journey?
          </h3>

          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[13px] text-gray-700 font-light text-justify mb-3 md:mb-4">
            India Heritage Travel creates private chauffeur-driven itineraries that combine Hampi's Vijayanagara ruins, Badami cave temples, Pattadakal, and Bijapur into seamless cultural journeys guided by local experts.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-[#AF956C] px-6 py-2 md:py-2.5 text-[12px] sm:text-[13px] font-light text-white transition-colors duration-300 hover:bg-[#9d8157]"
          >
            Plan My Hampi Tour
          </Link>
        </div>
      </div>
    </section>
  );
}