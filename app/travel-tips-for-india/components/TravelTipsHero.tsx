
"use client";

import Image from "next/image";

export default function TravelTipsHero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden">
      {/* Background Image with Zoom Animation */}
      <div className="absolute inset-0 scale-[1.08] animate-[zoomHero_20s_ease-out_forwards]">
        <Image
          src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779743488/delhi_ysns96.jpg"
          alt="India Gate and New Delhi cityscape"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/55"
        aria-hidden="true"
      />

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-6 text-center text-white">
        <h1
          className="
            max-w-[700px]
            mb-4
            text-3xl md:text-4xl
            font-semibold
            leading-[1.1]
            tracking-[0.02em]
            opacity-0 translate-y-10
            animate-[fadeUp_1.2s_ease-out_0.3s_forwards]
          "
        >
          India Travel Tips for a Smooth and Memorable Journey
        </h1>

        <p
          className="
            max-w-[650px]
            mb-6
            text-[12px] sm:text-[13px] md:text-[14.5px]
            font-light
            leading-relaxed
          "
        >
          Practical advice, cultural insights, and essential information to
          help you travel through India confidently and comfortably.
        </p>
      </div>
    </section>
  );
}
