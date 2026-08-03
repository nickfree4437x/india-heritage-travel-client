"use client";

import { Compass, Users, User, GraduationCap, Briefcase, MapPin, Shield, Globe, Camera, Sparkles, Heart, Star, Coffee } from "lucide-react";

export default function WorkSection() {
  const specialties = [
    { icon: Users, label: "Friends & Family", desc: "Create memories together" },
    { icon: User, label: "Solo Female", desc: "Safe & empowering" },
    { icon: GraduationCap, label: "Educational", desc: "Learn through travel" },
    { icon: Briefcase, label: "Corporate", desc: "Team retreats" },
    { icon: MapPin, label: "Tailor-Made", desc: "Customized for you" },
    { icon: Shield, label: "Car & Driver", desc: "Worry-free travel" },
  ];

  return (
    <section className="py-2 md:py-2 bg-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-4 md:mb-6">
          <h2 className="text-[18px] sm:text-[20px] md:text-[26px] font-semibold tracking-wide text-[#8b6a3d] mb-2">
            How We Create Meaningful Journeys Across India 
            
          </h2>
        </div>

        {/* Description */}
        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-sm border border-[#8b6a3d]/5 p-8 md:p-10 mb-10">
          <div className="space-y-2 md:space-y-3 text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            <p>
              Our team comprises individuals who were born in India and are well-versed in the intricacies 
              of history, art, architecture, philosophy, religion, and gastronomy, bringing their unique 
              backgrounds to enrich your trip and turn it into a truly personal adventure.
            </p>
            <p>
              We specialize in a variety of travel experiences, including trips for Friends & Family, Solo 
              female travellers, and those seeking an educational adventure, corporate getaways, Tailor-Made 
              Journeys. Additionally, we offer the convenience of renting a car with a personal driver, ensuring 
              safe and worry-free travel throughout India.
            </p>
            <p>
              Our team is a harmonious blend of multilingual tour guides, art historians, skilled drivers, and western 
              travel cultural curators. From the moment you contact us, our friendly, respectful, and supportive staff 
              is at your service, ensuring your every need is met. Hospitality and open heartedness define our 
              approach.
            </p>
          </div>
        </div>

        {/* Specialty Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {specialties.map((item, i) => (
            <div 
              key={i}
              className="bg-white rounded-lg border border-[#8b6a3d]/10 p-5 text-center"
            >
              <div className="w-12 h-12 rounded-full bg-[#8b6a3d]/5 flex items-center justify-center mx-auto mb-3">
                <item.icon className="w-5 h-5 text-[#8b6a3d]" />
              </div>
              <h4 className="text-sm font-medium text-[#8b6a3d]">{item.label}</h4>
              <p className="text-[10px] md:text-[11px] font-light text-gray-400 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Team */}
        <div className="max-w-6xl mx-auto bg-[#8b6a3d]/5 rounded-2xl p-8 md:p-10">
          <div className="flex items-center gap-2 justify-center mb-2">
            <span className="text-[#8b6a3d] text-sm font-medium tracking-wide">Our Team</span>
          </div>
          <p className="text-center text-gray-700 text-[12px] sm:text-[13px] md:text-[14.5px] font-light leading-relaxed">
            A harmonious blend of{' '}
            <span className="text-[#8b6a3d]">
              multilingual tour guides, art historians, skilled drivers, and cultural curators
            </span>
            . From the moment you contact us, our friendly, respectful staff is at your service.
          </p>
        </div>

        {/* Closing */}
        <div className="text-center mt-6 md:mt-10">
          <p className="font-serif text-[#8b6a3d] text-xl md:text-2xl italic">
            "We're your gateway to an unforgettable Indian experience."
          </p>
          <div className="flex items-center justify-center gap-2 mt-3">
            <span className="w-8 h-px bg-[#8b6a3d]/20" />
            <Heart className="w-4 h-4 text-[#8b6a3d]/30" />
            <span className="w-8 h-px bg-[#8b6a3d]/20" />
          </div>
        </div>

      </div>
    </section>
  );
}