"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

import { faqs } from "./data/faqData";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full bg-white py-1 sm:py-2 pb-10 md:pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-2 md:mb-3">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] mb-1">
            Frequently Asked Questions
          </h2>

          <p className="text-[12px] sm:text-[13px] md:text-[14.5px] text-gray-700 leading-relaxed font-light">
            Planning your first visit to the Taj Mahal? These are some of
            the questions travellers ask most often before visiting India's
            most famous monument.
          </p>
        </div>

        <div className="border border-[#ece7de] rounded-md overflow-hidden">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="border-b border-[#ece7de] last:border-b-0"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full flex items-center justify-between gap-6 px-5 sm:px-7 py-5 text-left hover:bg-[#faf8f5] transition-colors duration-300"
                >
                  <h3 className="text-[14px] sm:text-[15px] md:text-[15px] text-[#2c2c2c]">
                    {faq.question}
                  </h3>

                  <ChevronDown
                    className={`w-5 h-5 text-[#AF956C] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 sm:px-7 pb-6">
                      <p className="text-[12px] sm:text-[13px] mt-2 md:text-[14px] text-gray-700 leading-relaxed font-light text-justify">
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
            Visit to Taj Mahal - Plan Now!
          </h3>

          <p className="text-[12px] sm:text-[13px] md:text-[13px] text-gray-700 leading-relaxed text-justify font-light mb-4">
            India Heritage Travel designs private chauffeur-driven
            journeys covering the Taj Mahal, Agra, the Golden Triangle,
            and Rajasthan with expert guides, carefully selected hotels,
            and personalised itineraries.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-[#AF956C] px-6 py-2 md:py-2.5 text-[12px] sm:text-[13px] text-white font-light hover:bg-[#9d8157] transition-colors"
          >
            Plan My Taj Mahal Tour
          </Link>
        </div>
      </div>
    </section>
  );
}