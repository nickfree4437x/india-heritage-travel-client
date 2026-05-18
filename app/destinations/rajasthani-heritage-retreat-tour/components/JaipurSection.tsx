"use client";

import Image from "next/image";

export default function JaipurSection() {
  return (
    <div id="jaipur" className="w-full max-w-5xl mx-auto scroll-mt-20 md:scroll-mt-24">

      {/* Heading */}
      <h2 className="text-[16px] sm:text-[20px] md:text-[20px] lg:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-2 sm:mb-3">
        Jaipur – The Pink City & Heart of Rajasthan
      </h2>

      {/* Description */}
      <p className="text-gray-700 mb-4 sm:mb-5 md:mb-6 leading-relaxed font-[300] text-[12px] sm:text-[13px] md:text-[14px] text-justify">
        Jaipur is known as the heart of Rajasthan & a UNESCO world heritage city. It is among one of the most visited tourist destinations in Rajasthan. Jaipur is famous for its grand forts and palaces, local cuisines, adventure tourism, pilgrimage sites and local shopping.
      </p>

      {/* Image */}
      <div className="relative w-full h-[250px] sm:h-[320px] md:h-[380px] lg:h-[420px] rounded-md overflow-hidden shadow-md">
        <Image
          src="/destination/heritage-tour/jaipur.jpg"
          alt="Jaipur"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
        />
      </div>

    </div>
  );
}