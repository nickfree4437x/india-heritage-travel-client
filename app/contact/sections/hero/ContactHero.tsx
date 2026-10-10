"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[100vh] w-full overflow-hidden">

      {/* Desktop Background Image */}
      <div className="absolute inset-0 hidden md:block scale-[1.08] animate-[zoomHero_20s_ease-out_forwards]">
        <Image
          src="https://res.cloudinary.com/dja5yspwr/image/upload/v1785949838/photo-1501144600699-729d204d332b_wrz9dv.avif"
          alt="Contact India Heritage Travel for luxury tours custom itineraries and travel assistance"
          fill
          priority
          quality={80}
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Mobile Background Image */}
      <div className="absolute inset-0 block md:hidden -ml-24 scale-[1.08] animate-[zoomHero_20s_ease-out_forwards]">
        <Image
          src="https://res.cloudinary.com/dja5yspwr/image/upload/v1786000613/IMG_7307_bs5cw5.jpg"
          alt="Contact India Heritage Travel for luxury tours custom itineraries and travel assistance"
          fill
          priority
          quality={80}
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 Image via-black/35 to-black/60 md:from-black/50 md:Image via-black/25 md:to-black/55" />

      {/* Hero Content */}
      <div className="relative z-10 flex h-full -mt-14 flex-col items-center justify-center px-6 text-center text-white">
        <h1
          className="
            max-w-[500px]
            text-3xl
            md:text-4xl
            font-semibold
            leading-[1.1]
            tracking-[0.04em]
            md:mb-4
            opacity-0
            translate-y-10
            animate-[fadeUp_1.2s_ease-out_0.3s_forwards]
          "
        >
          Get in Touch with India Heritage Travel
        </h1>

        <p
          className="
            max-w-2xl
            text-[12px]
            sm:text-[13px]
            md:text-[14.5px]
            font-normal
            text-white/95
            leading-relaxed
            mb-6
            [text-shadow:0_1px_8px_rgba(0,0,0,0.35)]
          "
        >
          Speak with our travel experts to plan customized India tours,
          cultural journeys, festival experiences, and private itineraries.
        </p>
      </div>
    </section>
  );
}