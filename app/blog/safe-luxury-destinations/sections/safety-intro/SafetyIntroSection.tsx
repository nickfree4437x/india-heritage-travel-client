// app/blogs/safe-luxury-destinations/components/SafetyIntroSection.tsx

"use client";

import Link from "next/link";
import Image from "next/image";

export default function SafetyIntroSection() {
  return (
    <section className="w-full bg-white md:py-2">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">
        {/* Top Content */}
        <div className="max-w-6xl">
          <div className="text-gray-700 mb-4 leading-relaxed text-[13px] md:text-[14.5px] font-[300] text-justify">
            <p>
              It is personal choice for women to travel solo.
              Some trips are about rest. Some are about space.
            </p>

            <p className="mt-4">
              Others are about feeling secure enough to enjoy a
              place without always looking over your shoulder.
              India can have that, though care is required in
              choosing destinations.
            </p>

            <p className="mt-4">
              Some parts of the country have a reputation for
              warmth and structure as well as for pace that is
              manageable rather than demanding.
              Solo female travel in India is about balancing
              comfort and awareness.
            </p>

            <p className="mt-4">
              The locations below are not all about over-the-top
              thrill or chaos. They are about balance.
              Good stays, welcoming locals and enriched rather
              than exhaustive experiences.
            </p>
          </div>
        </div>

        {/* Safety Section */}
        <div className="mt-6 sm:mt-8">
          {/* Heading */}
          <h2 className="
            text-[18px] sm:text-[22px] md:text-[24px]
            tracking-wide
            text-[#2c2c2c]
            font-semibold
            mb-4
          ">
            What Makes a Place Feel Safe for Solo Women
          </h2>

          {/* Content */}
          <div className="max-w-6xl">
            <p className="text-gray-700 mb-4 leading-relaxed text-[13px] md:text-[14.5px] font-[300] text-justify">
              Security is not all about rules, or warnings.
              It often boils down to how a destination feels
              once you get there. Easy transport matters.
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed text-[13px] md:text-[14.5px] font-[300] text-justify">
              Trusted drivers, hotel transfers and short travel
              times to get you from place to place take so much
              pressure off. Walkable areas also help, when cafés,
              shops and sights are located close to each other.
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed text-[13px] md:text-[14.5px] font-[300] text-justify">
              Hospitality also plays a quiet but important role.
              In much of India, hotel staff are trained to be
              helpful without overbearing. Destinations accustomed
              to international visitors are generally more relaxed
              and respectful.
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed text-[13px] md:text-[14.5px] font-[300] text-justify">
              These are the areas where{" "}
              <span className="font-[500]">
                India travel companies
              </span>{" "}
              and{" "}
              <span className="font-[500]">
                companies offering holiday tour packages in India
              </span>{" "}
              typically plan routes with great care, giving
              special importance to comfort and flow.
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed text-[13px] md:text-[14.5px] font-[300] text-justify">
              Carefully-designed{" "}
              <span className="font-[500]">
                India travel packages
              </span>{" "}
              with utmost attention to these details make{" "}
              <span className="font-[500]">
                <Link href="/solo-women-travel" className="hover:underline">
                  solo female travel in India
                </Link>
              </span>{" "}
              such a delight.
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
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1782535595/pexels-miriamespacio-18275080_vjubws.jpg"
              alt="Solo female traveler exploring cultural destinations across India"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-[12px] sm:text-[13px] text-gray-600 font-light">
            via pexels
          </p>
        </div>
      </div>
    </section>
  );
}