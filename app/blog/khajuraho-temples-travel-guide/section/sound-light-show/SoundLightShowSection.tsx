"use client";

import Image from "next/image";

export default function SoundLightShowSection() {
  return (
    <section className="w-full bg-white md:py-4">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="mb-4 md:mb-6">

          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            The Sound and Light Show - An Essential Khajuraho Evening
          </h2>

        </div>

        {/* Image */}

        <div className="mb-4 md:mb-6">

          <div className="relative h-[280px] md:h-[420px] lg:h-[560px] overflow-hidden rounded-sm">

            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1783260928/dhruv-vishwakarma-nc1waqdYQb0-unsplash_weaamc.jpg"
              alt="Khajuraho Western Group temples illuminated during the Sound and Light Show at night"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            via unsplash
          </p>

        </div>

        {/* Content */}

        <div className="max-w-6xl mb-4 md:mb-6">

          <p className="text-gray-700 leading-relaxed text-[13px] sm:text-[14px] md:text-[15px] font-light text-justify mb-6">
            The So this Khajuraho Sound and Light Show, staged each evening in the grounds of the 
            Western Group complex, is basically one of the better ones you can see in India. The 
            narration is voiced by Bollywood legend Amitabh Bachchan, and it goes through the 
            Chandela dynasty , how the temples came up, and what the carvings symbolise too, while
            the temple facades sort of flicker and glow under coloured lights, really quite dramatic.
          </p>
        </div>

        {/* Practical Details */}

        <div className="border border-gray-200 rounded-md overflow-hidden">

          <div className="grid grid-cols-1 md:grid-cols-2">

            <div className="p-5 border-b md:border-b-0 md:border-r border-[#ece7de]">
              <h4 className="text-[14px] md:text-[15px] font-semibold text-[#2c2c2c] mb-0.5">
                Entry Fee
              </h4>

              <p className="text-gray-700 text-[13px] md:text-[14px] leading-relaxed font-light">
                ₹250 for Indian nationals
                <br />
                ₹700 for foreign visitors
                <br />
                Children under 5 years: Free
              </p>
            </div>

            <div className="p-5">
              <h4 className="text-[14px] md:text-[15px] font-semibold text-[#2c2c2c] mb-0.5">
                Tickets
              </h4>

              <p className="text-gray-700 text-[13px] md:text-[14px] leading-relaxed font-light">
                Available at the venue only.
                Advance booking is not currently available.
              </p>
            </div>

            <div className="p-5 border-t border-[#ece7de] md:border-r">
              <h4 className="text-[14px] md:text-[15px] font-semibold text-[#2c2c2c] mb-0.5">
                Language Options
              </h4>

              <p className="text-gray-700 text-[13px] md:text-[14px] leading-relaxed font-light">
                Separate English and Hindi shows are available.
                Confirm timings upon arrival.
              </p>
            </div>

            <div className="p-5 border-t border-[#ece7de]">
              <h4 className="text-[14px] md:text-[15px] font-semibold text-[#2c2c2c] mb-0.5">
                Recommended Arrival
              </h4>

              <p className="text-gray-700 text-[13px] md:text-[14px] leading-relaxed font-light">
                Reach at least 30 minutes early during
                the peak season from October to February.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}