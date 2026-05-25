"use client";

import Image from "next/image";
import { Sparkles, MessageCircle, MapPin, Hotel, Users, Headphones, Heart, Shield, Clock } from "lucide-react";

export default function HowItWorksSection() {
  const steps = [
    {
      icon: <MessageCircle className="w-5 h-5" />,
      title: "First, we talk.",
      content: [
        "Before anything else, I simply want to understand you.",
        "The way you like to travel. The pace you enjoy.",
        "The kind of places that make you feel comfortable.",
        "We can connect over a Google Meet or a call and simply discuss ideas together - like two people planning a meaningful journey, not just a package."
      ]
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Then, I personally design your journey.",
      content: [
        "Every route is designed around your comfort, interests, energy, and travel style.",
        "Some women want slow mornings and heritage stays.",
        "Some want spirituality, local culture, shopping, or quieter experiences.",
        "No two journeys feel the same here - because no two women travel the same way."
      ]
    },
    {
      icon: <Hotel className="w-5 h-5" />,
      title: "The stays we choose matter deeply.",
      content: [
        "The hotels we work with are handpicked carefully - places we already know, trust, and regularly work with.",
        "Clean spaces. Safe locations. Warm hospitality.",
        "Places where you can genuinely relax after a long day without feeling uneasy or uncomfortable."
      ]
    }
  ];

  return (
    <section className="w-full bg-white mdL:py-0 py-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">

        {/* SECTION LABEL */}
        <div className="text-center mb-3">
            <p className="text-[11px] tracking-[0.05em] uppercase text-[#8b6a3d]">
              How Everything Works
            </p>
        </div>

        {/* HEADING */}
        <h2 className="text-[20px] sm:text-[24px] md:text-[26px]
              font-semibold
              text-center
              mb-4 md:mb-14
              text-[#2c2c2c]
              tracking-wide">
          So… how does it all actually work ?
        </h2>

        {/* TIMELINE STEPS - Desktop */}
        <div className="hidden md:block relative mb-20">
          <div className="absolute left-[45px] top-0 bottom-0 w-px bg-[#CBB299]"></div>
          
          <div className="space-y-12">
            {steps.map((step, idx) => (
              <div key={idx} className="relative flex gap-6 group">
                <div className="relative z-10">
                  <div className="w-[90px] h-[90px] bg-white rounded-xl border border-[#dbcdbb] shadow-sm flex items-center justify-center text-[#8b6a3d] transition-transform duration-300">
                    <div className="text-2xl">{step.icon}</div>
                  </div>
                </div>
                
                <div className="flex-1 pt-2">
                  <h3 className="text-[16px] md:text-[18px] font-semibold text-gray-700 mb-4 flex items-center gap-2">
                    {step.title}
                  </h3>
                  <div className="space-y-2 text-[#5f5f5f] mb-6 leading-relaxed text-[12px] sm:text-[13px] md:text-[14px] font-light">
                    {step.content.map((para, pIdx) => (
                      <p key={pIdx}>{para}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MOBILE STEPS */}
        <div className="md:hidden space-y-8 mb-16">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-[#dbcdbb]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white rounded-xl border border-[#dbcdbb] flex items-center justify-center text-[#8b6a3d]">
                  {step.icon}
                </div>
                <h3 className="text-[15px] font-semibold text-gray-700">{step.title}</h3>
              </div>
              <div className="space-y-2 text-[#5f5f5f] mb-6 leading-relaxed text-[12px] sm:text-[13px] md:text-[14px] font-light">
                {step.content.map((para, pIdx) => (
                  <p key={pIdx}>{para}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* DRIVERS + SUPPORT SECTION - New Structure */}
        <div>
          
          {/* Image Section - Hidden on mobile, visible on desktop */}
          <div className="hidden md:block relative group w-full mb-10">
            <div className="relative w-full h-[380px] md:h-[600px] overflow-hidden rounded-md shadow-md">
              <Image
                src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779629767/drivers_ira2vt.jpg"
                alt="Drivers and Guides"
                fill
                className="object-cover transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent"></div>
            </div>
          </div>

          {/* Two Cards Below Image - Equal Width Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            
            {/* Card 1 - About the drivers & guides */}
            <div className="bg-white rounded-xl p-6 lg:p-7 shadow-sm transition-all duration-300 border border-[#dbcdbb] group/card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#f8f6f2] rounded-xl flex items-center justify-center text-[#8b6a3d] shrink-0 mt-1">
                  <Users className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[16px] md:text-[18px] font-semibold text-gray-700 mb-3 flex items-center gap-2">
                    About the drivers & guides
                  </h3>
                  <div className="space-y-2 text-[#5f5f5f] leading-relaxed text-[12px] sm:text-[13px] md:text-[14px] font-light">
                    <p>This part is very important to me.</p>
                    <p>The drivers and guides you travel with are not random people assigned to a trip. Most of them have worked with us for years and are honestly like family now.</p>
                    <p>They understand how women prefer to travel. They respect your space, your comfort, your pace.</p>
                    <div className="mt-3 pt-2 border-t border-[#dbcdbb]">
                      <p className="italic text-amber-700 flex items-center gap-2 mt-2">
                        And throughout the journey, they're there quietly making sure everything flows smoothly for you.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Mobile Image - Below About the drivers & guides card with proper spacing */}
              <div className="md:hidden mt-6 rounded-xl overflow-hidden">
                <div className="relative w-full h-[280px]">
                  <Image
                    src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779629767/drivers_ira2vt.jpg"
                    alt="Drivers and Guides"
                    fill
                    className="object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-xl"></div>
                </div>
              </div>
            </div>

            {/* Card 2 - And throughout the trip… I'm still there */}
            <div className="bg-gradient-to-br from-white to-gray rounded-xl p-6 lg:p-7 shadow-sm transition-all border border-[#dbcdbb] group/card relative overflow-hidden">
              {/* Decorative dot pattern */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-amber-200/20 rounded-full blur-2xl"></div>
              
              <div className="flex items-start gap-4 relative z-10">
                <div className="w-12 h-12 bg-[#f8f6f2] rounded-xl flex items-center justify-center text-[#8b6a3d] shrink-0 mt-1">
                  <Headphones className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[16px] md:text-[18px] font-semibold text-gray-700 mb-3 flex items-center gap-2">
                    And throughout the trip I'm still there
                  </h3>
                  
                  <div className="space-y-2 text-[#5f5f5f] leading-relaxed text-[12px] sm:text-[13px] md:text-[14px] font-light">
                    <p>From the moment your trip begins, we stay continuously connected through WhatsApp and calls.</p>
                    <p>So if there's absolutely anything - even something small - you can simply message me directly.</p>
                    <p>Whether it's changing a plan, needing help, feeling confused, or simply wanting a recommendation…</p>
                    
                    {/* Highlight Box */}
                    <div className="mt-4 bg-white/80 rounded-xl p-4 border border-[#dbcdbb] shadow-sm">
                      <p className="text-center text-gray-600 text-sm mt-2">
                        ✨ That's why most women tell me they never really felt alone while traveling here.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}