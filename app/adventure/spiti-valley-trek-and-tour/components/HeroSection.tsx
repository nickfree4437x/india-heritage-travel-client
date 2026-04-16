export default function HeroSection() {
  return (
    <section className="relative h-[80vh] w-full flex items-center justify-center text-center">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/adventure/spiti/hero.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Spiti Valley Trek and Tour
        </h1>

        <button className="bg-[#9b7a50] hover:bg-[#7e623f] px-8 py-3 rounded-full text-lg font-medium transition">
          Book Now
        </button>
      </div>
    </section>
  );
}