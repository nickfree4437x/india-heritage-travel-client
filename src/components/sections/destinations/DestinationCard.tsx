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
      <div className="relative rounded-sm overflow-hidden group cursor-pointer h-[420px]
                      shadow-[0_10px_30px_rgba(0,0,0,0.08)] 
                      hover:shadow-[0_20px_50px_rgba(0,0,0,0.18)]
                      transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]">

        {/* IMAGE */}
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover
                     transition-all duration-[2600ms] ease-[cubic-bezier(0.22,1,0.36,1)]
                     group-hover:blur-[1.5px]"
        />

        {/* 🔥 DARKER OVERLAY */}
        <div className="absolute inset-0 bg-black/45 opacity-0 
                        group-hover:opacity-100 
                        transition-opacity duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)]" />

        {/* DEFAULT CONTENT */}
        <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col items-center text-white
                        transition-all duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)]
                        group-hover:opacity-0 group-hover:translate-y-10">

          {/* 🔥 ICON (NO BG + BIGGER) */}
          <Icon size={38} className="mb-2 opacity-90" />

          <h3 className="text-lg font-semibold text-center">{title}</h3>
        </div>

        {/* HOVER CONTENT */}
        <div className="absolute inset-0 flex flex-col justify-between p-6 text-white text-center
                        translate-y-[115%] group-hover:translate-y-0
                        transition-transform duration-[2400ms] ease-[cubic-bezier(0.22,1,0.36,1)]">

          {/* TOP */}
          <div className="opacity-0 translate-y-6 
                          group-hover:opacity-100 group-hover:translate-y-0
                          transition-all duration-[1400ms] delay-200 ease-[cubic-bezier(0.22,1,0.36,1)]">

            {/* 🔥 ICON BIGGER CLEAN */}
            <Icon size={40} className="mx-auto mb-3 opacity-95" />

            <h3 className="text-xl font-semibold">{title}</h3>
          </div>

          {/* MIDDLE */}
          <div className="opacity-0 translate-y-6 
                          group-hover:opacity-100 group-hover:translate-y-0
                          transition-all duration-[1400ms] delay-400 ease-[cubic-bezier(0.22,1,0.36,1)]">

            <p className="text-sm text-gray-200 leading-relaxed">
              {desc}
            </p>

            <p className="mt-2 text-sm font-medium">
              Days : {days}
            </p>
          </div>

          {/* BUTTON */}
          <div className="opacity-0 translate-y-6 
                          group-hover:opacity-90 group-hover:translate-y-0
                          transition-all duration-[1400ms] delay-600 ease-[cubic-bezier(0.22,1,0.36,1)]">

            <button
              onClick={(e) => e.stopPropagation()}
              className="mt-4 text-xs px-5 py-2 border border-white rounded-full 
                         hover:bg-white hover:text-black 
                         transition-all duration-500 ease-in-out backdrop-blur-md"
            >
              Know More
            </button>
          </div>

        </div>

      </div>
    </Link>
  );
}