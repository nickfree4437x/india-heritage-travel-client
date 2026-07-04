"use client";

import Image from "next/image";
import Link from "next/link";
import {
  MessageCircle,
  Facebook,
  Twitter,
  UserPen
} from "lucide-react";
import BlogBreadcrumb from "@/src/common/Breadcrumb/BlogBreadcrumb";

import {
  FaWhatsapp,
  FaPinterestP,
} from "react-icons/fa";

export default function HeroSection() {

  const shareUrl =
    "https://indiaheritagetravel.com/blog/rawla-narlai-luxury-heritage-hotel-rajasthan";

  const shareTitle =
    "Rawla Narlai: Rajasthan's Most Enchanting Luxury Heritage Hotel";

  return (
    <section className="w-full bg-white">

      {/* HERO IMAGE */}
      <div className="relative h-[68vh] sm:h-[78vh] lg:h-[88vh] w-full overflow-hidden">

        <Image
          src="https://res.cloudinary.com/dja5yspwr/image/upload/v1582297620/23.06.2026_11.28.01_REC_xq38bb.jpg"
          alt="Rawla Narlai: Rajasthan's Most Enchanting Luxury Heritage Hotel"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/35" />
      </div>

      <BlogBreadcrumb
        title="Rawla Narlai Rajasthan"
      />

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">

        <div className="py-6 sm:py-8 lg:py-8 text-center">

          {/* TITLE */}
          <h1
            className="
              text-[18px] sm:text-[22px] md:text-[26px] tracking-wide text-[#2c2c2c] font-semibold
              max-w-5xl
              mx-auto
            "
          >
            Rawla Narlai Rajasthan: Luxury Heritage
            <br />
             Hotel, Suites & Experiences
          </h1>

          {/* DESCRIPTION */}
          <p
            className="
              mt-4

              text-[#5f5f5f]

              text-[12px]
              leading-5

              sm:text-[13px]

              max-w-4xl
              mx-auto

              font-light
            "
          >
            Discover Rawla Narlai, one of Rajasthan's finest luxury heritage hotels. Explore royal suites,
             stepwell dinners, leopard safaris, cultural experiences, and unforgettable stays in the Aravalli 
             Hills.

          </p>

          {/* LINE */}
          <div className="w-full h-[1px] bg-[#1f1f1f] mt-4 sm:mt-6" />

          {/* META */}
          <div
            className="
              mt-4

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
                <MessageCircle size={15} strokeWidth={1.7} />
                <span className="text-[12px] md:text-[13px] font-light">0</span>
              </div>

              <span className="text-[12px] md:text-[13px] font-light">
                23 June
              </span>
              <div className="flex items-center justify-center gap-1.5 xs:gap-2 text-xs xs:text-sm font-[350] text-gray-600">
                <UserPen className="h-3.5 w-3.5 xs:h-4 xs:w-4 text-gray-600" />
                <span className="whitespace-nowrap">
                  By Isha, India Heritage Travel
                </span>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-5 justify-center sm:justify-end">

              <span className="text-[#555] text-[12px] md:text-[13px] font-light">
                Shares :
              </span>

              <div className="flex items-center gap-4 text-black">

              {/* FACEBOOK */}
              <Link
                href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share this article on Facebook"
                className="hover:text-[#7C5C38] transition-colors duration-300"
              >
                <Facebook size={15} strokeWidth={2} />
              </Link>

                {/* TWITTER */}
                <Link
                  href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share this article on Twitter"
                  className="hover:text-[#7C5C38] transition-colors duration-300"
                >
                  <Twitter size={15} strokeWidth={2} />
                </Link>

                {/* WHATSAPP */}
                <Link
                  href={`https://wa.me/?text=${shareTitle} ${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share this article on WhatsApp"
                  className="hover:text-[#7C5C38] transition-colors duration-300"
                >
                  <FaWhatsapp size={15} />
                </Link>

                {/* PINTEREST */}
                <Link
                  href={`https://pinterest.com/pin/create/button/?url=${shareUrl}&description=${shareTitle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share this article on Pinterest"
                  className="hover:text-[#7C5C38] transition-colors duration-300"
                >
                  <FaPinterestP size={15} />
                </Link>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}