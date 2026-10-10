"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Heritage & Palace Hotels
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Rajasthan is the epicentre of India's palace-hotel scene - worth digging into as its own category, 
            not just generic five-star ratings. City-based 4- and 5-star hotels in Jaipur, Udaipur, and Jodhpur 
            typically range from $95–$220 per night.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            Heritage forts and palace conversions - like Samode Haveli, Raas properties, or suites inside 
            Oberoi and Taj palaces - start closer to $250 and can push over $800 for signature rooms. 
            Headline suites at properties like Udaivilas or Lake Palace can reach $1,500–$3,500+ during 
            peak season.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1786422802/uday-sankar-yerramilli-ewzRd5E4SHg-unsplash_fv1rhu.jpg"
              alt="Heritage and palace hotels India - luxury stays in converted forts and palaces"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via unsplash
          </p>
        </div>
      </div>
    </section>
  );
}