"use client";
import Image from "next/image";


export default function HistorySection() {
  return (
    <section className="w-full bg-white py-1.5 md:py-3">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
           Architecture & Engineering of the Great Wall of India
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            The Kumbhalgarh fortress looks different from other fortresses owing to its sheer size. Its 
            external wall extends to cover a distance of about 36 kilometers in line with the outlines 
            of the Aravalli Hills. However, the walls of the fortress are not equally thick throughout. 
            They have an average width of 15 to 25 feet. There are claims that the wall was made to be 
            thick enough to allow a running horse on each of its eight sides.
            <br/>
            To get into the fort you use any of the seven gates namely; Aret Pol, Hulla Pol, Hanuman Pol, 
            Ram Pol, Bhairava Pol, Paghra Pol, and Nimboo Pol. The gates are built to impede any force 
            advancing towards it. Their aim is to ensure that it becomes difficult to scale up to the 
            summit.
          </p>
        </div>

        {/* Image */}
        <div className="mb-1">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1788325932/devesh-sangwan-FI48tqOQE54-unsplash_mgtqx5.jpg"
              alt="Kumbhalgarh Fort architecture - Great Wall of India with 36 km fortification"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            via unsplash
          </p>
        </div>

       <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
          Thing is the temples are everywhere along the ridges. More than 360 of them. Around three hundred 
          Jain. Rest are Hindu. And the spiritual feeling matches the fortified setup which makes sense when 
          you think about it.Trikuta Temple is hard to overlook. Tied to Brahma Vishnu and Shiva all at once.
          You'd think that'd be enough but the Vedi Temple has this form and design that stands apart.Then the 
          practical features repay a slow walk. Take the rainwater tanks. Lakhola Tank dates to Rana Lakha. 
          Granaries that could support everyone through a long siege. Watchtowers positioned for signals to 
          circle the full 36 km. So basically it was built to last.This combination of defense and all the 
          temple craft is why UNESCO marked it as having outstanding universal value. The interesting part is 
          how it all comes together without feeling forced. From what I've seen anyway.
       </p>
      </div>
    </section>
  );
}