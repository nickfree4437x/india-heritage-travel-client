"use client";

import Image from "next/image";

const transportOptions = [
  {
    title: "Private Chauffeur-Driven Cars",
    description:
      "The foundation of every luxury Golden Triangle itinerary. Enjoy complete flexibility with a dedicated professional chauffeur, allowing you to travel comfortably between Delhi, Agra, and Jaipur without worrying about logistics, navigation, or schedules.",
  },
  {
    title: "Luxury SUVs",
    description:
      "For travelers seeking additional comfort on longer road journeys, premium SUVs provide extra space, superior ride quality, and enhanced comfort compared to standard sedans.",
  },
];

export default function LuxuryTransportSection() {
  return (
    <section className="w-full bg-white">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Header */}

        <div className="mb-4 md:mb-6">

          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] mb-2">
            Luxury Modes of Transport
          </h2>

          <p className="text-gray-700 text-[12px] sm:text-[13px] md:text-[14.5px] leading-relaxed font-light text-justify">
            Luxury travel is not only about where you stay but also about how
            you move between destinations. Premium transportation ensures that
            every part of your Golden Triangle journey is comfortable,
            efficient, and completely stress-free.
          </p>

        </div>

        {/* Feature Image */}

        <div className="relative w-full h-[280px] sm:h-[420px] lg:h-[550px] rounded-sm overflow-hidden shadow-md mb-10">

          <Image
            src="https://res.cloudinary.com/dja5yspwr/image/upload/v1782284985/image_2_Private_chauffeur_luxury_car_xihfnv.jpg"
            alt="Luxury chauffeur-driven car during a Golden Triangle tour in India"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/30 Image via-transparent to-transparent" />

        </div>

        {/* Transport Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">

          {transportOptions.map((option) => (
            <div
              key={option.title}
              className="border border-gray-200 bg-white p-5 rounded-md"
            >

              <h3 className="text-[15px] sm:text-[16px] font-semibold text-[#2c2c2c] mb-3">
                {option.title}
              </h3>

              <p className="text-gray-700 text-[12px] sm:text-[13px] md:text-[14px] leading-relaxed font-light">
                {option.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}