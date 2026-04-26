"use client";

import Image from "next/image";

const vehicles = [
  {
    name: "Toyota Innova Crysta",
    image: "/rent-car/innova-interior.jpg",
    desc: "The Toyota Innova is a fantastic choice, combining good looks, comfortable interiors, and top-notch safety features for your travels.",
    capacity: "4 Guests + Driver + Guide",
  },
  {
    name: "Toyota Etios",
    image: "/rent-car/etios-interior.jpg",
    desc: "Big on space, safety, and value for your money – a go-to pick for travelers.",
    capacity: "3 Guests + Driver + Guide",
  },
  {
    name: "Swift Dzire",
    image: "/rent-car/dzire-interior.jpg",
    desc: "Spacious, safe, and budget-friendly – the go-to choice for travelers.",
    capacity: "3 Guests + Driver + Guide",
  },
  {
    name: "Bigger Vehicle - Tempo Traveller",
    image: "/rent-car/tempo-interior.jpg",
    desc: "The perfect choice for extended trips, offering comfort and amenities.",
    capacity: "10 Guests + Driver + Guide",
  },
  {
    name: "Luxury Bus",
    image: "/rent-car/bus-interior.jpg",
    desc: "Perfect for families and groups with supreme comfort.",
    capacity: "15 Guests + Driver + Guide",
  },
];

export default function VehicleSection() {
  return (
    <section className="bg-[#f8f6f2] py-20 px-6">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Heading */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-semibold text-[#9c6b2f]">
            Explore Our Range Of Vehicles
          </h2>

          <p className="text-gray-600 leading-relaxed">
            We provide a one-stop solution for your travel needs, ensuring comfort, safety, and premium experience.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-10">

          {vehicles.map((v, i) => (
            <div
              key={i}
              className="bg-white border border-[#e5d3b3] rounded-xl p-4 shadow-sm hover:shadow-md transition"
            >

              {/* IMAGE SECTION */}
              <div className="relative rounded-lg overflow-hidden">

                {/* MAIN IMAGE */}
                <div className="relative w-full h-52">
                  <Image
                    src={v.image}
                    alt={v.name}
                    fill
                    className="object-cover"
                  />
                </div>

              </div>

              {/* CONTENT */}
              <div className="text-center mt-4 space-y-3">

                <h3 className="text-lg font-semibold text-[#9c6b2f]">
                  {v.name}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {v.desc}
                </p>

                <p className="text-sm text-[#9c6b2f] font-medium">
                  {v.capacity}
                </p>

                <button className="mt-2 bg-[#9c6b2f] text-white px-5 py-2 rounded-md text-sm hover:bg-[#7a5323] transition">
                  Book Now
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}