"use client";

import Image from "next/image";

interface Props {
  day: string;
  title: string;
  description: string;
  image: string;
  nextStop?: string;
  travelInfo?: string;
}

export default function ItineraryCard({
  day,
  title,
  description,
  image,
  nextStop,
  travelInfo,
}: Props) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-8">

      {/* Day Title */}
      <h3 className="text-red-600 font-semibold text-lg mb-4">
        {day}: {title}
      </h3>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-6 items-center">

        {/* Image */}
        <div className="relative w-full h-[200px] md:h-[250px] rounded-lg overflow-hidden shadow">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>

        {/* Description */}
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          {description}
        </p>

      </div>

      {/* Next Stop */}
      {nextStop && (
        <div className="mt-4">
          <p className="font-semibold">
            Next Stop: {nextStop}
          </p>
          {travelInfo && (
            <p className="text-sm text-gray-600">
              {travelInfo}
            </p>
          )}
        </div>
      )}

    </div>
  );
}