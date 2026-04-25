"use client";

import Image from "next/image";

export default function UdaipurSection() {
  return (
    <div id="udaipur" className="max-w-5xl">

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold mb-4">
        Udaipur – Where Romance And Royalty Reign
      </h2>

      {/* Description */}
      <p className="text-gray-700 mb-6 leading-relaxed text-[15px]">
        Udaipur lies in the heart of India, a city that combines love and richness. Explore majestic palaces, ancient temples, and graceful Havelis. Discover bustling markets, and breathtaking sunsets views on Lake Pichola. Join us in exploring the magic of Udaipur.
      </p>

      {/* Image */}
      <div className="relative w-full h-[420px] rounded-md overflow-hidden shadow-md">
        <Image
          src="/destination/heritage-tour/udaipur.jpg"
          alt="Udaipur"
          fill
          className="object-cover"
        />
      </div>

    </div>
  );
}