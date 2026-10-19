"use client";

import Image from "next/image";

const experiences = [
  {
    title: "Taj Mahal at Sunrise",
    description:
      "Witness India's most iconic monument during its most magical hour. Entering the Taj Mahal shortly after sunrise with a private guide allows you to experience its beauty before larger crowds arrive, while the marble gradually changes from soft pink to glowing gold.",
  },
  {
    title: "Private Photography Experiences",
    description:
      "A flexible luxury itinerary allows multiple visits and carefully timed photography opportunities. Capture the Taj Mahal under different lighting conditions and enjoy the freedom to explore the monument at your own pace.",
  },
];

export default function AgraLuxuryExperiences() {
  return (
    <section className="w-full bg-white py-2 md:py-1">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Header */}

        <div className="mb-2 md:mb-4">

          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] mb-2">
            Luxury Experiences in Agra on Your Golden Triangle Tour
          </h2>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            Agra may be known worldwide for the Taj Mahal, but a luxury
            experience reveals far more than a single monument. Private access,
            world-class accommodations, exclusive cultural encounters, and
            personalized sightseeing transform Agra into one of the highlights
            of a luxury Golden Triangle journey.
          </p>

        </div>

        {/* Feature Image */}

        <div className="relative w-full h-[280px] sm:h-[420px] lg:h-[560px] overflow-hidden rounded-sm shadow-md">

          <Image
            src="https://res.cloudinary.com/dja5yspwr/image/upload/v1782283923/pexels-axp-photography-500641970-16738840_ckpndw.jpg"
            alt="Luxury Golden Triangle Tour experience at the Taj Mahal during sunrise"
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