"use client";

import Image from "next/image";

export default function FoodSection() {
  return (
    <section className="w-full bg-white py-4 sm:py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] leading-tight mb-2">
          Food and Local Experiences in Agra
        </h2>

        <p className="text-[12px] sm:text-[13px] md:text-[14.5px] text-gray-700 leading-relaxed font-light text-justify mb-2 md:mb-4">
          While the Taj Mahal dominates every Agra itinerary, the city also
          rewards visitors who take time to explore its food culture and
          traditional neighbourhoods. Agra's culinary identity extends
          beyond Mughal cuisine and includes several local specialties that
          have become closely associated with the city itself.
        </p>

        {/* Image */}
        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] sm:h-[420px] lg:h-[560px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1783071312/pexels-aarti-krishnan-365176-984534_tq4qk8.jpg"
              alt="A plate of Agra's famous petha sweets alongside bedai and aloo sabzi"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light">
            Image via pexels
          </p>
        </div>

        {/* Food Highlights */}
        <div className="space-y-4">
          <div>
            <h3 className="text-[18px] sm:text-[22px] font-semibold text-[#2c2c2c] mb-1">
              Petha
            </h3>

            <p className="text-[12px] sm:text-[13px] md:text-[14.5px] text-gray-700 leading-relaxed font-light text-justify">
              Agra's most famous sweet is undoubtedly{" "}
              <strong>Petha</strong>, a translucent confection made from
              ash gourd and cooked in sugar syrup. Available in numerous
              varieties, it has become one of the city's signature foods.
              For the most authentic experience, purchase petha from a
              traditional sweet shop in the old city rather than from
              airport souvenir counters.
            </p>
          </div>

          <div>
            <h3 className="text-[18px] sm:text-[22px] font-semibold text-[#2c2c2c] mb-1">
              Bedai Breakfast
            </h3>

            <p className="text-[12px] sm:text-[13px] md:text-[14.5px] text-gray-700 leading-relaxed font-light text-justify">
              Another local favourite is{" "}
              <strong>Bedai</strong>, a deep-fried bread typically served
              with spicy potato curry. It remains one of the most popular
              breakfast dishes in Agra and is commonly enjoyed by locals in
              the morning before the city becomes busy with visitors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}