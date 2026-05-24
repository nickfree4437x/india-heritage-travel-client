// app/blogs/india-food-guide/components/FoodIntroSection.tsx

"use client";

import Image from "next/image";

export default function FoodIntroSection() {
  return (
    <section className="w-full bg-white -mt-6">

      {/* SAME WIDTH AS HERO */}
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">

        {/* TOP PARAGRAPHS */}
        <div className="max-w-5xl">

          <div className="text-gray-700 mb-6 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
          <p 
          >
            Indian food terrifies some travellers. I get it.
            Just the spices could bring tears to your eyes
            from across the room.
          </p>

          <p className="mt-6"
          >
            But here’s what no one tells you. Most visitors
            to India who get sick don’t actually do so because
            of the food. It’s usually the water. Or ice cubes.
            Or maybe that seemingly harmless salad you thought
            was so fresh and healthy.
          </p>

          <p className="mt-6"
          >
            We’ve seen friends fall ill within three days of
            landing in Mumbai; I have seen{" "}
            <span className="font-semibold">
              solo female travellers
            </span>{" "}
            navigate the{" "}
            <span className="font-semibold">
              best tourist places in India
            </span>{" "}
            for months without a single stomach issue.
            The difference? Knowing what to nosh on and what
            to politely decline.
          </p>
          </div>
        </div>

        {/* CONTENT */}
        <div className="mt-6 sm:mt-8">

          {/* HEADING */}
          <h2
            className="
              text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-4
            "
          >
            What Makes Indian Food Different
          </h2>

          {/* DESC */}
          <div className="max-w-6xl">

            <div className="text-gray-700 mb-6 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
              <p
              >
                Indian cuisine is very different from region to
                region. North Indian food is richer and more
                dairy-laden.
              </p>

              <p
                className="mt-6
                "
              >
                South Indian cuisine has rice and coconut as the
                main constituents. For travellers, some places
                have milder alternatives that are easier on
                foreign stomachs, while others bring serious heat.
              </p>
            </div>
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
              lg:h-[560px]

              rounded-sm

              overflow-hidden
            "
          >

            <Image
              src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779636761/food-intro_vrtj2i.webp"
              alt="Indian Food"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}