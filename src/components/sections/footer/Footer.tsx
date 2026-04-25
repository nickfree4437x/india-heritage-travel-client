"use client";

import Image from "next/image";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { FaPinterestP } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#0f0f0f] via-[#121212] to-[#1a1a1a] text-gray-300 px-6 md:px-20 pt-14 pb-6">

      {/* 🔥 TOP GRID */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* 🔹 Logo + Social */}
        <div>
          <Image
            src="/logos/logo2.png"
            alt="India Heritage Travel"
            width={220}
            height={100}
            className="mb-6"
          />

          <div className="flex gap-5">

            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=61559592375914"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full 
              bg-white/5 border border-white/10 
              hover:bg-[#1877F2] hover:border-[#1877F2]
              transition duration-300 cursor-pointer group"
            >
              <Facebook size={16} className="text-gray-300 group-hover:text-white transition" />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/indiaheritagetravel"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full 
              bg-white/5 border border-white/10 
              hover:bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600
              transition duration-300 cursor-pointer group"
            >
              <Instagram size={16} className="text-gray-300 group-hover:text-white transition" />
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com/@indiaheritagetravel?si=vFEfLrYnv_1DWHqM"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full 
              bg-white/5 border border-white/10 
              hover:bg-[#FF0000] hover:border-[#FF0000]
              transition duration-300 cursor-pointer group"
            >
              <Youtube size={16} className="text-gray-300 group-hover:text-white transition" />
            </a>

            {/* Pinterest */}
            <a
              href="https://pin.it/3kPXLj6Jk"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full 
              bg-white/5 border border-white/10 
              hover:bg-[#E60023] hover:border-[#E60023]
              transition duration-300 cursor-pointer group"
            >
              <FaPinterestP size={16} className="text-gray-300 group-hover:text-white transition" />
            </a>
          </div>
        </div>

        {/* 🔹 Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-5">Quick Links</h3>

          <ul className="space-y-3 text-gray-300 text-sm">
            {[
              "FAQ’s",
              "Journeys",
              "Festivals",
              "Travel Tips",
              "Visa Rules for India",
            ].map((item, i) => (
              <li
                key={i}
                className="group flex items-center gap-2 cursor-pointer transition"
              >

                {/* Arrow */}
                <span className="text-white transition duration-300 group-hover:translate-x-1">
                  ›
                </span>

                {/* Text */}
                <span className="transition duration-300 hover:underline group-hover:text-white">
                  {item}
                </span>

              </li>
            ))}

          </ul>
        </div>

        {/* 🔹 Online Payment + Links */}
        <div>
          <h3 className="text-lg font-semibold mb-5">Online Payment</h3>

          <button className="bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded-md text-xs text-gray-300 mb-6">
            Pay Now
            <div className="text-xs text-gray-300">
              Secured by Razorpay
            </div>
          </button>

          {/* 🔥 Extra Links */}
          <div className="space-y-3 text-sm">
            {["Contact Us", "Privacy Policy"].map((item, i) => (
              <div
                key={i}
                className="group flex items-center gap-3 cursor-pointer transition"
              >
                {/* Arrow */}
                <span className="text-white transition duration-300 group-hover:translate-x-1">
                  ›
                </span>
                {/* Text */}
                <span className="transition text-gray-200 hover:text-gray-300 hover:underline duration-300">
                  {item}
                </span>

              </div>
            ))}
          </div>
        </div>

        {/* 🔹 Contact Us */}
        <div>
          <h3 className="text-lg font-semibold mb-5">Contact Us</h3>

          <div className="space-y-4 text-sm">

            <div className="flex items-start text-gray-200 gap-3">
              <MapPin 
                size={20} 
                className="mt-1 text-white shrink-0"
              />
              <p>
                15-16-17 Maa Shakambhari Nagar-d Block, Near Silver Stream
                World School, Gandhi Path Road, Jaipur, Rajasthan, 302021
              </p>
            </div>

            <div className="border-b border-gray-800"></div>

            <div className="flex items-center text-gray-200 gap-3">
              <Phone size={18} className="text-white" />
              <p>(+91) 7062101914</p>
            </div>

            <div className="border-b border-gray-800"></div>

            <div className="flex items-center text-gray-200 gap-3">
              <Mail size={18} className="text-white" />
              <p>info.indiaheritagetravel@gmail.com</p>
            </div>

          </div>
        </div>
      </div>

      <div className="relative mt-12">

        <div className="mt-12 -mx-6 md:-mx-20 border-t border-gray-800"></div>

        <p className="text-center text-sm text-gray-400 mt-6 px-6 md:px-20">
          © {new Date().getFullYear()} India Heritage Travel. Crafted with ❤️ for unforgettable journeys.
        </p>

        </div>
    </footer>
  );
}