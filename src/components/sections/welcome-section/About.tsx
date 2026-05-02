"use client";

export default function WelcomeSection() {
  return (
    <section className="py-4 sm:py-20 md:py-6 px-4 sm:px-6 bg-[#f8f6f2] overflow-hidden">
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6 md:gap-8 items-center">

        {/* 🔥 LEFT CONTENT */}
        <div className="flex flex-col items-center text-center max-w-[720px] mx-auto md:ml-12 md:pr-6">

          {/* Namaste */}
          <h3 className="font-heading text-[#9b7a50] text-[22px] sm:text-[24px] md:text-[26px] font-medium mb-3 sm:mb-4">
            Namaste!
          </h3>

          {/* Main Heading */}
          <h2 className="font-heading text-[24px] sm:text-[28px] md:text-[24px] font-semibold text-[#8b6b47] leading-snug mb-3">
            Welcome To India Heritage Travel
          </h2>

          {/* Intro */}
          <p className="text-gray-700 text-[14px] sm:text-[15px] md:text-[15px] leading-relaxed mb-3 max-w-[600px]">
            Step into a land where every journey tells a story and every sight leaves you in awe.
          </p>

          {/* Sections */}
          <div className="space-y-6 sm:space-y-8 md:space-y-10 text-gray-700 text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed max-w-[620px]">

            <div>
              <h4 className="text-[#9b7a50] font-semibold text-[16px] sm:text-[17px] md:text-[16px] mb-1">
                Feel the essence
              </h4>
              <p className="text-gray-700 text-[14px] sm:text-[15px] md:text-[15px] leading-relaxed max-w-[600px]">
                With vibrant festivals, colorful landscapes, and the unique charm of India’s rich traditions.
              </p>
            </div>

            <div>
              <h4 className="text-[#9b7a50] font-semibold text-[16px] sm:text-[17px] md:text-[16px] mb-1 -mt-5">
                Discover yourself
              </h4>
              <p className="text-gray-700 text-[14px] sm:text-[15px] md:text-[15px] leading-relaxed mb-3 max-w-[600px]">
                In serene yoga retreats, spiritual journeys, and the peaceful rhythm of ancient practices.
              </p>
            </div>

            <div>
              <h4 className="text-[#9b7a50] font-semibold text-[16px] sm:text-[17px] md:text-[16px] mb-1 -mt-5">
                Explore with us
              </h4>
              <p className="text-gray-700 text-[14px] sm:text-[15px] md:text-[15px] leading-relaxed mb-3 max-w-[600px]">
                From the towering peaks of the Himalayas to the tranquil backwaters of Kerala, majestic forts,
                palaces, and ancient temples that showcase India’s rich history and culture.
              </p>
            </div>

          </div>
        </div>

        {/* 🔥 RIGHT SIDE */}
        <div className="flex justify-center md:justify-start md:pl-6">

          <div className="relative w-full max-w-[340px] sm:max-w-[420px] md:max-w-[500px] h-[350px] sm:h-[360px] md:h-[350px] overflow-hidden rounded-sm">

            <video
              src="/welcome-section/video.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-black/20"></div>
          </div>

        </div>

      </div>
    </section>
  );
}