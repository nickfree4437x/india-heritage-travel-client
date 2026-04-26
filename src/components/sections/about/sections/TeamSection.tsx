"use client";

import Image from "next/image";

export default function TeamSection() {
  return (
    <section id="team" className="space-y-12">

      {/* Heading */}
      <div className="space-y-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#9c6b2f]">
          The faces behind your travel dreams
        </h2>

        {/* Sub Text */}
        <p className="italic text-gray-600 text-lg md:text-xl">
          “We don’t just plan journeys — we live them, together”
        </p>
      </div>

      {/* Team Members */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-28">

        {/* Member 1 */}
        <div className="text-center space-y-4">
          <div className="relative w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden mx-auto">
            <Image
              src="/about/profile.jpg" // 👈 Piyush image
              alt="Piyush"
              fill
              className="object-cover"
            />
          </div>

          <p className="text-lg md:text-xl text-[#9c6b2f]">
            Piyush
          </p>
        </div>

        {/* Member 2 */}
        <div className="text-center space-y-4">
          <div className="relative w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden mx-auto">
            <Image
              src="/about/isha.jpg" // 👈 Isha image
              alt="Isha"
              fill
              className="object-cover"
            />
          </div>

          <p className="text-lg md:text-xl text-[#9c6b2f]">
            Isha
          </p>
        </div>

      </div>

    </section>
  );
}