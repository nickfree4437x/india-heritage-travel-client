"use client";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-1 md:py-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
           Food & Cuisine: What to Eat in Khejarla
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Meals at Khejarla Fort are mostly Rajasthani. You can also find Mughlai dishes. There are a 
            few continental options too. The kitchen works on site, within the property. Some staff 
            members come from families that cooked for the royal house long ago.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
           Meals at Khejarla Fort are mostly Rajasthani. You can also find Mughlai dishes. There are a 
           few continental options too. The kitchen works on site, within the property. Some staff members 
           come from families that cooked for the royal house long ago.
          </p>
        </div>
      </div>
    </section>
  );
}