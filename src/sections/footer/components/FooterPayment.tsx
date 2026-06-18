"use client";

// ============================================================
// 1. IMPORTS
// ============================================================
import Link from "next/link";

// ============================================================
// 2. DATA
// ============================================================
const EXTRA_LINKS = [
  { name: "Contact Us", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy-policy" },
] as const;

// ============================================================
// 3. TYPES
// ============================================================
type ExtraLink = typeof EXTRA_LINKS[number];

// ============================================================
// 4. COMPONENT
// ============================================================
export default function FooterPayment() {
  return (
    <div>
      {/* Heading */}
      <h3 className="text-[11px] sm:text-[12px] uppercase tracking-[0.24em] text-white mb-5 sm:mb-6 text-center sm:text-left">
        Online Payment
      </h3>

      {/* Pay Button */}
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
          <span className="font-medium text-white">Pay Now</span>
          <div className="text-xs text-white mt-1">Secured by Razorpay</div>
        </button>
      </div>

      {/* Extra Links */}
      <ul className="flex flex-col text-[10px] font-extralight tracking-[0.15em] text-gray-200">
        {EXTRA_LINKS.map((item, index) => (
          <li key={index}>
            <Link
              href={item.href}
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
              {/* Arrow Icon */}
              <span className="text-white transition duration-300 group-hover:translate-x-1">
                ›
              </span>

              {/* Link Text */}
              <span className="transition text-gray-200 hover:text-gray-300 hover:underline duration-300">
                {item.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}