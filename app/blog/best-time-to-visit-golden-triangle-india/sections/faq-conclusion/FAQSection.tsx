"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { faqs } from "./data/faqData";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full bg-white py-3 sm:py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="mb-12 sm:mb-8">

          <h2 className="
            text-[18px] sm:text-[20px] md:text-[22px]
            font-semibold
            text-[#2c2c2c]
            mb-4
            tracking-tight
          ">
            Golden Triangle Travel FAQs
          </h2>

          <p className="
            text-gray-600
            text-[12px] sm:text-[13px] md:text-[14.5px]
            font-light
            leading-relaxed
            max-w-6xl
            mx-auto
          ">
            Answers to some of the most common questions travelers ask when
            planning a Golden Triangle journey through Delhi, Agra, and Jaipur.
          </p>
        </div>

        {/* FAQs Accordion */}
        <div className="max-w-6xl mx-auto space-y-3 mb-12">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="
                  border border-[#f0e8dd]
                  rounded-sm
                  overflow-hidden
                  transition-all duration-300
                  hover:border-[#AF956C]/40
                  bg-white
                "
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="
                    w-full
                    flex items-center justify-between
                    text-left
                    px-5 sm:px-6
                    py-4 sm:py-4
                    bg-white
                    hover:bg-[#faf7f3]
                    transition-all duration-300
                    group
                  "
                >
                  <span className="
                    text-[13px] sm:text-[14px] md:text-[15px]
                    font-medium
                    text-[#2c2c2c]
                    pr-4
                    leading-relaxed
                    transition-colors duration-200
                  ">
                    {faq.question}
                  </span>

                  <ChevronDown
                    size={20}
                    className={`
                      flex-shrink-0
                      text-[#AF956C]
                      transition-all duration-300
                      ${isOpen ? "rotate-180" : "rotate-0"}
                      group-hover:scale-110
                    `}
                  />
                </button>

                {/* Answer with animation */}
                <div
                  className={`
                    transition-all duration-300 ease-in-out
                    ${isOpen 
                      ? "max-h-[500px] opacity-100" 
                      : "max-h-0 opacity-0"
                    }
                  `}
                >
                  <div className="
                    px-5 sm:px-6
                    py-4 sm:py-5
                    bg-[#faf7f3]
                    border-t border-[#f0e8dd]
                  ">
                    <p className="
                      text-[12px] sm:text-[13px] md:text-[14px]
                      text-gray-600
                      leading-relaxed
                      font-light
                    ">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Box */}
        <div className="
          max-w-6xl
          mx-auto
          bg-gradient-to-br from-[#faf7f3] to-[#f5f0e9]
          border borer-gray-200
          rounded-md
          p-6 sm:p-8 md:p-10
          text-center
          relative
          overflow-hidden
        ">
          {/* Decorative subtle pattern */}
          <div className="
            absolute 
            top-0 right-0 
            w-32 h-32 
            bg-[#AF956C]/5 
            rounded-full 
            blur-2xl
          "></div>
          <div className="
            absolute 
            bottom-0 left-0 
            w-40 h-40 
            bg-[#AF956C]/5 
            rounded-full 
            blur-2xl
          "></div>

          <div className="relative z-10">
            <div className="flex flex-col items-center gap-5">
              <div>
                <h3 className="
                  text-[16px] sm:text-[18px] md:text-[20px]
                  font-semibold
                  text-[#2c2c2c]
                  mb-3
                ">
                  Still Have Questions About Your Golden Triangle Tour?
                </h3>

                <p className="
                  text-[12px] sm:text-[13px] md:text-[14px]
                  text-gray-600
                  leading-relaxed
                  font-light
                  max-w-2xl
                  mx-auto
                ">
                  Our travel specialists can help you choose the ideal season,
                  itinerary, hotels, and experiences for your Golden Triangle
                  journey.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-2">
                <Link
                  href="/contact"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    px-8 py-3
                    rounded-2xl
                    bg-[#AF956C]
                    text-white
                    text-[12px] sm:text-[13px]
                    tracking-wide
                    transition-all duration-300
                    hover:bg-[#8f7654]
                    hover:shadow-sm
                    min-w-[200px]
                  "
                >
                  Contact Our Experts
                </Link>

                <Link
                  href="/customize-your-journey"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    px-8 py-3
                    rounded-2xl
                    border-2 border-[#AF956C]
                    text-[#AF956C]
                    text-[12px] sm:text-[13px]
                    tracking-wide
                    transition-all duration-300
                    hover:bg-[#AF956C]
                    hover:text-white
                    hover:shadow-sm
                    min-w-[200px]
                  "
                >
                  Build Custom Tour
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}