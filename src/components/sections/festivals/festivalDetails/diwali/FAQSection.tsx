"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "IS INDIA A FAMILY-FRIENDLY DESTINATION?",
    a: "Yes, India offers diverse experiences suitable for families, including cultural tours, safe accommodations, and guided activities.",
  },
  {
    q: "IS INDIA A SAFE COUNTRY FOR TRAVELING WITH FAMILY, FRIENDS, SOLO FEMALE, OR BUSINESS?",
    a: "India is generally safe for travelers. With proper planning, trusted guides, and local support, your journey remains comfortable and secure.",
  },
  {
    q: "WHAT TYPES OF ACCOMMODATIONS ARE AVAILABLE IN INDIA?",
    a: "You can choose from budget hotels to luxury resorts, including heritage properties and boutique stays.",
  },
  {
    q: "BOOKING AND PAYMENT WITH INDIA HERITAGE TRAVEL",
    a: "We provide secure payment methods and flexible booking options for a hassle-free experience.",
  },
  {
    q: "IS A VISA REQUIRED FOR TRAVELING TO INDIA?",
    a: "Most travelers need a visa. India offers e-visa options for many countries for easy access.",
  },
  {
    q: "DO I NEED TRAVEL INSURANCE FOR INDIA?",
    a: "Travel insurance is highly recommended to cover emergencies, cancellations, and medical needs.",
  },
  {
    q: "ARE SPECIFIC VACCINATIONS REQUIRED FOR TRAVELING TO INDIA?",
    a: "No mandatory vaccinations are required, but consulting your doctor before travel is advised.",
  },
  {
    q: "HOW SAFE AM I WHEN TRAVELING WITH INCREDIBLE REAL INDIA?",
    a: "We prioritize your safety with trusted guides, curated stays, and 24/7 support throughout your journey.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-[#f4f0ea]" id="faq">
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-semibold text-[#9b7a50] mb-6">
          Frequently Asked Questions
        </h2>

        {/* Tag */}
        <div className="inline-block bg-[#9b7a50] text-white px-6 py-2 mb-10 relative">
          GENERAL FAQ'S
          <div className="absolute left-1/2 -bottom-2 transform -translate-x-1/2 w-3 h-3 bg-[#9b7a50] rotate-45"></div>
        </div>

        {/* Accordion */}
        <div className="space-y-4 text-left">
          {faqs.map((item, i) => (
            <div key={i} className="border bg-white rounded-md overflow-hidden">

              {/* Question */}
              <div
                onClick={() => toggle(i)}
                className="flex justify-between items-center px-6 py-4 cursor-pointer text-sm md:text-base font-medium text-[#9b7a50]"
              >
                {item.q}
                <ChevronDown
                  className={`transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </div>

              {/* Answer */}
              <div
                className={`px-6 transition-all duration-300 ${
                  openIndex === i
                    ? "max-h-40 py-4 opacity-100"
                    : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <p className="text-gray-700 text-sm">{item.a}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}