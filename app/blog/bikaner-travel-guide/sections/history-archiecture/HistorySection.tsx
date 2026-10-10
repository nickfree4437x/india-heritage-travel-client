"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-2 md:py-3.5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            History of Bikaner and the Rathore Heritage
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Bikaner story starts around 1465 CE , when Rao Bika, the fifth son of Rao Jodha (who founded 
            Jodhpur ) decided to go his own way, rather than waiting his turn on the throne. He got help 
            from his uncle Rao Kandhal, and with the blessing from the folk deity Karni Mata, Bika pushed 
            through the dry region that people then called Jangladesh , taking it away from the local Jat 
            clans. By 1488 CE , he laid the ground work for a new capital and even gave it his own name, 
            Bikaner , kind of “the settlement of Bika”, as people say.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            Then, under his descendants, Bikaner became more like a solid Rathore stronghold. Rai Singh, 
            the sixth ruler, later grew into one of Emperor Akbar’s most trusted generals in the late 
            1500s, and he used Mughal era wealth and influence to reshape the fort, so it became this 
            architectural showpiece you can still see today. The rulers of Bikaner had to manage Mughal 
            connections, deal with Rajput tensions tied to Jodhpur, and after an 1818 treaty they also 
            faced British paramountcy. Through all of that, they kept fostering one of Rajasthan’s 
            richest miniature painting traditions, and they ran the well known Bikaner Camel Corps, 
            which served quite effectively in the Boxer Rebellion and also in the First World War.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1786949580/naveen-dalal-WgWVaHAYrQQ-unsplash_pbtuup.jpg"
              alt="Bikaner history - Rathore Rajput heritage and Junagarh Fort legacy"
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