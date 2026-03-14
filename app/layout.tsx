import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import Navbar from "@/src/components/layout/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        {/* Reusable Navbar */}
        <Navbar />

        {/* Page Content */}
        <main>{children}</main>


        {/* Google Translate Init */}
        <Script id="google-translate-init" strategy="afterInteractive">
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
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />


        {/* Fix Google Translate Banner */}
        <Script id="google-translate-fix" strategy="afterInteractive">
          {`
            const removeBanner = () => {
              const banner = document.querySelector('.goog-te-banner-frame');
              if (banner) banner.remove();
              document.body.style.top = '0px';
            };

            setInterval(removeBanner, 500);
          `}
        </Script>

      </body>
    </html>
  );
}