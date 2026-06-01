"use client";

import Image from "next/image";

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function Hero() {
  // ==========================================================================
  // MAIN RENDER
  // ==========================================================================

  return (
    <section className="relative h-[93vh] w-full overflow-hidden">
      {/* ====================================================================
          BACKGROUND IMAGE WITH ZOOM ANIMATION
      ==================================================================== */}
      <div className="absolute inset-0 scale-[1.08] animate-[zoomHero_20s_ease-out_forwards]">
        <Image
          src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779523009/golden-triangle_izyhwq.jpg"
          alt="Golden Triangle Tour"
          fill
          priority
          className="object-cover object-center will-change-transform"
        />
      </div>

      {/* ====================================================================
          GRADIENT OVERLAY
      ==================================================================== */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/55" />

      {/* ====================================================================
          CONTENT SECTION WITH FADE UP ANIMATION
      ==================================================================== */}
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
          Golden Triangle Tour <br />
          Package India
        </h1>
      </div>
    </section>
  );
}