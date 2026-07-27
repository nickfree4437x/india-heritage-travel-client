"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-1 sm:py-1">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Best Destinations for Women Travellers in India
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-4">
             Ask ten women who’ve travelled enough to know better, where to go in India, and you’ll still 
             hear ten different answers that all sound convincing- like, weirdly convincing. And that part, 
             more than any one ranking that you might skim, is kind of the real story here. The best places 
             for women travellers in India aren’t really a neat, short list you can pin up and forget. 
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-4">
            They’re more like regions that have grown, each in their own subtle way, the right kind of 
            infrastructure, hospitality, and daily ease. The point is that you can focus on the experience, 
            not on the logistics, even if you’re in unfamiliar territory.  At India Heritage Travel, we 
            build itineraries around the same question, every week, for solo travellers who are doing their 
            very first trip to India, for mothers and daughters who want to go together but keep it light, 
            easy , and not too demanding. We also think about couples who would rather have a route planned 
            with care but with just enough breathing room so you can wander your own way, a bit. Below is 
            our candid shortlist, really-places that keep delivering the best mix of safety, culture, comfort, 
            and those unforgettable little scenes you still replay later in your head. We also add the 
            practical details you need so you can decide between them without guesswork.
          </p>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1785123680/pexels-tanmoy-pal-3640736-19195635_wtkkhw.jpg"
              alt="Best destinations for women travellers in India - safe cities and cultural experiences 2026"
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