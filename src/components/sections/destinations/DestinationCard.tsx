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
    <Link href={`/destinations/${slug}`} className="block w-full">
      <div
        className="relative w-full max-w-[420px] mx-auto rounded-sm overflow-hidden group cursor-pointer 
                   h-[460px] md:h-[480px]
                   shadow-[0_10px_30px_rgba(0,0,0,0.08)] 
                   hover:shadow-[0_25px_60px_rgba(0,0,0,0.18)]
                   transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
      >

        {/* IMAGE */}
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 420px"
          className="object-cover object-center
                     scale-100
                     transition-all duration-[2000ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
        />

        {/* DEFAULT GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />

        {/* HOVER OVERLAY */}
        <div
          className="absolute inset-0 bg-black/50 opacity-0 
                     group-hover:opacity-100 
                     transition-opacity duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
        />

        {/* DEFAULT CONTENT */}
        <div
          className="absolute bottom-0 left-0 right-0 p-6 flex flex-col items-center text-white
                     transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]
                     group-hover:opacity-0 group-hover:translate-y-10"
        >
          <Icon size={38} strokeWidth={1} className="mb-3 opacity-90" />
          <h3 className="font-heading text-lg font-semibold text-center">
            {title}
          </h3>
        </div>

        {/* HOVER CONTENT */}
        <div
          className="absolute inset-0 flex flex-col justify-between p-7 text-white text-center
                     translate-y-[110%] group-hover:translate-y-0
                     transition-transform duration-[2000ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
        >

          {/* TOP */}
          <div className="opacity-0 translate-y-6 
                          group-hover:opacity-100 group-hover:translate-y-0
                          transition-all duration-[1200ms] delay-200">

            <Icon size={40} strokeWidth={1} className="mx-auto mb-3 opacity-95" />
            <h3 className="font-heading text-lg font-semibold">{title}</h3>
          </div>

          {/* MIDDLE */}
          <div className="opacity-0 translate-y-6 
                          group-hover:opacity-100 group-hover:translate-y-0
                          transition-all duration-[1200ms] delay-400">

            <p className="text-sm text-gray-200 leading-relaxed">
              {desc}
            </p>

            <p className="mt-2 text-sm font-medium">
              Days : {days}
            </p>
          </div>

          {/* LINK */}
          <div className="opacity-0 translate-y-6 
                          group-hover:opacity-90 group-hover:translate-y-0
                          transition-all duration-[1200ms] delay-600">

            <span
              onClick={(e) => e.stopPropagation()}
              className="mt-4 inline-block text-sm text-white cursor-pointer relative"
            >
              Know More
              <span className="absolute left-0 -bottom-1 h-[1px] w-full bg-white"></span>
            </span>

          </div>

        </div>
      </div>
    </Link>
  );
}