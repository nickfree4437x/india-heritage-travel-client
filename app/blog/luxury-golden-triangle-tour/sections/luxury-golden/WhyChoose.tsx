"use client";

const benefits = [
  {
    title: "Privacy",
    description:
      "No group schedules, no waiting for other travelers, and no fixed departure times. Your chauffeur, guide, and itinerary remain completely dedicated to you throughout the journey.",
  },
  {
    title: "Comfort",
    description:
      "Travel between Delhi, Agra, and Jaipur in chauffeur-driven luxury vehicles while staying at carefully selected five-star hotels, palace properties, and heritage resorts.",
  },
  {
    title: "Exclusive Access",
    description:
      "Enjoy curated experiences such as private monument visits, reserved dining experiences, and interactions with local historians, artisans, and cultural experts.",
  },
  {
    title: "Time Efficiency",
    description:
      "Luxury itineraries eliminate unnecessary delays, allowing you to spend more time exploring iconic attractions and less time coordinating logistics.",
  },
  {
    title: "Personalized Attention",
    description:
      "Every detail is tailored to your preferences, including dietary requirements, accessibility needs, special celebrations, and personal interests.",
  },
  {
    title: "Cultural Immersion",
    description:
      "Experience India beyond the guidebook through private performances, artisan workshops, heritage walks, and authentic local encounters.",
  },
];

export default function WhyLuxuryTourSection() {
  return (
    <section className="w-full bg-white py-4 sm:py-6">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Header */}

        <div className="max-w-6xl mb-10">

          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] mb-4">
            Why Should You Opt for a Luxury Golden Triangle Tour?
          </h2>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            A luxury Golden Triangle tour is about far more than premium
            hotels and private transportation. It transforms the way you
            experience Delhi, Agra, and Jaipur by offering greater comfort,
            deeper cultural access, personalized service, and complete
            flexibility throughout your journey.
          </p>

        </div>

        {/* Benefits Grid */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-white border border-gray-200 p-6 rounded-md"
            >
              <h3 className="text-[15px] sm:text-[16px] font-semibold text-[#2c2c2c] mb-3">
                {benefit.title}
              </h3>

              <p className="text-gray-700 text-[12px] sm:text-[13px] md:text-[14px] leading-relaxed font-light">
                {benefit.description}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
