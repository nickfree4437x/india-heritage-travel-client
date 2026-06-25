"use client";

import Image from "next/image";
import Link from "next/link";
import {
  MessageCircle,
  Facebook,
  Twitter,
} from "lucide-react";
import BlogBreadcrumb from "@/src/common/Breadcrumb/BlogBreadcrumb";

import {
  FaWhatsapp,
  FaPinterestP,
} from "react-icons/fa";

export default function HeroSection() {

  const shareUrl =
    "https://indiaheritagetravel.com/blogs/rawla-narlai-luxury-heritage-hotel-rajasthan";

  const shareTitle =
    "Rawla Narlai: Rajasthan's Most Enchanting Luxury Heritage Hotel";

  return (
    <section className="w-full bg-white">

      {/* HERO IMAGE */}
      <div className="relative h-[68vh] sm:h-[78vh] lg:h-[88vh] w-full overflow-hidden">

        <Image
          src="https://res.cloudinary.com/dja5yspwr/image/upload/v1782297620/23.06.2026_11.28.01_REC_xq38bb.jpg"
          alt="Rawla Narlai: Rajasthan's Most Enchanting Luxury Heritage Hotel"
          fill
          priority
          className="object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/35" />
      </div>

      <BlogBreadcrumb
        title="Rawla Narlai: Rajasthan's Most Enchanting Luxury Heritage Hotel"
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
            Rawla Narlai: Rajasthan's Most Enchanting
            <br />
             Luxury Heritage Hotel
          </h1>

          {/* DESCRIPTION */}
          <p
            className="
              mt-4

              text-[#5f5f5f]

              text-[13px]
              leading-5

              sm:text-[14px]

              max-w-4xl
              mx-auto

              font-light
            "
          >
            Discover Rawla Narlai - a 17th-century royal hunting lodge turned luxury
            heritage hotel in Rajasthan. Stepwell dinners, leopard safaris, and Aravalli magic await.

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
                23 June
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
                  className="hover:text-[#7C5C38] transition-colors duration-300"
                >
                  <FaWhatsapp size={17} />
                </Link>

                {/* PINTEREST */}
                <Link
                  href={`https://pinterest.com/pin/create/button/?url=${shareUrl}&description=${shareTitle}`}
                  target="_blank"
                  className="hover:text-[#7C5C38] transition-colors duration-300"
                >
                  <FaPinterestP size={17} />
                </Link>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}