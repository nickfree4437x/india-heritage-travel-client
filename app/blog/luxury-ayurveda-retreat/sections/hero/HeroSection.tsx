// app/blogs/india-food-guide/components/HeroSection.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Facebook, Twitter, UserPen } from "lucide-react";
import { FaWhatsapp, FaPinterestP } from "react-icons/fa";

import BlogBreadcrumb from "@/src/common/Breadcrumb/BlogBreadcrumb";

// ============================================
// CONSTANTS
// ============================================
const SHARE_URL = "https://indiaheritagetravel.com/blog/luxury-ayurveda-retreat";
const SHARE_TITLE = "Luxury Ayurveda Retreats in India: Wellness & Travel Guide";

// ============================================
// SHARE LINKS
// ============================================
const shareLinks = [
  {
    name: "Facebook",
    icon: Facebook,
    href: `https://www.facebook.com/sharer/sharer.php?u=${SHARE_URL}`,
    ariaLabel: "Share this article on Facebook",
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: `https://twitter.com/intent/tweet?url=${SHARE_URL}&text=${SHARE_TITLE}`,
    ariaLabel: "Share this article on Twitter",
  },
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    href: `https://wa.me/?text=${SHARE_TITLE} ${SHARE_URL}`,
    ariaLabel: "Share this article on WhatsApp",
  },
  {
    name: "Pinterest",
    icon: FaPinterestP,
    href: `https://pinterest.com/pin/create/button/?url=${SHARE_URL}&description=${SHARE_TITLE}`,
    ariaLabel: "Share this article on Pinterest",
  },
];

// ============================================
// COMPONENT
// ============================================
export default function HeroSection() {
  return (
    <section className="w-full bg-white">
      {/* Hero Image */}
      <div className="relative h-[68vh] sm:h-[78vh] lg:h-[88vh] w-full overflow-hidden">
        <Image
          src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1579801053/blog-8_rtahzc.jpg"
          alt="Luxury Ayurveda retreats in India featuring wellness facilities and peaceful surroundings"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/35" />
      </div>

      {/* Breadcrumb */}
      <BlogBreadcrumb title="Luxury Ayurveda Retreats in India: Wellness & Travel Guide" />

      {/* Content */}
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">
        <div className="py-6 sm:py-8 lg:py-8 text-center">
          {/* Title */}
          <h1 className="
            text-[18px] sm:text-[22px] md:text-[26px]
            tracking-wide
            text-[#2c2c2c]
            font-semibold
            max-w-5xl
            mx-auto
          ">
            Luxury Ayurveda Retreats in India:
            <br />
            Wellness & Travel Guide
          </h1>

          {/* Description */}
          <p className="
            mt-2
            text-[#5f5f5f]
            text-[12px] sm:text-[13px] md:text-[14px]
            leading-5 sm:leading-6
            max-w-4xl
            mx-auto
            font-light
          ">
            Explore luxury Ayurveda retreats in India, with traditional wellness practices, yoga 
            experiences, peaceful settings, and accommodation options to help you plan a relaxing 
            wellness getaway.
          </p>

          {/* Divider */}
          <div className="w-full h-[1px] bg-[#1f1f1f] mt-4 sm:mt-6" />

          {/* Meta Info */}
          <div className="
            mt-4
            flex flex-col gap-4 sm:gap-5
            sm:flex-row sm:items-center sm:justify-between
          ">
            {/* Left Side - Author Info */}
            <div className="
              flex items-center gap-4 sm:gap-5
              text-[#6a6a6a]
              justify-center sm:justify-start
            ">
              {/* Comments */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                <MessageCircle size={15} strokeWidth={1.7} />
                <span className="text-[12px] md:text-[13px] font-light">0</span>
              </div>

              {/* Date */}
              <span className="text-[12px] md:text-[13px] font-light">
                06 Mar
              </span>

              {/* Author */}
              <div className="
                flex items-center justify-center gap-1.5
                text-[12px] sm:text-[13px] md:text-[14px]
                font-light
                text-gray-600
              ">
                <UserPen className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-gray-600" />
                <span className="whitespace-nowrap">
                  By Isha, India Heritage Travel
                </span>
              </div>
            </div>

            {/* Right Side - Social Share */}
            <div className="
              flex items-center gap-4 sm:gap-5
              justify-center sm:justify-end
            ">
              <span className="text-[#555] text-[12px] md:text-[13px] font-light">
                Shares :
              </span>

              <div className="flex items-center gap-3 sm:gap-4 text-black">
                {shareLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.ariaLabel}
                      className="hover:text-[#7C5C38] transition-colors duration-300"
                    >
                      <Icon size={15} />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}