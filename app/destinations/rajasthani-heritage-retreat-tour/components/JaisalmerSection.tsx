"use client";

import Image from "next/image";

export default function JaisalmerSection() {
  return (
    <div id="jaisalmer" className="max-w-5xl">

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold mb-4">
        Jaisalmer – Where Desert Stories Come Alive
      </h2>

      {/* Description */}
      <p className="text-gray-700 mb-6 leading-relaxed text-[15px]">
        Jaisalmer, where humans and animals have acquired the desert together for centuries. A camel ride takes you to a bygone era, showcasing the strength and productivity of its people who flourish in the middle of challenging conditions, turning nature’s offerings into treasures.
      </p>

      {/* Image */}
      <div className="relative w-full h-[420px] rounded-md overflow-hidden shadow-md">
        <Image
          src="/destination/heritage-tour/jaisalmer.jpg"
          alt="Jaisalmer"
          fill
          className="object-cover"
        />
      </div>

    </div>
  );
}