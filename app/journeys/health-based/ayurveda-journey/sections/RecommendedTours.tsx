export default function RecommendedTours() {
  return (
    <section className="py-20 bg-[#f3f3f3]">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">
          Recommended Tours
        </h2>

        {/* Card */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">

          {/* Image */}
          <img
            src="/journeys/yoga/hero.jpg"
            alt="Yoga Tour"
            className="w-full h-[300px] object-cover"
          />

          {/* Content */}
          <div className="p-6">

            <h3 className="text-xl md:text-2xl font-semibold text-red-600 mb-4">
              Yoga Escapes: Discover Balance & Rejuvenate
            </h3>

            <p className="text-gray-700 leading-relaxed">
              Yoga is an ancient and intricate practice deeply rooted in Indian philosophy. 
              It originally served as a spiritual discipline but has evolved into a popular 
              approach for enhancing physical and mental well-being.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}