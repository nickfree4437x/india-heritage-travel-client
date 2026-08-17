"use client";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Shopping and Handicrafts in Bikaner
          </h2>
        </div>

        {/* Content - List Format */}
        <div className="space-y-2 text-gray-700 mt-2">
        
          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Bikaneri bhujia and namkeen – get them from well established local houses in the old city, for that real flavour, not just “good enough”.   
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Usta art pieces - gold-relief boxes, coasters, and camel leather items… the craft is really quite unique to Bikaner.
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Camel leather goods (mojari shoes, bags) from artisan workshops, where they actually make it.   
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Miniature paintings in the Bikaner style, a special offshoot of the wider Rajasthani school, quite different once you see it.
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Textiles and block printed fabric, shop around the old city bazaars near Kote Gate, that whole area is nice for browsing.
            </li>
          </ul>

        </div>
      </div>
    </section>
  );
}