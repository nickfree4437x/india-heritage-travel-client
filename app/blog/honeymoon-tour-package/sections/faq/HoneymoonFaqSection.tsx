"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

const faqs = [
  {
    question: "1. How tailored are the Honeymoon Tour Packages?",
    answer:
      "Our honeymoon journeys are completely personalized according to your interests, travel style, destinations, preferred experiences, and budget. Every couple receives a unique itinerary crafted specially for them.",
  },
  {
    question: "2. What's the perfect duration for a romantic package?",
    answer:
      "Most couples prefer between 7–14 days for a balanced honeymoon experience. However, we also create shorter luxury escapes and extended romantic journeys depending on your plans.",
  },
  {
    question: "3. Are meals and special activities included?",
    answer:
      "Yes. Depending on the package, romantic dinners, spa sessions, cultural experiences, luxury stays, breakfasts, candlelight setups, and private experiences can all be included.",
  },
  {
    question: "4. Do you cater to budget-conscious honeymooners?",
    answer:
      "Absolutely. We design experiences across different budgets while maintaining comfort, romance, and quality. Flexible customization helps couples enjoy memorable trips without overspending.",
  },
];

export default function HoneymoonFaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-6 md:py-8 lg:py-10 pb-10 md:pb-12 lg:pb-14">

      {/* SAME WIDTH AS HERO */}
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 xl:px-10">

        {/* HEADING */}
        <h2 className="text-[18px] sm:text-[22px] md:text-[24px] lg:text-[26px] tracking-wide text-[#2c2c2c] font-semibold mb-4 sm:mb-5 md:mb-6">
          Frequently Asked Questions
        </h2>

        {/* FAQ BOX */}
        <div className="bg-white rounded-md border border-[#e9e2d8] overflow-hidden shadow-sm">

          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className="border-b border-[#ece6dd] last:border-b-0"
              >

                {/* QUESTION BUTTON */}
                <button
                  onClick={() => toggleFaq(index)}
                  className="
                    w-full
                    flex items-center justify-between
                    gap-4 sm:gap-5
                    px-4 sm:px-6 md:px-8
                    py-3 sm:py-3.5 md:py-4
                    text-left
                    hover:bg-[#faf8f4]
                    transition-all duration-300
                    group
                  "
                >

                  {/* QUESTION TEXT */}
                  <h3 className="
                    text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px]
                    tracking-wide
                    text-[#2c2c2c]
                    font-medium
                    flex-1
                    pr-2
                  ">
                    {faq.question}
                  </h3>

                  {/* CHEVRON ICON */}
                  <ChevronRight
                    className={`
                      min-w-[18px] w-[18px] h-[18px]
                      sm:min-w-[20px] sm:w-[20px] sm:h-[20px]
                      md:min-w-[22px] md:w-[22px] md:h-[22px]
                      text-[#8b6d52]
                      transition-all duration-300 ease-in-out
                      group-hover:text-[#6b4f3a]
                      ${isOpen ? "rotate-90" : "rotate-0"}
                    `}
                  />

                </button>

                {/* ANSWER - Smooth Collapse Animation */}
                <div
                  className={`
                    grid
                    transition-all duration-400 ease-in-out
                    ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
                  `}
                >
                  <div className="overflow-hidden">
                    <div className="
                      px-4 sm:px-6 md:px-8
                      pb-5 sm:pb-6 md:pb-7
                      pt-1
                    ">
                      <p className="
                        text-gray-700
                        leading-relaxed
                        text-[13px] sm:text-[14px] md:text-[15px]
                        font-light
                        text-justify
                      ">
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