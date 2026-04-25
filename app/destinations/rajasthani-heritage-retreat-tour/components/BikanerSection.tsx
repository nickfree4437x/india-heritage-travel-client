"use client";

import Image from "next/image";

export default function BikanerSection() {
  return (
    <div id="bikaner" className="max-w-5xl">

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold mb-4">
        Bikaner – A Desert Oasis Of History And Camels
      </h2>

      {/* Description */}
      <p className="text-gray-700 mb-6 leading-relaxed text-[15px]">
        Bikaner is a desert gem with history twisted into its castles and palaces, promises a captivating journey through Rajasthan’s northeast. It is known as Camel Country, it’s a place where camels gracefully pass over the landscape, making the city more attractive.
      </p>

      {/* Image */}
      <div className="relative w-full h-[420px] rounded-md overflow-hidden shadow-md">
        <Image
          src="/destination/heritage-tour/bikaner.jpg"
          alt="Bikaner"
          fill
          className="object-cover"
        />
      </div>

    </div>
  );
}