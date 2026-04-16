"use client";

import Image from "next/image";

export default function JaipurSection() {
  return (
    <section id="jaipur" className="max-w-7xl mx-auto px-6 py-16">

      {/* 🔹 Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold mb-4">
        Jaipur – The Pink City & Heart of Rajasthan
      </h2>

      {/* 🔹 Description */}
      <p className="text-gray-700 mb-10 leading-relaxed max-w-4xl">
        One of the most visited & loved city of{" "}
        <span className="font-semibold">Rajasthan is Jaipur</span>. It is considered
        as a UNESCO World Heritage city & the heart of Rajasthan. The beautiful Pink
        city famous for its Grand forts & palaces, touristic spot & the best shopping
        site for traditional & rajasthani aesthetics.
      </p>

      {/* 🔹 Layout */}
      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT IMAGE */}
        <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg group">
          <Image
            src="/destination/golden-triangle/jaipur.jpg"
            alt="Jaipur"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition" />
        </div>

        {/* RIGHT CONTENT (Optional enhancement block) */}
        <div className="space-y-6">

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-[#8b6b3e]">
              Why Visit Jaipur?
            </h3>

            <ul className="text-gray-700 space-y-2 text-sm">
              <li>• Explore majestic forts & palaces</li>
              <li>• Experience royal Rajasthani culture</li>
              <li>• Shop authentic handicrafts & textiles</li>
              <li>• Enjoy vibrant local markets</li>
            </ul>
          </div>

          <button className="bg-[#8b6b3e] text-white px-6 py-3 rounded-full hover:bg-[#6f532f] transition">
            Explore Jaipur
          </button>

        </div>

      </div>
    </section>
  );
}