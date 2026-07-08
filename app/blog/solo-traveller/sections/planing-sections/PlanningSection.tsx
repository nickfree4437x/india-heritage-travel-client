// app/blogs/solo-traveler/components/PlanningSection.tsx

"use client";

import Image from "next/image";
import Link from "next/link";

export default function PlanningSection() {
  return (
    <section className="w-full bg-white -mt-6 pb-10 md:pb-12">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">
        {/* Heading */}
        <h2 className="
          text-[16px] sm:text-[20px] md:text-[22px]
          tracking-wide
          text-[#2c2c2c]
          font-semibold
          mb-2
        ">
          How to Plan a Solo Trip
        </h2>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 mb-4 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
            Stay longer in every place. If you would
            have normally stayed two nights, stay five.
            You need those extra days to acclimatise.
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
            Opt for heritage stays when you have the
            choice. They help families and keep old
            buildings alive. Spend money thoughtfully.
            Eat in family-run kitchens. Buy crafts
            directly from artisans. Take a walk with
            local guides who speak from experience.
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
            Customize tour packages in India with
            enterprises that understand slow travelling.
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
            The best India travel agencies won't fit ten
            stops into one day. Holiday tour packages in
            India can be moulded to fit your travel pace,
            most especially if solo female travel in India
            is a concern.
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
            Personalized holiday packages can be a
            success only when you are honest about
            your style.
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
            If slow mornings are important, say that.
            If you enjoy lazy afternoons, state it.
            The best India tour packages are shaped
            around you. Fewer places, longer stays.
            Three places in three weeks is a lot
            better than ten.
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
            src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779641960/map_jzsihw.webp"
            alt="India travel map for planning a slow and immersive journey across India"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <p className="mt-2 text-[11px] md:text-[12px] text-gray-600 font-light">
          via unsplash
        </p>

        {/* Bottom Content */}
        <div className="max-w-5xl mt-4 sm:mt-6">
          <h2 className="
            text-[16px] sm:text-[20px] md:text-[22px]
            tracking-wide
            text-[#2c2c2c]
            font-semibold
            mb-2
          ">
            The Part That Stays With You
          </h2>

          <p className="text-gray-700 mb-4 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
            Slow travel in India is to let things stretch.
            A cooking class takes longer because your
            host wants you to learn the dish.
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
            A neighbour waves you over. A brief stroll
            becomes an afternoon full of stories.
            These unplanned moments stay with you
            more than any monument ever will.
            India moves at its own pace.
            Once you stop fighting it, everything falls
            into place. The chaos you feared becomes
            the memory you miss.
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
            Working with thoughtful operators like{" "}
            <Link
              href="https://www.indiaheritagetravel.com"
              className="font-[400] hover:underline text-[#8b6a3d]"
            >
              India Heritage Travel
            </Link>{" "}
            keeps the practical bits easy so you can
            give your time and attention to the country
            itself, not the logistics.
          </p>
        </div>

        <div className="mt-4 md:mt-6 bg-[#faf8f5] rounded-md p-6 sm:p-8">

          <h3 className="text-[14px] sm:text-[16px] font-semibold text-[#2c2c2c] mb-2">
            Traveling Solo in India?
          </h3>

          <p className="text-[12px] sm:text-[13px] md:text-[13px] text-gray-700 leading-relaxed font-light text-justify mb-4">
            Solo travel in India can be transformative - and we make it safe, seamless, and deeply rewarding. India Heritage Travel designs solo-friendly itineraries with trusted guides, carefully vetted stays, and local connections that let you explore with confidence and freedom.
          </p>
          <Link
            href="/contact"
            className="
              inline-flex
              items-center
              justify-center
              rounded-md
              bg-[#AF956C]
              px-6
              py-2 md:py-2.5
              text-[12px]
              sm:text-[13px]
              font-light
              text-white
              transition-colors
              duration-300
              hover:bg-[#9d8157]
            "
          >
            Plan Your Solo Journey
          </Link>
        </div>
      </div>
    </section>
  );
}