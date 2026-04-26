"use client";

import Image from "next/image";

export default function LiveSection() {
  return (
    <section id="live" className="space-y-10">

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold text-[#9c6b2f]">
        See us live
      </h2>

      {/* Profile Info */}
      <div className="flex items-start gap-4">

        {/* Logo */}
        <div className="w-20 h-20 relative">
          <Image
            src="/logos/logo2.png" // 👈 logo
            alt="logo"
            fill
            className="object-contain"
          />
        </div>

        {/* Text */}
        <div>
          <p className="font-semibold text-lg">indiaheritagetravel</p>
          <p className="text-gray-600 text-sm leading-relaxed max-w-3xl">
            Namaste🙏 Experience India in Unparalleled Luxury✨ Luxury India Tours | Tailored Itineraries | Cultural Immersion Plan your dream India trip now!👇
          </p>
        </div>

      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        {[
          "/about/live1.jpg",
          "/about/live2.jpg",
          "/about/live3.jpg",
          "/about/live4.jpg",
        ].map((img, i) => (
          <div
            key={i}
            className="relative w-full h-48 md:h-64 overflow-hidden rounded-md"
          >
            <Image
              src={img}
              alt="live"
              fill
              className="object-cover hover:scale-105 transition duration-300"
            />
          </div>
        ))}

      </div>

      {/* Buttons */}
      <div className="flex items-center justify-center gap-4">

        {/* Load More */}
        <button className="px-5 py-2 bg-gray-800 text-white rounded-md text-sm hover:bg-black transition">
          Load More
        </button>

        {/* Instagram */}
        <button className="px-5 py-2 bg-[#3b82f6] text-white rounded-md text-sm hover:bg-[#2563eb] transition flex items-center gap-2">
          📷 Follow on Instagram
        </button>

      </div>

    </section>
  );
}