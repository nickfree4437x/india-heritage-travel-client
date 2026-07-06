
"use client";
import Image from "next/image";

export default function MoreExperiencesSection() {
  return (
    <section className="w-full bg-white py-4">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* ELEPHANT HILL */}

        <div className="mb-4 md:mb-6">

          <h3 className="text-[15px] sm:text-[18px] font-semibold text-[#2c2c2c] mb-2">
            Elephant Hill Expedition
          </h3>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-4">
            Overlooking Narlai village is a granite hill crowned by an elephant
            statue that is believed to be more than 300 years old. Considered
            one of the most spiritually significant landmarks in the region,
            Elephant Hill offers both historical importance and breathtaking
            natural beauty.
          </p>

        </div>

        {/* RURAL JEEP SAFARI */}

        <div className="mb-4 md:mb-6">

          <h3 className="text-[15px] sm:text-[18px] font-semibold text-[#2c2c2c] mb-2">
            Rural Jeep Safari
          </h3>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14px] font-light text-justify">
            Explore the countryside around Narlai aboard an open jeep and gain
            a deeper understanding of rural Rajasthan. Journey through local
            farms, traditional villages, and hidden temples while witnessing
            everyday life unfold in one of the most authentic corners of the
            state. This experience offers a rare opportunity to connect with
            local culture beyond the usual tourist routes.
          </p>

        </div>

        {/* HORSE RIDING */}

        <div className="mb-4 md:mb-6">

          <h3 className="text-[15px] sm:text-[18px] font-semibold text-[#2c2c2c] mb-2">
            Wilderness Horse Riding
          </h3>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14px] font-light text-justify">
            Rawla Narlai is home to more than 50 magnificent Marwari horses,
            one of Rajasthan's most celebrated and distinctive breeds. Guided
            riding experiences take guests through the open landscapes of the
            Aravalli region, offering a unique perspective on the countryside.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14px] font-light text-justify">
            Whether you are an experienced rider or a complete beginner, riding
            a Marwari horse through Rajasthan's rugged terrain is an experience
            that remains memorable long after the journey ends.
          </p>

        </div>

        {/* CHAI BY THE LAKESHORE */}

        <div className="mb-4 md:mb-6">

          <h3 className="text-[15px] sm:text-[18px] font-semibold text-[#2c2c2c] mb-2">
            Chai by the Lakeshore
          </h3>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14px] font-light text-justify">
            The most basic experiences frequently turn into our most unforgettable memories.
            Guests can enjoy freshly prepared chai beside the lakeshore while
            taking in the peaceful surroundings and remarkable birdlife of the
            region. Early mornings are particularly special, especially during
            the migratory season when bird activity is at its peak.
          </p>

        </div>
        <div className="relative mt-6 w-full h-[280px] sm:h-[420px] lg:h-[560px] rounded-sm overflow-hidden shadow-md">
                  
        <Image
            src="https://res.cloudinary.com/dja5yspwr/image/upload/v1782209466/23.06.2026_15.33.44_REC_z6fjxg.png"
            alt="Luxury Dining Experience at Rawla Narlai Rajasthan"
            fill
            sizes="100vw"
            className="object-cover"
        />
        </div>
        <p className="mt-2 text-[12px] md:text-[13px] text-gray-600 font-light">
          via Rawla Narlai
        </p>
      </div>

    </section>
  );
}