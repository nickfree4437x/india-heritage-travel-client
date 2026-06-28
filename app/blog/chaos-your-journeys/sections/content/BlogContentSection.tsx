"use client";

import Image from "next/image";

export default function BlogContentSection() {
  return (
    <section className="w-full bg-white py-2">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">
        {/* Top Intro */}
        <div className="max-w-6xl">
          <p className="
            text-gray-700 mb-4 leading-relaxed
            text-[13px] sm:text-[14px] md:text-[14.5px]
            font-[300] text-justify
          ">
            You have probably felt that gnawing sense of dread before a big
            trip: so many options, so many mysteries. India is vast. It wears
            many faces. Enter without a plan, and you'll find yourself starting
            to get overwhelmed. But if you opt for a reputable India travel
            agency, the dynamic is different. What once seemed wild becomes
            tamed. Suddenly things that seemed murky grow clear.
          </p>
        </div>

        {/* First Section */}
        <div className="mt-6 sm:mt-8">
          <h2 className="
            text-[18px] sm:text-[24px] md:text-[24px]
            tracking-wide
            text-[#2c2c2c]
            font-semibold
            mb-4
          ">
            When You Try It Alone
          </h2>

          <div className="max-w-6xl">
            <p className="text-gray-700 mb-4 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
              Picture this: You arrive in Delhi. You've booked hotels and
              trains yourself by using random websites.
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
              But now a regional festival shifts your route. The train you
              planned to travel on is cancelled. Or your guest house does not
              come to pick you up. You try calling, but the numbers don't
              work. You spend hours going through all of this.
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
              That's what happens when you go without guidance. Every day
              becomes about fixing problems instead of enjoying places.
            </p>
          </div>

          {/* Image */}
          <div className="
            relative
            mt-4 sm:mt-6
            w-full
            h-[280px] sm:h-[420px] lg:h-[560px]
            rounded-sm
            overflow-hidden
          ">
            <Image
              src="https://res.cloudinary.com/dhfsyt4x9/image/upload/f_auto,q_auto,w_1200/v1779649137/ibrahim-rifath-Y6tBl0pTe-g-unsplash_m5uxih.jpg"
              alt="Traveller planning a journey across India with expert travel guidance"
              fill
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover"
            />
          </div>

          {/* Image Credit */}
          <p className="mt-3 text-[11px] sm:text-[12px] font-light text-gray-700">
            Photo Via: unsplash.com
          </p>
        </div>

        {/* Second Section */}
        <div className="max-w-6xl mt-6 sm:mt-8">
          <h2 className="
            text-[18px] sm:text-[22px] md:text-[24px]
            tracking-wide
            text-[#2c2c2c]
            font-semibold
            mb-4
          ">
            What a Good Agency Brings to the Table
          </h2>

          <div>
            <p className="text-gray-700 mb-4 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
              A trusted{" "}
              <span className="font-semibold">
                India travel agency
              </span>{" "}
              does more than book things. It guards your time,
              your mind and your comfort.
            </p>

            {/* List */}
            <ul className="space-y-3 pl-5 sm:pl-6 list-disc marker:text-[#111111] mb-4">
              <li className="text-gray-700 mb-4 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
                It knows what train timings are sensible,
                not risky.
              </li>

              <li className="text-gray-700 mb-4 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
                It chooses local transport you can trust.
              </li>

              <li className="text-gray-700 mb-4 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
                It steers you when cultural norms or climates change.
              </li>

              <li className="text-gray-700 mb-4 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
                It provides you with someone to call when
                things get off plan.
              </li>
            </ul>

            <p className="text-gray-700 mb-4 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
              As a result, your trip is smoother. You stop juggling logistics.
              You begin to absorb what's around you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}