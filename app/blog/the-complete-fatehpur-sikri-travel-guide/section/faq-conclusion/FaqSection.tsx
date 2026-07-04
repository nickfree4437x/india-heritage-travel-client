"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { faqs } from "./data/faqData";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full bg-white py-6 sm:py-8 pb-10 md:pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-4 md:mb-6">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c] mb-2">
            Frequently Asked Questions About Fatehpur Sikri
          </h2>

          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] text-gray-700 font-light">
            Everything visitors commonly ask before exploring Akbar's
            remarkable abandoned capital and UNESCO World Heritage Site.
          </p>
        </div>

        {/* Accordion */}
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
                      <p className="leading-relaxed mt-2 text-[12px] sm:text-[13px] md:text-[14px] text-gray-700 font-light text-justify">
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
          <h3 className="text-[16px] sm:text-[18px] font-semibold text-[#2c2c2c] mb-2">
            Planning a Fatehpur Sikri Journey?
          </h3>

          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[13px] text-gray-700 font-light text-justify mb-3 md:mb-4">
            India Heritage Travel creates private chauffeur-driven
            itineraries that combine Fatehpur Sikri, the Taj Mahal,
            Agra Fort, Jaipur, and Rajasthan into seamless heritage
            journeys guided by local experts.
          </p>

          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-[#AF956C] px-6 py-2 md:py-2.5 text-[12px] sm:text-[13px] font-light text-white transition-colors duration-300 hover:bg-[#9d8157]"
          >
            Plan My Heritage Tour
          </a>
        </div>
      </div>
    </section>
  );
}