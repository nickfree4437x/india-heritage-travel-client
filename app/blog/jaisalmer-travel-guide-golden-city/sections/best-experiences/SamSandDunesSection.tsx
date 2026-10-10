"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-1 md:py-3">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Sam Sand Dunes & the Thar Desert Experience
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            No Jaisalmer trip is really complete without spending some actual time out in the desert itself, 
            and Sam Sand Dunes- about 40 km from the city, give or take 45 to 60 minutes by road- is the usual, 
            classic place people go. This part of the Thar Desert, right at the border of Desert National Park, 
            is where the sand starts to feel more real, rolling into those huge wind-sculpted dunes you see in 
            your head when Rajasthan comes up.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            A desert safari at sunset, followed by a camp stay, is the classic experience. Jeep and ATV 
            rides offer a faster alternative. Evenings bring folk music and dance around a bonfire, with 
            an incredible starry sky overhead.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1786854165/meghna-rawat-tNxbVY83AfU-unsplash_pon3qz.jpg"
              alt="Sam Sand Dunes desert experience - camel safari and folk dance"
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