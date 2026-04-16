"use client";

import Image from "next/image";

export default function JaipurSection() {
  return (
    <section id="jaipur" className="space-y-6">

      <h2 className="text-3xl md:text-4xl font-semibold">
        Jaipur – The Pink City & Heart of Rajasthan
      </h2>

      <p className="text-gray-700 leading-relaxed">
        Jaipur is known as the heart of Rajasthan & a UNESCO world heritage city.
        Famous for grand forts, palaces, local cuisines, and vibrant markets,
        Jaipur offers a perfect blend of history and culture.
      </p>

      <div className="relative w-full h-[380px] rounded-xl overflow-hidden shadow-lg">
        <Image
          src="/destination/heritage-tour/jaipur.jpg"
          alt="Jaipur"
          fill
          className="object-cover"
        />
      </div>

    </section>
  );
}