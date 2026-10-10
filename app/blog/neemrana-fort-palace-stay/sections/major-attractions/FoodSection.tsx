"use client";

export default function FoodSection() {
  return (
    <section className="w-full bg-white py-1 md:py-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Food: Royal Dining in the Aravallis
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
             Meals at Neemrana Fort Palace are laid-back and plentiful, blending Continental, North Indian, and Rajasthani cuisines. You might enjoy dal-baati-churma at lunch or a grilled dinner in the evening, depending on your mood.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
           Dining often takes place on the terraces, with local artists performing in the evenings. Don't miss regional specialities like laal maas (for meat-eaters), gatte ki sabzi, and bajra rotis.
          </p>
        </div>
      </div>
    </section>
  );
}