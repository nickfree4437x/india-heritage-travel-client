"use client";

// ============================================================
// 1. IMPORTS
// ============================================================
import Image from "next/image";

// ============================================================
// 2. COMPONENT
// ============================================================
export default function FooterLogo() {
  return (
    <div className="flex justify-center sm:justify-start">
      <Image
        src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779742948/logo2_yhlwmt.png"
        alt="India Heritage Travel logo"
        width={200}
        height={90}
        className="mb-6 w-auto h-auto"
        style={{ maxWidth: "220px" }}
        priority
      />
    </div>
  );
}