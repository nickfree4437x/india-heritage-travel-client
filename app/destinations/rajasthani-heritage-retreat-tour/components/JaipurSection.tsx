"use client";

import Image from "next/image";

export default function JaipurSection() {
  return (
    <div id="jaipur" className="max-w-5xl">

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold mb-4">
        Jaipur – The Pink City & Heart of Rajasthan
      </h2>

      {/* Description */}
      <p className="text-gray-700 mb-6 leading-relaxed text-[15px]">
        Jaipur is known as the heart of Rajasthan & a UNESCO world heritage city. It is among one of the most visited tourist destinations in Rajasthan. Jaipur is famous for its grand forts and palaces, local cuisines, adventure tourism, pilgrimage sites and local shopping.
      </p>

      {/* Image */}
      <div className="relative w-full h-[420px] rounded-md overflow-hidden shadow-md">
        <Image
          src="/destination/heritage-tour/jaipur.jpg"
          alt="Jaipur"
          fill
          className="object-cover"
        />
      </div>

    </div>
  );
}