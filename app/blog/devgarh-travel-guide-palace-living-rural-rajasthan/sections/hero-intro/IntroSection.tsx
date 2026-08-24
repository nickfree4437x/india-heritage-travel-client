"use client";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Devgarh Travel Guide: Palace Living in Rural Rajasthan
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            This Devgarh travel guide is for travelers who have already seen Rajasthan's postcard version 
            and want the one underneath it. Devgarh is a small hill town in southern Rajasthan, built around 
            a seventeenth-century palace - Deogarh Mahal - still owned by the family that built it. No queues, 
            no touts, no traffic - just a sandstone fort catching the morning light over the Aravalli hills, 
            and a stillness that Jaipur and Jodhpur can no longer offer. For those who want to understand how 
            royal Rajasthan actually lived - not just performed for visitors - Devgarh is where that story is 
            still being told.
          </p>
        </div>
      </div>
    </section>
  );
}