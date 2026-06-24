"use client";

import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-4 md:py-8">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* INTRO CONTENT */}

        <div className="max-w-6xl mb-10">

          <p className="text-gray-700 mb-6 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            Imagine yourself waking up early, not because of an alarm clock,
            but because breakfast has been delivered directly to your suite.
            Beyond your window, the Taj Mahal slowly transforms beneath the
            morning sky, changing from soft grey to delicate pink and finally
            to glowing gold as the sun rises over Agra. There are no crowds to
            rush through, no buses waiting impatiently outside, and no
            competition for the perfect view. Your private guide and chauffeur
            are already prepared for the day ahead, allowing you to experience
            one of the world's greatest monuments entirely on your own terms.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            A few days later, your journey takes you to Jaipur. Instead of
            joining long queues at Amber Fort, you arrive through carefully
            arranged access accompanied by a historian whose expertise brings
            centuries of Rajput architecture to life. As evening falls, dinner
            is served from the terrace of a former royal residence where
            chandeliers once illuminated the courts of Rajasthan's maharajas.
            Today, the experience feels entirely personal, crafted around your
            interests, pace, and preferences.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            This is the essence of a luxury Golden Triangle tour. Luxury travel
            is not simply about five-star hotels, private vehicles, or premium
            amenities. It is about transforming the way you experience Delhi,
            Agra, and Jaipur. Every detail is designed to remove friction,
            maximize comfort, and create deeper connections with the history,
            culture, and people of India.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            Whether your interests lie in heritage hotels, exclusive cultural
            experiences, private monument visits, fine dining, or bespoke
            itineraries, a luxury Golden Triangle journey allows India's most
            iconic destinations to unfold at exactly the pace you choose.
          </p>
        </div>

        {/* FEATURE IMAGE */}
        <div className="relative w-full h-[280px] sm:h-[420px] lg:h-[560px] rounded-sm overflow-hidden shadow-md mb-10">
         <Image
            src="https://res.cloudinary.com/dja5yspwr/image/upload/v1782281524/premium_photo-1723809635838-d4c02e969f37_hvtdnq.jpg"
            alt="Luxury Golden Triangle Tour with sunrise view of the Taj Mahal from a luxury hotel suite"
            fill
            className="object-cover"
         />
        </div>

        {/* HIGHLIGHT BOX */}

        <div className=" bg-[#faf7f3] p-5">

          <span className="inline-block text-[10px] uppercase tracking-[0.25em] text-[#AF956C] mb-2">
            Luxury Travel Defined
          </span>

          <p className="text-[12px] sm:text-[13px] md:text-[14px] text-gray-700 leading-relaxed font-light text-justify">
            A luxury Golden Triangle tour isn't simply a better version of a
            standard itinerary. It is a completely different way of
            experiencing India - through private access, personalized service,
            exceptional accommodations, and unforgettable moments that place
            you closer to the country's history, culture, and heritage.
          </p>

        </div>

      </div>

    </section>
  );
}