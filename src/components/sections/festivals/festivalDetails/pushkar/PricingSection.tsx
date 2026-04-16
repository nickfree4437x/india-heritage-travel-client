"use client";

export default function PricingSection() {
  const plans = [
    {
      title: "Affordable",
      price: "$1437/person",
      features: ["3 Star Hotels", "Heritage Properties", "24/7 Support"],
      highlight: false,
    },
    {
      title: "Semi Luxury",
      price: "$2062/person",
      features: ["4 Star Hotels", "Heritage Properties", "24/7 Support"],
      highlight: true,
    },
    {
      title: "Luxury",
      price: "$3437/person",
      features: ["5 Star Hotels", "Heritage Properties", "24/7 Support"],
      highlight: false,
    },
  ];

  return (
    <section className="py-20 bg-[#f4f0ea]" id="pricing">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-semibold text-center text-[#9b7a50] mb-16">
          Plan Freely with All-Inclusive Pricing
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative bg-white border rounded-xl p-8 text-center shadow-sm transition hover:shadow-lg ${
                plan.highlight ? "scale-105 border-[#9b7a50]" : ""
              }`}
            >

              {/* POPULAR TAG */}
              {plan.highlight && (
                <div className="absolute top-0 right-0 bg-[#9b7a50] text-white text-xs px-3 py-1 rounded-bl-lg">
                  POPULAR
                </div>
              )}

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-semibold text-[#9b7a50] mb-4">
                {plan.title}
              </h3>

              {/* Divider */}
              <div className="w-16 h-[2px] bg-gray-300 mx-auto mb-4"></div>

              {/* Price */}
              <p className="text-lg font-medium mb-6">{plan.price}</p>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {plan.features.map((f, idx) => (
                  <div key={idx} className="border-t pt-4 text-gray-700">
                    {f}
                  </div>
                ))}
              </div>

              {/* Button */}
              <button className="w-full bg-[#9b7a50] text-white py-3 rounded-full font-semibold hover:bg-[#876845] transition">
                BOOK NOW
              </button>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}