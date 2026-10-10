"use client";
import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Cultural Significance: A Living River Town
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Maheshwar’s significance is not limited to being an architecturally significant site. The Narmada 
            is one of the holiest rivers in India and the cycle of bathing, worship and evening aarti at the 
            ghats continues to remain intact for generations. The temples of the town, the handloom alleys 
            and the crematoriums on the banks of the river are located in a radius of a few hundred meters 
            of each other, making Maheshwar often compared to the more famous Varanasi.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-1">
            Ahilyabai Holkar is still a living legend in people’s memories as she was the one who ruled 
            the country, constructed many temples, and established many dharmshala in the country from 
            Kashi to Rameswaram but she ruled from this one river side town only. The legacy of Ahilyabai 
            still influences the way Maheshwar presents itself.
          </p>
        </div>

        {/* Image */}
        <div className="mb-0">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1789548942/pexels-shravankhare-5972823_swmv4i.jpg"
              alt="Maheshwar cultural significance - living river town on the Narmada with ghats and rituals"
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