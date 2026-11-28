
"use client";

import Image from "next/image";

export default function ContactHero() {
  return (
    <section
      className="relative min-h-[100svh] w-full overflow-hidden"
      aria-labelledby="contact-hero-title"
    >
      {/* Desktop Background Image */}
      <div className="absolute inset-0 hidden scale-[1.08] animate-[zoomHero_20s_ease-out_forwards] md:block">
        <Image
          src="https://res.cloudinary.com/dja5yspwr/image/upload/v1785949838/photo-1501144600699-729d204d332b_wrz9dv.avif"
          alt="Travel scene featured on the India Heritage Travel contact page"
          fill
          priority
          quality={80}
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Mobile Background Image */}
      <div className="absolute inset-0 -ml-24 block scale-[1.08] animate-[zoomHero_20s_ease-out_forwards] md:hidden">
        <Image
          src="https://res.cloudinary.com/dja5yspwr/image/upload/v1786000613/IMG_7307_bs5cw5.jpg"
          alt="Travel scene featured on the India Heritage Travel contact page"
          fill
          priority
          quality={80}
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/35 to-black/60 md:from-black/50 md:via-black/25 md:to-black/55"
        aria-hidden="true"
      />

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-[100svh] -mt-14 flex-col items-center justify-center px-6 text-center text-white">
        <h1
          id="contact-hero-title"
          className="
            max-w-[500px]
            text-3xl md:text-4xl
            font-semibold
            leading-[1.1]
            tracking-[0.04em]
            md:mb-4
            opacity-0 translate-y-10
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
            md:text-[14px]
            font-light
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
