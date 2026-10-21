"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { faqs } from "./data/faqData";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="w-full bg-white py-2 sm:py-4 pb-10 md:pb-12">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="mb-2 md:mb-4">

          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] mb-1">
            Frequently Asked Questions
          </h2>

          <p className="max-w-6xl mx-auto text-[12px] sm:text-[13px] md:text-[14.5px] text-gray-700 leading-relaxed font-light">
            Have questions about India's UNESCO World Heritage Sites? Find answers
            about their significance, the best time to visit, and practical tips for
            planning a heritage trip across India.
          </p>

        </div>

        {/* FAQ Accordion */}

        <div className="border border-[#ece7de] rounded-md overflow-hidden bg-white">

          {faqs.map((faq, index) => {

            const isOpen = openIndex === index;

            return (

              <div
                key={faq.question}
                className={
                  index !== faqs.length - 1
                    ? "border-b border-[#ece7de]"
                    : ""
                }
              >

                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between gap-6 px-5 sm:px-7 py-5 text-left hover:bg-[#faf8f5] transition-colors duration-300"
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
                    isOpen
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >

                  <div className="overflow-hidden">

                    <div className="px-5 sm:px-7 pb-6">

                      <p className="text-[12px] sm:text-[13px] md:text-[13.5px] mt-2 text-gray-700 leading-relaxed font-light">
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

        <div className="mt-4 bg-[#faf8f5] rounded-md p-6 sm:p-8">

          <h3 className="text-[14px] sm:text-[16px] font-semibold text-[#2c2c2c] mb-2">
            Ready to Explore India's UNESCO Heritage?
          </h3>

          <p className="text-[11px] sm:text-[12px] md:text-[13px] text-gray-700 leading-relaxed font-light text-justify mb-4">
            From historic monuments and ancient cave complexes to heritage cities
            and natural landscapes, India offers a wide range of UNESCO-listed
            destinations. Contact India Heritage Travel to discuss your interests
            and explore suitable options for planning your journey.
          </p>

          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-[#AF956C] px-6 py-2 md:py-2.5 text-[12px] font-light sm:text-[13.5px] text-white transition-colors duration-300 hover:bg-[#9d8157]"
          >
            Plan My India Heritage Trip
          </a>

        </div>

      </div>

    </section>
  );
}