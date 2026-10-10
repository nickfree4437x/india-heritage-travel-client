"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-1.5 md:py-3">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Overview: Welcome to the Blue City
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            The name of the town is due to the many rows of blue painted houses located on the slope 
            beneath Mehrangarh Fort. It is traditionally used to define the Brahmins and later became 
            the preferred color due to its cooling properties and insect repellency. Today, blue color 
            of the houses in Jodhpur is the main cause of its popularity and the most photographed 
            location in Rajasthan. But the town offers its visitors much more than the color of its 
            houses – it is an outdoor museum of architectural heritage of Rajput era, the town to taste 
            delicious food of the desert area and, most importantly, the entrance to some fantastic view 
            of the desert landscape of India.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            A foreign tourist visiting Rajasthan after traveling to Jaipur and Udaipur notices differences 
            between the towns and sees Jodhpur as a rough and silent town that has formed not only through 
            the stories of love of kings but also through the military history of the town.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1786764241/abhinav-tripathi-3FeeAbwIO2o-unsplash_pycvih.jpg"
              alt="Welcome to Jodhpur Blue City - blue houses and Mehrangarh Fort overview"
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