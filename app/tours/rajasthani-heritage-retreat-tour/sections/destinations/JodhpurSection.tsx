"use client";

import Image from "next/image";

export default function JodhpurSection() {
  return (
    <div id="jodhpur" className="w-full max-w-5xl mx-auto scroll-mt-20 md:scroll-mt-24">

      {/* Heading */}
      <h2 className="text-[16px] sm:text-[20px] md:text-[20px] lg:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-2 sm:mb-3">
        Jodhpur – Where History Meets The Blue Skyline
      </h2>

      {/* Description */}
      <p className="text-gray-700 mb-4 sm:mb-5 md:mb-6 leading-relaxed font-[300] text-[12px] sm:text-[13px] md:text-[14px] text-justify">
        The city where the grand Mehrangarh Fort looms over the Blue City which is a 15th-century marvel of indigo-washed buildings. It is a famous tourist spot with a palace, fort, and temples, set in the stark landscape of the Thar Desert. It's also known as the Blue City due to the dominant color scheme of its buildings in old town.
      </p>

      {/* Image */}
      <div className="w-full rounded-md overflow-hidden shadow-md -mb-2 md:mb-0">
        <Image
          src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779528315/jodhpur_vusmur.jpg"
          alt="Mehrangarh Fort Jodhpur in Rajasthani Heritage Tour Package by India Heritage Travel"
          width={1200}
          height={800}
          className="w-full h-auto max-h-[500px] object-cover"
        />
      </div>

    </div>
  );
}