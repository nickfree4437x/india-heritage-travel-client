"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function ChooseAdventure() {

  const [open, setOpen] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpen(open === index ? null : index);
  };

  return (
    <section className="bg-[#f2ede6] py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-[#8b6a3d] mb-4">
            Choose Your Adventure
          </h2>

          <p className="text-lg text-[#8b6a3d] tracking-wide">
            Experience The Beauty And Diversity Of India With Our Unforgettable Tours!
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Column 1 */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">
              The Royal Rajasthan
            </h3>

            <div className="bg-white rounded-xl p-6 shadow">
              <h4 className="font-semibold mb-4">
                Rajasthani Heritage Retreat Tour
              </h4>

              <div className="relative rounded-lg overflow-hidden mb-4">
                <Image
                  src="/rajasthan.jpg"
                  alt="Rajasthan Tour"
                  width={400}
                  height={260}
                  className="object-cover w-full h-[200px]"
                />

                <div className="absolute inset-0 flex items-center justify-center text-white font-semibold text-lg">
                  Days: 16
                </div>

                <div className="absolute bottom-3 right-4 text-white underline text-sm cursor-pointer">
                  See Itinerary
                </div>
              </div>

              <p className="text-gray-600 text-sm">
                Discover Rajasthan’s culture and history in its palaces,
                forts, and warm hospitality.
              </p>
            </div>

            {/* Accordion */}
            <div className="mt-6 space-y-3">
              {[
                "Mystical North India Discovery Tour",
                "Royal Rajasthan & Sacred Ganges Tour",
                "A Journey through Heritage & Wildlife"
              ].map((item, index) => (
                <button
                  key={index}
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center bg-white p-4 rounded-lg shadow text-left"
                >
                  {item}
                  <ChevronDown
                    size={20}
                    className={`transition-transform ${
                      open === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">
              Golden Triangle Splendor
            </h3>

            <div className="bg-white rounded-xl p-6 shadow">
              <h4 className="font-semibold mb-4">
                Majestic Golden Triangle Tour
              </h4>

              <div className="relative rounded-lg overflow-hidden mb-4">
                <Image
                  src="/golden-triangle.jpg"
                  alt="Golden Triangle Tour"
                  width={400}
                  height={260}
                  className="object-cover w-full h-[200px]"
                />

                <div className="absolute inset-0 flex items-center justify-center text-white font-semibold text-lg">
                  Days: 07
                </div>

                <div className="absolute bottom-3 right-4 text-white underline text-sm cursor-pointer">
                  See Itinerary
                </div>
              </div>

              <p className="text-gray-600 text-sm">
                Rich blend of history, architecture, and culture in three iconic Indian cities.
              </p>
            </div>

            <div className="mt-6 space-y-3">
              {[
                "The Royal Heritage Trail Tour",
                "Royal Triangle Odyssey Tour"
              ].map((item, index) => (
                <button
                  key={index}
                  onClick={() => toggle(index + 10)}
                  className="w-full flex justify-between items-center bg-white p-4 rounded-lg shadow"
                >
                  {item}
                  <ChevronDown
                    size={20}
                    className={`transition-transform ${
                      open === index + 10 ? "rotate-180" : ""
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">
              South India Gateways
            </h3>

            <div className="bg-white rounded-xl p-6 shadow">
              <h4 className="font-semibold mb-4">
                Coastal Treasures & Mountain Magic Tour
              </h4>

              <div className="relative rounded-lg overflow-hidden mb-4">
                <Image
                  src="/kerala.jpg"
                  alt="Kerala Tour"
                  width={400}
                  height={260}
                  className="object-cover w-full h-[200px]"
                />

                <div className="absolute inset-0 flex items-center justify-center text-white font-semibold text-lg">
                  Days: 10
                </div>

                <div className="absolute bottom-3 right-4 text-white underline text-sm cursor-pointer">
                  See Itinerary
                </div>
              </div>

              <p className="text-gray-600 text-sm">
                Explore God’s Own Country with Ayurveda, wildlife, and scenic hill stations.
              </p>
            </div>

            <div className="mt-6 space-y-3">
              {[
                "Southern Delights Tour: A Journey Through Time",
                "Southern Splendors: Culture & Nature Trail Tour",
                "Heritage Odyssey: North to South India Tour"
              ].map((item, index) => (
                <button
                  key={index}
                  onClick={() => toggle(index + 20)}
                  className="w-full flex justify-between items-center bg-white p-4 rounded-lg shadow"
                >
                  {item}
                  <ChevronDown
                    size={20}
                    className={`transition-transform ${
                      open === index + 20 ? "rotate-180" : ""
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}