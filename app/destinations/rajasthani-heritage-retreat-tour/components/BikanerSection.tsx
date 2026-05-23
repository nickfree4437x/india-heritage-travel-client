"use client";

import Image from "next/image";

export default function BikanerSection() {
  return (
    <div id="bikaner" className="w-full max-w-5xl mx-auto scroll-mt-20 md:scroll-mt-24">

      {/* Heading */}
      <h2 className="text-[16px] sm:text-[20px] md:text-[20px] lg:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-2 sm:mb-3">
        Bikaner – A Desert Oasis Of History And Camels
      </h2>

      {/* Description */}
      <p className="text-gray-700 mb-4 sm:mb-5 md:mb-6 leading-relaxed font-[300] text-[12px] sm:text-[13px] md:text-[14px] text-justify">
        Bikaner is a desert gem with history twisted into its castles and palaces, promises a captivating journey through Rajasthan’s northeast. It is known as Camel Country, it’s a place where camels gracefully pass over the landscape, making the city more attractive.
      </p>

      {/* Image */}
      <div className="relative w-full h-[250px] sm:h-[320px] md:h-[380px] lg:h-[420px] rounded-md overflow-hidden shadow-md">
        <Image
          src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779528101/bikaner_o7gsic.jpg"
          alt="Bikaner"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
        />
      </div>

    </div>
  );
}