"use client";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-2.5 md:py-1 md:mt-0 -mt-2">

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
          Best Time to Visit Mandu
        </h2>

        {/* Content */}
        <div className="space-y-4 text-gray-700">
          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            Mandu looks its best when the monsoon hits from July to September. Full lakes and green hills with mist in the gorges make it feel special. It seems like the most romantic time so maybe that is when people should visit. 
            Sightseeing works out better in winter from October to March. Pleasant weather and cool evenings help a lot. I think that part is easier to handle for walking around. There is plenty to see anyway.
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
          How to Reach Mandu
        </h2>

        {/* Content - List Format */}
        <div className="space-y-2 text-gray-700">
          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> By Air: Nearest airport is Indore (~100 km), with flights from Delhi, Mumbai, and other major cities.
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> By Rail: Indore Junction is the main stop, followed by a 2-hour road journey to Mandu.
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> By Road (Private Car): The most comfortable option - about 2 hours Image via Dhar. Private transfers can be arranged from Indore.
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> By Bus: Available from Gangwal and Sarwate stands, but timings are limited and require planning.
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
          Entry & Ticket Details
        </h2>

        {/* Content */}
        <div className="space-y-4 text-gray-700">
          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
           The majority of the monuments in Mandu are maintained by the Archaeological Survey of India, and the entry fees charged per individual are about ₹25-40 for Indians and a relatively higher fee (₹250-600, depending on the monument one wishes to visit) for foreign tourists. The majority of the monuments are open from sunrise to sunset, and you will have to check the timings.
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
             A quick day in Mandu covers the main places but it feels short on time. With two days you can go slower and see sunrises along with sunsets. It seems that gives a better feel for the heritage side of things. Some people might not need that much time but the experience changes when you add those moments.
          </p>
        </div>
      </div>

    </section>
  );
}