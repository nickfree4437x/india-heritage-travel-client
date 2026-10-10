"use client";

import Image from "next/image";

export default function OverviewSection() {
  return (
    <section className="w-full bg-white py-1 md:py-3">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Overview: Why Kumbhalgarh Belongs on Every Rajasthan Itinerary
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            The hilltop fort complex at Kumbhalgarh contains over 360 temples, three palaces, and seven 
            fortified gates. Unlike Rajasthan's other forts, Kumbhalgarh is surrounded by the thick 
            forests of the Aravallis, now declared a wildlife sanctuary - giving it a quiet, distinct 
            character. Visitors come for its history but stay for the silence: on a calm day, you can 
            hear birds chirping, and the view from the top stretches across thirteen mountain peaks,
             reaching as far as the Thar Desert on clear days.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            Kumbhalgarh makes an excellent short break from Udaipur and a wonderful stopover between Udaipur 
            and Jodhpur - with the Ranakpur Jain temples and the tranquil Rajsamand Lake along the route. 
            India Heritage Travel often includes it in private itineraries for guests seeking a peaceful 
            heritage escape.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1788325312/pexels-hemant-singh-chauhan-639506990-39077355_lg5v0a.jpg"
              alt="Kumbhalgarh Fort - why it belongs on every Rajasthan itinerary with Aravalli views"
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