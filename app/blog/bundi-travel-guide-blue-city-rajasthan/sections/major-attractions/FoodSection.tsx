"use client";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-1 md:py-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
           Food & Culinary Experiences
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            The pace of life is reflected in the food of Bundi. Everyone walks slowly and steadily, and 
            that is how the food is prepared as well. On the roof you will be able to enjoy Rajasthani 
            thali with dal-baati-churma and laal maas while looking at the palace. You will notice some 
            more food preparations that are typically served when tourists visit the place.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
           When you need a different kind of food, go to the clock tower area. There are street vendors 
           who work round-the-clock serving kachori and other foods typical of the Hadoti region. The 
           taste of food here is different from what one normally comes across in Jaipur.
          </p>
        </div>
      </div>
    </section>
  );
}