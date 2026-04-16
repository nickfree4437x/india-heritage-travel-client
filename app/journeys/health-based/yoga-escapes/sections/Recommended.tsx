export default function YogaRecommended() {
  return (
    <section className="mt-20">

      <div className="max-w-3xl mx-auto bg-[#f8f8f8] rounded-xl shadow py-10 px-6">

        {/* Heading */}
        <h2 className="text-3xl font-semibold text-center mb-8">
          Recommended Tours
        </h2>

        {/* Card */}
        <div className="bg-white rounded-xl shadow overflow-hidden">

          <img
            src="/journeys/yoga/hero.jpg"
            alt="Ayurveda Journey"
            className="w-full h-64 object-cover"
          />

          <div className="p-5">
            <h3 className="text-lg font-semibold text-red-500 mb-2">
              Ayurveda Journey: Explore the Science of Wellness
            </h3>

            <p className="text-gray-600 text-sm">
              Ayurveda, a natural health system, originated more than
              3,000 years ago in India.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}