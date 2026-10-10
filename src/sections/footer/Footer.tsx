"use client";

import FooterLogo from "./components/FooterLogo";
import FooterSocialIcons from "./components/FooterSocialIcons";
import FooterQuickLinks from "./components/FooterQuickLinks";
import FooterPayment from "./components/FooterPayment";
import FooterContact from "./components/FooterContact";
import FooterCopyright from "./components/FooterCopyright";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#0f0f0f] Image via-[#121212] to-[#1a1a1a] text-gray-300 px-4 sm:px-6 md:px-10 lg:px-20 pt-14 pb-6">
      {/* TOP GRID - FULLY RESPONSIVE */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
        {/* Logo + Social */}
        <div className="text-center sm:text-left">
          <FooterLogo />
          <FooterSocialIcons />
        </div>

        {/* Quick Links */}
        <FooterQuickLinks />

        {/* Online Payment + Links */}
        <FooterPayment />

        {/* Contact Us */}
        <FooterContact />
      </div>

      {/* Copyright */}
      <FooterCopyright />
    </footer>
  );
}