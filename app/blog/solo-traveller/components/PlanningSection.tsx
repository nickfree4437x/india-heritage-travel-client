// app/blogs/solo-traveler/components/PlanningSection.tsx

"use client";

import Image from "next/image";

export default function PlanningSection() {
  return (
    <section className="w-full bg-white -mt-6">

      {/* SAME WIDTH AS HERO */}
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">


        {/* HEADING */}
        <h2
          className="
            text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-4
          "
        >
          How to Plan a Solo Trip
        </h2>

        {/* CONTENT */}
        <div className="max-w-5xl">

          <p className="text-gray-700 mb-6 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
            Stay longer in every place. If you would
            have normally stayed two nights, stay five.
            You need those extra days to acclimatise.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
            Opt for heritage stays when you have the
            choice. They help families and keep old
            buildings alive. Spend money thoughtfully.
            Eat in family-run kitchens. Buy crafts
            directly from artisans. Take a walk with
            local guides who speak from experience.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
            Customize tour packages in India with
            enterprises that understand slow travelling.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
            The best India travel agencies won’t fit ten
            stops into one day. Holiday tour packages in
            India can be moulded to fit your travel pace,
            most especially if solo female travel in India
            is a concern.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
            Personalized holiday packages can be a
            success only when you are honest about
            your style.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
            If slow mornings are important, say that.
            If you enjoy lazy afternoons, state it.
            The best India tour packages are shaped
            around you. Fewer places, longer stays.
            Three places in three weeks is a lot
            better than ten.
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
            lg:h-[760px]

            rounded-sm

            overflow-hidden
          "
        >

          <Image
            src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779641960/map_jzsihw.webp"
            alt="India travel map for planning a slow and immersive journey across India"
            fill
            className="object-cover"
          />
        </div>

        {/* BOTTOM CONTENT */}
        <div className="max-w-5xl mt-6 sm:mt-8 pb-12">

          <h2
            className="
              text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-4
            "
          >
            The Part That Stays With You
          </h2>

          <p className="text-gray-700 mb-6 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
            Slow travel in India is to let things stretch.
            A cooking class takes longer because your
            host wants you to learn the dish.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
            A neighbour waves you over. A brief stroll
            becomes an afternoon full of stories.
            These unplanned moments stay with you
            more than any monument ever will.
            India moves at its own pace.
            Once you stop fighting it, everything falls
            into place. The chaos you feared becomes
            the memory you miss.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
            Working with thoughtful operators like
            <span className="text-[#2756d8] font-semibold">
              {" "}India Heritage Travel
            </span>{" "}
            keeps the practical bits easy so you can
            give your time and attention to the country
            itself, not the logistics.
          </p>
        </div>
      </div>
    </section>
  );
}