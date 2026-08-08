"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-2 md:py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Why India Deserves Careful Planning
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            India is not just one destination, it’s more like a continent honestly . Rajasthan’s desert forts
            , the Kerala backwaters, the Himalayan foothills, and the temple towns of Tamil Nadu-each of 
            those is kind of a whole trip by itself. They also come with their own weather patterns, cuisine, 
            and travel logistics, and it shows , because it’s not the same kind of flow you get in smaller 
            countries. Distances are huge, Delhi to Kerala feels like about the same flight time as London 
            to Cairo , so the first big planning slip that new visitors make is trying to see too much , 
            too fast.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            A good India trip plan usually stacks two or three nearby areas together , then adds breathing 
            days after the long travel stretches, and it blends major landmarks with slower, more textured 
            moments. Like pairing headline places such as the Taj Mahal or Jaipur’s City Palace with stuff 
            that lingers: a home-style Rajasthani thali, a dawn boat ride along the Ganges, or even wandering 
            through a spice bazaar with a local historian . That balance is what takes a checklist style 
            itinerary and turns it into something that actually stays in your head.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1786162744/harsh-aryan-m7DckfQ8xJ8-unsplash_pf8vit.jpg"
              alt="Why India deserves careful planning - heritage travel guide for first-time visitors"
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