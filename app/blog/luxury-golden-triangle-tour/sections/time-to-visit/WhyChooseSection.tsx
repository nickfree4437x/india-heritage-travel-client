"use client";

import Link from "next/link";

const reasons = [
  {
    title: "Private Chauffeur Tours",
    description:
      "Travel across Delhi, Agra, and Jaipur in complete comfort with experienced, vetted chauffeurs dedicated exclusively to your journey.",
  },
  {
    title: "Handpicked Luxury Hotels",
    description:
      "Stay in carefully selected palace hotels, heritage properties, and world-class five-star accommodations chosen specifically for each destination.",
  },
  {
    title: "Tailor-Made Itineraries",
    description:
      "Every itinerary is designed around your interests, preferred travel pace, special occasions, and personal expectations.",
  },
  {
    title: "Expert Local Guides",
    description:
      "Explore India's history and culture alongside knowledgeable historians, storytellers, and multilingual specialists.",
  },
  {
    title: "Women-Friendly Travel",
    description:
      "Thoughtfully designed experiences that prioritize comfort, safety, and confidence for solo female travelers and women's groups.",
  },
  {
    title: "24/7 Travel Support",
    description:
      "Dedicated assistance throughout your journey so expert help is always available whenever you need it.",
  },
];

export default function WhyChooseIHTSection() {
  return (
    <section className="w-full bg-white py-4 sm:py-6">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Header */}

        <div className="mb-10">

          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] mb-4">
            Why Choose India Heritage Travel
          </h2>

          <p className="max-w-6xl mx-auto text-gray-700 text-[12px] sm:text-[13px] md:text-[14.5px] leading-relaxed font-light">
            India Heritage Travel designs luxury Golden Triangle journeys
            around the traveler, not around a fixed package. Every detail is
            carefully planned to create a seamless, personalized, and truly
            memorable experience.
          </p>

        </div>

        {/* Features */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">

          {reasons.map((item) => (
            <div
              key={item.title}
              className="bg-white border border-gray-200 p-5 rounded-md"
            >

              <h3 className="text-[15px] font-semibold text-[#2c2c2c] mb-3">
                {item.title}
              </h3>

              <p className="text-[12px] sm:text-[13px] md:text-[14px] text-gray-700 leading-relaxed font-light">
                {item.description}
              </p>

            </div>
          ))}

        </div>

        {/* CTA */}

        <div className="bg-white border border-gray-200 rounded-md p-6 sm:p-8 text-center">

          <h3 className="text-[16px] sm:text-[18px] font-semibold text-[#2c2c2c] mb-3">
            Ready to Plan Your Luxury Golden Triangle Journey?
          </h3>

          <p className="text-[13px] sm:text-[13.5px] text-gray-700 leading-relaxed font-light max-w-2xl mx-auto mb-5">
            Whether you're planning a honeymoon, family holiday, special
            celebration, or a once-in-a-lifetime journey through India, our
            travel specialists will create a personalized itinerary designed
            exclusively for you.
          </p>

          <Link
            href="/customize-your-journey"
            className="inline-flex items-center justify-center px-8 py-3 bg-[#AF956C] text-white text-[12px] sm:text-[13px] rounded-md tracking-wide hover:bg-[#967a4e] transition-colors"
          >
            Start Planning Your Trip
          </Link>

        </div>

      </div>

    </section>
  );
}