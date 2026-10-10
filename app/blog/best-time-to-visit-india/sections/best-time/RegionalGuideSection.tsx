"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0 sm:py-3">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[18px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Best Time to Visit India by Region
          </h2>
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            Since India has deserts, coastlines, and the Himalaya peaks all in one country, the honest answer 
            about “when should I go” really depends more on where than on when… like, I mean, location does 
            most of the talking.
          </p>
        </div>

        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[15px] sm:text-[16px] md:text-[18px] font-semibold text-[#2c2c2c] tracking-wide">
            Best Time to Visit Rajasthan
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            Winter , from November and through February, is really the best time to tour Rajasthan. The days 
            are pleasantly warm and clear, the nights get crisp enough for a bonfire on a palace lawn, and 
            the desert heat that usually turns up in April through June stays away for now. This is also when 
            Rajasthan’s festival season feels at its busiest, with the well known Pushkar Camel Fair right 
            there in the mix.
          </p>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
                src="https://res.cloudinary.com/dja5yspwr/image/upload/v1786334048/pexels-sanjiv-kumar-singh-535147289-38068052_xxtlxh.jpg"
                alt="Best time to visit Rajasthan - October to March for palaces and desert heritage"
                fill
                sizes="100vw"
                className="object-cover"
            />
           </div>
            <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
             Image via pexels
            </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[15px] sm:text-[16px] md:text-[18px] font-semibold text-[#2c2c2c] tracking-wide">
            Best Time to Visit Delhi and Agra (the Golden Triangle)
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            For a Golden Triangle tour in India, the best stretch is usually October to March, because Delhi 
            air feels cleaner and Agra Taj Mahal is shot with those more blue skies ,not that summer kind of 
            haze. But around late December and January you can get thick morning fog, which sometimes pushes 
            back early flights, so if someone’s got a strict timetable it’s smarter to lean toward November, 
            February or March instead.
          </p>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
                src="https://res.cloudinary.com/dja5yspwr/image/upload/v1786334246/pexels-abdul-raheem-325933398-17477652_mgiupk.jpg"
                alt="Best time to visit Golden Triangle - Delhi Agra Jaipur October to March cool weather"
                fill
                sizes="100vw"
                className="object-cover"
            />
           </div>
            <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
             Image via pexels
            </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[15px] sm:text-[16px] md:text-[18px] font-semibold text-[#2c2c2c] tracking-wide">
           Best Time to Visit Kerala
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-5">
            Kerala kind of gives a reward to two really different kinds of travelers, at two very different 
            moments too. For the classic backwater cruise vibe, plus beach time and even wildlife spotting 
            around Periyar, November to February is usually the sweet spot for visiting Kerala, since you 
            get drier days and that comfy level of humidity. But for Ayurvedic, wellness, and “reset” travelers, 
            it’s the monsoon stretch from June through August that’s often seen as more therapeutically ideal. 
            Local practitioners say that the season’s humidity is believed to help the body take in traditional 
            oils, and various treatments a bit better. On top of that, resort rates commonly drop well under 
            what you’d pay during winter pricing.
          </p>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
                src="https://res.cloudinary.com/dja5yspwr/image/upload/v1786334354/pexels-suman-boipai-143965246-34588372_lcipx6.jpg"
                alt="Best time to visit Kerala - backwaters and beaches in winter December to February"
                fill
                sizes="100vw"
                className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via pexels
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[15px] sm:text-[16px] md:text-[18px] font-semibold text-[#2c2c2c] tracking-wide">
           Best Time to Visit the Himalayas and Ladakh
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            The best time to visit the Himalaya kind of breaks down by altitude. Places like Himachal Pradesh 
            and Uttarakhand, with their hill towns such as Shimla, Manali, Rishikesh, Nainital, feel the most 
            alive from March to June then again, from September through November. Ladakh is sort of a special 
            case, its high passes are usually snowbound and closed for most of the year, so late May to 
            September is effectively the only real window , which means you should plan early, especially 
            because it’s such a remote area.
          </p>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
                src="https://res.cloudinary.com/dja5yspwr/image/upload/v1786334496/pexels-rmnshukla-38087449_anaipp.jpg"
                alt="Best time to visit Himalayas and Ladakh - May to September for trekking and mountain passes"
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[15px] sm:text-[16px] md:text-[18px] font-semibold text-[#2c2c2c] tracking-wide">
            Best Time to Visit Goa and the Beaches
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-5">
             Goa’s beach season runs from November, through February, when the water is comparatively calm, 
             the skies stay clear and somehow the whole place is in the Christmas New Year mood, like the 
             state keeps celebrating nonstop. Once April rolls in, the heat and humidity really start to 
             press in, before the monsoon even shows up. Then in July and August, most beach shacks are 
             closed entirely, quite abruptly, as if the season just flips off.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
                src="https://res.cloudinary.com/dja5yspwr/image/upload/v1785137424/pexels-j-singh-166004985-10898929_bbhchi.jpg"
                alt="Goa beaches and solo travel - safe coastal destination for women travellers"
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