"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Hotels & Accommodation: Where to Stay
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            India has this accommodation range thats kind of oddly wide. You can find converted palaces and 
            havelis, heritage mansions really, right next to big international five-star chains and also 
            those simple family-run guesthouses. If you’re doing a heritage focused itinerary, choosing to 
            sleep inside a converted fort or a palace does something extra , because some of them are still 
            partly lived in by the descendants of the families that originally built them. A normal, standard 
            hotel just can’t fully mimic that sense. Also, try to book these places well ahead of peak season 
            November to February, since the rooms are usually very limited, not just because they want it that 
            way but because the design keeps it that way.
          </p>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1786167392/pexels-navlakha-30607269_pena68.jpg"
              alt="Luxury hotels and heritage accommodation in India - palace hotels and boutique stays"
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Money Matters: Currency, UPI & Payments
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            India has this accommodation range thats kind of oddly wide. You can find converted palaces and 
            havelis, heritage mansions really, right next to big international five-star chains and also 
            those simple family-run guesthouses. If you’re doing a heritage focused itinerary, choosing to 
            sleep inside a converted fort or a palace does something extra , because some of them are still 
            partly lived in by the descendants of the families that originally built them. A normal, standard 
            hotel just can’t fully mimic that sense. Also, try to book these places well ahead of peak season 
            November to February, since the rooms are usually very limited, not just because they want it that 
            way but because the design keeps it that way.
          </p>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1786167525/pexels-ravi-roshan-2875998-8576784_pksmeq.jpg"
              alt="Money matters in India - currency UPI and payment guide for tourists"
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Health, Vaccinations & Travel Insurance
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            Try to talk with a travel health provider about 6 to 8 weeks before you leave, just so you have 
            enough time. Make sure your routine vaccinations are already up to date, and depending on where 
            you go plus your own personal health history, a clinician might suggest extra steps around 
            hepatitis A, typhoid, or malaria, especially in certain areas. Also, travel insurance that really 
            covers medical care and evacuation is essential, not optional, you know-some people forget that 
            part. As for India, private hospitals in the bigger cities are often very good, but the fees are 
            usually paid up front, and then later you get reimbursed.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1786167678/pexels-mikhail-nilov-7731402_yglged.jpg"
              alt="Health vaccinations and travel insurance for India - complete guide for tourists"
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