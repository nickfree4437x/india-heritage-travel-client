// app/blogs/india-food-guide/components/TravelTipsSection.tsx

"use client";

import Image from "next/image";

export default function TravelTipsSection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">
        {/* Travel Tips */}
        <div className="max-w-6xl">
          <h2 className="
            text-[16px] sm:text-[20px] md:text-[22px]
            tracking-wide
            text-[#2c2c2c]
            font-semibold
            mb-4
          ">
            Travel Tips in India
          </h2>

          <div className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            <p>
              Choose busy stalls. Locals lining up leads to fresh
              food, not stuff sitting around collecting flies.
            </p>

            <p className="mt-4">
              Eat piping hot food. Lukewarm? Skip it.
              Heat kills bacteria.
            </p>

            <p className="mt-4">
              Skip raw vegetables and salads. Even fancy hotel
              buffets. The vegetables were rinsed with tap water.
            </p>

            <p className="mt-4">
              Ice cubes are trouble. Even in expensive restaurants.
              Please bring bottled water with the original safety
              seal intact. Many tour packages for{" "}
              <span className="font-semibold">
                top tourist places in India
              </span>{" "}
              include daily bottled water because this is so common.
            </p>

            <p className="mt-4">
              Dairy needs caution. Lassi drinks sometimes come
              with ice or dodgy milk. Cooked curries with paneer
              are okay.
            </p>

            <p className="mt-4">
              Morning chai from the street vendors gets a pass.
              The water's been boiled, so it's safe. It's worth it
              if you can sit and watch India wake up over tea.
            </p>
          </div>
        </div>

        {/* What to Avoid */}
        <div className="mt-4 sm:mt-6 max-w-6xl">
          <h2 className="
            text-[16px] sm:text-[20px] md:text-[22px]
            tracking-wide
            text-[#2c2c2c]
            font-semibold
            mb-4
          ">
            What to Definitely Avoid
          </h2>

          <div className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            <p>
              Tap water. Do not drink it, brush your teeth with it,
              or use it as a rinse. Non-negotiable.
            </p>

            <p className="mt-4">
              Pani puri and street food with uncooked water.
              They taste great, but your tummy is not acclimatized
              to local bacteria.
            </p>

            <p className="mt-4">
              Cut fruit from the vendor, as the knife might be
              rinsed with tap water. Purchase whole fruit and
              peel it yourself.
            </p>

            <p className="mt-4">
              Ice lollies from carts. Dubious water, dodgy food
              colouring, unclean storage.
            </p>

            <p className="mt-4">
              Dodgy street stalls. No customers, flies all around
              them, poor hygiene. Trust your instincts.
            </p>
          </div>
        </div>

        {/* Vegetarians and Vegans */}
        <div className="mt-4 sm:mt-8">
          <h2 className="
            text-[16px] sm:text-[20px] md:text-[22px]
            tracking-wide
            text-[#2c2c2c]
            font-semibold
            mb-4
          ">
            For Vegetarians and Vegans
          </h2>

          <div className="max-w-6xl">
            <div className="text-gray-700 mb-6 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
              <p>
                India's brilliant for plant-based eating.
                Some 30 to 40 percent of Indians are vegetarian,
                so dining out usually means plenty of options.
              </p>

              <p className="mt-4">
                You'll find many places to be purely vegetarian
                with green signs only. Vegans need to inquire
                about ghee (clarified butter) and paneer.
              </p>

              <p className="mt-4">
                There is a fair amount of ghee in North Indian
                cooking.
              </p>

              <p className="mt-4">
                South Indian cuisine relies on coconut oil,
                which is more vegan-friendly. Dal, vegetable
                curries, dosas, and idlis. You'll never go hungry.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="
            relative
            mt-6 sm:mt-8
            w-full
            h-[280px] sm:h-[420px] lg:h-[620px]
            rounded-sm
            overflow-hidden
          ">
            <Image
              src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779636762/south-india_mwajvf.jpg"
              alt="Traditional South Indian meal representing India's diverse food culture"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}