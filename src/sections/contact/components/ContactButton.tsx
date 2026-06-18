"use client";

// ============================================================
// TYPES
// ============================================================
interface ContactButtonProps {
  loading: boolean;
}

// ============================================================
// COMPONENT
// ============================================================
export function ContactButton({ loading }: ContactButtonProps) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="border border-[#AF956C] px-8 py-3 rounded-full text-white text-sm tracking-wide hover:bg-[#AF956C] transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {loading ? "Sending..." : "Send Message"}
    </button>
  );
}