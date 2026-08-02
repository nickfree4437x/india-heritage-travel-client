"use client";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-1 md:py-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <h2 className="
          text-[16px] sm:text-[20px] md:text-[22px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
          mb-1
        ">
          Why Choose India Heritage Travel
        </h2>

        {/* Content - List Format */}
        <div className="space-y-2 text-gray-700">
          
          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            Getting connected is this small but kinda important part of a smooth India trip, and honestly 
            it’s the kind of detail India Heritage Travel keeps in mind when we run a fully managed journey. 
            Guests who travel with us don’t really have to sort out airport SIM counters by themselves, or 
            stand there and guess which eSIM provider might work- our team gives connectivity guidance as 
            part of every private tour along with private chauffeur driven transport, carefully picked 
            heritage stays, and experienced local guides, so it all feels seamless.   
          </p>

          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Private chauffeur driven tours, with drivers who can assist with SIM or eSIM setup on arrival.
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Fully customized itineraries matched to each traveler’s pace and personal interests.  
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Curated stays in India’s finest heritage and luxury hotels, with dependable in-room Wi-Fi. 
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Expert local guides with deep historical and cultural knowledge, at every stop or site you visit.  
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> One single point of contact across the entire journey, coordinating with your insurer’s assistance line if ever needed, just in case.  
            </li>
          </ul>

        </div>

      </div>
    </section>
  );
}