"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-2 sm:py-1">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-2 md:mb-3">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            History of Humayun's Tomb: Bega Begum and the Mughal Empire
          </h2>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1784446927/pexels-sid-dalal-287424521-14379606_cbykiy.jpg"
              alt="Humayun's Tomb - commissioned by Bega Begum for Mughal Emperor Humayun with Persian architecture"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            via pexels
          </p>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-4">
            Every Every careful Humayun's Tomb guide seems to have to start with Bega Begum, also called 
            Haji Begum, the first wife and chief consort of the second Mughal emperor, Humayun. After 
            Humayun died in 1556 - he famously slipped down the stairs of his library at Purana Qila and 
            well… that was it - Bega Begum basically took over the idea of building a mausoleum, something 
            very different from what anyone had done in India before. 
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-3">
            She also chose the Persian architect Mirak Mirza Ghiyas to make the design, and the work officially 
            got moving when Emperor Akbar, Humayun’s son, supported it in the 1560s. Mirak Mirza Ghiyas did not 
            live to see the end of it, and then his son, Sayyid Muhammad, stepped in and finished the construction. 
            The tomb was ready by 1572. What made it truly noticeable was not only the size, it was the plan itself: 
            a garden-tomb organized around the Charbagh, that four-part Persian garden layout, which had never 
            before been used at this scale on the Indian subcontinent. Mughal historians and architects paid 
            attention right away. 
          </p>
        </div>
      </div>
    </section>
  );
}