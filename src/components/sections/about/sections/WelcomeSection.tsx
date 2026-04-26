"use client";

import Image from "next/image";

export default function WelcomeSection() {
  return (
    <section id="welcome" className="space-y-16">

      {/* TEXT CONTENT */}
      <div className="max-w-4xl">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-[#9c6b2f] mb-4">
          Welcome to India Heritage Travel!
        </h2>

        {/* Sub Heading */}
        <h3 className="text-2xl md:text-3xl text-gray-700 mb-6">
          Namaste!
        </h3>

        {/* Paragraphs */}
        <div className="space-y-6 text-gray-600 leading-relaxed text-[15px] md:text-base">

          <p>
            At India Heritage Travel, we take you beyond the ordinary, crafting journeys that immerse you in India’s history, heritage, and culture. Walk through ancient forts, uncover hidden towns rich in tradition, and witness timeless rituals that have shaped this land for centuries. From the vibrant hues of Holi to the golden glow of Diwali, every festival tells a story waiting to be experienced.
          </p>

          <p>
            Here, travel is more than just exploring—it’s about finding your soul in India’s spiritualism. Feel the energy of sacred ceremonies, meditate by tranquil rivers, and connect with a way of life that brings peace and meaning.
          </p>

          <p>
            With a passion for authenticity and years of expertise, we craft personalized journeys that go beyond the usual tourist trails. Whether you seek royal grandeur, cultural depth, or an offbeat escape, we bring you experiences that make every journey unforgettable.
          </p>

        </div>

        {/* Bottom Right Line */}
        <div className="mt-8 text-right">
          <p className="text-[#9c6b2f] font-medium text-lg">
            Come, find your soul in India! ✨
          </p>
        </div>

      </div>

      {/* IMAGE CARD */}
      <div className="flex justify-center">
        <div className="relative w-full max-w-4xl h-[260px] sm:h-[320px] md:h-[400px] rounded-xl overflow-hidden shadow-lg">

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