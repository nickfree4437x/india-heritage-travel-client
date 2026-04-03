"use client";

import Image from "next/image";
import Link from "next/link";

type DestinationCardProps = {
  title: string;
  days: string;
  image: string;
  desc: string;
  icon: any;
  slug: string;
};

export default function DestinationCard({
  title,
  days,
  image,
  desc,
  icon: Icon,
  slug,
}: DestinationCardProps) {
  return (
    <Link href={`/destinations/${slug}`} className="block">
      <div className="relative rounded-sm overflow-hidden group cursor-pointer h-[420px]">

        {/* IMAGE */}
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-all duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)]
                     group-hover:blur-[1px]"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/40 opacity-0 
                        group-hover:opacity-100 
                        transition-opacity duration-700 ease-in-out"></div>

        {/* DEFAULT CONTENT */}
        <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col items-center text-white
                        transition-all duration-500
                        group-hover:opacity-0 group-hover:translate-y-10">

          <Icon size={28} className="mb-2" />
          <h3 className="text-lg font-semibold text-center">{title}</h3>
        </div>

        {/* HOVER CONTENT */}
        <div className="absolute inset-0 flex flex-col justify-between p-6 text-white text-center
                        translate-y-[120%] group-hover:translate-y-0
                        transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]">

          {/* TOP */}
          <div className="opacity-0 translate-y-6 
                          group-hover:opacity-100 group-hover:translate-y-0
                          transition-all duration-700 delay-200">

            <Icon size={32} className="mx-auto mb-2" />
            <h3 className="text-xl font-semibold">{title}</h3>
          </div>

          {/* MIDDLE */}
          <div className="opacity-0 translate-y-6 
                          group-hover:opacity-100 group-hover:translate-y-0
                          transition-all duration-700 delay-300">

            <p className="text-sm text-gray-200 leading-relaxed">
              {desc}
            </p>

            <p className="mt-2 text-sm font-medium">
              Days : {days}
            </p>
          </div>

          {/* BUTTON */}
          <div className="opacity-0 translate-y-6 
                          group-hover:opacity-100 group-hover:translate-y-0
                          transition-all duration-700 delay-500">

            <button
              onClick={(e) => e.stopPropagation()}
              className="mt-4 px-5 py-2 border border-white rounded-full 
                         hover:bg-white hover:text-black 
                         transition duration-300 backdrop-blur-sm"
            >
              Know More
            </button>

          </div>

        </div>

      </div>
    </Link>
  );
}