"use client";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-2 md:py-5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <h2 className="
          text-[16px] sm:text-[20px] md:text-[22px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
          mb-1
        ">
          Overview: Your Connectivity Options in India
        </h2>

        {/* Content - List Format */}
        <div className="space-y-2 text-gray-700">
          
          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            Tourists landing in India typically choose between three main ways to get online:  
          </p>

          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Local prepaid SIM (Airtel, Jio, or Vi) - often the best price for data heavy trips, though it kinda needs in-person identity verification, so not super quick.  
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> International travel eSIM (Airalo, Holafly, Saily, and similar providers) - typically the fastest setup, because you can install it before departure, but the per GB cost is usually higher than a local SIM.    
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> International roaming on your home carrier - simplest in the sense of no extra SIM to deal with, yet it’s usually the priciest, works best for super short stays… or as a backup, just in case.
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Most independent travelers on trips of several days or longer find that a local SIM offers the best value, while an eSIM suits shorter visits or anyone who wants connectivity the moment they land.  
            </li>
          </ul>

        </div>

      </div>
    </section>
  );
}