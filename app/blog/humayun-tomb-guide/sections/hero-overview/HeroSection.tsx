// app/blogs/india-food-guide/components/HeroSection.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Facebook, Twitter, UserPen } from "lucide-react";
import { FaWhatsapp, FaPinterestP } from "react-icons/fa";

import BlogBreadcrumb from "@/src/common/Breadcrumb/BlogBreadcrumb";

export default function HeroSection() {
  const shareUrl = "https://indiaheritagetravel.com/blog/humayun-tomb-guide";
  const shareTitle = "Humayun's Tomb Guide: Delhi's First Great Mughal Garden-Tomb";

  return (
    <section className="w-full bg-white">
      {/* Hero Image */}
      <div className="relative h-[68vh] sm:h-[78vh] lg:h-[88vh] w-full overflow-hidden">
        <Image
          src="https://res.cloudinary.com/dja5yspwr/image/upload/v1784445556/pexels-miheertewari-13256094_nhkdrh.jpg"
          alt="Humayun's Tomb - first Mughal garden-tomb with Persian architecture and UNESCO heritage"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/35" />
      </div>

      {/* Breadcrumb */}
      <BlogBreadcrumb title="Humayun's Tomb Guide: Delhi's First Great Mughal Garden-Tomb" />

      {/* Content */}
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">
        <div className="py-6 sm:py-8 lg:py-8 text-center">
          {/* Title */}
          <h1 className="
            text-[18px] sm:text-[22px] md:text-[26px]
            tracking-wide
            text-[#2c2c2c]
            font-semibold
            max-w-6xl
            mx-auto
          ">
            Humayun's Tomb Guide: Delhi's
            <br/>
            First Great Mughal Garden-Tomb
          </h1>

          {/* Description */}
          <p className="
            mt-2 md:mt-2
            text-[#5f5f5f]
            text-[12px] leading-5
            sm:text-[13px]
            max-w-4xl
            mx-auto
            font-light
          ">
            This This Humayun's Tomb guide is meant for travelers who want to get at the reason this 
            monument matters, not just sort of stare at it from the gate. 
          </p>

          {/* Divider Line */}
          <div className="w-full h-[1px] bg-[#1f1f1f] mt-4 sm:mt-6" />

          {/* Meta Info */}
          <div className="
            mt-4
            flex flex-col gap-5
            sm:flex-row sm:items-center sm:justify-between
          ">
            {/* Left Side - Author Info */}
            <div className="flex items-center gap-5 text-[#6a6a6a] justify-center sm:justify-start">
              <div className="flex items-center gap-2">
                <MessageCircle size={15} strokeWidth={1.7} />
                <span className="text-[12px] md:text-[13px] font-light">0</span>
              </div>

              <span className="text-[12px] md:text-[13px] font-light">
                19 July
              </span>

              <div className="flex items-center justify-center gap-1.5 xs:gap-2 text-xs xs:text-sm font-[350] text-gray-600">
                <UserPen className="h-3.5 w-3.5 xs:h-4 xs:w-4 text-gray-600" />
                <span className="whitespace-nowrap">
                  By Isha, India Heritage Travel
                </span>
              </div>
            </div>

            {/* Right Side - Social Share */}
            <div className="flex items-center gap-5 justify-center sm:justify-end">
              <span className="text-[#555] text-[12px] md:text-[13px] font-light">
                Shares :
              </span>

              <div className="flex items-center gap-4 text-black">
                {/* Facebook */}
                <Link
                  href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share this article on Facebook"
                  className="hover:text-[#7C5C38] transition-colors duration-300"
                >
                  <Facebook size={15} strokeWidth={2} />
                </Link>

                {/* Twitter */}
                <Link
                  href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share this article on Twitter"
                  className="hover:text-[#7C5C38] transition-colors duration-300"
                >
                  <Twitter size={15} strokeWidth={2} />
                </Link>

                {/* WhatsApp */}
                <Link
                  href={`https://wa.me/?text=${shareTitle} ${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share this article on WhatsApp"
                  className="hover:text-[#7C5C38] transition-colors duration-300"
                >
                  <FaWhatsapp size={15} />
                </Link>

                {/* Pinterest */}
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