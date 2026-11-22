
"use client";

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function WelcomeSection() {
  return (
    <section className="py-8 sm:py-20 md:py-16 px-4 sm:px-6 bg-[#f8f6f2] overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6 md:gap-8 items-center">
        {/* LEFT CONTENT SECTION */}
        <div className="flex flex-col items-center text-center max-w-[5500px] mx-auto md:ml-12 md:pr-6">

          {/* Namaste greeting */}
          <p className="text-[#80613f] text-[16px] sm:text-[20px] md:text-[22px] font-medium tracking-wide mb-3 sm:mb-4">
            Namaste!
          </p>

          {/* Main heading */}
          <h2 className="text-[18px] sm:text-[24px] md:text-[22px] font-[600] text-[#8b6b47] tracking-wide leading-snug mb-3">
            Welcome To India Heritage Travel
          </h2>

          {/* Introduction paragraph */}
          <p className="text-gray-800 text-[11px] sm:text-[13px] md:text-[13px] font-light tracking-wide leading-relaxed mb-3 max-w-[320px] sm:max-w-[600px] mx-auto">
            Journey through India's traditions, cultural wonders, and extraordinary destinations.
          </p>

          {/* Feature sections */}
          <div className="space-y-6 sm:space-y-8 md:space-y-10 text-gray-800 text-[13px] sm:text-[14px] md:text-[15px] font-light tracking-wide leading-relaxed max-w-[620px]">

            {/* Feature 1: Essence */}
            <div>
              <h3 className="text-[#8b6b47] font-medium text-[13px] sm:text-[15px] md:text-[15px] mb-1">
                Feel the essence
              </h3>
              <p className="text-gray-800 text-[11px] sm:text-[13px] md:text-[13px] font-light tracking-wide leading-relaxed mb-3 max-w-[320px] sm:max-w-[600px] mx-auto">
                With vibrant festivals, colorful landscapes, and the unique
                charm of India's rich traditions.
              </p>
            </div>

            {/* Feature 2: Self discovery */}
            <div>
              <h3 className="text-[#8b6b47] font-medium text-[13px] sm:text-[15px] md:text-[15px] mb-1 -mt-5">
                Discover yourself
              </h3>
              <p className="text-gray-800 text-[11px] sm:text-[13px] md:text-[13px] font-light tracking-wide leading-relaxed mb-3 max-w-[350px] sm:max-w-[600px] mx-auto">
                In serene yoga retreats, spiritual journeys, and the peaceful
                rhythm of ancient practices.
              </p>
            </div>

            {/* Feature 3: Exploration */}
            <div>
              <h3 className="text-[#8b6b47] font-medium text-[13px] sm:text-[15px] md:text-[15px] mb-1 -mt-5">
                Explore with us
              </h3>
              <p className="text-gray-800 text-[11px] sm:text-[13px] md:text-[13px] font-light tracking-wide leading-relaxed mb-3 max-w-[320px] sm:max-w-[600px] mx-auto">
                From the towering peaks of the Himalayas to the tranquil
                backwaters of Kerala, majestic forts, palaces, and ancient
                temples that showcase India's rich history and culture.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT - VIDEO SECTION */}
        <div className="flex justify-center md:justify-start md:pl-6">
          <div className="relative w-full max-w-[340px] sm:max-w-[420px] md:max-w-[500px] h-[350px] sm:h-[360px] md:h-[350px] overflow-hidden rounded-sm">
            <video
              src="https://res.cloudinary.com/dhfsyt4x9/video/upload/v1779522768/video_g0z1ri.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="none"
              className="w-full h-full object-cover"
            />

            {/* Dark overlay on video */}
            <div className="absolute inset-0 bg-black/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
