"use client";

import Image from "next/image";

export default function DelhiSection() {
  return (
    <section id="delhi" className="space-y-6">

      <h2 className="text-3xl md:text-4xl font-semibold">
        Delhi - A Blend Of History & Royalty
      </h2>

      <p className="text-gray-700 leading-relaxed">
        <span className="font-semibold">Discover Delhi</span>, which is the mixture
        of history and modernity with vibrant, contemporary, and bursting colours.
      </p>

      <div className="relative w-full h-[380px] rounded-xl overflow-hidden shadow-lg">
        <Image
          src="/destination/heritage-tour/delhi.jpg"
          alt="Delhi"
          fill
          className="object-cover"
        />
      </div>

    </section>
  );
}