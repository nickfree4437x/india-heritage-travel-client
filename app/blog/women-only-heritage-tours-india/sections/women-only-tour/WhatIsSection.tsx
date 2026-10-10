"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-2 sm:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-2 md:mb-3">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            What Are Women-Only Heritage Tours in India?
          </h2>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1784867549/j-a-n-u-p-r-a-s-a-d-54iyBf1OyqI-unsplash_rxsr9o.jpg"
              alt="Women-only heritage tours in India - safe female travel with women guides"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via unsplash
          </p>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-4">
             A women-only heritage tour is sort of a small group or fully private route that is restricted to 
             female travelers, usually guided by a female tour manager or matched with local women guides at 
             each heritage site. It is not like a generic group package though, because the focus really stays 
             on India’s architectural and cultural inheritance- Mughal forts, Rajput palaces, UNESCO listed 
             step-wells, temple towns, and living craft communities- rather than beach stops or the whole 
             nightlife thing.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2">
            The category has grown kinda quickly, because it tackles two problems at once, like it does 
            both. It gives solo women travelers and people who are visiting for the first time a built-in 
            support network without pushing them to swap true depth for a weaker version of “luxury”, and 
            it also gives seasoned travelers a way to meander through India’s heritage circuit- Delhi, 
            Agra, Jaipur, Udaipur, Varanasi - with companions who keep pace with them, and fit their comfort 
            level. Group sizes on premium heritage tours tend to stay pretty small , often eight to fourteen 
            travelers, so palace visits, cooking classes, and artisan workshops stay close, not hurried , not 
            rushed.
          </p>
        </div>
      </div>
    </section>
  );
}