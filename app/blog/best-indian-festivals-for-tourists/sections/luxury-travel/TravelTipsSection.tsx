"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-2 md:py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Family Travel Tips
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Diwali and Pongal are a bit more family friendly, with daytime happenings-food too, plus craft 
            activities that work well for children. With Holi, it’s better to look for a hotel hosted get 
            together with organic colors, and also bring along old clothes you can simply throw away after 
            , no big deal. As for the busier ones, like Durga Puja and Kumbh Mela, they tend to feel easier 
            for families if you plan to go to the pandals or the ghats in the late morning instead of the 
            very peak evening time. And please, always keep a paper copy of your hotel address with you, 
            plus the local guide phone number, just in case, especially when traveling with young children.
          </p>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1785908326/pexels-jay-baid-1420324-31158646_zbnclw.jpg"
              alt="Family travel tips for India - multi-generational tours with kids and elders"
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Solo Female Traveler Tips
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            India’s festivals are now often made with women travelers in mind, and going solo doesn’t really 
            mean you’re going without support either. Try to book women-only or small group tours when they’re 
            available, especially around Holi or those very crowded night scenes like Navratri’s Garba evenings. 
            In temple zones, dress modestly, and keep your valuables in a cross body bag. Also, use a trusted 
            pre-arranged driver, don’t just stop random transport on festival nights, it can get messy.  
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1785908244/pexels-bhavyahuja-3913941_ehbmv9.jpg"
              alt="Solo female traveler tips for India - safe and confident women exploring heritage"
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