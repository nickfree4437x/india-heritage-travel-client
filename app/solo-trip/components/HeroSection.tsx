"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[96vh] w-full overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0 scale-[1.08] animate-[zoomHero_20s_ease-out_forwards]">
        <Image
          src="/solo-women/hero.jpeg"
          alt="Solo Women Trip"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/60" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center px-6 h-full">

        <div className="max-w-[760px] text-white">

          {/* Heading */}
          <h1
            className="
                text-[18px] sm:text-[22px] md:text-[24px]

                font-[350]
                leading-[1.22]
                tracking-[-0.03em]

                mb-5

                opacity-0 translate-y-10
                animate-[fadeUp_1.2s_ease-out_0.3s_forwards]
                "
                >
                <span className="block">
                    Traveling through India as a woman
                </span>

                <span className="block">
                    feels very different…
                </span>

                <span className="block">
                    when you know someone has your back.
                </span>
            </h1>

          {/* Description */}
          <p
            className="
              max-w-[620px]
              mx-auto

              text-[11.5px]
              sm:text-[12.5px]
              md:text-[13.5px]

              leading-[1.9]
              tracking-[0.03em]

              text-white/82
              font-light

              opacity-0 translate-y-8
              animate-[fadeUp_1.2s_ease-out_0.6s_forwards]
            "
          >
            Thoughtfully designed journeys for women who want to experience
            India deeply with comfort, trusted support, and the freedom to
            explore without feeling overwhelmed doing it alone.
          </p>

        </div>
      </div>
    </section>
  );
}