"use client";

import Link from "next/link";
import Image from "next/image";

export default function WhatsAppSupport() {

  return (

    <Link
      href="https://wa.me/917062101914?text=Hi%20India%20Heritage%20Travel,%20I%20need%20help"
      target="_blank"
      aria-label="Chat on WhatsApp"
      className="
        fixed
        bottom-5
        right-5
        z-[999]

        group

        flex
        items-center
        justify-center

        w-[60px]
        h-[60px]

        rounded-full

        bg-[#25D366]

        shadow-[0_8px_25px_rgba(37,211,102,0.45)]

        hover:scale-[1.08]
        active:scale-[0.96]

        transition-all
        duration-300
      "
    >

      {/* OUTER RING */}
      <span
        className="
          absolute
          inset-0
          rounded-full
          border-[3px]
          border-white/30
        "
      />

      {/* WHATSAPP ICON */}
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp contact for India Heritage Travel customer support"
        width={32}
        height={32}
        className="
          relative
          z-10
          select-none
        "
      />

      {/* PULSE EFFECT */}
      <span
        className="
          absolute
          inset-0
          rounded-full
          bg-[#25D366]
          opacity-30
          animate-ping
        "
      />

    </Link>
  );
}