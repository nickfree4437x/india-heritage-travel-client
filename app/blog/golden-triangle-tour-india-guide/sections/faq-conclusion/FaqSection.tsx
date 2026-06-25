"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

import { faqs } from "./data/faqData";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faqs"
      className="mb-8 md:py-5"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Heading */}

        <div className="mb-8">

            <h2 className="text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-2">
            Frequently Asked Questions
            </h2>

            <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light">
            Everything you need to know before planning your Golden Triangle Tour
            through Delhi, Agra, and Jaipur.
            </p>

        </div>

        {/* FAQ Items */}

        <div className="space-y-3">

            {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
                <div
                key={index}
                className="border border-[#e7dfd4] rounded-sm bg-white overflow-hidden transition-all duration-300"
                >
                <button
                    onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                    }
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-[#faf7f3] transition-colors duration-300"
                >
                    <span className="text-[13px] sm:text-[14px] md:text-[15px] font-medium text-[#2c2c2c] leading-relaxed">
                    {faq.question}
                    </span>

                    <ChevronDown
                    size={18}
                    className={`flex-shrink-0 text-[#AF956C] transition-transform duration-300 ${
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

                    <div className="px-5 pb-5 border-t border-[#f2ede7]">

                        <p className="pt-4 text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14px] font-light">
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

        <div className="mt-8 bg-[#faf7f3] rounded-sm p-5">

            <h3 className="text-[14px] sm:text-[15px] font-semibold text-[#2c2c2c] mb-2">
            Still Have Questions?
            </h3>

            <p className="text-[12px] sm:text-[13px] md:text-[14px] text-gray-700 leading-relaxed font-light">
            Our travel specialists can help you design the perfect Golden Triangle
            itinerary based on your travel style, interests, schedule, and
            preferred level of comfort.{' '}
            <Link 
              href="/contact" 
              className="text-[#c9a45c] hover:text-[#a8843a]  hover:underline transition-colors duration-200"
            >
              Contact our travel specialists
            </Link>{' '}
            or{' '}
            <Link 
              href="/customize-your-journey" 
              className="text-[#c9a45c] hover:text-[#a8843a] hover:underline transition-colors duration-200"
            >
              build your custom tour
            </Link>
            .
          </p>

        </div>
      </div>

    </section>
  );
}