"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { faqs } from "./data/faqData";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="w-full bg-white py-2 sm:py-4 pb-10 md:pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-2 md:mb-4">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] mb-2">
            Frequently Asked Questions
          </h2>

          <p className="max-w-6xl mx-auto text-[12px] sm:text-[13px] md:text-[14.5px] text-gray-700 leading-relaxed font-light text-justify">
            Still deciding between the Golden Triangle Tour and a Rajasthan Tour? Here are answers to the questions travellers ask us most.
          </p>
        </div>

        {/* FAQ */}
        <div className="border border-[#ece7de] rounded-md overflow-hidden">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`${index !== faqs.length - 1 ? "border-b border-[#ece7de]" : ""}`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between gap-5 text-left px-5 sm:px-7 py-5 transition-colors duration-300 hover:bg-[#faf7f3]"
                >
                  <h3 className="text-[14px] sm:text-[15px] text-[#2c2c2c] leading-relaxed">
                    {faq.question}
                  </h3>

                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 text-[#AF956C] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 sm:px-7 pb-6">
                      <p className="text-[12px] mt-2 sm:text-[13px] md:text-[14px] leading-relaxed text-gray-700 font-light text-justify">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 bg-[#faf7f3] rounded-md p-6 sm:p-8">
          <h3 className="text-[14px] sm:text-[16px] font-semibold text-[#2c2c2c] mb-2">
            Still Need Help Choosing?
          </h3>

          <p className="max-w-6xl mx-auto text-[12px] sm:text-[13px] md:text-[14px] text-gray-700 text-justify leading-relaxed font-light mb-4 md:mb-6">
            Every traveller has different priorities. Whether you're planning
            your first visit to India, a luxury honeymoon, a family holiday,
            or a longer heritage journey, our travel specialists can help you
            choose the itinerary that best matches your interests, budget, and
            travel style.
          </p>

          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-[#AF956C] px-6 py-2 md:py-2.5 text-[12px] sm:text-[13px] font-light text-white transition-colors duration-300 hover:bg-[#95774d]"
          >
            Speak with a Travel Expert
          </a>
        </div>
      </div>
    </section>
  );
}