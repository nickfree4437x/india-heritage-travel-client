"use client";

import Image from "next/image";

export default function JodhpurSection() {
  return (
    <div id="jodhpur" className="w-full max-w-5xl mx-auto">

      {/* Heading */}
      <h2 className="text-[16px] sm:text-[20px] md:text-[20px] lg:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-2 sm:mb-3">
        Jodhpur – Where History Meets The Blue Skyline
      </h2>

      {/* Description */}
      <p className="text-gray-700 mb-4 sm:mb-5 md:mb-6 leading-relaxed font-[350] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] text-justify">
        The city where the grand Mehrangarh Fort looms over the Blue City which is a 15th-century marvel of indigo-washed buildings. It is a famous tourist spot with a palace, fort, and temples, set in the stark landscape of the Thar Desert. It's also known as the Blue City due to the dominant color scheme of its buildings in old town.
      </p>

      {/* Image */}
      <div className="relative w-full h-[250px] sm:h-[320px] md:h-[380px] lg:h-[420px] rounded-md overflow-hidden shadow-md">
        <Image
          src="/destination/heritage-tour/jodhpur.jpg"
          alt="Jodhpur"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
        />
      </div>

    </div>
  );
}