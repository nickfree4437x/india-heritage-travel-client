"use client";

const features = [
  {
    title: "Fully Customized Itineraries",
    description:
      "Every Golden Triangle journey is tailored around your travel dates, interests, pace, and preferred seasonal experiences rather than a fixed template.",
  },
  {
    title: "Private Chauffeur-Driven Travel",
    description:
      "Travel comfortably between Delhi, Agra, and Jaipur with a dedicated private driver, avoiding the complexity of navigating India's busy transport network.",
  },
  {
    title: "Handpicked Luxury Accommodations",
    description:
      "Stay in carefully selected heritage palaces, boutique properties, and five-star hotels chosen to maximize each season's unique advantages.",
  },
  {
    title: "Expert Local Guides",
    description:
      "Gain deeper insights into India's history, architecture, culture, and traditions through experienced multilingual local guides.",
  },
  {
    title: "Women-Only Travel Experiences",
    description:
      "Specially designed itineraries provide comfort, flexibility, and peace of mind for independent female travelers exploring India.",
  },
  {
    title: "Season-Based Travel Planning",
    description:
      "Whether you're planning around festivals, photography opportunities, luxury experiences, or budget considerations, we design journeys around the season that suits you best.",
  },
];

export default function WhyTravelWithIHT() {
  return (
    <section className="w-full bg-white py-6">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* HEADER */}

        <div className="mb-8">

          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-4">
            Why Travel with India Heritage Travel?
          </h2>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light max-w-4xl">
            Choosing the right season is only part of planning a successful
            Golden Triangle journey. Choosing the right travel partner ensures
            that every detail—from hotels and guides to transportation and
            experiences—is perfectly aligned with your expectations.
          </p>

        </div>

        {/* FEATURES */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 mb-2">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="border border-[#e7dfd4] bg-white rounded-sm p-5 hover:border-[#AF956C]/40 hover:shadow-sm transition-all duration-300"
            >

              <h3 className="text-[15px] font-semibold text-[#2c2c2c] mb-3">
                {feature.title}
              </h3>

              <p className="text-[12px] sm:text-[13px] text-gray-700 leading-relaxed font-light">
                {feature.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}