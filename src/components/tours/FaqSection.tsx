"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "FLEXIBLE CANCELLATION POLICY",
      answer: (
        <div className="space-y-5 text-[12px] sm:text-[13px] leading-[1.9] text-black font-[350]">

          <p>
            <span className="font-semibold">
              Up to 7 days after purchase
            </span>{" "}
            -- 100% refund of Tour Booking price to your original payment method
            or credit (provided cancellation is made at least 14 days prior to
            check-in)
          </p>

          <p>
            <span className="font-semibold">
              Up to 22 days prior to check-in
            </span>{" "}
            -- 80% refund of Tour Booking price to your original payment method
            or credit.
          </p>

          <p>
            <span className="font-semibold">
              From 21 days until the tour start date
            </span>{" "}
            -- Non-refundable
          </p>

        </div>
      ),
    },

    {
      question: "LANGUAGES OUR TOUR GUIDES SPEAK",
      answer:
        "Our tour guides speak English, Hindi, French, Spanish, and German to ensure a smooth travel experience.",
    },

    {
      question: "CUSTOMIZE YOUR TOUR WITH HII STORIES",
      answer:
        "You can personalize your journey with custom experiences, destinations, hotels, and activities.",
    },

    {
      question:
        "WHAT IS INCLUDED IN THE 8 DAYS GOLDEN TRIANGLE WITH RANTHAMBORE & RISHIKESH TOUR?",
      answer:
        "The tour includes accommodation, transport, sightseeing, guided tours, breakfast, and selected activities.",
    },

    {
      question:
        "WHAT IS THE PRICE OF THE 8 DAYS GOLDEN TRIANGLE WITH RANTHAMBORE & RISHIKESH TOUR?",
      answer:
        "Pricing depends on the selected package category such as Pocket Friendly, Semi Luxury, or Luxury.",
    },
  ];

  return (
    <section className="w-full bg-[#f8f8f8] py-14 sm:py-16">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 🔥 Heading */}
        <h2
          className="
            text-[28px]
            sm:text-[36px]
            font-[300]
            tracking-wide
            text-[#d24884]
            mb-8
          "
        >
          FAQ'S
        </h2>

        {/* 🔥 FAQ LIST */}
        <div className="space-y-5">

          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="
                  bg-white
                  border border-[#e7e7e7]
                  rounded-[10px]
                  overflow-hidden
                "
              >

                {/* Question */}
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? -1 : index)
                  }
                  className="
                    w-full
                    flex
                    items-center
                    justify-between
                    text-left
                    px-5 sm:px-7
                    py-5 sm:py-6
                  "
                >

                  <span
                    className="
                      text-[13px]
                      sm:text-[15px]
                      font-[350]
                      tracking-[0.04em]
                      text-[#d24884]
                    "
                  >
                    {faq.question}
                  </span>

                  {isOpen ? (
                    <ChevronUp
                      size={18}
                      className="text-[#d24884] flex-shrink-0"
                    />
                  ) : (
                    <ChevronDown
                      size={18}
                      className="text-gray-400 flex-shrink-0"
                    />
                  )}
                </button>

                {/* Answer */}
                {isOpen && (
                  <div
                    className="
                      px-5 sm:px-7
                      pb-6
                    "
                  >
                    {typeof faq.answer === "string" ? (
                      <p
                        className="
                          text-[12px]
                          sm:text-[13px]
                          leading-[1.9]
                          text-black
                          font-[350]
                        "
                      >
                        {faq.answer}
                      </p>
                    ) : (
                      faq.answer
                    )}
                  </div>
                )}

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}