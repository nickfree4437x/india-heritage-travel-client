"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "./data/faqData";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full bg-white py-2 md:py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="mb-3 sm:mb-4">
          <h2 className="
            text-[16px] sm:text-[20px] md:text-[22px]
            font-semibold
            text-[#2c2c2c]
            tracking-wide
          ">
            Golden Triangle Travel FAQs
          </h2>
        </div>

        {/* FAQs Accordion */}
        <div className="max-w-6xl mx-auto space-y-3 mb-8 md:mb-10">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="
                  border border-[#f0e8dd]
                  rounded-md
                  overflow-hidden
                  transition-all duration-300
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
                    transition-all duration-300
                    group
                  "
                >
                  <span className="
                    text-[13px] sm:text-[14px] md:text-[15px]
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
                      text-justify
                    ">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}