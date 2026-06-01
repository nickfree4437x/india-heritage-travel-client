"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[93vh] w-full overflow-hidden">

      {/* 🔥 Background Image (Smooth Zoom Animation) */}
      <Image
        src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779527998/heritage_b4eaqj.jpg"
        alt="Rajasthan Tour"
        fill
        priority
        className="object-cover scale-105 animate-[zoomSlow_20s_ease-in-out_infinite]"
      />

      {/* 🔥 Dark Overlay (Premium Look) */}
      <div className="absolute inset-0 bg-black/20" />

      {/* 🔥 Gradient Overlay (Depth Add) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 text-white h-full">

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
          Rajasthani Heritage <br />
          Tour Package
        </h1>

      </div>

    </section>
  );
}