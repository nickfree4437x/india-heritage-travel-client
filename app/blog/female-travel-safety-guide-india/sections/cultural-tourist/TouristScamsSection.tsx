"use client";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-3 md:py-5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <h2 className="
          text-[16px] sm:text-[20px] md:text-[22px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
          mb-1
        ">
          Common Tourist Scams and How to Avoid Them
        </h2>

        {/* Content - List Format */}
        <div className="space-y-2 text-gray-700">
          
          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            Petty scams aimed at tourists show up in India too, basically like in most of the places that 
            get a lot of visitors, and honestly awareness neutralises almost all of them.  
          </p>

          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> When you can, book transport, guided tours and entry tickets via official websites or a trusted operator, instead of taking random offers from people hanging around transport hubs.
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> For taxis , settle the price up front, or insist on the meter, before you start moving. 
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Watch out for strangers who keep saying a monument or a shop is “closed” and then try to steer you somewhere else. it’s a well-known diversion thing. • Turn down politely any unsolicited “free” items like gifts, blessings, or those bracelets someone offers on the street, because after that they usually expect you to pay, and yeah it’s quite common. 
            </li>
          </ul>

        </div>

      </div>
    </section>
  );
}