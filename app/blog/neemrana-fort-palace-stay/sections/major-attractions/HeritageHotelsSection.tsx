"use client";

import Image from "next/image";

export default function HeritageSection() {
  return (
    <section className="w-full bg-white py-3 md:py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Neemrana vs Other Heritage Hotels in Rajasthan
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Rajasthan's palace hotels cluster in Udaipur, Jaipur, Jaisalmer, and Jodhpur, but Neemrana stands apart as the closest fort stay to Delhi. Its tiered, village-like structure gives it a personal, intimate feel - making it an ideal first taste of royal heritage accommodation.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
           Unlike Rajasthan's palace hotels in Udaipur or Jaipur, Neemrana offers the closest fort stay to Delhi, with a village-like tiered layout that feels more personal and intimate.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1791616392/pexels-ajay-sharda-611269-16715042_kfw4zd.jpg"
              alt="Neemrana Fort Palace - closest heritage fort stay to Delhi"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via pexels
          </p>
        </div>
      </div>
    </section>
  );
}