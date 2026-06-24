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
  {
    title: "Royal Dining Experiences",
    description:
      "Enjoy multi-course dining experiences within palace courtyards, private royal chambers, or heritage venues where traditional Rajasthani cuisine is accompanied by classical music performances and impeccable service.",
  },
  {
    title: "Shopping with Local Experts",
    description:
      "Discover Jaipur's famous markets with a knowledgeable local guide who can help you navigate jewelry boutiques, block-printing workshops, textile stores, and blue pottery studios while ensuring authenticity and quality.",
  },
];

export default function JaipurLuxuryExperiences() {
  return (
    <section className="w-full bg-white py-4 sm:py-6">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Header */}

        <div className="mb-8">

          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] mb-4">
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

        <div className="relative w-full h-[280px] sm:h-[420px] lg:h-[550px] overflow-hidden rounded-sm shadow-md mb-10">

          <Image
            src="https://res.cloudinary.com/dja5yspwr/image/upload/v1782284238/image_5_Rambagh_Palace_Jaipur_pcpedl.jpg"
            alt="Royal dining experience at Rambagh Palace Jaipur during a luxury Golden Triangle tour"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

        </div>

        {/* Experience Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">

          {experiences.map((item) => (
            <div
              key={item.title}
              className="border border-gray-200 bg-white p-5 rounded-md"
            >

              <h3 className="text-[15px] sm:text-[16px] font-semibold text-[#2c2c2c] mb-3">
                {item.title}
              </h3>

              <p className="text-gray-700 text-[12px] sm:text-[13px] md:text-[14px] leading-relaxed font-light">
                {item.description}
              </p>

            </div>
          ))}

        </div>

        {/* Highlight Box */}

        <div className=" bg-[#faf7f3] p-5">

          <span className="inline-block text-[10px] uppercase tracking-[0.25em] text-[#AF956C] mb-2">
            Signature Luxury Moment
          </span>

          <p className="text-[12px] sm:text-[13px] md:text-[14px] text-gray-700 font-light leading-relaxed">
            Few travel experiences compare to dining beneath the stars in a
            former royal palace while traditional Rajasthani musicians perform
            nearby. Jaipur transforms luxury travel from sightseeing into an
            immersive royal experience.
          </p>

        </div>

      </div>

    </section>
  );
}