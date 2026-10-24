"use client";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-2 md:py-3">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Cultural Significance
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-1">
             Bishnupur is an embodiment of the Vaishnava renaissance of Bengal; the worship of Krishna 
             in clay form. The festivals held in the region, especially the Bishnupur Mela at the end of 
             December and the Ras festival, ensure that the temples continue being used for worship rather 
             than being turned into mere monuments.
          </p>
        </div>
      </div>
    </section>
  );
}