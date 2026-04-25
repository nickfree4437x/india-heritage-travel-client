"use client";

import Image from "next/image";
import Link from "next/link";
import { FestivalType } from "./festivalData";
import { Palette, Sparkles, Mountain, Waves } from "lucide-react";

export default function FestivalCard({
  title,
  days,
  image,
  desc,
  slug,
}: FestivalType) {

  // ICON MAPPING
  const getIcon = () => {
    switch (slug) {
      case "holi":
        return Palette;
      case "diwali":
        return Sparkles;
      case "pushkar":
        return Mountain;
      case "kumbh":
        return Waves;
      default:
        return Palette;
    }
  };

  const Icon = getIcon();

  return (
    <Link href={`/festivals/${slug}`} className="block">
      <div className="relative rounded-sm overflow-hidden group cursor-pointer h-[420px]">

        {/* IMAGE */}
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover will-change-transform
                     transition-all duration-[2000ms] ease-[cubic-bezier(0.22,1,0.36,1)]
                     group-hover:blur-[1.5px]"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/20 opacity-0 
                        will-change-opacity
                        group-hover:opacity-100 
                        transition-opacity duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)]" />

        {/* DEFAULT CONTENT */}
        <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col items-center text-white
                        will-change-transform
                        transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]
                        group-hover:opacity-0 group-hover:translate-y-14">

          <Icon size={28} className="mb-2" />
          <h3 className="text-lg font-semibold text-center">{title}</h3>
        </div>

        {/* HOVER CONTENT */}
        <div className="absolute inset-0 flex flex-col justify-between p-6 text-white text-center
                        will-change-transform
                        translate-y-[105%] group-hover:translate-y-0
                        transition-transform duration-[2200ms] ease-[cubic-bezier(0.22,1,0.36,1)]">

          {/* TOP */}
          <div className="opacity-0 translate-y-10 
                          will-change-transform
                          group-hover:opacity-100 group-hover:translate-y-0
                          transition-all duration-[1000ms] delay-200 ease-[cubic-bezier(0.22,1,0.36,1)]">

            <Icon size={34} className="mx-auto mb-2" />
            <h3 className="text-xl font-semibold">{title}</h3>
          </div>

          {/* MIDDLE */}
          <div className="opacity-0 translate-y-10 
                          will-change-transform
                          group-hover:opacity-100 group-hover:translate-y-0
                          transition-all duration-[1000ms] delay-400 ease-[cubic-bezier(0.22,1,0.36,1)]">

            <p className="text-sm text-gray-200 leading-relaxed">
              {desc}
            </p>

            <p className="mt-2 text-sm font-medium">
              Days : {days}
            </p>
          </div>

          {/* BUTTON */}
          <div className="opacity-0 translate-y-10 
                          will-change-transform
                          group-hover:opacity-80 group-hover:translate-y-0
                          transition-all duration-[1000ms] delay-600 ease-[cubic-bezier(0.22,1,0.36,1)]">

            <button
              onClick={(e) => e.stopPropagation()}
              className="mt-4 text-xs px-5 py-2 border border-white rounded-full 
                         hover:bg-white hover:text-black 
                         transition-all duration-500 ease-in-out backdrop-blur-md"
            >
              Explore Festival
            </button>
          </div>

        </div>

      </div>
    </Link>
  );
}