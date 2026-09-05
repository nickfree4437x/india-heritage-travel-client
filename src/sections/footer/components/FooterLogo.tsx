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
        width={220}
        height={100}
        className="mb-6 w-auto h-auto"
        style={{ maxWidth: "250px" }}
        priority
      />
    </div>
  );
}