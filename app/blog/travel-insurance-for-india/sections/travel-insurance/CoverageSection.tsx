"use client";
import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-2 sm:py-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[18px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            What Does Travel Insurance for India Actually Cover?
          </h2>
        </div>

        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[15px] sm:text-[16px] md:text-[18px] font-semibold text-[#2c2c2c] tracking-wide">
            Medical Coverage
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            This is basically the backbone of any policy, it’s the thing that really matters. it should 
            take care of outpatient consultations, emergency room visits, hospitalisation, surgery , and 
            the prescribed medication you might need for sudden sickness or accidental injury. Try to aim 
            for a sum insured of at least USD 50,000, and if your itinerary includes remote areas, or 
            places with high altitude, ideally go for USD 100,000.
          </p>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
                src="https://res.cloudinary.com/dja5yspwr/image/upload/v1785478619/vitaly-gariev-8WYkI3cEZm8-unsplash_elcezt.jpg"
                alt="Medical coverage for India travel - health insurance and emergency care"
                fill
                sizes="100vw"
                className="object-cover"
            />
           </div>
            <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
             Image via unsplash
            </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[15px] sm:text-[16px] md:text-[18px] font-semibold text-[#2c2c2c] tracking-wide">
            Emergency Medical Evacuation
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
             If you get seriously ill , or you get hurt somewhere that doesn’t have decent local facilities, 
             this benefit handles transport. usually it’s an air ambulance, and it gets you to the nearest 
             hospital that can actually treat you, or in some cases back to your home country. Honestly, this 
             is often the most expensive situation an uninsured traveller can run into, so don’t buy a plan 
             without it , not even “just this once”.
          </p>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
                src="https://res.cloudinary.com/dja5yspwr/image/upload/v1785478951/aman-chaturvedi-U_elDBX-QAk-unsplash_pif8ri.jpg"
                alt="Emergency medical evacuation India - air ambulance and travel insurance coverage"
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
          <h2 className="text-[15px] sm:text-[16px] md:text-[18px] font-semibold text-[#2c2c2c] tracking-wide">
           Trip Cancellation & Interruption
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-5">
            This part reimburses non-refundable costs like flights, hotels, private guides, permits, and 
            similar payments if you need to cancel , or shorten your trip because of covered reasons. 
            Think sudden illness , a family emergency, or even a natural event that wipes out your original 
            plan.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[15px] sm:text-[16px] md:text-[18px] font-semibold text-[#2c2c2c] tracking-wide">
           Flight Delay & Missed Connections
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            This is for those moments when your flight gets nudged back, and then you miss the next onward 
            leg… maybe you also had that pre-booked experience lined up already. It can help cover reasonable 
            extra spending (like meals, a place to sleep, rebooking charges ) even if the whole thing feels a 
            bit tangled.
          </p>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
                src="https://res.cloudinary.com/dja5yspwr/image/upload/v1785479115/alexey-starki-91ykdj2WQeg-unsplash_l7ervy.jpg"
                alt="Flight delay and missed connections - travel insurance coverage for India"
                fill
                sizes="100vw"
                className="object-cover"
            />
           </div>
            <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
             Image via unsplash
            </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[15px] sm:text-[16px] md:text-[18px] font-semibold text-[#2c2c2c] tracking-wide">
            Lost or Delayed Baggage
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-5">
             If your luggage is late, it reimburses essential basics, and it also gives support for loss, 
             theft, or any sort of damage, but only up to the itemised limits. Really useful if you’re 
             bringing camera gear, formalwear for a destination wedding, or trekking kit for the long 
             haul.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[15px] sm:text-[16px] md:text-[18px] font-semibold text-[#2c2c2c] tracking-wide">
           Adventure & Wildlife Activity Coverage
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            A lot of standard policies tend to quietly exclude things such as white-water rafting, high-altitude 
            hikes beyond a specific height, camel safaris across very remote desert areas, or wildlife drives on 
            open jeeps. If your plans include any of those, make sure the activity is actually listed as included 
            , or consider the proper add-on rider before you lock it in.
          </p>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
                src="https://res.cloudinary.com/dja5yspwr/image/upload/v1785479403/pexels-490714164-28157156_lh6vf7.jpg"
                alt="Adventure and wildlife activity coverage - travel insurance for India safaris and trekking"
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
          <h2 className="text-[15px] sm:text-[16px] md:text-[18px] font-semibold text-[#2c2c2c] tracking-wide">
            COVID & Infectious Disease Coverage
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify md:mb-3">
            Most 2026 policies now treat COVID-19 like any other illness, covering diagnosis, treatment and 
            quarantine-related expenses, though limits and waiting periods vary by insurer - confirm this 
            explicitly rather than assuming it is included.
          </p>
        </div>
      </div>
    </section>
  );
}