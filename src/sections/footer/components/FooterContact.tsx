"use client";

// ============================================================
// 1. IMPORTS
// ============================================================
import { MapPin, Phone, Mail } from "lucide-react";

// ============================================================
// 2. COMPONENT
// ============================================================
export default function FooterContact() {
  return (
    <div>
      {/* Heading */}
      <h3 className="text-[11px] sm:text-[12px] uppercase tracking-[0.24em] text-white mb-5 sm:mb-6 text-center sm:text-left">
        Contact Us
      </h3>

      {/* Contact Details */}
      <div className="flex flex-col gap-5 sm:gap-6 text-[10px] font-extralight tracking-[0.12em] leading-[1.9] text-gray-200">
        
        {/* Address */}
        <div className="flex items-start gap-3 justify-center sm:justify-start">
          <MapPin size={15} className="mt-1 text-gray-200 shrink-0" />
          <p className="max-w-[250px] sm:max-w-[290px] text-center sm:text-left text-[9px] sm:text-[10px]">
            15-16-17 Maa Shakambhari Nagar-d Block, Near Silver Stream World
            School, Gandhi Path Road, Jaipur, Rajasthan, 302021
          </p>
        </div>

        <div className="border-b border-white/5" />

        {/* Phone */}
        <div className="flex items-center gap-3 justify-center sm:justify-start">
          <Phone size={14} className="text-gray-200 shrink-0" />
          <p className="hover:text-[#e7dfd4] transition duration-300 cursor-pointer text-center sm:text-left">
            (+91) 7062101914
          </p>
        </div>

        <div className="border-b border-white/5" />

        {/* Email */}
        <div className="flex items-center gap-3 justify-center sm:justify-start">
          <Mail size={14} className="text-gray-200 shrink-0" />
          <p className="hover:text-gray-200 transition duration-300 cursor-pointer break-all text-center sm:text-left text-[9px] sm:text-[10px]">
            info.indiaheritagetravel@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}