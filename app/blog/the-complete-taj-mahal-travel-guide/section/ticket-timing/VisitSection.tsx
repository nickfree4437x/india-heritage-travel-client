"use client";

import Image from "next/image";

export default function BestTimeSection() {
  return (
    <section className="w-full bg-white py-6 sm:py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] leading-tight mb-2">
          Best Time to Visit the Taj Mahal
        </h2>

        <p className="text-[12px] sm:text-[13px] md:text-[14.5px] leading-relaxed text-gray-700 font-light text-justify mb-6">
          It is absolutely necessary that you go to the Taj Mahal at the time from October to March
          because during this time, it is quite possible for you to take walks around the gardens as
          well as stand in queues without being affected by the heat. There are certain months which
          you need to remember when planning to go and they are December and January because in these
          months, there usually are foggy mornings.
        </p>

        {/* Sunrise & Sunset */}
        <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] leading-tight mb-2">
          The Sunrise and Sunset Experience
        </h2>

        <p className="text-[12px] sm:text-[13px] md:text-[14.5px] leading-relaxed text-gray-700 font-light text-justify mb-4">
          However, the best way to witness all the magic would be a tour to see Taj Mahal at sunrise,
          and this is because there would not be many crowds at this time of the day, the light would
          immediately turn the pink marble into gold, and the day would not be too warm yet. However,
          if you want to watch the sunset, you should visit the other side of the river.
        </p>

        {/* Image */}
        <div className="mb-0">
          <div className="relative h-[280px] sm:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1783058636/pexels-thomas-martin-727253982-34212512_sa8djq.jpg"
              alt="The Taj Mahal viewed across the Yamuna River from Mehtab Bagh at sunset"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-[12px] sm:text-[13px] text-gray-600 font-light">
            via unsplash
          </p>
        </div>
      </div>
    </section>
  );
}