"use client";

import Image from "next/image";

export default function JaisalmerSection() {
  return (
    <div id="jaisalmer" className="w-full max-w-5xl mx-auto scroll-mt-20 md:scroll-mt-24">

      {/* Heading */}
      <h2 className="text-[16px] sm:text-[20px] md:text-[20px] lg:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-2 sm:mb-3">
        Jaisalmer – The Golden City Of Rajasthan
      </h2>

      {/* Description */}
      <p className="text-gray-700 mb-4 sm:mb-5 md:mb-6 leading-relaxed font-[300] text-[12px] sm:text-[13px] md:text-[14px] text-justify">
        Jaisalmer, known as the Golden City, shimmers with its magnificent sandstone architecture. The majestic Jaisalmer Fort, intricate havelis, and golden sand dunes create an unforgettable experience. Watch the sunset over the Thar Desert while enjoying a camel safari in the Sam Sand Dunes.
      </p>

      {/* Image */}
      <div className="w-full rounded-md overflow-hidden shadow-md -mb-2 md:mb-0">
        <Image
          src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779528273/jaisalmer_lnvrvm.jpg"
          alt="Desert Safari in Jaisalmer in Rajasthani Heritage Tour Package by India Heritage Travel"
          width={1200}
          height={800}
          className="w-full h-auto max-h-[500px] object-cover"
        />
      </div>

    </div>
  );
}