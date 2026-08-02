"use client";

import Image from "next/image";

export default function WelcomeSection() {
  return (
    <section id="welcome" className="space-y-6 md:space-y-8">
      {/* Text Content */}
      <div className="max-w-4xl">
        <h2 className="
          text-[18px] sm:text-[20px] md:text-[24px]
          font-semibold
          text-[#8b6a3d]
          tracking-wide
          mb-1
        ">
          Welcome to India Heritage Travel!
        </h2>

        <h3 className="
          text-[14px] sm:text-[16px] md:text-[18px]
          text-gray-600
          font-[300]
        ">
          Namaste!
        </h3>

        <div className="
          text-[#5f5f5f]
          text-[12px] sm:text-[13px] md:text-[14px]
          font-light
          leading-relaxed
          text-justify
        ">
          <p>
            At India Heritage Travel, we take you beyond the ordinary, crafting journeys that immerse you 
            in India's history, heritage, and culture. Walk through ancient forts, uncover hidden towns 
            rich in tradition, and witness timeless rituals that have shaped this land for centuries. 
            From the vibrant hues of Holi to the golden glow of Diwali, every festival tells a story 
            waiting to be experienced.
          </p>

          <p className="mt-2 md:mt-3">
            Here, travel is more than just exploring - it's about finding your soul in India's spiritualism. 
            Feel the energy of sacred ceremonies, meditate by tranquil rivers, and connect with a way of 
            life that brings peace and meaning.
          </p>

          <p className="mt-2 md:mt-3">
            With a passion for authenticity and years of expertise, we craft personalized journeys that go 
            beyond the usual tourist trails. Whether you seek royal grandeur, cultural depth, or an offbeat
            escape, we bring you experiences that make every journey unforgettable.
          </p>
        </div>

        {/* Bottom Right Line */}
        <div className="mt-2 md:mt-3 text-right">
          <p className="text-[#9c6b2f] font-medium text-[14px] sm:text-[15px] md:text-[16px]">
            Come, find your soul in India! ✨
          </p>
        </div>
      </div>

      {/* Image */}
      <div className="flex justify-center">
        <div className="relative w-full max-w-4xl h-[260px] sm:h-[320px] md:h-[480px] rounded-md overflow-hidden shadow-md">
          <Image
            src="https://res.cloudinary.com/dhfsyt4x9/image/upload/f_auto,q_auto,w_1200/v1779617809/welcome_gjbjt8.jpg"
            alt="India Heritage Travel showcasing authentic cultural experiences across India"
            fill
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}