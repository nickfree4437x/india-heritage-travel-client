"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-3 sm:py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-2 md:mb-3">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Night Travel and Public Places
          </h2>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-3">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1785042343/pexels-yashpal-singh-kaintura-168234599-10944911_oc6qm0.jpg"
              alt="Night safety for female travelers in India - avoiding dark streets at night"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via pexels
          </p>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            Evenings out are pretty much manageable, with just a few adjustments here and there. Try to stay 
            in well lit, fairly busy zones like hotel districts, markets , and heritage quarters after dark , 
            and instead of wandering back to where you’re staying late at night, use transport that’s been 
            booked in advance. If you bundle your plans, it also helps a lot: group activities such as a guided 
            evening food walk, a sunset boat ride arranged by the hotel, or a small group cultural show can feel 
            just as satisfying as heading out on your own, while bringing way less uncertainty along for the ride.
          </p>
        </div>
      </div>
    </section>
  );
}