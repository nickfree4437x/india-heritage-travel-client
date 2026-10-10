"use client";

import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-0 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Kumbhalgarh Travel Guide: Forts, Forests & Mountain Luxury
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Those walls at Kumbhalgarh run longer than you'd guess. Second only to the Great Wall. That fact stopped me cold the 
            first time I heard it. <br/>
            You'd think everyone would want to linger there. But most just snap their pictures and keep driving to 
            Jodhpur. This piece is for the ones who see it as more than a roadside attraction on the way from 
            Udaipur. <br/>
            Ninety minutes north puts you in the Aravalis. The mountains hide it well. What actually happens is 
            you round a bend and the fort commands the whole view. From what I've seen it kind of stays with you. 
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            The length of those walls is no joke. Turns out there's good reason to plan some real time there.
            The area is also a wildlife sanctuary that is still active today. There is a strong Rajput history 
            here too. Over time, more travelers have been visiting for the scenery. You will find luxury stays 
            among pine and dhok trees. Nights bring the sounds of wolves. The fortress walls glow at night when 
            there is a sound and light show. In this guide, you will get the site history, the architecture 
            details, wildlife notes, local food, and a sample plan for your day.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1788323321/pexels-neel-upadhyay-433316527-15400129_wh3oyv.jpg"
              alt="Discovering Kumbhalgarh - fort with 36-km wall and wildlife sanctuary"
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