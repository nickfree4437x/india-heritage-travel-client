"use client";

import { Check } from "lucide-react";

export default function PricingSection() {
  // Scroll to booking form
  const handleScrollToForm = () => {
    const formSection = document.getElementById("booking-form");
    if (formSection) {
      formSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Pricing plans data
  const plans = [
    {
      title: "Affordable",
      price: "$987",
      note: "per person",
      features: ["3 Star Hotels", "Heritage Properties", "24/7 Support"],
      highlight: false,
    },
    {
      title: "Semi Luxury",
      price: "$1437",
      note: "per person",
      features: ["4 Star Hotels", "Heritage Properties", "24/7 Support"],
      highlight: true,
    },
    {
      title: "Luxury",
      price: "$2462",
      note: "per person",
      features: ["5 Star Hotels", "Heritage Properties", "24/7 Support"],
      highlight: false,
    },
  ];

  return (
    <section className="py-2 md:py-4 bg-white scroll-mt-24 md:scroll-mt-20" id="pricing">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center">
          <h2 className="
            text-[20px] sm:text-[24px] md:text-[26px]
            font-semibold
            text-center
            text-[#2c2c2c]
            tracking-wide
            mb-4 sm:mb-6
          ">
            Kumbh Mela Tour Pricing
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`
                border rounded-md p-8 bg-white
                flex flex-col justify-between
                transition-all duration-300
                ${plan.highlight
                  ? "border-gray-200 shadow-md"
                  : "border-gray-200 shadow-sm"
                }
              `}
            >
              {/* Top Section */}
              <div>
                {/* Title */}
                <h3 className="
                  font-semibold
                  text-[#9b7a50]
                  text-xs sm:text-sm
                  tracking-[0.10em]
                  mb-4
                  text-center
                ">
                  {plan.title}
                </h3>

                {/* Price */}
                <div className="text-center mb-6">
                  <p className="text-2xl tracking-wide text-gray-900">
                    {plan.price}
                  </p>
                  <span className="text-xs tracking-[0.12em] text-gray-500">
                    {plan.note}
                  </span>
                </div>

                {/* Divider */}
                <div className="h-px bg-gray-200 mb-6" />

                {/* Features */}
                <div className="space-y-3">
                  {plan.features.map((f, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-gray-700">
                      <Check size={16} className="text-[#9b7a50]" />
                      <span className="text-xs tracking-[0.10em] text-gray-500">
                        {f}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={handleScrollToForm}
                className={`
                  mt-8 w-full py-2.5
                  rounded-md text-xs
                  font-light
                  tracking-[0.10em]
                  uppercase
                  transition-all duration-300
                  ${plan.highlight
                    ? "bg-[#9b7a50] text-white hover:bg-[#876845]"
                    : "border border-[#9b7a50] text-[#9b7a50] hover:bg-[#9b7a50] hover:text-white"
                  }
                `}
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