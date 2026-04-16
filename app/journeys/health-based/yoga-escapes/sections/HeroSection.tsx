export default function YogaHeroSection() {
  return (
    <section
      className="h-[70vh] bg-cover bg-center relative flex items-center justify-center"
      style={{
        backgroundImage: "url('/journeys/yoga/hero.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative text-center text-white px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Yoga Escapes
        </h1>

        <p className="max-w-2xl mx-auto mb-6 text-sm md:text-base text-gray-200">
          Reconnect your mind, body, and soul with peaceful yoga retreats across India.
        </p>

        <button className="bg-[#9b7a50] hover:bg-[#7c5f3d] transition px-6 py-3 rounded-full text-sm font-medium">
          Book Your Retreat
        </button>
      </div>
    </section>
  );
}