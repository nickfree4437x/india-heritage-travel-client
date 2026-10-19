"use client";

import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-0">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* INTRO CONTENT */}

        <div className="max-w-6xl mb-4 mb:mb-6">

          <p className="text-gray-700 mb-4 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            Imagine yourself waking up early, not because of an alarm clock,
            but because breakfast has been delivered directly to your suite.
            Beyond your window, the Taj Mahal slowly transforms beneath the
            morning sky, changing from soft grey to delicate pink and finally
            to glowing gold as the sun rises over Agra. There are no crowds to
            rush through, no buses waiting impatiently outside, and no
            competition for the perfect view. Your private guide and chauffeur
            are already prepared for the day ahead, allowing you to experience
            one of the world's greatest monuments entirely on your own terms.
          </p>
        </div>

        {/* FEATURE IMAGE */}
        <div className="relative w-full h-[280px] sm:h-[420px] lg:h-[560px] rounded-sm overflow-hidden shadow-md">
         <Image
            src="https://res.cloudinary.com/dja5yspwr/image/upload/v1782281524/premium_photo-1723809635838-d4c02e969f37_hvtdnq.jpg"
            alt="Luxury Golden Triangle Tour featuring a Taj Mahal visit in Agra"
            fill
            sizes="100vw"
            className="object-cover"
         />
        </div>
        <p className="mt-1 md:mt-2 text-[11px] md:text-[12px] text-gray-600 font-light">
          Image via pexels
        </p>

      </div>

    </section>
  );
}