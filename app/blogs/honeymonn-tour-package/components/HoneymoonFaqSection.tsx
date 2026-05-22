"use client";

import { useState } from "react";
import {
  Plus,
  ChevronRight,
} from "lucide-react";

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
    question:
      "3. Are meals and special activities included?",
    answer:
      "Yes. Depending on the package, romantic dinners, spa sessions, cultural experiences, luxury stays, breakfasts, candlelight setups, and private experiences can all be included.",
  },
  {
    question:
      "4. Do you cater to budget-conscious honeymooners?",
    answer:
      "Absolutely. We design experiences across different budgets while maintaining comfort, romance, and quality. Flexible customization helps couples enjoy memorable trips without overspending.",
  },
];

export default function HoneymoonFaqSection() {
  const [activeIndex, setActiveIndex] =
    useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setActiveIndex(
      activeIndex === index ? null : index
    );
  };

  return (
    <section className="w-full bg-[#f7f4ef] py-16 sm:py-20 lg:py-24">

      {/* SAME WIDTH AS HERO */}
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">

        {/* HEADING */}
        <div className="max-w-5xl">

          <h2
            className="
              text-[34px]
              sm:text-[42px]
              lg:text-[52px]

              leading-[1.15]

              text-[#111111]
            "
            style={{
              fontFamily: "'Marcellus', serif",
            }}
          >
            Frequently Asked Questions
          </h2>

        </div>

        {/* FAQ BOX */}
        <div
          className="
            mt-10
            sm:mt-12

            bg-white

            rounded-[22px]
            sm:rounded-[28px]

            border border-[#e9e2d8]

            overflow-hidden

            shadow-[0_8px_35px_rgba(0,0,0,0.04)]
          "
        >

          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className="
                  border-b border-[#ece6dd]
                  last:border-b-0
                "
              >

                {/* QUESTION */}
                <button
                  onClick={() => toggleFaq(index)}
                  className="
                    w-full

                    flex items-start justify-between

                    gap-5

                    px-5
                    sm:px-8

                    py-6
                    sm:py-7

                    text-left

                    hover:bg-[#faf8f4]

                    transition-all
                    duration-300
                  "
                >

                  {/* LEFT */}
                  <div className="flex items-start gap-4 sm:gap-5">

                    {/* ICON */}
                    <div
                      className="
                        min-w-[38px]
                        w-[38px]
                        h-[38px]

                        sm:min-w-[42px]
                        sm:w-[42px]
                        sm:h-[42px]

                        rounded-full

                        bg-[#f3ede5]

                        flex items-center justify-center
                      "
                    >

                      <Plus
                        className={`
                          w-4 h-4 sm:w-5 sm:h-5

                          text-[#8b6d52]

                          transition-transform
                          duration-300

                          ${
                            isOpen
                              ? "rotate-45"
                              : ""
                          }
                        `}
                      />

                    </div>

                    {/* TITLE */}
                    <h3
                      className="
                        text-[17px]
                        sm:text-[21px]
                        lg:text-[24px]

                        leading-[1.5]

                        text-[#222222]
                      "
                      style={{
                        fontFamily:
                          "'Marcellus', serif",
                      }}
                    >
                      {faq.question}
                    </h3>

                  </div>

                  {/* RIGHT ICON */}
                  <ChevronRight
                    className={`
                      min-w-[20px]
                      w-[20px]
                      h-[20px]

                      sm:min-w-[22px]
                      sm:w-[22px]
                      sm:h-[22px]

                      text-[#8b6d52]

                      transition-transform
                      duration-300

                      ${
                        isOpen
                          ? "rotate-90"
                          : ""
                      }
                    `}
                  />

                </button>

                {/* ANSWER */}
                <div
                  className={`
                    grid

                    transition-all
                    duration-500
                    ease-in-out

                    ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }
                  `}
                >

                  <div className="overflow-hidden">

                    <div
                      className="
                        px-5
                        sm:px-8

                        pb-7
                        sm:pb-8

                        pl-[58px]
                        sm:pl-[95px]
                      "
                    >

                      <p className="text-[15px] sm:text-[17px] leading-8 text-[#666666] font-light">
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