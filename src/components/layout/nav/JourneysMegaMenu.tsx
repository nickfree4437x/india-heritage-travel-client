"use client";

import Link from "next/link";

export default function JourneysMegaMenu({ scrolled }: { scrolled: boolean }) {

  return (
    <div className="relative group">

      {/* Journeys Button */}

      <button
        className={`font-medium transition ${
          scrolled
            ? "text-gray-700 hover:text-orange-500"
            : "text-white hover:text-orange-400"
        }`}
      >
        Journeys
      </button>


      {/* Mega Menu */}

      <div className="absolute left-0 top-10 w-[650px] bg-white shadow-xl rounded-xl p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">

        {/* Top Horizontal Links */}

        <div className="flex gap-6 border-b pb-4 mb-4 text-sm">

          <Link
            href="/journeys/holiday-tour-packages-india"
            className="hover:text-orange-500"
          >
            Holiday Tour Package in India
          </Link>

          <Link href="/journeys/luxury-tour-packages-india">
            Luxury Tour Package in India
          </Link>

          <Link href="/journeys/top-tourist-places-india">
            Top Tourist Places in India
          </Link>

        </div>


        {/* Bottom Section */}

        <div className="grid grid-cols-3 gap-8 text-sm">

          {/* Curated Tours */}

          <div>

            <h4 className="font-semibold mb-3 text-orange-500">
              Curated Tours
            </h4>

            <div className="flex flex-col gap-2">

              <Link href="/journeys/curated-tours/royal-rajasthan-tour" className="hover:text-orange-500">
                Royal Rajasthan
              </Link>

              <Link href="/journeys/curated-tours/golden-triangle-tour" className="hover:text-orange-500">
                Golden Triangle
              </Link>

              <Link href="/journeys/curated-tours/south-indian-gateways" className="hover:text-orange-500">
                The South Indian Gateways
              </Link>

              <Link href="/journeys/curated-tours/east-india-adventure" className="hover:text-orange-500">
                East India advanture
              </Link>
              <Link href="/journeys/curated-tours/west-india-escapes" className="hover:text-orange-500">
                West India Escapes
              </Link>

            </div>

          </div>


          {/* Festivals */}

          <div>

            <h4 className="font-semibold mb-3 text-orange-500">
              Festivals
            </h4>

            <div className="flex flex-col gap-2">

              <Link href="/journeys/festivals/holi-festival-tour" className="hover:text-orange-500">
                Holi Festival Tour
              </Link>

              <Link href="/journeys/festivals/diwali-festival-tour" className="hover:text-orange-500">
                Diwali Festival Tour
              </Link>

              <Link href="/journeys/festivals/pushkar-fair-tour" className="hover:text-orange-500">
                Pushkar Fair Tour
              </Link>

              <Link href="/journeys/festivals/kumbh-mela-tour" className="hover:text-orange-500">
                Pushkar Fair Tour
              </Link>

            </div>

          </div>


          {/* Health Based */}

          <div>

            <h4 className="font-semibold mb-3 text-orange-500">
              Health Based
            </h4>

            <div className="flex flex-col gap-2">
              <Link href="/journeys/health-based/yoga-escapes" className="hover:text-orange-500">
                Yoga escapes
              </Link>

              <Link href="/journeys/health-based/ayurveda-journey" className="hover:text-orange-500">
                Ayurveda journey
              </Link>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}