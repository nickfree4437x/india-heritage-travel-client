"use client";

import Image from "next/image";

export default function BlogExtraContentSection() {
  return (
    <section className="w-full bg-white pb-16 sm:pb-20 lg:pb-24">

      {/* SAME WIDTH AS HERO */}
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">

        {/* PACKAGES THAT FIT YOU */}
        <div className="mt-6 sm:mt-8">

          {/* HEADING */}
          <h2
            className="
              text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-4
            "
          >
            Packages That Fit You
          </h2>

          {/* CONTENT */}
          <div className="max-w-5xl">

            <p className="text-gray-700 mb-6 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
              Many of the India travel packages that appear on your
              screen may be attractive, but they are not tailored to
              each individual.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
              You might be rushed past places you care about or forced
              into long journeys you didn’t want. In contrast, a smart
              India travel company builds an itinerary with you. If
              you love nature more than the city, it gives you more
              time in the forest.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
              If heritage counts more, you linger in forts and
              palaces. You don’t feel like you’re ticking boxes. You
              feel like you’re choosing your own pace.
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
              src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779649649/Jaipur-Where-the-past-paints-the-present_yefkwy.jpg"
              alt="India Heritage"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* SAFETY SECTION */}
        <div className="max-w-5xl mt-6 sm:mt-8">

          <h2
            className="
              text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-4
            "
          >
            Safety, Trust, Backup
          </h2>

          <div className="space-y-8">

            <p className="text-gray-700 mb-6 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
              In India, there are good operators and bad operators.
              In recent months, authorities have cracked down on
              unlicensed travel operators and a few travellers became
              stranded or misled.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
              A verified India travel agency gives you vetted drivers,
              safe lodging, transparent pricing. If your flight gets
              delayed, they change the plan. You’re spared trying to
              salvage your own trip at a bus stand in the dark.
            </p>

          </div>
        </div>

        {/* SMARTER USE */}
        <div className="max-w-5xl mt-6 sm:mt-8">

          <h2
            className="
              text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-4
            "
          >
            Smarter Use of Your Money
          </h2>

          <div className="space-y-8">

            <p className="text-gray-700 mb-6 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
              You might imagine DIY is cheaper, but hidden costs will
              bite you in the end.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
              You pay more for taxis, you settle for mediocre housing,
              you take longer routes. The best India travel agency gets
              you better rates because it has relationships that have
              been built up over decades. They know which hotels are
              worth the money and which transport routes don’t take you
              for a ride through detours.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
              You spend more wisely.
            </p>

          </div>
        </div>

        {/* REAL CONFIDENCE */}
        <div className="max-w-5xl mt-6 sm:mt-8">

          <h2
            className="
              text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-4
            "
          >
            What Builds Real Confidence
          </h2>

          <div className="space-y-8">

            <p className="text-gray-700 mb-6 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
              You’ll know if you’ve found the right travel agency when
              what they tell you lines up with what you experience.
              Their details are clear. Their timing works.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
              Their guides know the streets, not just the monuments.
              And you don’t feel either rushed or misled. The people in
              charge of your journey do genuinely seem to care. You can
              sense when a company’s been doing this for a while. They
              don’t guess. They know. They don’t just take you
              somewhere but they tell you why it’s worth going.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
              That kind of experience shows through in the small things:
              a better route, a quieter time of day, a heads-up about
              what to wear or what to expect. It’s those little signals
              — quiet confidence, honest answers, no over-promising —
              that build trust.
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}