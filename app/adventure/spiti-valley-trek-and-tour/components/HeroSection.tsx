"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-[91vh] w-full overflow-hidden">

      {/* Background Image with Zoom Animation */}
      <div className="absolute inset-0 scale-[1.08] animate-[zoomHero_20s_ease-out_forwards]">
        <Image
          src="/adventure/spiti/hero.jpg"
          alt="Spiti Valley"
          fill
          priority
          className="object-cover object-center will-change-transform"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 text-white h-full">

        {/* Heading */}
        <h1 className="text-4xl font-bold mb-4
                       opacity-0 translate-y-10
                       animate-[fadeUp_1.2s_ease-out_0.3s_forwards]">
          Spiti Valley Trek and Tour
        </h1>

        {/* Description */}
        <p className="max-w-2xl text-md text-gray-200
                      opacity-0 translate-y-10
                      animate-[fadeUp_1.4s_ease-out_0.6s_forwards]">
          Explore the raw beauty of Spiti Valley, where rugged mountains, ancient monasteries, and high-altitude deserts offer a once-in-a-lifetime adventure.
        </p>

      </div>
    </section>
  );
}