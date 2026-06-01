"use client";

import Image from "next/image";

export default function AgraSection() {
  return (
    <div id="agra" className="w-full max-w-5xl mx-auto scroll-mt-20 md:scroll-mt-24">

      {/* Heading */}
      <h2 className="text-[16px] sm:text-[20px] md:text-[20px] lg:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-2 sm:mb-3">
        Agra – Where History Rules Supreme
      </h2>

      {/* Description */}
      <p className="text-gray-700 mb-4 sm:mb-5 md:mb-6 leading-relaxed font-[300] text-[12px] sm:text-[13px] md:text-[14px] text-justify">
        A world where the echoes of the Mughal empire still linger, and uncover a marvel born from a timeless love tale: The Taj Mahal. Explore beautiful tombs, stately forts, and vibrant marketplaces that eagerly await your presence.
      </p>

      {/* Image */}
      <div className="relative w-full h-[250px] sm:h-[320px] md:h-[380px] lg:h-[420px] rounded-md overflow-hidden shadow-md">
        <Image
          src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779528073/agra_fvzwe0.png"
          alt="Taj Mahal Agra in North India Cultural Tour by India Heritage Travel"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
        />
      </div>

    </div>
  );
}