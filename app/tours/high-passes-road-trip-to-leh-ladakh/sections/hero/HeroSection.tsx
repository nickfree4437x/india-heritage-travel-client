"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[93vh] w-full overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0 scale-[1.08] animate-[zoomHero_20s_ease-out_forwards]">
        <Image
          src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779543183/hero_kjfvk2.jpg"
          alt="Leh Ladakh road trip package featuring high mountain passes scenic Himalayan landscapes monasteries and adventure routes"
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
            mx-auto
            px-2
            text-center
            text-[23px]
            sm:text-[30px]
            md:text-4xl
            font-[600]
            leading-[1.1]
            tracking-[0.01em]
            mb-4
            break-words

            opacity-0 translate-y-10
            animate-[fadeUp_1.2s_ease-out_0.3s_forwards]
          "
        >
          <span className="block">
            Leh Ladakh Tour Package
          </span>

          <span className="block">
            Road Trip & Himalayan Adventure
          </span>
        </h1>
      </div>

    </section>
  );
}