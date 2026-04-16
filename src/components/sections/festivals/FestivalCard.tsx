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

  // ✅ ICON MAPPING (SAFE + NEXT.JS FRIENDLY)
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
      <div className="relative h-[420px] rounded-sm overflow-hidden group cursor-pointer">

        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover transition-all duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)]
                 group-hover:blur-[1px]"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80 
                        opacity-70 group-hover:opacity-90 transition duration-700"></div>

        {/* DEFAULT */}
        <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col items-center text-white
                        transition-all duration-500
                        group-hover:opacity-0 group-hover:translate-y-10">

          <Icon size={28} className="mb-2" />

          <h3 className="text-lg font-semibold text-center">{title}</h3>
        </div>

        {/* HOVER */}
        <div className="absolute inset-0 flex flex-col justify-between p-6 text-white text-center
                        translate-y-[120%] group-hover:translate-y-0
                        transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]">

          <div className="opacity-0 translate-y-6 
                          group-hover:opacity-100 group-hover:translate-y-0
                          transition-all duration-700 delay-200">

            <Icon size={32} className="mx-auto mb-2" />
            <h3 className="text-xl font-semibold">{title}</h3>
          </div>

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

          <div className="opacity-0 translate-y-6 
                          group-hover:opacity-100 group-hover:translate-y-0
                          transition-all duration-700 delay-500">

            <button
              onClick={(e) => e.stopPropagation()}
              className="mt-4 px-5 py-2 border border-white rounded-full 
                         hover:bg-white hover:text-black 
                         transition duration-300 backdrop-blur-sm active:scale-95"
            >
              Explore Festival
            </button>

          </div>
        </div>

        <div className="absolute inset-0 rounded-sm border border-transparent 
                        group-hover:border-white/30 transition duration-500"></div>

      </div>
    </Link>
  );
}