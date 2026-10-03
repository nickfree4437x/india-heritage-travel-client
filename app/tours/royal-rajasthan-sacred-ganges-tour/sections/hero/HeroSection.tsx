"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[93vh] w-full overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0 scale-[1.08] animate-[zoomHero_20s_ease-out_forwards]">
        <Image
          src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779539943/tour2_wqd4x6.webp"
          alt="Rajasthan and Varanasi tour package featuring royal forts palaces desert landscapes and sacred Ganges"
          fill
          priority
          className="object-cover object-center will-change-transform"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/55" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 text-white h-full">

        <h1
          className="
            w-full
            max-w-[340px]
            sm:max-w-[600px]
            md:max-w-[700px]
            px-2 sm:px-4
            text-[22px]
            sm:text-3xl
            md:text-4xl
            font-[600]
            leading-[1.15]
            tracking-[0.01em]
            sm:tracking-[0.03em]
            md:tracking-[0.04em]
            mb-4
            text-center
            opacity-0 translate-y-10
            animate-[fadeUp_1.2s_ease-out_0.3s_forwards]
          "
        >
          <span className="block whitespace-nowrap">
            Royal Rajasthan & Sacred
          </span>
          <span className="block">
            Ganges Tour India
          </span>
        </h1>
      </div>

    </section>
  );
}