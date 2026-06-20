"use client";

import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="w-full bg-white">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Hidden Gems */}
        <div className="mb-10">
          {/* HEADING */}
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-2">
            Hidden Gems Along the Route
          </h2>

          {/* CONTENT */}          
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2">
            While the iconic monuments deserve their reputation, there is much more to the Golden Triangle,
            and the lesser-known sites are worth seeing by travelers making an effort to explore the less-trodden
            paths of India.
          </p>
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2">
            <strong className="font-semibold">Moonlight Garden, Mehtab Bagh, Agra</strong> - A garden located across the river from the Taj Mahal,
            providing an unobstructed view of the monument from a different angle which is less popular due to
            its distance and lack of crowds.
          </p>
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2">
            <strong className="font-semibold">Chand Baori, near Jaipur</strong> - Located about an hour outside of Jaipur in the village of Abhaneri,
            this 9th century stepwell reaches down 13 stories of mesmerizing geometric beauty that cannot even
            be captured fully on camera.
            marble
          </p>
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2">
            <strong className="font-semibold">Nahargarh Fort, Jaipur</strong> - Unlike the more crowded Amber Fort, Nahargarh stands on the edge of
            Jaipur and provides stunning views of the city that are only seen by very few people.
          </p>
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2">
            <strong className="font-semibold">Spice Market and Gali Paranthe Wali, Old Delhi</strong> - Hidden behind the chaotic Chandni Chowk
            lies a spice market where food is sold in stalls dating from the late 19th century. Among those stalls
            are the famous "street of fried bread".
          </p>
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2">
            <strong className="font-semibold">Panna Meena ka Kund, Jaipur</strong> - Smaller stepwell near Amber Fort with beautiful symmetrical
            stairways - much less popular than Chand Baori but architecturally comparable and easy to visit
            on a trip to Amber Fort early in the morning.
          </p>
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            <strong className="font-semibold">Sheroes Hangout, Agra</strong> - Café managed by acid attack victims close to East Gate of Taj Mahal;
            this is a worthy place to visit for a good cause
          </p>
        </div>

        {/* Food & Culture */}
        <div className="mb-10">

          {/* HEADING */}
          <h2 className="text-[16px] sm:text-[18px] md:text-[20px] tracking-wide text-[#2c2c2c] font-semibold mb-4">
            Food & Culture
          </h2>

          {/* CONTENT */}          
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2">
            The culinary heritage of Northern India is intrinsically linked to the Mughals of old, and the Golden
            Triangle is no exception.
          </p>
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2">
            <strong className="font-semibold">Culinary Traditions</strong> - Delhi has an outstanding street food culture in Old Delhi, offering everything
            from butter chicken (invented in Delhi at Moti Mahal) and chaat to kebabs and stuffed parathas.
            The town of Agra has its petha (translucent sweets of ash gourd) and also has its Mughlai cuisine
            (non-vegetarian).
          </p>
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2">
            <strong className="font-semibold">Experiential Activities</strong> - There is the Rajasthani Thali meal in a traditional manner, complete with
            folk music and dance performances, which is widely available in Jaipur.
          </p>
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2">
            <strong className="font-semibold">Celebrations</strong> - If the time of year permits, Diwali (October/November) brings lights and festivities in
            all three cities; on the other hand, Holi (March) is quite a colorful festival in Rajasthan. Elephant
            Festival in Jaipur (March) and Teej Festival in monsoon season in Jaipur are unique festivals of the
            region
          </p>
        </div>
      </div>

    </section>
  );
}