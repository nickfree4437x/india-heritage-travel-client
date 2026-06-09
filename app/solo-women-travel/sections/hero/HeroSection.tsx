"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[100vh] w-full overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0 scale-[1.08] animate-[zoomHero_20s_ease-out_forwards]">
        <Image
          src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779626227/hero_a0aojv.jpg"
          alt="Solo Women Tour Packages in India by India Heritage Travel"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/65" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-end md:items-center">

        <div
          className="
            w-full

            flex
            justify-center
            md:justify-start

            px-6
            md:px-14
            lg:px-20

            pb-36
            sm:pb-36

            md:pb-0
            md:pt-44
          "
        >

          <div className="max-w-[620px] w-full text-white">

            {/* Heading */}
            <h1
              className="
                text-left
                text-[18px]
                sm:text-[20px]
                md:text-[22px]
                font-[400]
                md:font-[500]
                leading-[1.22]
                tracking-[-0.03em]
                mb-5
                opacity-0
                translate-y-10
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
                max-w-[520px]
                text-left
                text-[11.5px]
                sm:text-[12.5px]
                md:text-[13px]
                leading-[1.9]
                tracking-[0.03em]
                text-white/82
                font-light
                opacity-0
                translate-y-8
                animate-[fadeUp_1.2s_ease-out_0.6s_forwards]
              "
            >
              Thoughtfully designed journeys for women who want to
              experience India deeply with comfort, trusted support,
              and the freedom to explore without feeling overwhelmed
              doing it alone.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}