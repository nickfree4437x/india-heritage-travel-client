// app/blogs/india-food-guide/components/HeroSection.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import {
  MessageCircle,
  Facebook,
  Twitter,
} from "lucide-react";

export default function HeroSection() {

  const shareUrl =
    "https://yourdomain.com/blogs/india-food-guide";

  const shareTitle =
    "A Guide to Indian Food: What to Try & What to Avoid";

  return (
    <section className="w-full bg-white">

      {/* HERO IMAGE */}
      <div className="relative h-[68vh] sm:h-[78vh] lg:h-[88vh] w-full overflow-hidden">

        <Image
          src="/blogs/blog-12/blog-12.jpg"
          alt="New Delhi Travel Guide"
          fill
          priority
          className="object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/35" />
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">

        <div className="py-10 sm:py-14 lg:py-16 text-center">

          {/* TITLE */}
          <h1
            className="
              text-[#111]

              text-[30px]
              leading-[1.15]

              md:text-[45px]

              font-normal
              max-w-5xl
              mx-auto
            "
            style={{
              fontFamily: "'Marcellus', serif",
            }}
          >
            A first timer guide to New Delhi |
            <br />
             How to survive
          </h1>

          {/* DESCRIPTION */}
          <p
            className="
              mt-4

              text-[#444]

              text-[13px]
              leading-8

              sm:text-[14px]

              max-w-4xl
              mx-auto

              font-light
            "
          >
            Navigate the chaos, culture, food, traffic,
            markets, monuments, and unforgettable energy
            of India’s vibrant capital with this practical
            first-time traveler’s guide to New Delhi.
          </p>

          {/* LINE */}
          <div className="w-full h-[1px] bg-[#1f1f1f] mt-7 sm:mt-12" />

          {/* META */}
          <div
            className="
              mt-6

              flex
              flex-col
              gap-5

              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >

            {/* LEFT */}
            <div className="flex items-center gap-5 text-[#6a6a6a] justify-center sm:justify-start">

              <div className="flex items-center gap-2">
                <MessageCircle size={17} strokeWidth={1.7} />
                <span className="text-sm">0</span>
              </div>

              <span className="text-sm">
                July 31, 2024
              </span>
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-5 justify-center sm:justify-end">

              <span className="text-[#555] text-sm">
                Shares :
              </span>

              <div className="flex items-center gap-4 text-black">

                {/* FACEBOOK */}
                <Link
                  href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                  target="_blank"
                  className="hover:text-[#7C5C38] transition-colors duration-300"
                >
                  <Facebook size={17} strokeWidth={2} />
                </Link>

                {/* TWITTER */}
                <Link
                  href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`}
                  target="_blank"
                  className="hover:text-[#7C5C38] transition-colors duration-300"
                >
                  <Twitter size={17} strokeWidth={2} />
                </Link>

                {/* WHATSAPP */}
                <Link
                  href={`https://wa.me/?text=${shareTitle} ${shareUrl}`}
                  target="_blank"
                  className="hover:text-[#7C5C38] transition-colors duration-300 text-[17px]"
                >
                  Ⓦ
                </Link>

                {/* PINTEREST */}
                <Link
                  href={`https://pinterest.com/pin/create/button/?url=${shareUrl}&description=${shareTitle}`}
                  target="_blank"
                  className="hover:text-[#7C5C38] transition-colors duration-300 text-[17px]"
                >
                  Ⓟ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}