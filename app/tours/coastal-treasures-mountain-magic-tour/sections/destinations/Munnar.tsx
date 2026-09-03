"use client";

import Image from "next/image";

export default function Munnar() {
  return (
    <div id="munnar" className="w-full max-w-5xl mx-auto scroll-mt-24 md:scroll-mt-28">

      {/* Heading */}
      <h3 className="text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold sm:mb-3 mb-4">
        Munnar – South India's Alpine Haven
      </h3>

      {/* Description */}
      <div className="text-gray-700 mb-4 sm:mb-5 md:mb-6 leading-relaxed font-[300] text-[12px] sm:text-[13px] md:text-[14px] text-justify space-y-3 sm:space-y-4">
        <p>
          Munnar, the mesmerising hill-station in the <span className="font-medium">Western Ghats of Kerala</span>, 
          is famous for its amazing rolling hills, cool climate, beautiful valleys & tea plantation. Also referred to as the "Kashmir of South India", it's a place of natural beauty. Located along the banks of three beautiful rivers – Madupetti, Nallathanni, and Periavaru, Munnar also have vast tea plantations & natural bird sanctuaries. Here you can also explore the tea museums & factories to learn more about the process of tea production. It have a rich biodiversity & breath-taking scenery, makes it a perfect getaway for trekkers & nature lovers.
        </p>
      </div>

      {/* Image */}
      <div className="w-full rounded-md overflow-hidden shadow-md -mb-2 md:mb-0">
        <Image
          src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779529356/munnar_lrkkjk.jpg"
          alt="Munnar tea plantations and rolling hills in the Western Ghats of Kerala India"
          width={1200}
          height={800}
          className="w-full h-auto max-h-[500px] object-cover"
        />
      </div>

    </div>
  );
}