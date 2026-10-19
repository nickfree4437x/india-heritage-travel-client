"use client";

import Image from "next/image";

const experiences = [
  {
    title: "Stay in Royal Palaces",
    description:
      "Jaipur offers some of India's most extraordinary luxury accommodations. Iconic properties such as Rambagh Palace and Rajmahal Palace allow guests to experience the grandeur of Rajasthan's royal heritage while enjoying world-class hospitality, elegant suites, and exceptional service.",
  },
  {
    title: "Private Heritage Tours",
    description:
      "Explore Amber Fort, City Palace, and Jantar Mantar alongside expert historians and private guides who bring centuries of Rajput and Mughal history to life through engaging stories and insider knowledge.",
  },
];

export default function JaipurLuxuryExperiences() {
  return (
    <section className="w-full bg-white py-6 sm:py-8">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Header */}

        <div className="mb-2 md:mb-4">

          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] mb-2">
            Luxurious Experiences in Jaipur
          </h2>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            Among the three cities of the Golden Triangle, Jaipur is perhaps
            the most naturally luxurious. Here, royal palaces remain part of
            everyday life, heritage hotels occupy former royal residences, and
            centuries-old traditions continue to shape unforgettable travel
            experiences.
          </p>

        </div>

        {/* Feature Image */}

        <div className="relative w-full h-[280px] sm:h-[420px] lg:h-[560px] overflow-hidden rounded-sm shadow-md">

          <Image
            src="https://res.cloudinary.com/dja5yspwr/image/upload/v1782284238/image_5_Rambagh_Palace_Jaipur_pcpedl.jpg"
            alt="Dining experience at Rambagh Palace in Jaipur"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <p className="mt-1 md:mt-2 text-[11px] md:text-[12px] text-gray-600 font-light">
          Image via pexels
        </p>

        {/* Experience Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4 md:mt-6">

          {experiences.map((item) => (
            <div
              key={item.title}
              className="border border-gray-200 bg-white p-5 rounded-md"
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