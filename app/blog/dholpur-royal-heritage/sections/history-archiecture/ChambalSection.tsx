"use client";

import Image from "next/image";

export default function ChambalSection() {
  return (
    <section className="w-full bg-white py-0 md:py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            The Chambal: Rivers, Gharials and Dolphins
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            One of the pristine rivers of the country is Chambal, and includes the National Chambal Sanctuary, 
            which was instituted in the year 1978. This sanctuary has a vast stretch of 400 km long in the 
            states of Rajasthan, Madhya Pradesh, and Uttar Pradesh. There are many species of animals 
            available in this sanctuary such as gharial that is a critically endangered crocodile species.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            One can enjoy the thrilling experience of witnessing wildlife by making a boat safari in 
            Chambal river near Dholpur. The boat service is available during day times in the morning 
            and evening; also the best time to visit this place is during dry season from the month of 
            November to June. You must confirm the timing and noise restrictions beforehand. The 
            Conservation farm at Devri takes care of both gharials and crocodiles.
          </p>

        </div>

        {/* Image */}
        <div className="mb-0">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1791973539/gharial-national-chambal_d3wzig.jpg"
              alt="Chambal River - gharials and dolphins in Dholpur's ravines"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via rajras.in
          </p>
        </div>
      </div>
    </section>
  );
}