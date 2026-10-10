"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0 sm:py-3">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[18px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Regional Cost Breakdown
          </h2>
        </div>

        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[15px] sm:text-[16px] md:text-[18px] font-semibold text-[#2c2c2c] tracking-wide">
            Rajasthan & Golden Triangle Costs
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            Rajasthan and the Golden Triangle (Delhi–Agra–Jaipur) form the backbone of most first-time India itineraries. 
            Mid-range stays cost about $70–130 per day, while luxury heritage hotels range from $250–600+ daily. A 
            private sedan or SUV for the entire 550 km loop costs around $250–400 total, depending on the schedule 
            and waiting time.
          </p>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
                src="https://res.cloudinary.com/dja5yspwr/image/upload/v1786424419/meric-dagli-uADXI1v10us-unsplash_elagkg.jpg"
                alt="Rajasthan and Golden Triangle travel costs - hotel transport and guide prices"
                fill
                sizes="100vw"
                className="object-cover"
            />
           </div>
            <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
             Image via unsplash
            </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[15px] sm:text-[16px] md:text-[18px] font-semibold text-[#2c2c2c] tracking-wide">
            Kerala & South India Costs
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            Kerala comes out a bit higher than North India for the big, marquee kind of experience - like, 
            a night on a traditional backwater houseboat might run $100–350, depending on the season and 
            which boat category you pick. But once you zoom out, street food, local transport, and mid-range 
            hotels feel pretty much on par with, or even a tad cheaper than, what you’d see in Rajasthan. 
            If you plan a well paced Kerala loop (Kochi, Munnar, Alleppey, Kovalam) you’re usually looking 
            at around $80–150 per day for mid-range comfort, or roughly $200–450 per day if you go luxury, 
            with the bill boosted by resort stays and that private houseboat night.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
                src="https://res.cloudinary.com/dja5yspwr/image/upload/v1786424489/sarthak-veggalam-YwiMfbiKFmY-unsplash_xtacvo.jpg"
                alt="Kerala and South India travel costs - houseboats resorts and transport prices"
                fill
                sizes="100vw"
                className="object-cover"
            />
           </div>
            <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
             Image via unsplash
            </p>
        </div>
      </div>
    </section>
  );
}