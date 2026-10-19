
"use client";

import Image from "next/image";

const experiences = [
  {
    title: "Luxury Accommodation",
    description:
      "Stay at some of Delhi's finest luxury hotels including The Oberoi New Delhi, The Imperial, and Taj Palace, where world-class hospitality, wellness facilities, and elegant interiors create an exceptional experience.",
  },
  {
    title: "Luxury Dining",
    description:
      "From award-winning Indian restaurants to rooftop dining overlooking Lutyens' Delhi, the city offers culinary experiences that rival the world's best dining destinations.",
  },
];

export default function DelhiLuxuryExperiences() {
  return (
    <section className="w-full bg-white py-0 sm:py-2">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Header */}

        <div className="mb-2 md:mb-4">

          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] mb-1">
            Luxury Experiences in Delhi on Your Golden Triangle Tour
          </h2>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            Delhi offers far more than its famous monuments. A luxury itinerary
            combines heritage, fine dining, private access, and personalized
            experiences that reveal the city's fascinating layers of history and culture.
          </p>

        </div>

        {/* Feature Image */}

        <div className="relative w-full h-[280px] sm:h-[420px] lg:h-[560px] overflow-hidden rounded-sm shadow-md">

          <Image
            src="https://res.cloudinary.com/dja5yspwr/image/upload/v1782283248/pexels-bhavitya-3126593_cljhha.jpg"
            alt="Private heritage walk through Old Delhi spice market during a luxury Golden Triangle tour"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <p className="mt-1 md:mt-2 text-[11px] md:text-[12px] text-gray-600 font-light">
          Image via pexels
        </p>

        {/* Experience Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 mt-4 md:mt-6 gap-5 mb-2 md:mb-4">

          {experiences.map((item) => (
            <div
              key={item.title}
              className="border border-gray-200 bg-white  p-5 rounded-md"
            >
              <h3 className="text-[15px] sm:text-[16px] font-semibold text-[#2c2c2c] mb-2">
                {item.title}
              </h3>

              <p className="text-gray-700 text-[12px] sm:text-[13px] md:text-[14px] leading-relaxed font-light">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}