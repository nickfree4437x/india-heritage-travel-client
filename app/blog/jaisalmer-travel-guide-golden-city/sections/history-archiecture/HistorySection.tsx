"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-1 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            History of Jaisalmer: Rajput Legacy on the Silk Route
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Jaisalmer’s story begins in 1156 CE, when Rawal Jaisal, a ruler of the Bhati Rajput clan, 
            founded the city and its hilltop fort on Trikuta Hill, replacing the older Bhati capital of 
            Lodhruva nearby. For centuries afterward, Jaisalmer thrived as a staging post on the trade 
            routes linking India with Persia, Arabia, and Central Asia - merchant caravans carrying silk, 
            spices, and opium passed through the city, and the wealth they generated built the elaborate 
            havelis that still line its lanes today.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            Jaisalmer’s story kind of starts 1156 CE , when Rawal Jaisal a ruler from the Bhati Rajput 
            clan, founded the city and that hilltop fort on Trikuta Hill, while also replacing the earlier 
            Bhati capital of Lodhruva close by. For the next few centuries, Jaisalmer seemed to keep going 
            strong, acting as a stopping place on the trade routes that connected India with Persia, Arabia 
            and Central Asia, basically. Merchant caravans rolled through, bringing along silk, spices, and 
            opium, and all that profit turned into ornate havelis which still stand along its narrow lanes now.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1786852464/pexels-luckee-bains-838142223-19438328_qttcuj.jpg"
              alt="Jaisalmer history - Rajput legacy and Silk Route heritage in Golden City"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via pexels
          </p>
        </div>
      </div>
    </section>
  );
}