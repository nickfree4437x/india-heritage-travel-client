import type { Metadata } from "next";
import {
  Inter,
  Playfair_Display,
  Caveat_Brush,
} from "next/font/google";

import Script from "next/script";

import { Toaster } from "react-hot-toast";

import "./globals.css";

import Navbar from "@/src/components/layout/nav/Navbar";
import StickyPlanButton from "@/src/components/common/StickyPlanButton";

// Body Font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Heading Font
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

// Handwritten Font
const caveatBrush = Caveat_Brush({
  subsets: ["latin"],
  variable: "--font-handwritten",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "India Heritage",
  description: "Explore Incredible India Journeys",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (

    <html lang="en">

      <body
        className={`${inter.variable} ${playfair.variable} ${caveatBrush.variable} font-[var(--font-inter)] antialiased`}
      >

        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <main>{children}</main>

        {/* Sticky Plan Your Trip Button */}
         <StickyPlanButton />

        {/* React Hot Toast */}
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 4000,

            style: {
              background: "#fff",
              color: "#333",
              border: "1px solid white",
              padding: "14px 16px",
              fontSize: "13px",
              borderRadius: "12px",
            },

            success: {
              style: {
                border: "1px solid white",
              },
            },

            error: {
              style: {
                border: "1px solid white",
              },
            },
          }}
        />

        {/* Google Translate Init */}
        <Script
          id="google-translate-init"
          strategy="afterInteractive"
        >
          {`
            function googleTranslateElementInit() {
              new google.translate.TranslateElement(
                { pageLanguage: 'en' },
                'google_translate_element'
              );
            }
          `}
        </Script>

        {/* Google Translate Library */}
        <Script
          src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />

        {/* Fix Google Translate Banner */}
        <Script
          id="google-translate-fix"
          strategy="afterInteractive"
        >
          {`
            const removeBanner = () => {
              const banner = document.querySelector('.goog-te-banner-frame');

              if (banner) banner.remove();

              document.body.style.top = '0px';
            };

            setInterval(removeBanner, 500);
          `}
        </Script>

        {/* Tawk.to Live Chat */}
        {/* <Script
          id="tawk-to"
          strategy="afterInteractive"
        >
          {`
            var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();

            (function () {

              var s1 = document.createElement("script"),
              s0 = document.getElementsByTagName("script")[0];

              s1.async = true;

              s1.src = 'https://embed.tawk.to/69c5220b31e8e31c37c54b8d/1jkl0pvuo';

              s1.charset = 'UTF-8';

              s1.setAttribute('crossorigin', '*');

              s0.parentNode.insertBefore(s1, s0);

            })();
          `}
        </Script> */}

      </body>

    </html>
  );
}