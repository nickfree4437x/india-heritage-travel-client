"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-1 md:py-3.5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            A Taste of the Desert: Food in Jawai
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            Dining in Jawai leans hard on Rajasthani tradition: dal-baati-churma, bajra rotis, gatte ki 
            sabzi, and laal maas for meat-eaters. Upscale camps use local seasonal produce and serve 
            dinner outdoors - under the stars, often with a bonfire, set against the granite hills. 
            Simple food, handled with care, and usually a quiet highlight travellers remember long 
            after the safari ends.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1787457801/L-cave_restro_6_4b4c1f49_dunbat.webp"
              alt="Jawai desert food - Rajasthani cuisine and local dining experiences"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via kurjajawai.com
          </p>
        </div>
      </div>
    </section>
  );
}