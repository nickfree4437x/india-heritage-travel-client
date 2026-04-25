"use client";

import Image from "next/image";

export default function JodhpurSection() {
  return (
    <div id="jodhpur" className="max-w-5xl">

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold mb-4">
        Jodhpur – Where History Meets The Blue Skyline
      </h2>

      {/* Description */}
      <p className="text-gray-700 mb-6 leading-relaxed text-[15px]">
        The city where the grand Mehrangarh Fort looms over the Blue City which is a 15th-century marvel of indigo-washed buildings. It is a famous tourist spot with a palace, fort, and temples, set in the stark landscape of the Thar Desert. It’s also known as the Blue City due to the dominant color scheme of its buildings in old town.
      </p>

      {/* Image */}
      <div className="relative w-full h-[420px] rounded-md overflow-hidden shadow-md">
        <Image
          src="/destination/heritage-tour/jodhpur.jpg"
          alt="Jodhpur"
          fill
          className="object-cover"
        />
      </div>

    </div>
  );
}