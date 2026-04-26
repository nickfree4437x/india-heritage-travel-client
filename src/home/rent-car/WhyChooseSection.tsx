"use client";

import { Car, MapPin, UserCheck, Map } from "lucide-react";

export default function WhyChooseSection() {
  return (
    <section className="bg-[#f8f6f2] py-20 px-6">

      <div className="max-w-6xl mx-auto text-center space-y-12">

        {/* Heading */}
        <div className="space-y-4">
          <h2 className="text-3xl md:text-5xl font-semibold text-[#9c6b2f]">
            Why Choose Us?
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            We go the extra mile to make your journey comfortable, safe, and memorable.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

          {/* Item 1 */}
          <div className="flex flex-col items-center space-y-3">
            <Car size={40} className="text-[#9c6b2f]" />
            <p className="text-sm tracking-wide">
              Spotless Vehicles
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center space-y-3">
            <MapPin size={40} className="text-[#9c6b2f]" />
            <p className="text-sm tracking-wide">
              Leave Navigation To Us
            </p>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col items-center space-y-3">
            <UserCheck size={40} className="text-[#9c6b2f]" />
            <p className="text-sm tracking-wide">
              Professional Drivers
            </p>
          </div>

          {/* Item 4 */}
          <div className="flex flex-col items-center space-y-3">
            <Map size={40} className="text-[#9c6b2f]" />
            <p className="text-sm tracking-wide">
              Customised Itineraries
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}