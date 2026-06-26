"use client";

import Image from "next/image";
import Link from "next/link";
import {
  MessageCircle,
  Facebook,
  Twitter,
  UserPen,
} from "lucide-react";
import BlogBreadcrumb from "@/src/common/Breadcrumb/BlogBreadcrumb";

import {
  FaWhatsapp,
  FaPinterestP,
} from "react-icons/fa";

export default function HeroSection() {

  const shareUrl =
    "https://indiaheritagetravel.com/blogs/golden-triangle-tour-vs-rajasthan-tour";

  const shareTitle =
    "15 Forts & Palaces to See in Rajasthan, India";

  return (
    <section className="w-full bg-white">

      {/* HERO IMAGE */}
      <div className="relative h-[68vh] sm:h-[78vh] lg:h-[88vh] w-full overflow-hidden">

        <Image
          src="https://res.cloudinary.com/dja5yspwr/image/upload/v1782461064/chirag-vashist-mnqLnEBHMp8-unsplash_fkxnnf.jpg"
          alt="15 Forts & Palaces to See in Rajasthan, India"
          fill
          priority
          className="object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/35" />
      </div>

      <BlogBreadcrumb
        title="15 Forts & Palaces to See in Rajasthan, India"
      />

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">

        <div className="py-6 sm:py-8 lg:py-8 text-center">

          {/* TITLE */}
          <h1 className="
            text-[18px] xs:text-[22px] sm:text-[26px]
            tracking-wide
            text-[#2c2c2c]
            font-semibold
            max-w-6xl
            mx-auto
            px-4
            text-center
            leading-tight
            sm:leading-snug
          ">
            15 Forts & Palaces to See in Rajasthan,
            <br/>
            India Rajasthan, India
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
            Meta Description: On the verge of visiting Rajasthan, India? Get ready to know about the top 15 
            forts and palaces that one should visit in Rajasthan - along with some hidden facts!

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
            <div className="
              flex 
              items-center 
              gap-3 xs:gap-4 sm:gap-5 
              text-[#6a6a6a] 
              justify-center 
              sm:justify-start
              flex-wrap
              px-2 xs:px-0
            ">

              <div className="flex items-center gap-1.5 xs:gap-2">
                <MessageCircle size={17} strokeWidth={1.7} className="h-4 w-4 xs:h-[17px] xs:w-[17px]" />
                <span className="text-xs xs:text-sm">0</span>
              </div>

              <span className="text-[12px] md:text-[13px] font-light whitespace-nowrap">
                26 June
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