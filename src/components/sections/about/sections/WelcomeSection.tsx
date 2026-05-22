"use client";

import Image from "next/image";

export default function WelcomeSection() {
  return (
    <section id="welcome" className="space-y-16">

      {/* TEXT CONTENT */}
      <div className="max-w-4xl">

        {/* Heading */}
        <h2 className="text-[22px] sm:text-[26px] md:text-[28px]
              font-semibold
              text-[#8b6a3d]
              tracking-wide
              mb-4">
          Welcome to India Heritage Travel!
        </h2>

        {/* Sub Heading */}
        <h3 className="text-[20px] sm:text-[24px] md:text-[26px] text-gray-600 font-[300] mb-3">
          Namaste!
        </h3>

        {/* Paragraphs */}
        <div className="text-gray-700 mb-6 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-[300] text-justify">

          <p>
            At India Heritage Travel, we take you beyond the ordinary, crafting journeys that immerse you 
            in India’s history, heritage, and culture. Walk through ancient forts, uncover hidden towns 
            rich in tradition, and witness timeless rituals that have shaped this land for centuries. 
            From the vibrant hues of Holi to the golden glow of Diwali, every festival tells a story 
            waiting to be experienced.
          </p>

          <p className="mt-6">
            Here, travel is more than just exploring—it’s about finding your soul in India’s spiritualism. 
            Feel the energy of sacred ceremonies, meditate by tranquil rivers, and connect with a way of 
            life that brings peace and meaning.
          </p>

          <p className="mt-6">
            With a passion for authenticity and years of expertise, we craft personalized journeys that go 
            beyond the usual tourist trails. Whether you seek royal grandeur, cultural depth, or an offbeat
             escape, we bring you experiences that make every journey unforgettable.
          </p>

        </div>

        {/* Bottom Right Line */}
        <div className="mt-5 text-right">
          <p className="text-[#9c6b2f] font-medium text-lg">
            Come, find your soul in India! ✨
          </p>
        </div>

      </div>

      {/* IMAGE CARD */}
      <div className="flex justify-center">
        <div className="relative w-full max-w-4xl h-[260px] sm:h-[320px] md:h-[480px] rounded-md overflow-hidden shadow-md">

          <Image
            src="/about/welcome.jpg" // 👈 apni image yaha daal
            alt="Welcome"
            fill
            className="object-cover"
          />

        </div>
      </div>

    </section>
  );
}