"use client";

export default function AyurvedaHero() {
  return (
    <section className="relative h-[90vh] w-full flex items-center justify-center">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/journeys/ayurvedic/hero.jpg"
          alt="Ayurveda Journey"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6">
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Ayurveda Journey
        </h1>

        <button className="bg-[#c9a96a] hover:bg-[#b89555] text-white px-8 py-3 rounded-full text-lg transition">
          Book Now
        </button>

      </div>
    </section>
  );
}