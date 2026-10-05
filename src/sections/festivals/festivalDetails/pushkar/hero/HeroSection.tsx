"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-[93vh] w-full overflow-hidden">
      {/* Background Image with Zoom */}
      <div className="absolute inset-0 scale-[1.08] animate-[zoomHero_20s_ease-out_forwards]">
        <Image
          src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779547787/Pushkar_k4ugcf.png"
          alt="Pushkar Camel Fair Tour India featuring camel trading, cultural celebrations, folk traditions, and Rajasthan heritage"
          fill
          priority
          className="object-cover object-center will-change-transform"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/50" />

      {/* Content */}
      <div
        className="
          relative z-10
          flex flex-col items-center justify-center
          text-center
          px-6
          text-white
          h-full
        "
      >
        <h1
          className="
            max-w-[700px]
            text-3xl md:text-4xl
            font-[600]
            leading-[1.1]
            tracking-[0.04em]
            mb-4
            opacity-0 translate-y-10
            animate-[fadeUp_1.2s_ease-out_0.3s_forwards]
          "
        >
          Pushkar Camel Fair<br/> Tour India
        </h1>
      </div>
    </section>
  );
}