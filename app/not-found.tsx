import type { Metadata } from "next";
import Link from "next/link";
import { Home, Compass } from "lucide-react";

export const metadata: Metadata = {
  title: "404 - Page Not Found | India Heritage Travel",
  description:
    "The page you are looking for could not be found. Explore India's finest heritage journeys, cultural experiences, and luxury travel itineraries.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className="relative min-h-screen bg-[#0A0806] flex items-center justify-center px-4 sm:px-6 md:px-8">
      {/* Minimal Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-[#C2A985] rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-[#C2A985] rounded-full blur-[120px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-3xl mx-auto">
        <div className="bg-white/[0.03] backdrop-blur-sm rounded-xl border border-white/5 p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16">
          
          {/* 404 Number - Minimal */}
          <div className="text-center">
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-[350] text-[#C2A985] tracking-tight">
              404
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-center font-[400] text-base sm:text-[18px] md:text-[20px] lg:text-[22px] text-white tracking-wide">
            Page Not Found
          </h1>

          {/* Description */}
          <p className="mt-3 sm:mt-4 text-center text-gray-400 text-[11px] sm:text-[12px] md:text-[13px] font-light leading-relaxed max-w-lg mx-auto px-2">
            Oops! This destination is still being discovered. Let's explore some other incredible places instead.
          </p>

          {/* Action Buttons - Clean & Minimal */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 bg-[#C2A985] text-white text-[10px] sm:text-[11px] md:text-[12px] rounded-full transition-all duration-300 hover:bg-[#AF956C]"
            >
              <Home size={14} className="sm:size-[16px]" />
              Back to Home
            </Link>
          </div>

          {/* Quick Links */}
          <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-white/5">
            <div className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-3 text-[10px] sm:text-xs text-white/30">
              <Link href="/about" className="hover:text-white/60 transition-colors hover:underline">
                About
              </Link>
              <span className="text-white/10">|</span>
              <Link href="/contact" className="hover:text-white/60 transition-colors hover:underline">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}