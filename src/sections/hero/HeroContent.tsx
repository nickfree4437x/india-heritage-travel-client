"use client";

// ============================================================================
// TYPES & INTERFACES
// ============================================================================

type Props = {
  scrollToDestination: () => void;
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function HeroContent({
  scrollToDestination,
}: Props) {
  return (
    <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 md:px-10 text-center">
      <div className="w-full max-w-3xl text-white flex flex-col items-center">

        {/* ====================================================================
            HEADING SECTION
        ==================================================================== */}

        <div>
          <h1 className="font-semibold font-heading leading-tight">

            <span className="block text-xl sm:text-3xl md:text-4xl text-white">
              Explore India Beyond Landmarks
            </span>

            <span className="block text-xl sm:text-3xl md:text-4xl mt-2 sm:mt-3">
              Curated Heritage Tours in India
            </span>

          </h1>
        </div>

        {/* ====================================================================
            DESCRIPTION SECTION
        ==================================================================== */}

        <p
          className="
            mt-2 sm:mt-3
            text-[11px] sm:text-xs md:text-[13.5px]
            text-gray-200
            font-light
            leading-relaxed
            tracking-wide
            max-w-md sm:max-w-lg
            px-4
          "
        >
          Discover India's rich heritage, vibrant cultures, 
          ancient traditions, and immersive travel experiences 
          through thoughtfully curated heritage journeys.
        </p>

        {/* ====================================================================
            CTA BUTTON SECTION
        ==================================================================== */}

        <button
          onClick={scrollToDestination}
          aria-label="Explore Tours"
          className="
            relative group
            mt-6 sm:mt-8
            px-6 sm:px-8
            py-2.5 sm:py-3
            border border-[#CBB299]/40
            bg-black/20
            backdrop-blur-md
            text-[#CBB299]
            text-[10px] sm:text-xs
            tracking-[2px]
            uppercase
            transition-all duration-500
            overflow-hidden
            rounded-md
            cursor-pointer
            active:scale-[0.98]
          "
        >
          <span className="relative z-10">
            Explore Tours
          </span>

          <span
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-[#CBB299]/0
              Image via-[#CBB299]/15
              to-[#CBB299]/0
              translate-x-[-100%]
              group-hover:translate-x-[100%]
              transition-transform
              duration-[2500ms]
            "
          />
        </button>

      </div>
    </div>
  );
}