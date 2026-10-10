"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-1.5 md:py-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            The History of Khejarla Fort
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Khejarla Fort was built in 1611 AD. It was made for Thakur Gopal Das Ji. He got the Khejarla 
            jagir. This was given because of his work at the edge of Marwar. He helped defend the area 
            from Mughal raids. In Marwar courts, Khejarla was seen as an important jagir. The nobles of 
            Khejarla also had strong standing among the Rajput families in the region.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
           Most accounts describe Khejarla as a truly rich estate in its best years. It could back a big 
           admin team. There was also cavalry and camel transport. The estate had wide agricultural fields 
           as well. The thakurs of Khejarla kept the fort and its lands going for about fourteen generations. 
           After that, later caretakers still took care of more than stones. They also worked to protect 
           Rajasthani culture and writing. Because of this mix, the fort feels used and inhabited, not like 
           a set built for show.
          </p>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-3">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1787837224/12_gvnryh.jpg"
              alt="Khejarla Fort history - 17th-century Rajput fort near Jodhpur Rajasthan"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via jodhpurfortkhejarla
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
          In later years, the family changed the place into a heritage hotel. They restored parts of it 
          and strengthened the structure. They did it with care for what was already there. Visitors 
          still see thick stone walls. You can also spot carved sandstone jharokhas. The fort has 
          courtyards that once held a royal household.
        </p>
      </div>
    </section>
  );
}