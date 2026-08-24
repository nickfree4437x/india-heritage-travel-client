"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0 md:py-1">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Luxury Palace Hotels and Desert Experiences
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            The hospitality of Jodhpur has few equals anywhere in India. The Taj Umaid Bhawan Palace Hotel 
            is still the flagship hotel of the city, providing its guests with the feeling of being residents 
            in a living palace of the royalties. Apart from the palace hotels, there are many restored havelis 
            and boutique heritage hotels located in the old town that can provide views of the fort from their 
            rooftops at a much lesser price than what the palace hotels charge. Those who want a desert break 
            can opt for luxury tented camps that are located outside the city where one can enjoy a safari ride 
            in a camel or a jeep along with some excellent dining experience outdoors.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1786766832/pexels-emotionslocker-2491830_ietp0v.jpg"
              alt="Luxury palace hotels and desert experiences Jodhpur - Umaid Bhawan and Thar Desert camps"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            via pexels
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 md:mt-3.5 mt-2">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Romantic and Honeymoon Travel in Jodhpur
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            Thanks to the candle-lit palaces, rooftop restaurants surrounded by the flood-lit fort and 
            heritage walks in the old city during golden hours, Jodhpur has gradually emerged as one of 
            the most romantic cities of Rajasthan. Couples usually take a stay at the palace hotel along 
            with the visit to the fort’s ramparts during the sunset hours, which is organized after the 
            closing of the fort in public hours by certain tour operators, followed by the dinner in the 
            candle lit courtyard of the heritage havelis.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1786766987/pexels-fotographiya-wedding-photography-823737813-25742763_vfomsi.jpg"
              alt="Romantic and honeymoon travel Jodhpur - palace hotels and desert sunsets"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            via pexels
          </p>
        </div>
      </div>
    </section>
  );
}