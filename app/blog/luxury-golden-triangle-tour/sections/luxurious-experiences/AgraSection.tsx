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
  {
    title: "Luxury Hotels with Taj Mahal Views",
    description:
      "Stay at exceptional properties such as The Oberoi Amarvilas, where uninterrupted views of the Taj Mahal become part of your daily experience. Watching the monument change color from your suite or private terrace is unforgettable.",
  },
  {
    title: "Private Cultural Experiences",
    description:
      "Meet local artisans and discover the art of pietra dura—the intricate marble inlay technique used in the construction of the Taj Mahal. These private demonstrations offer a fascinating insight into one of India's greatest artistic traditions.",
  },
];

export default function AgraLuxuryExperiences() {
  return (
    <section className="w-full bg-white py-4 sm:py-6">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Header */}

        <div className="mb-8">

          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] mb-4">
            Luxurious Experiences in Agra
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

        <div className="relative w-full h-[280px] sm:h-[420px] lg:h-[550px] overflow-hidden rounded-sm shadow-md mb-10">

          <Image
            src="https://res.cloudinary.com/dja5yspwr/image/upload/v1782283923/pexels-axp-photography-500641970-16738840_ckpndw.jpg"
            alt="Luxury Golden Triangle Tour experience at the Taj Mahal during sunrise"
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

        {/* Luxury Highlight */}

        <div className=" bg-[#faf7f3] p-5">

          <span className="inline-block text-[10px] uppercase tracking-[0.25em] text-[#AF956C] mb-2">
            Signature Luxury Moment
          </span>

          <p className="text-[12px] sm:text-[13px] md:text-[14px] text-gray-700 font-light leading-relaxed">
            Imagine watching the Taj Mahal slowly emerge from the morning mist
            while enjoying uninterrupted views from your luxury suite. It is
            this combination of access, privacy, and comfort that makes a
            luxury Golden Triangle tour fundamentally different from a standard
            visit.
          </p>

        </div>

      </div>

    </section>
  );
}