import Image from "next/image";

export default function HealthJourneySection() {
  return (
    <section className="bg-[#f4f0ea] py-20 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <h2 className="text-center text-4xl font-semibold text-[#8b6a3d] mb-16">
          Health Based Journeys
        </h2>

        {/* Content */}

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}

          <div>

            <h3 className="text-2xl font-semibold text-[#8b6a3d] mb-6">
              Yoga Escapes: Discover Balance & Rejuvenate
            </h3>

            <p className="text-gray-700 leading-relaxed mb-8">
              Yoga is an ancient Indian practice rooted in philosophy, combining
              physical postures, breath control, meditation, and ethics. It enhances
              physical and mental well-being, reduces stress, and promotes mindfulness.
              It’s also a spiritual path for self-discovery and a cultural bridge
              between East and West. The word ‘yoga’ means ‘union’ and has a
              5,000-year history, with the foundational ‘Yoga Sutras’ written
              by Sage Patanjali in 200 CE.
            </p>

            {/* Button */}

            <button className="bg-[#9b7445] text-white px-10 py-4 rounded-lg font-medium hover:bg-[#7e5f3a] transition">
              See Itinerary
            </button>

          </div>


          {/* Right Image */}

          <div className="relative">

            <Image
              src="/yoga-retreat.jpg"
              alt="Yoga Retreat"
              width={600}
              height={400}
              className="rounded-xl shadow-lg object-cover"
            />

          </div>

        </div>

      </div>

    </section>
  );
}