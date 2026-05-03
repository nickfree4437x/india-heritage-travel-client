"use client";

import Image from "next/image";
import Link from "next/link";
import { FestivalType } from "./festivalData";
import { SunMedium, Lamp, Mountain, Flower } from "lucide-react";

export default function FestivalCard({
  title,
  days,
  image,
  desc,
  slug,
}: FestivalType) {

  const renderIcon = (size: number) => {
    switch (slug) {
      case "holi":
        return <SunMedium size={size} strokeWidth={1} />;
      case "diwali":
        return <Lamp size={size} strokeWidth={1} />;
      case "pushkar":
        return <Mountain size={size} strokeWidth={1} />;
      case "kumbh":
        return <Flower size={size} strokeWidth={1} />;
      default:
        return <SunMedium size={size} strokeWidth={1} />;
    }
  };

  return (
    <Link href={`/festivals/${slug}`} className="block">
      <div className="relative rounded-sm overflow-hidden group cursor-pointer h-[420px]
                      shadow-[0_10px_30px_rgba(0,0,0,0.08)] 
                      hover:shadow-[0_20px_50px_rgba(0,0,0,0.18)]
                      transition-all duration-700">

        {/* IMAGE */}
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 420px"
          className="object-cover object-center
                     transition-all duration-[2000ms]
                     group-hover:blur-[1.5px]"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-[1200ms]" />

        {/* DEFAULT */}
        <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col items-center text-white
                        transition-all duration-[1200ms]
                        group-hover:opacity-0 group-hover:translate-y-10">

          <div className="mb-3 text-white opacity-90">
            {renderIcon(36)}
          </div>

          <h3 className="text-lg font-semibold text-center">{title}</h3>
        </div>

        {/* HOVER */}
        <div className="absolute inset-0 flex flex-col justify-between p-6 text-white text-center
                        translate-y-[110%] group-hover:translate-y-0
                        transition-transform duration-[2000ms]">

          <div className="opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0
                          transition-all duration-[1200ms] delay-200
                          flex flex-col items-center">

            <div className="mb-3 text-white opacity-95">
              {renderIcon(42)}
            </div>

            <h3 className="text-xl font-semibold">{title}</h3>
          </div>

          <div className="opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0
                          transition-all duration-[1200ms] delay-400">
            <p className="text-sm text-gray-200 leading-relaxed">{desc}</p>
            <p className="mt-2 text-sm font-medium">Days : {days}</p>
          </div>

          {/* LINK */}
          <div className="opacity-0 translate-y-6 
                          group-hover:opacity-90 group-hover:translate-y-0
                          transition-all duration-[1200ms] delay-600">

            <span
              onClick={(e) => e.stopPropagation()}
              className="mt-4 inline-block text-sm text-white cursor-pointer relative"
            >
              Know Festival
              <span className="absolute left-0 -bottom-1 h-[1px] w-full bg-white"></span>
            </span>

          </div>

        </div>

      </div>
    </Link>
  );
}