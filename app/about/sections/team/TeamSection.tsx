"use client";

import Image from "next/image";
import { useState } from "react";
import { 
  Heart, 
  MapPin, 
  Star, 
} from "lucide-react";

const teamMembers = [
  {
    name: "Piyush Singh",
    role: "FOUNDER & TRAVEL CURATOR",
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779618257/profile_fankpm.jpg",
    alt: "Piyush Singh founder and travel curator at India Heritage Travel",
  },
  {
    name: "Isha",
    role: "CO-FOUNDER & EXPERIENCE CURATOR",
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779625609/isha_boa8bm.jpg",
    alt: "Isha co-founder and travel experience mentor at India Heritage Travel",
  },
  {
    name: "Monu Sharma",
    role: "STRATEGIST",
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1785650050/WhatsApp_Image_2026-08-01_at_12.56.22_AM_qwxgrt.jpg",
    alt: "Monu Sharma creative and design expert at India Heritage Travel",
  },
  {
    name: "Bharat Singh",
    role: "TRAVEL MANAGER",
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779625901/WhatsApp_Image_2026-05-23_at_6.23.56_PM_kk3vfk.jpg",
    alt: "Bharat Singh operations and property manager at India Heritage Travel",
  },
  {
    name: "Ajay",
    role: "PHOTOGRAPHER & VISUAL STORYTELLER",
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1781258066/WhatsApp_Image_2026-06-12_at_2.14.54_PM_doxtd4.jpg",
    alt: "Ajay photographer and visual storyteller at India Heritage Travel",
  },
  {
    name: "Vishal",
    role: "DIGITAL STRATEGIST",
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1785755733/IMG_20260803_164058.jpg_1_kyrw4b.jpg",
    alt: "Vishal managing transport operations and digital presence at India Heritage Travel",
  },
];

export default function TeamSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="team" className="relative py-2 md:py-4 bg-white">
      

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-4 md:mb-6">
          
          <h2 className="text-[18px] sm:text-[20px] md:text-[26px] font-semibold tracking-wide text-[#8b6a3d] mb-2">
            Meet the Team Behind India Heritage Travel
            <br />
          </h2>

          <div className="flex items-center justify-center gap-4 mt-4">
            <span className="w-8 h-px bg-[#8b6a3d]/20" />
            <p className="text-[#8b6a3d]/60 text-sm tracking-widest uppercase font-light">
              The People Behind the Journey
            </p>
            <span className="w-8 h-px bg-[#8b6a3d]/20" />
          </div>

          <p className="mt-6 text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light max-w-6xl mx-auto">
            At India Heritage Travel, we are not just a team - we are travelers,
            creators, storytellers, and passionate people who genuinely love
            showing the beauty of India in a meaningful way.
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl border border-[#f0e4d4] overflow-hidden"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Card Top Gradient */}
              <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="p-6 sm:p-8 text-center">
                {/* Image Container */}
                <div className="relative mx-auto">
                  <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 mx-auto rounded-full overflow-hidden ring-4 ring-[#8b6a3d]/10">
                    <Image
                      src={member.image}
                      alt={member.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform "
                    />
                    
                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#8b6a3d]/20 via-transparent to-transparent opacity-0 transition-opacity duration-500" />
                    
                  </div>

                </div>

                {/* Member Info */}
                <div className="mt-5 space-y-1">
                  <h3 className="font-serif text-[#8b6a3d] text-[14px] sm:text-[16px] tracking-wide transition-colors">
                    {member.name}
                  </h3>
                  
                  <div className="flex items-center justify-center gap-2">
                    <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.15em] text-[#b48c54] font-medium">
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Content Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
          {/* Card 1 - What We Do */}
          <div className="bg-white rounded-xl border border-[#f0e4d4] p-6 sm:p-8 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#8b6a3d]/5 flex items-center justify-center">
                <MapPin className="w-4 h-4 text-[#8b6a3d]" />
              </div>
              <div>
                <h4 className="text-[#8b6a3d] font-medium text-sm sm:text-base mb-2">What We Do</h4>
                <p className="text-gray-700 text-[12px] sm:text-[13px] md:text-[13.5px] font-light leading-relaxed text-justify">
                  Together, we spend time exploring different parts of India to discover unique boutique 
                  properties, hidden heritage stays, meaningful cultural experiences, and carefully selected 
                  luxury hotels that truly reflect the spirit of each destination.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 - Our Philosophy */}
          <div className="bg-white rounded-xl border border-[#f0e4d4] p-6 sm:p-8 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#8b6a3d]/5 flex items-center justify-center">
                <Heart className="w-4 h-4 text-[#8b6a3d]" />
              </div>
              <div>
                <h4 className="text-[#8b6a3d] font-medium text-sm sm:text-base mb-2">Our Philosophy</h4>
                <p className="text-gray-700 text-[12px] sm:text-[13px] md:text-[13.5px] font-light leading-relaxed text-justify">
                  We believe in creating journeys that feel thoughtfully designed, deeply personal, and 
                  connected to the real soul of India - where every traveler can experience a perfect balance 
                  of heritage, culture, boutique luxury, comfort, and human connection.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-[#8b6a3d]/5 to-[#8b6a3d]/10 rounded-xl p-8 sm:p-10 md:p-12 border border-[#8b6a3d]/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#8b6a3d]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#8b6a3d]/5 rounded-full blur-3xl" />
          
          <div className="relative">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-px bg-[#8b6a3d]/20" />
              <Star className="w-5 h-5 text-[#8b6a3d]/40" />
              <span className="w-8 h-px bg-[#8b6a3d]/20" />
            </div>
            
            <h3 className="font-serif text-[#8b6a3d] text-2xl sm:text-3xl md:text-4xl tracking-wide mb-4">
              Your India Story Starts Here
            </h3>
            
            <div className="space-y-3 max-w-2xl mx-auto">
              <p className="text-gray-700 text-[12px] sm:text-[13px] md:text-[13.5px] font-light leading-relaxed text-center">
                You're just one step away from experiencing India in a way that feels truly yours.
              </p>
              <p className="text-gray-700 text-[12px] sm:text-[13px] md:text-[13.5px] font-light leading-relaxed text-center">
                Tell us what you're dreaming of, and let's create a journey that you'll carry with you long 
                after you leave.
              </p>
            </div>
            
            <div className="mt-6">
              <p className="font-serif text-[#8b6a3d] text-lg sm:text-xl md:text-2xl italic">
                "Let's plan your India journey together."
              </p>
            </div>
            
            <div className="mt-6 flex items-center justify-center gap-2">
              <span className="w-12 h-px bg-[#8b6a3d]/20" />
              <Heart className="w-4 h-4 text-[#8b6a3d]/20" />
              <span className="w-12 h-px bg-[#8b6a3d]/20" />
            </div>
          </div>
        </div>

      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float-slow {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-slower {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}