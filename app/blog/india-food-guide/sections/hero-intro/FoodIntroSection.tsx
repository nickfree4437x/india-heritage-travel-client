// app/blogs/india-food-guide/components/FoodIntroSection.tsx

"use client";

import Image from "next/image";
import Link from "next/link";

export default function FoodIntroSection() {
  return (
    <section className="w-full bg-white py-2 md:py-2">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">
        {/* Top Paragraphs */}
        <div className="max-w-6xl">
          <div className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            <p>
              Indian food can seem intimidating to first-time visitors. The spices, unfamiliar dishes, 
              and wide variety of regional cuisines can make it difficult to know what to order.
            </p>

            <p className="mt-3">
              But here's what many travellers don't realise. Food safety in India is often about more 
              than the food itself. Drinking water, ice, raw salads, and food handling can all matter 
              when choosing what to eat.
            </p>

            <p className="mt-3">
              We've seen friends fall ill within three days of
              landing in Mumbai; I have seen{" "}
              <Link
                href="/solo-women-travel"
                className="font-[400] hover:underline text-[#8b6a3d]"
              >
                solo female travellers
              </Link>{" "}
              navigate the best tourist places in India
              for months without a single stomach issue.
              The difference? Knowing what to nosh on and what
              to politely decline.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="mt-6 sm:mt-8">
          {/* Heading */}
          <h2 className="
            text-[16px] sm:text-[20px] md:text-[22px]
            tracking-wide
            text-[#2c2c2c]
            font-semibold
            mb-2
          ">
            What Makes Indian Cuisine Unique
          </h2>

          {/* Description */}
          <div className="max-w-6xl">
            <div className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
              <p>
                Indian cuisine is very different from region to
                region. North Indian food is richer and more
                dairy-laden.
              </p>

              <p className="mt-3">
                South Indian cuisine has rice and coconut as the
                main constituents. For travellers, some places
                have milder alternatives that are easier on
                foreign stomachs, while others bring serious heat.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="
            relative
            mt-4 sm:mt-6
            w-full
            h-[280px] sm:h-[420px] lg:h-[560px]
            rounded-sm shadow-md
            overflow-hidden
          ">
            <Image
              src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779636761/food-intro_vrtj2i.webp"
              alt="Traditional Indian dishes representing the diverse regional cuisine of India"
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