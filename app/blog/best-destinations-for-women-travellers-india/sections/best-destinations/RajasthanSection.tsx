"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-3 sm:py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Rajasthan: Jaipur, Udaipur and the Heritage Circuit
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2">
            If one region seems to define the whole idea of a heritage journey through India, it’s Rajasthan. 
            Jaipur, the Pink City, gives you a smooth and almost effortless start, with its City Palace, Amber 
            Fort and lively bazaars , all sitting in a fairly well-organised tourist quarter. Then there’s 
            Udaipur, arguably India’s most romantic place, curling around Lake Pichola in a way that feels 
            kind of cinematic, like a scene you’d see later. That kind of fits, because the city was founded 
            in 1559 by Maharana Udai Singh II and it has kept pulling visitors toward its white palaces, and 
            temple-lined lanes, ever since.
          </p>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[620px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1785136417/pexels-divyanshu-sujangarh-2146421119-34086724_mo6u5b.jpg"
              alt="Rajasthan heritage circuit - Jaipur Udaipur and palaces for women travellers"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via pexels
          </p>
        </div>
        
        <div className="mb-1">
          <h2 className="text-[15px] md:text-[18px] font-semibold text-[#2c2c2c] tracking-wide">
            Why It Works for Women Travellers
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2">
            Rajasthan’s tourist circuit is kinda one of the most mature things in the country: you can easily 
            find private guides, heritage hotels, and even licensed female guides. And because the whole 
            region is so popular, the hospitality staff are pretty well practised at hosting solo women, or 
            those small female groups, without much fuss .
          </p>
        </div>

        <div className="mb-1">
          <h2 className="text-[15px] md:text-[18px] font-semibold text-[#2c2c2c] tracking-wide">
            Best For
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            First-time visitors to India, honeymooners, and anyone drawn to palaces, forts and old-world grandeur.
          </p>
        </div>
        
      </div>
    </section>
  );
}