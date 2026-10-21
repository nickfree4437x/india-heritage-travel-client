"use client";

import Image from "next/image";

export default function WhyPopularSection() {
  return (
    <section className="w-full bg-white py-2 sm:py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-6xl mb-4 md:mb-6">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] leading-tight mb-2">
            Why Rajasthan's Forts and Palaces Are So Remarkable
          </h2>

          <p className="text-[12px] sm:text-[13px] md:text-[14.5px] text-gray-700 leading-relaxed font-light text-justify mb-6">
            Rajasthan's extraordinary collection of forts and palaces is the
            result of centuries of rivalry between powerful Rajput kingdoms.
            Every kingdom needed mighty hill forts to defend its territory,
            while every Maharaja sought to build magnificent palaces that
            reflected his wealth, influence, and military victories. Some
            became near-impregnable fortresses perched high above rugged
            landscapes, while others evolved into elegant royal residences
            filled with intricate courtyards, mirror work, and exquisite
            craftsmanship that continue to amaze visitors today.
          </p>
        </div>

        {/* Image */}
        <div>
          <div className="relative h-[280px] sm:h-[420px] lg:h-[560px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1782465674/meric-dagli-uADXI1v10us-unsplash_qggwe7.jpg"
              alt="Amber Fort in Jaipur showcasing Rajasthan's royal heritage"
              fill
              className="object-cover"
            />
          </div>

          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light">
            Image via unsplash
          </p>
        </div>
      </div>
    </section>
  );
}