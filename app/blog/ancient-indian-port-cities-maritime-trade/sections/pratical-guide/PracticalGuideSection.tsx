"use client";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-1 md:py-2 ">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="
          text-[16px] sm:text-[20px] md:text-[22px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
          md:mb-1 
        ">
          Practical Travel Guide
        </h2>

        {/* Heading */}
        <h2 className="
          text-[14px] md:text-[16px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
        ">
          Best Time to Visit
        </h2>

        {/* Content */}
        <div className="space-y-4 text-gray-700">
          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            Generally, the months between November and February make for an enjoyable time for heritage tours because of their relative coolness and dryness. However, the months of March to May tend to be rather warm. At times, the months of the monsoon will vary with the specific coast and may affect the roads and boating.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="
          text-[14px] md:text-[16px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
        ">
          How to Reach
        </h2>

        {/* Content - List Format */}
        <div className="space-y-2 text-gray-700">
          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Lothal: Usually organised as a road trip from Ahmedabad.
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Pattanam (Muziris): Located in Ernakulam district, Kerala - can be combined with Kochi. Check the best mix of train, air, and road for your route.
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Arikamedu: Usually organised from Puducherry.
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span>  Tamluk: Arrange local transport in advance - details vary.
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span>  Bharuch / Sopara: Also require planning around local transport options.
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-2">
        {/* Heading */}
        <h2 className="
          text-[14px] md:text-[16px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
        ">
          Entry and Ticket Details
        </h2>

        {/* Content */}
        <div className="space-y-4 text-gray-700">
          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
             Do not assume that all archaeological sites will have an entrance booth where they operate as per certain timings and have sufficient facilities available for tourists. Entry fees and rules may vary; and there are some archaeological sites that have restricted access. Get in touch with the Archaeological Survey of India, state archaeology department, state tourism or the management of the site in advance.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="
          text-[14px] md:text-[16px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
        ">
          Suggested Duration
        </h2>

        {/* Content */}
        <div className="space-y-4 text-gray-700">
          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            Indicative costs per person range from ₹2,000–6,000 for a half-day guided visit, ₹5,000–14,000 for a one-day private heritage outing (private transport, guide, and food), and ₹15,000–45,000+ for a two-day premium trip with boutique hotels and personalised experiences. These are general estimates - season, group size, hotel rating, distance, and inclusions all affect pricing, while international flights and intercity transfers add significantly more.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="
          text-[14px] md:text-[16px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
        ">
          Safety
        </h2>

        {/* Content */}
        <div className="space-y-4 text-gray-700">
          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            You should wear comfortable clothing while walking with proper shoes and protect yourself from the sun with hats and sunscreen. Bring enough water and all your necessary medications during your trip.
          </p>
        </div>
      </div>

    </section>
  );
}