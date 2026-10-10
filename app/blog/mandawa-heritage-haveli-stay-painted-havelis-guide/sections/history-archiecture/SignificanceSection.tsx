"use client";
import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Cultural Significance of Mandawa's Painted Havelis
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Mandawa’s havelis stand out for more than how they look. They also show how people and ideas 
            moved across time. You can see this in the way the merchant class handled the fall of Mughal 
            rule. You can also see it in the growth of British business and in the draw of faraway colonial 
            towns. Even with those outside forces, many owners still worked to keep a strong Rajasthani feel 
            in their own homes.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            In a number of havelis, you will find Ragamala paintings. They use old tales and love stories 
            to present classical music styles. In the same places, other wall panels may show something 
            very different. A family leader might be painted in Western clothes next to a brand new car.
            That mix is the reason heritage teams and preservation groups keep returning to Shekhawati’s 
            havelis. When you walk through Mandawa now, it often feels closer to reading than to sightseeing. 
            The walls seem to hold a record from two centuries of Indian life.
          </p>
        </div>

        {/* Image */}
        <div className="mb-1">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1788954840/img_0038-1_ookpco.jpg"
              alt="Cultural significance of Mandawa painted havelis - Shekhawati heritage and frescoes"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via maverickbird
          </p>
        </div>
      </div>
    </section>
  );
}