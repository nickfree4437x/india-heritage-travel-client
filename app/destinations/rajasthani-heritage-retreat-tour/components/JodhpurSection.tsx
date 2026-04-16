"use client";

import Image from "next/image";

export default function JodhpurSection() {
  return (
    <section id="jodhpur" className="space-y-6">

      <h2 className="text-3xl md:text-4xl font-semibold">
        Jodhpur – Where History Meets The Blue Skyline
      </h2>

      <p className="text-gray-700 leading-relaxed">
        The city where the grand Mehrangarh Fort looms over the Blue City.
        Famous for its indigo-washed buildings and rich heritage, Jodhpur offers
        a unique blend of culture and architecture.
      </p>

      <div className="relative w-full h-[380px] rounded-xl overflow-hidden shadow-lg">
        <Image
          src="/destination/heritage-tour/jodhpur.jpg"
          alt="Jodhpur"
          fill
          className="object-cover"
        />
      </div>

    </section>
  );
}