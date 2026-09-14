"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0.5 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            History of Mandu: From Military Outpost to Royal Capital
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            But Mandu existed much earlier than those palaces which later became a symbol of this town. 
            According to historical references, the importance of Mandu as a military frontier of Malwa 
            Plateau began to increase in the 11th and 12th centuries as the place was a fortified town 
            under Paramara kings as far back as the 6th century.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            The most prosperous period of Mandu was 15th century. After independence of Malwa from Delhi 
            in 1401, Dilawar Khan declared independence of Malwa and named himself as its ruler. At the 
            same time, his son Hoshang Shah decided to build his capital in Mandu, which is why he started 
            construction of different buildings there, namely Jami Masjid mosque, Ashrafi Mahal palace and 
            his mausoleum. Later on, when Mahmud Khilji and his successors ruled Malwa Sultanate, architecture 
            of Mandu developed to its best due to combination of Afghan, Persian and local Indian Hindu styles.
          </p>
        </div>

        {/* Image */}
        <div className="mb-1">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1789370267/pexels-shravankhare-10975765_jyaweu.jpg"
              alt="Mandu history - from military outpost to royal capital in Madhya Pradesh"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            via pexels
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
          But romance proved to be more durable than the other stories. In the middle of 16th century, King 
          Baz Bahadur of Mandu fell in love with Roopmati, who was a beautiful singer, and built a palace for 
          his wife in such a way that she could look at Narmada River
        </p>
      </div>
    </section>
  );
}