"use client";

import Image from "next/image";

const hotels = [
  {
    city: "Delhi",
    hotel: "The Oberoi New Delhi",
    location: "Near Humayun's Tomb & Lodhi Gardens",
    luxury: "Five-Star",
    experience:
      "Rooftop dining with monument views, award-winning spa",
  },
  {
    city: "Delhi",
    hotel: "The Imperial",
    location: "Connaught Place, Central Delhi",
    luxury: "Five-Star Heritage",
    experience:
      "Colonial-era architecture, art-filled interiors",
  },
  {
    city: "Delhi",
    hotel: "Taj Palace",
    location: "Diplomatic Enclave",
    luxury: "Five-Star",
    experience:
      "Expansive grounds, fine dining, business-class comfort",
  },
  {
    city: "Agra",
    hotel: "The Oberoi Amarvilas",
    location: "600m from the Taj Mahal",
    luxury: "Ultra-Luxury",
    experience:
      "Uninterrupted Taj Mahal views from every room",
  },
  {
    city: "Agra",
    hotel: "ITC Mughal",
    location: "Fatehabad Road, Agra",
    luxury: "Five-Star",
    experience:
      "Mughal-inspired gardens and architecture",
  },
  {
    city: "Jaipur",
    hotel: "Rambagh Palace",
    location: "Former residence of the Maharaja of Jaipur",
    luxury: "Ultra-Luxury Palace",
    experience:
      "Peacock gardens, royal suites, Polo Bar",
  },
  {
    city: "Jaipur",
    hotel: "Rajmahal Palace",
    location: "Central Jaipur",
    luxury: "Boutique Luxury Palace",
    experience:
      "Designer-restored royal interiors",
  },
  {
    city: "Jaipur",
    hotel: "Fairmont Jaipur",
    location: "Near Samode Hills",
    luxury: "Five-Star Resort",
    experience:
      "Expansive resort grounds and contemporary palace design",
  },
];

export default function LuxuryHotelsSection() {
  return (
    <section className="w-full bg-white py-4 sm:py-6">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Header */}

        <div className="mb-8">

          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] mb-4">
            Best Luxury Hotels for a Golden Triangle Tour
          </h2>

          <p className="text-gray-700 text-[12px] sm:text-[13px] md:text-[14.5px] leading-relaxed font-light text-justify">
            The right hotel can transform a great trip into an unforgettable
            one. These are among the finest luxury and palace hotels across
            Delhi, Agra, and Jaipur, offering exceptional hospitality,
            heritage, and exclusive experiences.
          </p>

        </div>

        {/* Feature Image */}

        <div className="relative w-full h-[280px] sm:h-[420px] lg:h-[560px] rounded-sm overflow-hidden shadow-md mb-10">

          <Image
            src="https://res.cloudinary.com/dja5yspwr/image/upload/v1782284717/f9af2fcd5e08e8d50992b3d20e18d47f0e9ac822-3840x1840_cx3jtg.avif"
            alt="Rambagh Palace Jaipur exterior at golden hour"
            fill
            className="object-cover"
          />

        </div>

        {/* Responsive Table */}

        <div className="overflow-x-auto border border-[#e8dfd2] mb-8">

          <table className="w-full min-w-[900px]">

            <thead>

              <tr className="bg-[#faf7f3]">

                <th className="px-4 py-4 text-left text-[13px] font-semibold text-[#2c2c2c] border-b border-r border-[#e8dfd2]">
                  City
                </th>

                <th className="px-4 py-4 text-left text-[13px] font-semibold text-[#2c2c2c] border-b border-r border-[#e8dfd2]">
                  Hotel
                </th>

                <th className="px-4 py-4 text-left text-[13px] font-semibold text-[#2c2c2c] border-b border-r border-[#e8dfd2]">
                  Location
                </th>

                <th className="px-4 py-4 text-left text-[13px] font-semibold text-[#2c2c2c] border-b border-r border-[#e8dfd2]">
                  Luxury Level
                </th>

                <th className="px-4 py-4 text-left text-[13px] font-semibold text-[#2c2c2c] border-b">
                  Unique Experience
                </th>

              </tr>

            </thead>

            <tbody>

              {hotels.map((hotel, index) => (
                <tr
                  key={index}
                  className="hover:bg-[#faf7f3]/50 transition-colors"
                >

                  <td className="px-4 py-4 text-[12px] sm:text-[13px] text-gray-700 border-b border-r border-[#e8dfd2]">
                    {hotel.city}
                  </td>

                  <td className="px-4 py-4 text-[12px] sm:text-[13px] font-medium text-[#2c2c2c] border-b border-r border-[#e8dfd2]">
                    {hotel.hotel}
                  </td>

                  <td className="px-4 py-4 text-[12px] sm:text-[13px] text-gray-700 border-b border-r border-[#e8dfd2]">
                    {hotel.location}
                  </td>

                  <td className="px-4 py-4 text-[12px] sm:text-[13px] text-gray-700 border-b border-r border-[#e8dfd2]">
                    {hotel.luxury}
                  </td>

                  <td className="px-4 py-4 text-[12px] sm:text-[13px] text-gray-700 border-b">
                    {hotel.experience}
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

        {/* Highlight Box */}

        <div className="bg-[#faf7f3] p-5">

          <span className="inline-block text-[10px] uppercase tracking-[0.25em] text-[#AF956C] mb-2">
            Luxury Travel Tip
          </span>

          <p className="text-[12px] sm:text-[13px] md:text-[14px] text-gray-700 font-light leading-relaxed">
            If you're looking for the most iconic luxury stay of the entire
            Golden Triangle, The Oberoi Amarvilas in Agra and Rambagh Palace
            in Jaipur are widely regarded as two of the finest hotel
            experiences in India.
          </p>

        </div>

      </div>

    </section>
  );
}