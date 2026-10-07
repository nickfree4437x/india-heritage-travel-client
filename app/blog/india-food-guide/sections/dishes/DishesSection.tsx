// app/blogs/india-food-guide/components/DishesSection.tsx

"use client";

import Image from "next/image";

export default function DishesSection() {
  return (
    <section className="w-full bg-white py-4 md:py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Heading */}
        <h2 className="
          text-[16px] sm:text-[20px] md:text-[22px]
          tracking-wide
          text-[#2c2c2c]
          font-semibold
          mb-4
        ">
          Popular Indian Dishes to Try
        </h2>

        {/* Content */}
        <div className="max-w-6xl">
          <div className="text-gray-700 mb-4 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            <p>
              Butter chicken is one of India's best-known dishes, featuring chicken in a rich,
              creamy tomato-based sauce. It is generally milder than many other Indian dishes, 
              making it a familiar option for travellers who prefer less heat.
            </p>

            <p className="mt-4">
              Dosa, a crispy rice and lentil pancake from southern
              India, is filled with spiced potatoes. It's vegetarian
              and made fresh on a hot griddle directly in front of
              you. Watch them make it - that's your safety check.
            </p>

            <p className="mt-4">
              Thali is not one dish but a sampler platter of curries,
              rice, bread and dessert. A Gujarati thali, meanwhile,
              is sweeter and vegetarian. Thalis are brilliant for
              travellers who want to try everything but don't feel
              like ordering 10 dishes.
            </p>

            <p className="mt-4">
              Biryani is rice and meat layered with spices,
              slow-cooked until the ingredients merge.
              Hyderabadi biryani is most famous. Just order
              it mild if you're concerned about the heat level.
            </p>

            <p className="mt-4">
              Chole bhature combines spicy chickpea curry with deep-fried, puffed bread. It is 
              especially popular in North India and is a hearty choice for travellers looking to 
              experience classic regional cuisine.
            </p>

            <p className="mt-4">
              Street food needs caution. Samosas are usually ok,
              as they're deep fried. The same principle works with
              pakoras (vegetable fritters). High temperature kills
              bacteria. Just check the oil looks clean.
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="
          relative
          h-[280px] sm:h-[420px] lg:h-[560px]
          rounded-sm
          overflow-hidden
          mt-6
        ">
          <Image
            src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779636756/bhature_ihez4y.jpg"
            alt="Chole bhature, a popular North Indian dish of chickpea curry and fried bread"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}