"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-2 sm:py-1">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-2 md:mb-3">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide mb-1">
            Why India Is One of the World's Best Wildlife Safari Destinations
          </h2>

          {/* Content */}
          <div className="max-w-6xl">
           <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-4">
            India is one of the world's premier wildlife safari destinations, offering an extraordinary 
            diversity of landscapes and wildlife found nowhere else. From the tiger-filled forests of 
            Ranthambore and Bandhavgarh to the grasslands of Kaziranga and the lion territory of Gir 
            National Park, every safari promises a unique experience. Home to the largest population of 
            wild Bengal tigers, rare one-horned rhinoceroses, Asiatic lions, elephants, leopards, and more 
            than 1,300 bird species, India combines breathtaking biodiversity with unforgettable safari 
            adventures. Whether you're seeking thrilling wildlife encounters, luxury jungle stays, or 
            exceptional nature photography, India's national parks offer an experience unlike any other.
          </p>
         </div>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1784378922/upasana-saigal-S_Y8WxdbDG4-unsplash_skkf3a.jpg"
              alt="Royal Bengal Tiger in Ranthambore National Park during a wildlife safari in India"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            via unsplash
          </p>
        </div>
      </div>
    </section>
  );
}