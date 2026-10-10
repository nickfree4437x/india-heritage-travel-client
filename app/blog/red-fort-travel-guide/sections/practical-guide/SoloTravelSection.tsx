"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0 sm:py-5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-2">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Solo Traveler Tips
          </h2>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[560px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1784282988/pexels-daciana-cristina-visan-2149801141-36857376_xetiwe.jpg"
              alt="Solo travel tips for Red Fort - guided heritage walks and safety advice"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via pexels
          </p>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            The The Red Fort itself , with its steady flow of people and formal security checks, is a 
            pretty comfortable stop for solo travelers and well you know, those little procedures are 
            kind of predictable. The nearby Old Delhi lanes feel busier and more chaotic, so solo 
            visitors—especially solo female travelers—often find it easier to wander Chandni Chowk 
            and the food lanes with a pre-arranged guide, than trying to go around solo on a first 
            visit. Keeping it to daylight hours near the fort , and choosing a private vehicle instead 
            of street-hailed transport, are simple ways to move with more ease, more quietly too.
          </p>
        </div>
      </div>
    </section>
  );
}