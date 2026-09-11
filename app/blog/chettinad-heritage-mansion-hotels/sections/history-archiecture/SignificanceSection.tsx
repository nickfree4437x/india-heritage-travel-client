"use client";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-2 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Cultural Significance: Homes Built Like Temples
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Chettinad mansions were never simply residences. Every Nagarathar family has its own clan 
            temple, belonging to one of the nine clans, and the mansion's courtyard served a dual purpose - 
            hosting rituals for birth, marriage, and death. Temple grammar was deliberately applied to 
            domestic architecture.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            It is precisely this fusion of architecture and ritual practice that has kept "Chettinad, 
            Village Clusters of the Tamil Merchants" on UNESCO's tentative list of World Heritage Sites 
            since 2014.
          </p>
        </div>
      </div>
    </section>
  );
}