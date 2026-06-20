"use client";

import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="w-full bg-white">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Taj Mahal Section */}
        <div className="mb-10">
          {/* HEADING */}
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-2">
            Top Attractions in Delhi, Agra & Jaipur
          </h2>
          <h2 className="text-[16px] sm:text-[18px] md:text-[20px] tracking-wide text-[#2c2c2c] font-semibold mb-4">
            Taj Mahal (Agra)
          </h2>

          {/* CONTENT */}          
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2">
            <strong className="font-semibold">Introduction</strong> - The Taj Mahal is a white marble mausoleum constructed by Mughal Emperor Shah
            Jahan in memory of his wife, Mumtaz Mahal, who passed away while giving birth in 1631. The
            construction period was between 1632 and 1653, involving artisans from all over the Mughal
            Empire, Persia, and even Europe. The complex comprises of the main mausoleum, a reflecting pool,
            Mughal gardens, a mosque, and a guest house in symmetrical arrangement.
          </p>
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2">
            <strong className="font-semibold">Why You Should Visit</strong> - This is not just another tourist destination; it is considered the best
            embodiment of Mughal architecture and the most architecturally perfect building of all time. The
            intricate inlay work alone (pietra dura, which means inlaying of semi-precious stones into marble)
            required several years of work by specialist craftsmen.
          </p>
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2">
            <strong className="font-semibold">Tips for Visitors</strong> - Buy your ticket online via ASI website before you arrive so as to avoid waiting in
            long lines. Security checks are quite rigorous — no food, books or large bags can be brought along
            to the site. Visiting at sunrise would mean cooler temperature and softer lighting on the white
            marble
          </p>
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            <strong className="font-semibold">Best Time</strong> - Sunrise (gates typically open around 6:00 AM) for the best light and smallest crowds;
            October through March for comfortable temperatures
          </p>

          {/* IMAGE */}
          <div className="relative w-full h-[280px] sm:h-[420px] lg:h-[560px] rounded-sm shadow-md overflow-hidden mt-6">
            <Image
              src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1781942687/taj_mahal_sunrise_ozulzc.jpg"
              alt="Taj Mahal at Sunrise, Agra – Iconic Attraction on the Golden Triangle Tour India"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Agra Fort Section */}
        <div className="mb-10">

          {/* HEADING */}
          <h2 className="text-[16px] sm:text-[18px] md:text-[20px] tracking-wide text-[#2c2c2c] font-semibold mb-4">
            Agra Fort (Agra)
          </h2>

          {/* CONTENT */}          
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2">
            <strong className="font-semibold">Overview</strong> - This enormous red sandstone fortress that lies along the banks of the river Yamuna River
            was the main residence of Mughal Emperors until 1638. There are many palaces, mosques, and
            audience halls constructed during several emperors, such as Akbar, Jahangir, and Shah Jahan.
          </p>
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2">
            <strong className="font-semibold">Reasons to go</strong> - Reasons to go The fort provides an important background to the Taj Mahal, as Shah Jahan was
            imprisoned here by his own son Aurangzeb and died looking at Taj Mahal through a marble
            balcony.
          </p>
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2">
            <strong className="font-semibold">Visiting Tips</strong> - It should be visited together with the Taj Mahal within the same day because both of
            them are located around 2.5 kilometers away. You can hire a guide who will give you information
            about different constructions of the emperors.
          </p>

          {/* IMAGE */}
          <div className="relative w-full h-[280px] sm:h-[420px] lg:h-[560px] rounded-sm shadow-md overflow-hidden mt-6">
            <Image
              src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1781942951/agra_fort_g3fvgs.jpg"
              alt="Agra Fort in Agra India – UNESCO World Heritage Site on the Golden Triangle Tour"
              fill
              className="object-cover"
            />
          </div>

          <p className="text-[#2c2c2c] leading-relaxed text-[12px] sm:text-[13px] md:text-[15px] font-[400] text-justify mt-6">
            Best time Mid-morning after the visit to the Taj Mahal during
            the early morning, as it starts getting hot around the middle of
            the day (March-June).
          </p>
        </div>

        {/* Red Fort Delhi */}
        <div className="mb-10">

          {/* HEADING */}
          <h2 className="text-[16px] sm:text-[18px] md:text-[20px] tracking-wide text-[#2c2c2c] font-semibold mb-4">
            Red Fort (Delhi)
          </h2>

          {/* CONTENT */}          
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2">
            <strong className="font-semibold">Overview</strong> - Constructed by Shah Jahan in 1648 to act as the headquarters of the Mughal dynasty
            after he shifted the capital from Agra to Delhi, the Red Fort is a huge structure built of red
            sandstone which was used by Mughals for almost two centuries as their home.
          </p>
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2">
            <strong className="font-semibold">Reasons to Go There</strong> - It is from here that the Prime Minister of India makes his Independence Day
            speech on August 15th every year. It is as much a part of modern Indian history as it is of the
            history of the Mughals. The Diwan-i-Khas had the famous Peacock Throne inside it.
            balcony.
          </p>
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2">
            <strong className="font-semibold">Tips for Visitors</strong> - Come early so that you can avoid crowds and also heat. The sound and light show
            in the evening is recommended if possible
          </p>
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2">
            <strong className="font-semibold">Best Time</strong> - Morning hours, October to March.
          </p>

          {/* IMAGE */}
          <div className="relative w-full h-[280px] sm:h-[420px] lg:h-[560px] rounded-sm shadow-md overflow-hidden mt-6">
            <Image
              src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1781943931/red_fort_delhi_pbk2jm.jpg"
              alt="Red Fort Delhi India – Historic Mughal Landmark on the Golden Triangle Tour"
              fill
              className="object-cover"
            />

          </div>
        </div>

        {/* Red Fort Delhi */}
        <div className="mb-10">

          {/* HEADING */}
          <h2 className="text-[16px] sm:text-[18px] md:text-[20px] tracking-wide text-[#2c2c2c] font-semibold mb-4">
            Qutub Minar (Delhi)
          </h2>

          {/* CONTENT */}          
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2">
            <strong className="font-semibold">Introduction</strong> - This brick tower, 73 meters tall, is the highest brick minaret in the world, which was
            built in 1192 AD by Qutb-ud-din Aibak, marking the beginning of Muslim era in Delhi. The
            complex also has Iron Pillar, whose corrosion-resistant structure has baffled metallurgists for ages.

          </p>
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2">
            <strong className="font-semibold">Reasons to Visit</strong> - This is the oldest and most impressive example of Indo-Islamic architecture of
            Delhi, and its detailed carvings demonstrate an interesting fusion of Hindu and Islamic styles.
            balcony.
          </p>
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2">
            <strong className="font-semibold">Visiting Tips</strong> - Visit in the late afternoon when light falls on the stone carvings of the complex most
            impressively. The gardens surrounding the complex offer a relaxed pace of visit.
          </p>
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2">
            <strong className="font-semibold">Best Timing</strong> - Late afternoon all year round.
          </p>

          {/* IMAGE */}
          <div className="relative w-full h-[280px] sm:h-[420px] lg:h-[560px] rounded-sm shadow-md overflow-hidden mt-6">
            <Image
              src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1781947015/qutub_minar_delhi_urmmne.jpg"
              alt="Qutub Minar Delhi India – UNESCO World Heritage Site on the Golden Triangle Tour"
              fill
              className="object-cover"
            />

          </div>
        </div>
      </div>

    </section>
  );
}