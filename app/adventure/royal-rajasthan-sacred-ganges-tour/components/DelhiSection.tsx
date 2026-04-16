"use client";

import Image from "next/image";

export default function DelhiSection() {
  return (
    <div>

      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">
        Delhi- A blend Of History & Royalty
      </h2>

      {/* Description */}
      <p className="text-gray-700 mb-6 leading-relaxed">
        <span className="font-semibold">Discover Delhi</span>, which is the mixture of history and modernity with Vibrant, contemporary, and bursting colours. In Old Delhi, you’ll experience the rich colours of humanity in all its shades and sensations.
      </p>

      {/* Image */}
      <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-md">
        <Image
          src="/adventure/ganga-tour/delhi.jpg"
          alt="Delhi"
          fill
          className="object-cover"
        />
      </div>

    </div>
  );
}