"use client";

import Image from "next/image";
import {
  Facebook,
  Instagram,
  Youtube,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { FaPinterestP } from "react-icons/fa";
import { useRouter, usePathname } from "next/navigation";

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();

  // 🔥 SCROLL FUNCTION FOR SECTIONS
  const handleScrollToSection = (sectionId: string) => {
    if (pathname === "/") {
      const el = document.getElementById(sectionId);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } else {
      router.push(`/#${sectionId}`);
    }
  };

  // 🔥 HANDLE QUICK LINK CLICKS
  const handleQuickLinkClick = (item: { name: string; href: string; isSection?: boolean; sectionId?: string }) => {
    if (item.isSection && item.sectionId) {
      handleScrollToSection(item.sectionId);
    } else if (item.href) {
      router.push(item.href);
    }
  };

  return (
    <footer className="bg-gradient-to-br from-[#0f0f0f] via-[#121212] to-[#1a1a1a] text-gray-300 px-4 sm:px-6 md:px-10 lg:px-20 pt-14 pb-6">

      {/* 🔥 TOP GRID - FULLY RESPONSIVE */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">

        {/* 🔹 Logo + Social */}
        <div className="text-center sm:text-left">
          <div className="flex justify-center sm:justify-start">
            <Image
              src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779742948/logo2_yhlwmt.png"
              alt="India Heritage Travel logo"
              width={200}
              height={90}
              className="mb-6 w-auto h-auto"
              style={{ maxWidth: '220px' }}
            />
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-3 sm:gap-4 mt-2 md:ml-4">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=61559592375914"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-8 h-8 sm:w-9 sm:h-9
                flex items-center justify-center
                rounded-full
                border border-white/10
                bg-white/[0.04]
                backdrop-blur-md
                hover:bg-[#1877F2]
                hover:border-[#1877F2]
                hover:-translate-y-1
                transition-all duration-500
                group
              "
            >
              <Facebook
                size={13}
                className="
                  text-[#d8d0c5]
                  group-hover:text-white
                  transition-all duration-300
                "
              />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/indiaheritagetravel"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-8 h-8 sm:w-9 sm:h-9
                flex items-center justify-center
                rounded-full
                border border-white/10
                bg-white/[0.04]
                backdrop-blur-md
                hover:bg-gradient-to-tr
                hover:from-yellow-400
                hover:via-pink-500
                hover:to-purple-600
                hover:-translate-y-1
                transition-all duration-500
                group
              "
            >
              <Instagram
                size={13}
                className="
                  text-[#d8d0c5]
                  group-hover:text-white
                  transition-all duration-300
                "
              />
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com/@indiaheritagetravel?si=vFEfLrYnv_1DWHqM"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-8 h-8 sm:w-9 sm:h-9
                flex items-center justify-center
                rounded-full
                border border-white/10
                bg-white/[0.04]
                backdrop-blur-md
                hover:bg-[#FF0000]
                hover:border-[#FF0000]
                hover:-translate-y-1
                transition-all duration-500
                group
              "
            >
              <Youtube
                size={13}
                className="
                  text-[#d8d0c5]
                  group-hover:text-white
                  transition-all duration-300
                "
              />
            </a>

            {/* Pinterest */}
            <a
              href="https://pin.it/3kPXLj6Jk"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-8 h-8 sm:w-9 sm:h-9
                flex items-center justify-center
                rounded-full
                border border-white/10
                bg-white/[0.04]
                backdrop-blur-md
                hover:bg-[#E60023]
                hover:border-[#E60023]
                hover:-translate-y-1
                transition-all duration-500
                group
              "
            >
              <FaPinterestP
                size={12}
                className="
                  text-[#d8d0c5]
                  group-hover:text-white
                  transition-all duration-300
                "
              />
            </a>
          </div>
        </div>

        {/* 🔹 Quick Links */}
        <div>
          <h3 className="text-[11px] sm:text-[12px] uppercase tracking-[0.24em] text-white mb-5 sm:mb-6 text-center sm:text-left">
            Quick Links
          </h3>

          <ul className="flex flex-col text-[10px] font-extralight tracking-[0.15em] text-gray-200">
            {[
              { name: "FAQ’s", href: "/faq", isSection: false },
              { name: "Journeys", href: "/journeys", isSection: true, sectionId: "welcome-destination" },
              { name: "Festivals", href: "/festivals", isSection: true, sectionId: "festivals" },
              { name: "Travel Tips", href: "/travel-tips-for-india", isSection: false },
              { name: "Visa Rules for India", href: "/visa-rules-for-india", isSection: false },
            ].map((item, i) => (
              <li key={i}>
                <button
                  onClick={() => handleQuickLinkClick(item)}
                  className="
                    w-full
                    text-left
                    group
                    flex
                    items-center
                    gap-3
                    sm:gap-2
                    min-h-[40px]
                    cursor-pointer
                    transition-all
                    duration-500
                  "
                >
                  <span className="text-gray-200 text-[13px] group-hover:translate-x-1 transition-all duration-300">
                    ›
                  </span>

                  <span className="group-hover:text-gray-300 hover:underline transition-all duration-300">
                    {item.name}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* 🔹 Online Payment + Links */}
        <div>
          <h3 className="text-[11px] sm:text-[12px] uppercase tracking-[0.24em] text-white mb-5 sm:mb-6 text-center sm:text-left">
            Online Payment
          </h3>

          <div className="text-center sm:text-left">
            <button
              className="
                bg-blue-600
                hover:bg-blue-700
                transition
                px-4
                py-2
                rounded-md
                text-xs
                text-white
                mb-4
                sm:mb-6
              "
            >
              <span className="font-medium text-white">
                Pay Now
              </span>

              <div className="text-xs text-white/90 mt-1">
                Secured by Razorpay
              </div>
            </button>
          </div>

          {/* 🔥 Extra Links */}
          <ul className="flex flex-col text-[10px] font-extralight tracking-[0.15em] text-gray-200">
            {["Contact Us", "Privacy Policy"].map((item, i) => (
              <li key={i}>
                <button
                  onClick={() => {
                    if (item === "Contact Us") {
                      router.push("/contact");
                    } else {
                      router.push("/privacy-policy");
                    }
                  }}
                  className="
                    group
                    flex
                    items-center
                    gap-3
                    sm:gap-4
                    w-full
                    text-left
                    min-h-[40px]
                    cursor-pointer
                    transition-all
                    duration-500
                  "
                >
                  <span className="text-white transition duration-300 group-hover:translate-x-1">
                    ›
                  </span>

                  <span className="transition text-gray-200 hover:text-gray-300 hover:underline duration-300">
                    {item}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* 🔹 Contact Us */}
        <div>
          <h3 className="text-[11px] sm:text-[12px] uppercase tracking-[0.24em] text-white mb-5 sm:mb-6 text-center sm:text-left">
            Contact Us
          </h3>

          <div className="flex flex-col gap-5 sm:gap-6 text-[10px] font-extralight tracking-[0.12em] leading-[1.9] text-gray-200">
            {/* Address */}
            <div className="flex items-start gap-3 justify-center sm:justify-start">
              <MapPin
                size={15}
                className="mt-1 text-gray-200 shrink-0"
              />

              <p className="max-w-[250px] sm:max-w-[290px] text-center sm:text-left text-[9px] sm:text-[10px]">
                15-16-17 Maa Shakambhari Nagar-d Block,
                Near Silver Stream World School,
                Gandhi Path Road, Jaipur,
                Rajasthan, 302021
              </p>
            </div>

            <div className="border-b border-white/5"></div>

            {/* Phone */}
            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <Phone
                size={14}
                className="text-gray-200 shrink-0"
              />

              <p className="hover:text-[#e7dfd4] transition duration-300 cursor-pointer text-center sm:text-left">
                (+91) 7062101914
              </p>
            </div>

            <div className="border-b border-white/5"></div>

            {/* Email */}
            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <Mail
                size={14}
                className="text-gray-200 shrink-0"
              />

              <p className="hover:text-gray-200 transition duration-300 cursor-pointer break-all text-center sm:text-left text-[9px] sm:text-[10px]">
                info.indiaheritagetravel@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-16 sm:mt-20">
        {/* Divider */}
        <div className="mt-10 sm:mt-14 -mx-4 sm:-mx-6 md:-mx-10 lg:-mx-20 border-t border-white/5"></div>

        {/* Copyright */}
        <p className="text-center text-[9px] sm:text-[10px] font-extralight tracking-[0.15em] sm:tracking-[0.18em] text-gray-200 mt-6 sm:mt-8 px-4 sm:px-6 md:px-10 leading-relaxed">
          © {new Date().getFullYear()} India Heritage Travel —
          Crafted with <span className="text-[#a88b63]">❤️</span> for unforgettable journeys.
        </p>
      </div>
    </footer>
  );
}