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
    <section className="w-full bg-white py-4 sm:py-6">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="mb-6">

          <h2 className="text-[18px] sm:text-[22px] md:text-[24px] font-semibold text-[#2c2c2c] mb-4">
            Frequently Asked Questions
          </h2>

          <p className="max-w-6xl mx-auto text-[12px] sm:text-[13px] md:text-[14.5px] text-gray-700 leading-relaxed font-light">
            Planning a stay at one of Rajasthan's famous heritage hotels?
            Here are answers to some of the questions travellers ask most
            often before booking their royal stay.
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

                      <p className="text-[12px] sm:text-[13px] mt-2 text-gray-700 leading-relaxed font-light">
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

        <div className="mt-6 bg-[#faf8f5] rounded-md p-6 sm:p-8">

          <h3 className="text-[16px] sm:text-[18px] font-semibold text-[#2c2c2c] mb-3">
            Ready to Experience Rajasthan's Heritage Hotels?
          </h3>

          <p className="text-[12px] sm:text-[13px] md:text-[14px] text-gray-700 leading-relaxed font-light text-justify mb-4">
            Whether you're dreaming of a palace overlooking Lake Pichola,
            a historic fort in the desert, or a royal residence filled with
            centuries of history, our specialists can help you choose the
            perfect heritage hotel and create a personalised Rajasthan
            itinerary.
          </p>

          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-[#AF956C] px-6 py-2 md:py-2.5 text-[12px] sm:text-[13px] font-light text-white transition-colors duration-300 hover:bg-[#9d8157]"
          >
            Plan My Heritage Hotel Journey
          </a>

        </div>

      </div>

    </section>
  );
}