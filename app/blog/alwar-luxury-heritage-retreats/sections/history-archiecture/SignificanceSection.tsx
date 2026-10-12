"use client";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-2 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Cultural Significance
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Alwar was part of the ancient Matsya region and developed at the convergence of Rajput, 
            Mughal, and later British cultures. It also acts as a bridge between the Mewat region, 
            Shekhawati, and Braj - giving the area its distinctive cuisine, craftsmanship, and 
            celebrations.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-1">
            This blending is visible in the City Palace, its temples, and royal traditions - as well as 
            in the village life around the Aravalli hills, shaped by seasonal crops and local customs.
          </p>
        </div>
      </div>
    </section>
  );
}