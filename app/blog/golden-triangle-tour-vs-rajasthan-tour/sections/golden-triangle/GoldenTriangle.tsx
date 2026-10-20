"use client";

import Image from "next/image";
import Link from "next/link";

export default function GoldenTriangleSection() {
  return (
    <section className="w-full bg-white py-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c]">
            What Is a Golden Triangle Tour?
          </h2>
        </div>

        {/* Intro */}
        <div className="space-y-5 mb-4">
          <p className="text-[12px] sm:text-[13px] md:text-[14.5px] text-gray-700 leading-relaxed font-light text-justify">
            The{" "}
            <strong>
              <Link
                href="https://www.indiaheritagetravel.com/tours/majestic-golden-triangle-tour"
                className="hover:underline font-[500] text-[#8b6a3d]"
              >
                Golden Triangle Tour
              </Link>
            </strong>{" "}
            is India's most famous travel circuit, connecting three of the country's most historic
            and culturally significant cities - <strong>Delhi</strong>,
            <strong> Agra</strong>, and <strong>Jaipur</strong>. Together,
            these destinations form a triangle on the map of North India,
            with each city located roughly 230–250 kilometres from the next,
            making the journey convenient while offering remarkable diversity
            in history, architecture, cuisine, and culture.
          </p>
        </div>

        {/* Image */}
        <div className="mb-4 md:mb-6">
          <div className="relative w-full h-[280px] sm:h-[420px] lg:h-[560px] rounded-sm overflow-hidden shadow-md">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1782371132/pexels-ishan-17119283-18951083_cnu3hi.jpg"
              alt="Taj Mahal at sunrise in Agra"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-[12px] sm:text-[13px] text-gray-600 font-light">
            Image via pexels
          </p>
        </div>

        {/* Destinations */}
        <div className="mb-4 md:mb-6">
          <h3 className="text-[17px] sm:text-[18px] font-semibold text-[#2c2c2c] mb-3">
            What You'll Experience on the Golden Triangle
          </h3>

          <div className="space-y-5">
            <div>
              <h4 className="text-[14px] font-medium text-gray-700 mb-2">
                Delhi
              </h4>

              <p className="text-[12px] sm:text-[13px] md:text-[14.5px] text-gray-700 leading-relaxed font-light text-justify">
                Explore the contrasting worlds of Old and New Delhi, from
                Jama Masjid, Chandni Chowk, and the Red Fort to Humayun's
                Tomb, Qutub Minar, Lotus Temple, India Gate, and the elegant
                avenues of Lutyens' Delhi. The city is equally famous for its
                vibrant street food and rich cultural heritage.
              </p>
            </div>

            <div>
              <h4 className="text-[14px] font-medium text-gray-700 mb-2">
                Agra
              </h4>

              <p className="text-[12px] sm:text-[13px] md:text-[14.5px] text-gray-700 leading-relaxed font-light text-justify">
                Home to the magnificent Taj Mahal, Agra also offers Agra Fort,
                Fatehpur Sikri, and the peaceful Mehtab Bagh, where visitors
                can admire spectacular sunset views of the Taj across the
                Yamuna River.
              </p>
            </div>

            <div>
              <h4 className="text-[14px] font-medium text-gray-700 mb-2">
                Jaipur
              </h4>

              <p className="text-[12px] sm:text-[13px] md:text-[14.5px] text-gray-700 leading-relaxed font-light text-justify">
                Rajasthan's Pink City showcases Amber Fort, City Palace,
                Jantar Mantar, Hawa Mahal, Jal Mahal, colourful bazaars,
                traditional crafts, and the royal heritage that defines
                Rajasthan's history.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}