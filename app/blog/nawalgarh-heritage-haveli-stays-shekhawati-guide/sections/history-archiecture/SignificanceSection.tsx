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
            The Shekhawati mansions are often called an "open-air museum" and rightly so. Unlike palace 
            frescoes painted to please a king, these were created for civic purposes, revealing what 
            mattered to a wealthy Indian merchant family of the time.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            With over 200 surviving painted mansions in Nawalgarh alone, heritage organisations are now 
            considering Shekhawati's havelis as potential UNESCO sites. Conservation efforts and repurposing 
            as museums and boutique resorts are already underway at the state level.
          </p>
        </div>
      </div>
    </section>
  );
}