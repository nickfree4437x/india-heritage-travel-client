"use client";

import Image from "next/image";

export default function OverviewSection() {
  return (
    <section className="w-full bg-white py-1 md:py-3">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Overview: Where Is Ranakpur and Why It Matters
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            In the forested folds of the Aravalli range – an ancient system of mountains stretching across 
            the Indian sub-continent, running north-west to south-east – lies Ranakpur town in the Pali 
            district of Rajasthan State.<br/>
            About 90 km north of Udaipur city and about 160 km west-southwest of Jodhpur. Most visitors 
            treat it as a day trip destination but it really does deserve more time. Besides the famed 
            Ranakpur Jain Temple there are several other temples in the area (not all of which have been 
            repainted) along with wildlife sanctuaries, tribal villages, and some of the best tranquility-
            inducing heritage properties west of the Thar Desert.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            I’ve had the good fortune to stay here twice at Heritage Hotel Ranakpur where I was able to 
            get up very early and catch sunrise over the surrounding mountains before returning for 
            breakfast. But even if you’re just visiting for a few hours it’s worth getting out of your 
            resort room for some fresh air. This place has everything you could want for an unforgettable 
            heritage holiday adventure in India: world-class religious architecture next to some of the 
            country’s finest forest wilderness areas. You could easily spend a whole day walking around 
            the Ranakpur complex followed by another exploring the local forests while keeping an eye 
            open for wild animals!
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1788414596/amisha-nakhwa-jWa9Xh8B064-unsplash_fnc8ch.jpg"
              alt="Ranakpur location and significance - Jain temple in Aravalli hills"
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
    </section>
  );
}