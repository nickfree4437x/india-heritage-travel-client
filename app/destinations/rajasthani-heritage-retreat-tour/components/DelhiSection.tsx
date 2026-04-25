"use client";

import Image from "next/image";

export default function DelhiSection() {
  return (
    <div id="delhi" className="max-w-5xl">

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold mb-4">
        Delhi - A Blend Of History & Royalty
      </h2>

      {/* Description */}
      <p className="text-gray-700 mb-6 leading-relaxed text-[15px]">
        Discover Delhi, which is the mixture of history and modernity with Vibrant, contemporary, and bursting colours. In Old Delhi, you’ll experience the rich colours of humanity in all its shades and sensations.
      </p>

      {/* Image */}
      <div className="relative w-full h-[420px] rounded-md overflow-hidden shadow-md">
        <Image
          src="/destination/heritage-tour/delhi.jpg"
          alt="Delhi"
          fill
          className="object-cover"
        />
      </div>

    </div>
  );
}