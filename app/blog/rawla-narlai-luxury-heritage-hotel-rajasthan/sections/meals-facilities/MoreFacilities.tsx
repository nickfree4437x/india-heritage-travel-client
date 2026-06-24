
"use client";
import Image from "next/image";

export default function MoreExperiencesSection() {
  return (
    <section className="w-full bg-white py-4">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* ELEPHANT HILL */}

        <div className="mb-10">

          <h3 className="text-[15px] sm:text-[18px] font-semibold text-[#2c2c2c] mb-4">
            Elephant Hill Expedition
          </h3>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14px] font-light text-justify mb-4">
            Overlooking Narlai village is a granite hill crowned by an elephant
            statue that is believed to be more than 300 years old. Considered
            one of the most spiritually significant landmarks in the region,
            Elephant Hill offers both historical importance and breathtaking
            natural beauty.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14px] font-light text-justify">
            The trek involves approximately 750 steps winding past ancient
            temples and sacred sites before opening up to panoramic views of
            Narlai village and the Aravalli landscape. Sunrise and sunset are
            particularly rewarding times to undertake the climb, when the
            changing light transforms the surrounding scenery.
          </p>

        </div>

        {/* RURAL JEEP SAFARI */}

        <div className="mb-10">

          <h3 className="text-[15px] sm:text-[18px] font-semibold text-[#2c2c2c] mb-4">
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

        <div className="mb-10">

          <h3 className="text-[15px] sm:text-[18px] font-semibold text-[#2c2c2c] mb-4">
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

        <div className="mb-10">

          <h3 className="text-[15px] sm:text-[18px] font-semibold text-[#2c2c2c] mb-4">
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
        <div className="relative mt-6 w-full h-[280px] sm:h-[420px] lg:h-[560px] rounded-sm overflow-hidden shadow-md mb-10">
                  
        <Image
            src="https://res.cloudinary.com/dja5yspwr/image/upload/v1782209466/23.06.2026_15.33.44_REC_z6fjxg.png"
            alt="Luxury Dining Experience at Rawla Narlai Rajasthan"
            fill
            className="object-cover"
        />

        </div>

        {/* CULTURAL SECTION */}

        <div className="bg-[#faf7f3] rounded-sm p-6">

          <span className="inline-block text-[10px] uppercase tracking-[0.25em] text-[#AF956C] mb-2">
            Cultural Experiences
          </span>

          <h3 className="text-[15px] sm:text-[18px] font-semibold text-[#2c2c2c] mb-4">
            Cultural Performances & Cookery Demonstrations
          </h3>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14px] font-light text-justify mb-4">
            Evenings at Rawla Narlai often feature performances by Manganiyar
            musicians, whose centuries-old musical traditions form an important
            part of Rajasthan's cultural heritage. Guests may also witness the
            remarkable Terah Taal dance performed by members of the Kamad
            community, where multiple cymbals attached to the dancer's body
            create a captivating rhythmic performance.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14px] font-light text-justify">
            For travelers eager to take a taste of Rajasthan home, cookery
            demonstrations introduce traditional ingredients, regional spices,
            and culinary techniques behind iconic dishes such as Dal Baati
            Churma, Ker Sangri, and Ghevar. These interactive experiences offer
            a deeper appreciation of Rajasthan's rich food culture.
          </p>

        </div>
      </div>

    </section>
  );
}