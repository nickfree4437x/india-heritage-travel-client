"use client";

import Image from "next/image";

export default function FoodSection() {
  return (
    <section className="w-full bg-white py-1 md:py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            What to Eat
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Dining at Ranthambore's heritage hotels and luxury camps leans heavily on Rajasthani tradition - dal-baati-churma, gatte ki sabzi, and laal maas appear on menus for non-vegetarian guests, while vegetarians are well served with fresh thalis and continental options across the luxury camps. The kitchens here are accustomed to international palates and handle dietary restrictions with advance notice.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            Most accommodations arrange signature experiences like jungle breakfasts and lantern-lit bush dinners, adding a sense of theatre to mealtimes. On safaris, though, come prepared - carry water and snacks, since there are no food or drink facilities anywhere inside the park.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1792406636/images_1_oojqlh.jpg"
              alt="Ranthambore dining - dal baati churma and jungle breakfast at luxury camps"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via encrypted-tbn0
          </p>
        </div>
      </div>
    </section>
  );
}