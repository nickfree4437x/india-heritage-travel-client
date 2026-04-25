"use client";

import { Check } from "lucide-react";

export default function PricingSection() {
  const plans = [
    {
      title: "Affordable",
      price: "$1437",
      note: "per person",
      features: ["3 Star Hotels", "Heritage Properties", "24/7 Support"],
      highlight: false,
    },
    {
      title: "Semi Luxury",
      price: "$2062",
      note: "per person",
      features: ["4 Star Hotels", "Heritage Properties", "24/7 Support"],
      highlight: true,
    },
    {
      title: "Luxury",
      price: "$3437",
      note: "per person",
      features: ["5 Star Hotels", "Heritage Properties", "24/7 Support"],
      highlight: false,
    },
  ];

  return (
    <section className="py-20 bg-[#f4f0ea]" id="pricing">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#9b7a50] mb-3">
            Plan Freely with All-Inclusive Pricing
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {plans.map((plan, i) => (
            <div
              key={i}
              className={`border rounded-lg p-8 bg-white flex flex-col justify-between transition-all duration-300 ${
                plan.highlight
                  ? "border-gray-200 shadow-md"
                  : "border-gray-200 shadow-sm"
              }`}
            >

              {/* Top */}
              <div>
                <h3 className="text-xl font-semibold text-[#9b7a50] mb-4 text-center">
                  {plan.title}
                </h3>

                <div className="text-center mb-6">
                  <p className="text-3xl font-bold text-gray-900">
                    {plan.price}
                  </p>
                  <span className="text-sm text-gray-500">
                    {plan.note}
                  </span>
                </div>

                {/* Divider */}
                <div className="h-px bg-gray-200 mb-6"></div>

                {/* Features */}
                <div className="space-y-3">
                  {plan.features.map((f, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-gray-700">
                      <Check size={16} className="text-[#9b7a50]" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Button */}
              <button
                className={`mt-8 w-full py-3 rounded-lg transition ${
                  plan.highlight
                    ? "bg-[#9b7a50] text-white hover:bg-[#876845]"
                    : "border border-[#9b7a50] text-[#9b7a50] hover:bg-[#9b7a50] hover:text-white"
                }`}
              >
                Book Now
              </button>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}