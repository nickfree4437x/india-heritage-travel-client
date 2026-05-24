// app/blogs/safe-luxury-destinations/components/SafetyIntroSection.tsx

"use client";

import Image from "next/image";

export default function SafetyIntroSection() {
  return (
    <section className="w-full bg-white">

      {/* SAME WIDTH AS HERO */}
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">

        {/* TOP CONTENT */}
        <div className="max-w-6xl">

          <div
            className="text-gray-700 mb-6 leading-relaxed text-[13px] md:text-[14.5px] font-[300] text-justify"
          >

            <p>
              It is personal choice for women to travel solo.
              Some trips are about rest. Some are about space.
            </p>

            <p className="mt-8">
              Others are about feeling secure enough to enjoy a
              place without always looking over your shoulder.
              India can have that, though care is required in
              choosing destinations.
            </p>

            <p className="mt-8">
              Some parts of the country have a reputation for
              warmth and structure as well as for pace that is
              manageable rather than demanding.
              Solo female travel in India is about balancing
              comfort and awareness.
            </p>

            <p className="mt-8">
              The locations below are not all about over-the-top
              thrill or chaos. They are about balance.
              Good stays, welcoming locals and enriched rather
              than exhaustive experiences.
            </p>
          </div>
        </div>

        {/* SAFETY SECTION */}
        <div className="mt-10 sm:mt-12">

          {/* HEADING */}
          <h2
            className="
              text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-4
            "
          >
            What Makes a Place Feel Safe for Solo Women
          </h2>

          {/* CONTENT */}
          <div className="max-w-6xl">

            <p className="text-gray-700 mb-6 leading-relaxed text-[13px] md:text-[14.5px] font-[300] text-justify">
              Security is not all about rules, or warnings.
              It often boils down to how a destination feels
              once you get there. Easy transport matters.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed text-[13px] md:text-[14.5px] font-[300] text-justify">
              Trusted drivers, hotel transfers and short travel
              times to get you from place to place take so much
              pressure off. Walkable areas also help, when cafés,
              shops and sights are located close to each other.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed text-[13px] md:text-[14.5px] font-[300] text-justify">
              Hospitality also plays a quiet but important role.
              In much of India, hotel staff are trained to be
              helpful without overbearing. Destinations accustomed
              to international visitors are generally more relaxed
              and respectful.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed text-[13px] md:text-[14.5px] font-[300] text-justify">
              These are the areas where{" "}
              <span className="font-semibold text-[#111]">
                India travel companies
              </span>{" "}
              and{" "}
              <span className="font-semibold text-[#111]">
                companies offering holiday tour packages in India
              </span>{" "}
              typically plan routes with great care, giving
              special importance to comfort and flow.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed text-[13px] md:text-[14.5px] font-[300] text-justify">
              Carefully-designed{" "}
              <span className="font-semibold">
                India travel packages
              </span>{" "}
              with utmost attention to these details make{" "}
              <span className="font-semibold">
                solo female travel in India
              </span>{" "}
              such a delight.
            </p>
          </div>

          {/* IMAGE */}
          <div
            className="
              relative

              mt-10
              sm:mt-12

              w-full

              h-[280px]
              sm:h-[420px]
              lg:h-[620px]

              rounded-sm

              overflow-hidden
            "
          >

            <Image
              src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779637804/solo_gh8veb.jpg"
              alt="Solo Female Traveller"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}