"use client";

import Image from "next/image";

export default function PushkarSection() {
  return (
    <div id="pushkar" className="w-full max-w-5xl mx-auto scroll-mt-20 md:scroll-mt-24">

      {/* Heading */}
      <h2 className="text-[16px] sm:text-[20px] md:text-[20px] lg:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-2 sm:mb-3">
        Pushkar – Spiritual Heritage & Camel Fair
      </h2>

      {/* Description */}
      <div className="text-gray-700 mb-4 sm:mb-5 md:mb-6 leading-relaxed text-[12px] sm:text-[13px] font-[300] md:text-[14px] text-justify space-y-3 sm:space-y-4">
        <p>
          Pushkar is famous as one of the holiest cities of India. A journey to Pushkar is considered as the ultimate pilgrimage for Hindus that must be undertaken to attain salvation. Pushkar Camel Fair, Held each November at the time of the Kartik Purnima (full moon), is one of India's most highly-rated travel experiences attracting thousands of camels, horses and cattle and visited by over 400,000 people over a period of around fourteen days.
        </p>
        <p>
          For visitors it's a once-in-a-lifetime opportunity to witness the colour, spectacle and carnival of one of the last great traditional melas, which brings livestock, farmers, traders and villagers from all over Rajasthan
        </p>
      </div>

      {/* Image */}
      <div className="w-full rounded-md overflow-hidden shadow-md -mb-2 md:mb-0">
        <Image
          src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779528390/pushkar_dfkyko.jpg"
          alt="Pushkar Lake and Brahma Temple with spiritual heritage in Rajasthan"
          width={1200}
          height={800}
          className="w-full h-auto max-h-[500px] object-cover"
        />
      </div>

    </div>
  );
}