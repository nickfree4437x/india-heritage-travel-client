"use client";

import Image from "next/image";

export default function Munnar() {
  return (
    <div id="munnar" className="w-full max-w-5xl mx-auto">

      {/* Heading */}
      <h2 className="text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold sm:mb-3">
        Munnar – South India's Alpine Haven
      </h2>

      {/* Description */}
      <div className="text-gray-700 mb-4 sm:mb-5 md:mb-6 leading-relaxed font-[350] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] text-justify space-y-3 sm:space-y-4">
        <p>
          Munnar, the mesmerising hill-station in the <span className="font-medium">Western Ghats of Kerala</span>, 
          is famous for its amazing rolling hills, cool climate, beautiful valleys & tea plantation. Also referred to as the "Kashmir of South India", it's a place of natural beauty. Located along the banks of three beautiful rivers – Madupetti, Nallathanni, and Periavaru, Munnar also have vast tea plantations & natural bird sanctuaries. Here you can also explore the tea museums & factories to learn more about the process of tea production. It have a rich biodiversity & breath-taking scenery, makes it a perfect getaway for trekkers & nature lovers.
        </p>
      </div>

      {/* Image */}
      <div className="relative w-full h-[250px] sm:h-[320px] md:h-[400px] lg:h-[450px] rounded-md overflow-hidden shadow-md">
        <Image
          src="/destination/coastal-tour/munnar.jpg"
          alt="Munnar Tea Plantations"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
        />
      </div>

    </div>
  );
}