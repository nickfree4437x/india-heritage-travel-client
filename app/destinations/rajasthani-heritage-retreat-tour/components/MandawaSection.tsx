"use client";

import Image from "next/image";

export default function MandawaSection() {
  return (
    <div id="mandawa" className="max-w-5xl">

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold mb-4">
        Mandawa – A Town Of Timeless Heritage And Beauty
      </h2>

      {/* Description */}
      <p className="text-gray-700 mb-6 leading-relaxed text-[15px]">
        Mandawa is a town where walls speak tales of artistry. This Rajasthani gem have its streets decorated with beautiful frescoes and havelis, each a live canvas of history and beauty. This is a living gallery of Rajasthan’s architectural magnificence and the stories echoes on its walls.
      </p>

      {/* Image */}
      <div className="relative w-full h-[420px] rounded-md overflow-hidden shadow-md">
        <Image
          src="/destination/heritage-tour/mandawa.jpg"
          alt="Mandawa"
          fill
          className="object-cover"
        />
      </div>

    </div>
  );
}