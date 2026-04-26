"use client";

import Image from "next/image";

export default function RentCarHero() {
  return (
    <section className="relative w-full h-[75vh] md:h-[93vh] overflow-hidden">

      {/* Background Image */}
      <Image
        src="/rent-car/hero.jpg" // 👈 same type image use kar (night + car)
        alt="Rent a Car"
        fill
        priority
        className="object-cover"
      />


      {/* Gradient Overlay (premium feel) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">

        {/* Heading */}
        <h1 className="text-white text-3xl sm:text-4xl md:text-4xl font-semibold leading-tight max-w-3xl">
          Meet Your Perfect Travel Companion
        </h1>

        {/* Subtitle */}
        <p className="text-gray-200 mt-6 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">
          Travel India in comfort with our meticulously maintained fleet of professional drivers.
        </p>

      </div>

    </section>
  );
}