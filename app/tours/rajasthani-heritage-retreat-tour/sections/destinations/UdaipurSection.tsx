"use client";

import Image from "next/image";

export default function UdaipurSection() {
  return (
    <div id="udaipur" className="w-full max-w-5xl mx-auto scroll-mt-20 md:scroll-mt-24">

      {/* Heading */}
      <h2 className="text-[16px] sm:text-[20px] md:text-[20px] lg:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-2 sm:mb-3">
        Udaipur – Lakes, Palaces & Royal Heritage
      </h2>

      {/* Description */}
      <p className="text-gray-700 mb-4 sm:mb-5 md:mb-6 leading-relaxed font-[300] text-[12px] sm:text-[13px] md:text-[14px] text-justify">
         Discover Udaipur, the City of Lakes, known for its magnificent palaces, historic temples, elegant havelis, and romantic Lake Pichola. Explore vibrant markets and enjoy breathtaking views while experiencing the royal heritage and timeless charm of Rajasthan.
      </p>

      {/* Image */}
      <div className="w-full rounded-md overflow-hidden shadow-md -mb-2 md:mb-0">
        <Image
          src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779528417/udaipur_bvo97u.jpg"
          alt="Lake Pichola and royal heritage of Udaipur, Rajasthan"
          width={1200}
          height={800}
          className="w-full h-auto max-h-[500px] object-cover"
        />
      </div>

    </div>
  );
}