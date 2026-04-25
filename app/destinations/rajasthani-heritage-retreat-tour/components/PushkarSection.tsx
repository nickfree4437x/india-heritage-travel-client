"use client";

import Image from "next/image";

export default function PushkarSection() {
  return (
    <div id="pushkar" className="max-w-5xl">

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold mb-4">
        Pushkar – Where Desert Charm Meets Holy Peace
      </h2>

      {/* Description */}
      <div className="text-gray-700 mb-6 leading-relaxed text-[15px]">
        <p>
          Pushkar is famous as one of the holiest cities of India. A journey to Pushkar is considered as the ultimate pilgrimage for Hindus that must be undertaken to attain salvation.  Pushkar Camel Fair, Held each November at the time of the Kartik Purnima (full moon), is one of India’s most highly-rated travel experiences attracting thousands of camels, horses and cattle and visited by over 400,000 people over a period of around fourteen days.
        </p>
        <p className="mt-4">
          For visitors it’s a once-in-a-lifetime opportunity to witness the colour, spectacle and carnival of one of the last great traditional melas, which brings livestock, farmers, traders and villagers from all over Rajasthan
        </p>
      </div>

      {/* Image */}
      <div className="relative w-full h-[420px] rounded-md overflow-hidden shadow-md">
        <Image
          src="/destination/heritage-tour/pushkar.jpg"
          alt="Pushkar"
          fill
          className="object-cover"
        />
      </div>

    </div>
  );
}