"use client";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-0 md:py-2">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="
          text-[16px] sm:text-[20px] md:text-[22px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
          md:mb-2
        ">
          Types of Indian Tourist Visas Explained
        </h2>

        {/* Heading */}
        <h2 className="
          text-[14px] md:text-[16px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
        ">
          30-Day e-Tourist Visa
        </h2>

        {/* Content */}
        <div className="space-y-4 text-gray-700">
          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            A double-entry visa designed for short leisure trips, valid for 30 days from the date of arrival. 
            It's the most economical option and suits travellers on a single, well-defined itinerary.
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
          1-Year e-Tourist Visa
        </h2>

        {/* Content */}
        <div className="space-y-4 text-gray-700">
          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            A multiple-entry option, valid for 12 months from the date your visa is issued. It works best 
            if you’re planning more than one trip to India during the year, or maybe a longer, multi-stage 
            route with exits, and then re-entries later.
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
          5-Year e-Tourist Visa
        </h2>

        {/* Content */}
        <div className="space-y-4 text-gray-700">
          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            A multiple-entry option, valid for 12 months from the date your visa is issued. It works best 
            if you’re planning more than one trip to India during the year, or maybe a longer, multi-stage 
            route with exits, and then re-entries later.
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
          Regular (Embassy) Tourist Visa
        </h2>

        {/* Content */}
        <div className="space-y-4 text-gray-700">
          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            This is still needed for travellers who can’t use the e-Visa, or if you need a validity, or an 
            entry setup that the e-Visa simply doesn’t provide. It can also apply if you’re using a passport 
            type not accepted online. In that case, the process is in person or via courier, through an embassy 
            , a consulate , or a handled visa centre like VFS Global, or BLS International.
          </p>
        </div>
      </div>
    </section>
  );
}