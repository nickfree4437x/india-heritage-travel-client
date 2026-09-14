"use client";

export default function NearbyAttractions() {
  return (
    <section className="w-full bg-white py-1 md:py-2.5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <h2 className="
          text-[16px] sm:text-[20px] md:text-[22px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
          mb-1
        ">
          Nearby Attractions Worth Combining With Mandu
        </h2>

        {/* Content - List Format */}
        <div className="space-y-2 text-gray-700">
          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Maheshwar – a tranquil town located on the banks of River Narmada famous for its fort, temples and handwoven Maheshwari sarees, only 90 minutes away.
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Indore – the commercial capital of Madhya Pradesh and entry point into Madhya Pradesh, famous for its Rajwada Palace and Lal Bagh Palace.
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Omkareshwar – a holy temple town on the banks of River Narmada, located around 2.5-3 hours from Mandu.
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> •	Ujjain – one of the holiest cities of Hindu religion and also famous for its Mahakaleshwar Jyotirlinga.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}