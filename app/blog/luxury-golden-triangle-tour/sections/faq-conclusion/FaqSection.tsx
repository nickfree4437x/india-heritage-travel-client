"use client";

import { useState } from "react";
import { faqs } from "./data/faqData";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full bg-white py-4 sm:py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* ===== HEADER ===== */}
        <div className="mb-6 sm:mb-8">
          
          <h2 className="text-[18px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] mb-2">
            Luxury Golden Triangle Tour FAQs
          </h2>
          
          <p className="text-gray-600 text-[13px] sm:text-[14px] md:text-[15px] font-light leading-relaxed max-w-6xl mx-auto">
            Answers to the most common questions about luxury Golden
            Triangle tours, palace hotels, private guides, transportation,
            customization options, and the best time to travel.
          </p>
        </div>

        {/* ===== FAQ ACCORDION ===== */}
        <div className="max-w-6xl mx-auto space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="border border-[#f0e8dd] rounded-lg overflow-hidden transition-all duration-300 hover:border-[#AF956C]/30"
              >
                {/* Question Button */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between text-left px-5 sm:px-6 py-4 sm:py-4 bg-white hover:bg-[#faf7f3] transition-colors duration-200 group"
                >
                  <span className="text-[12px] sm:text-[13.5px] text-[#2c2c2c] pr-4 transition-colors duration-200">
                    {faq.question}
                  </span>

                  {/* Plus/Minus Icon with Circle */}
                  <span
                    className={`
                      flex-shrink-0
                      w-7 h-7
                      rounded-full
                      flex items-center justify-center
                      text-white
                      text-lg
                      font-light
                      transition-all duration-300
                      ${
                        isOpen
                          ? "bg-[#AF956C]"
                          : "bg-[#e7dfd4]/70 group-hover:bg-[#AF956C]/70"
                      }
                    `}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Answer with Smooth Animation */}
                <div
                  className={`
                    grid transition-all duration-300 ease-in-out
                    ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}
                  `}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 sm:px-6 py-4 sm:py-5 bg-[#faf7f3] border-t border-[#f0e8dd]">
                      <p className="text-[13px] sm:text-[14px] text-gray-600 leading-relaxed font-light">
                        {faq.answer}
                      </p>
                    </div>
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