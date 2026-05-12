"use client";

import Image from "next/image";

export default function JaisalmerSection() {
  return (
    <div id="jaisalmer" className="w-full max-w-5xl mx-auto">

      {/* Heading */}
      <h2 className="text-[16px] sm:text-[20px] md:text-[20px] lg:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-2 sm:mb-3">
        Jaisalmer – The Golden City Of Rajasthan
      </h2>

      {/* Description */}
      <p className="text-gray-700 mb-4 sm:mb-5 md:mb-6 leading-relaxed font-[350] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] text-justify">
        Jaisalmer, known as the Golden City, shimmers with its magnificent sandstone architecture. The majestic Jaisalmer Fort, intricate havelis, and golden sand dunes create an unforgettable experience. Watch the sunset over the Thar Desert while enjoying a camel safari in the Sam Sand Dunes.
      </p>

      {/* Image */}
      <div className="relative w-full h-[250px] sm:h-[320px] md:h-[380px] lg:h-[420px] rounded-md overflow-hidden shadow-md">
        <Image
          src="/destination/heritage-tour/jaisalmer.jpg"
          alt="Jaisalmer"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
        />
      </div>

    </div>
  );
}