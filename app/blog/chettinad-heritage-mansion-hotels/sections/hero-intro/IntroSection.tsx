"use client";

import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-0 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Chettinad Heritage Mansion Hotels: India's Forgotten Palaces of Luxury Travel
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Set between Madurai and Thanjavur amid plains of red earth, Chettinad remains largely unexplored 
            by most tourists - which makes it even more exciting. The Chettiars originated here, and their 
            prosperity during the 19th and 20th centuries led to the construction of around ten thousand grand 
            mansions.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            Today, only a small number survive as heritage hotel mansions, where guests sleep under teakwood 
            ceilings from Rangoon, breakfast in courtyards with handmade Athangudi tiles, and walk streets 
            that blend forgotten European colonial charm with traditional Tamil temple-town character. For 
            those seeking something unique alongside luxury, Chettinad's heritage mansions are worth far more 
            than any five-star hotel.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1789119065/gayatri-pandkar-clAgPqEj1h0-unsplash_tngjui.jpg"
              alt="Chettinad Heritage Mansion Hotels: India's Forgotten Palaces of Luxury Travel"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via unsplash
          </p>
        </div>
      </div>
    </section>
  );
}