"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-1 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            The Story Behind the Stone: A Brief History of Jawai
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Jawai’s story is really two histories, kind of stacked on each other, like you know… one on 
            top of the other. The geological side goes back over a billion years, to Precambrian granite 
            that makes up some of the Aravalli region’s oldest bones. Wind heat and time have worked that 
            whole span, grinding and shaping the hills into the smooth boulder-strewn forms safari-goers 
            now cruise past at dawn, sort of without even thinking about it.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            Then there’s the human history. It’s much more recent, but not less important. The Jawai Dam 
            was built across the Jawai River - a tributary of the Luni - in the mid-20th century, mainly 
            to bring irrigation and drinking water to Pali and nearby villages. But what nobody really 
            accounted for was the wetland ecosystem the dam would end up making. A wetland that today 
            pulls in migratory birds and marsh crocodiles, and keeps a strong food supply in place, which 
            then supports Jawai’s leopards. Over all of that, there’s also the long presence of the Rabari 
            community, and their relationship with the resident leopards… that might be the most remarkable 
            thread of Jawai’s whole narrative, and also what the next section is about.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1787456447/mohsin-marui-XntzH6LbBjU-unsplash_ngenqr.jpg"
              alt="Jawai history - story behind the granite hills and leopard country"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            via unsplash
          </p>
        </div>
      </div>
    </section>
  );
}