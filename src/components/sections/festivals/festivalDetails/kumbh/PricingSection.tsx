"use client";

export default function PricingSection() {
  const plans = [
    {
      title: "Affordable",
      price: "$987",
      features: ["3 Star Hotels", "Heritage Properties", "24/7 Support"],
    },
    {
      title: "Semi Luxury",
      price: "$1437",
      popular: true,
      features: ["4 Star Hotels", "Heritage Properties", "24/7 Support"],
    },
    {
      title: "Luxury",
      price: "$2462",
      features: ["5 Star Hotels", "Heritage Properties", "24/7 Support"],
    },
  ];

  return (
    <section className="py-20 bg-[#f4f0ea]" id="pricing">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#9b7a50] mb-12">
          Plan Freely with All-Inclusive Pricing
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {plans.map((plan, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl border border-gray-200 p-8 text-center shadow-sm hover:shadow-md transition"
            >

              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-[#9b7a50] text-white text-xs px-3 py-1 rounded-bl-lg">
                  POPULAR
                </div>
              )}

              {/* Title */}
              <h3 className="text-2xl font-semibold text-[#9b7a50] mb-4">
                {plan.title}
              </h3>

              {/* Price */}
              <p className="text-xl font-medium mb-6">
                {plan.price}
                <span className="text-sm font-normal"> /person</span>
              </p>

              {/* Features */}
              <div className="space-y-4 mb-8 text-gray-700">
                {plan.features.map((f, i) => (
                  <div key={i} className="border-t pt-3">
                    {f}
                  </div>
                ))}
              </div>

              {/* CTA */}
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