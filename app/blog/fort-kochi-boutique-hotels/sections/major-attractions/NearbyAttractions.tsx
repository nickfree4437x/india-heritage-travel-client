"use client";

export default function NearbyAttractions() {
  return (
    <section className="w-full bg-white py-1 md:py-1">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <h2 className="
          text-[16px] sm:text-[20px] md:text-[22px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
          mb-1
        ">
          Nearby Destinations
        </h2>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            Beyond Fort Kochi's heritage core, several worthwhile extensions await. The Mattancherry Spice 
            Market, within walking distance of the palace and synagogue, still trades in pepper, cardamom, 
            and ginger. Willingdon Island hosts a naval base and upscale waterfront hotels, reachable by 
            road and water. A short boat ride reaches Vypin Island's beaches and lighthouse, while Cherai 
            Beach lies an hour away for a full day of relaxation. Further afield, Alleppey's backwaters are 
            best experienced over two nights on a houseboat.
          </p>
        </div>
      </div>
    </section>
  );
}