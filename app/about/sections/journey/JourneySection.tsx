"use client";

import { useState, useEffect, useRef } from "react";
import { 
  ChevronDown, 
  ChevronUp, 
  Quote, 
  Heart, 
  Users, 
  Home, 
  MapPin, 
  Sun,
  Moon,
  Star,
  Camera,
  TreePine,
  Mountain,
  Utensils,
  Sparkles
} from "lucide-react";

export default function JourneySection() {
  const [expanded, setExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const journeyHighlights = [
    { icon: Users, text: "Meet the people", color: "bg-gray-50" },
    { icon: Utensils, text: "Share a meal", color: "bg-gray-50" },
    { icon: MapPin, text: "Walk through local markets", color: "bg-gray-50" },
    { icon: TreePine, text: "Discover quiet villages", color: "bg-gray-50" },
    { icon: Home, text: "Stay somewhere with a story", color: "bg-gray-50" },
    { icon: Mountain, text: "Experience the real India", color: "bg-gray-50" },
  ];

  const promises = [
    "We listen to you",
    "We curate without compromise",
    "We care about your comfort and safety",
    "We stay connected throughout your journey",
  ];

  const experiences = [
    "The conversations",
    "The people you meet",
    "The little moments",
    "The unexpected",
  ];

  const teamValues = [
    "Stay close",
    "Know every traveler",
    "Answer every message",
    "Notice the little things"
  ];

  return (
    <section 
      ref={sectionRef}
      id="journey" 
      className="relative py-4 sm:py-6 md:py-4 overflow-hidden"
    >

      <div className="relative mx-auto w-full max-w-6xl lg:px-8">
        
        {/* Header Section */}
        <div className={`text-center mb-10 md:mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
          <h2 className="text-[18px] sm:text-[20px] md:text-[26px] font-semibold tracking-wide text-[#8b6a3d] mb-2">
            We Didn't Set Out to Build a Travel Company.
          </h2>
          
          <div className="flex items-center justify-center gap-4">
            <p className="text-[10px] md:text-[16px] text-[#8b6a3d]/80 font-[350] italic tracking-wide">
              We Set Out to Do Travel Differently.
            </p>
          </div>
        </div>

        {/* Main Story Card */}
        <div className={`relative transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="relative w-full bg-white/90 backdrop-blur-sm rounded-xl shadow-sm border border-[#8b6a3d]/10 overflow-hidden">
            
            {/* Card decorative gradient */}
            <div className="absolute top-0 left-0 right-0 h-1" />
            
            <div className="p-4 sm:p-4 md:p-8 lg:p-10">
              
              {/* Story Content */}
              <div className="space-y-2 md:space-y-3 lg:space-y-4 text-[#5f5f5f] text-sm sm:text-base lg:text-lg leading-relaxed">
                
                {/* Opening */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-[#8b6a3d]/10 flex items-center justify-center">
                      <Quote className="w-3 h-3 text-[#8b6a3d]/60" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="font-serif text-[#8b6a3d] text-[16px] md:text-[18px]">
                      Hello, we are Isha and Piyush.
                    </p>
                    <p className="mt-1 text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light">
                      And if you ask us how India Heritage Travel began, the honest answer is - we didn't really plan 
                      to start a travel company.
                    </p>
                  </div>
                </div>

                <p className="pl-0 sm:pl-12 text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light">
                  We simply wanted to fix something we felt was missing.
                </p>

                <div className="relative pl-0 sm:pl-8 md:pl-12  border-[#8b6a3d]/20">
                  <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
                    Growing up in India, I had travel and hospitality around me from the very beginning. I watched 
                    my uncle build and run his travel company, and I was always fascinated by the people who came 
                    through it - where they came from, what brought them to India, and what they hoped to discover 
                    here.
                  </p>
                </div>

                <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light">
                  I was naturally curious. I loved meeting new people, hearing their stories, and travelling 
                  across India myself.
                </p>

                <div className="relative">
                  <div className="absolute " />
                  <p className="font-[350] text-[#8b6a3d] text-[14px] md:text-[16px]">
                    And the more I travelled, the more I started to notice something.
                  </p>
                </div>

                {/* Highlights Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 my-6">
                  {journeyHighlights.map((item, index) => (
                    <div 
                      key={index}
                      className={` relative bg-gradient-to-br ${item.color} rounded-xl p-4`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="absolute inset-0 bg-white/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white/70 flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-4 h-4 text-[#8b6a3d]" />
                        </div>
                        <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[13.5px] font-light">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quote Block */}
                <div className="relative bg-gradient-to-br from-[#8b6a3d]/5 to-[#8b6a3d]/10 rounded-2xl p-6 sm:p-5">
                  <Quote className="absolute top-4 right-4 w-6 h-6 text-[#8b6a3d]/10" />
                  <p className="font-light text-[#8b6a3d] text-[14px] md:text-[16px] italic">
                    "That question stayed with me."
                  </p>
                </div>

                {/* Isha Section */}
                <div className="">
                  <p className="font-[400] text-[#8b6a3d] text-[14px] md:text-[15px] ">
                    And then I met Isha.
                  </p>
                  <p className=" text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light">
                    She brought another perspective to the story - one that was deeply personal.
                  </p>
                </div>

                {/* Highlight Box */}
                <div className="relative bg-gradient-to-r from-[#8b6a3d]/5 via-[#8b6a3d]/10 to-[#8b6a3d]/5 rounded-xl p-6 sm:p-8 border border-[#8b6a3d]/10">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-px bg-gradient-to-r from-transparent via-[#8b6a3d]/30 to-transparent" />
                  <p className="font-light text-[#8b6a3d] text-[10px] md:text-[15px] text-center">
                    "If we, as people who know India, sometimes have these concerns, 
                    <br className="hidden sm:block" />
                    how must a woman travelling here alone from another country feel?"
                  </p>
                </div>

                {/* EXPANDABLE CONTENT */}
                {expanded && (
                  <div className="space-y-5 md:space-y-6 lg:space-y-7 animate-fadeInUp">

                    <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light">
                      That question changed the way we looked at travel.
                    </p>

                    {/* Feature Cards */}
                    <div className="grid sm:grid-cols-2 gap-4 my-6">
                      <div className="group bg-white rounded-xl border border-[#8b6a3d]/10 p-5">
                        <div className="w-10 h-10 rounded-full bg-[#8b6a3d]/10 flex items-center justify-center mb-3">
                          <Users className="w-5 h-5 text-[#8b6a3d]" />
                        </div>
                        <h4 className="text-[14px] md:text-[16px] text-gray-700">Someone here for you</h4>
                        <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14px] font-light">Not just a driver or guide, but a friend</p>
                      </div>
                      <div className="group bg-white rounded-xl border border-[#8b6a3d]/10 p-5">
                        <div className="w-10 h-10 rounded-full bg-[#8b6a3d]/10 flex items-center justify-center mb-3">
                          <Home className="w-5 h-5 text-[#8b6a3d]" />
                        </div>
                        <h4 className="text-[14px] md:text-[16px] text-gray-700">A home in India</h4>
                        <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14px] font-light">Even thousands of miles away from home</p>
                      </div>
                    </div>

                    <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light">
                      We wanted them to feel that, even though they were thousands of miles away from home, they 
                      had a home in India.
                    </p>

                    {/* Centered Quote */}
                    <div className="text-center py-2">
                      <div className="inline-block bg-gradient-to-r from-[#8b6a3d]/5 via-[#8b6a3d]/10 to-[#8b6a3d]/5 rounded-full px-6 sm:px-8 py-3 sm:py-4 border border-[#8b6a3d]/10">
                        <p className="text-[#8b6a3d] leading-relaxed text-[10px] sm:text-[13px] md:text-[14px] font-light">
                          Not as a big travel company. 
                          <br className="sm:hidden" />
                          <span className="text-[#8b6a3d] leading-relaxed text-[10px] sm:text-[13px] md:text-[14px] font-light ml-1">But as a small, boutique travel company built around people.</span>
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light">
                      Today, we personally stay connected with our travelers from the first conversation until the 
                      moment they leave India.
                    </p>

                    {/* Values Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
                      {[
                        { icon: Heart, text: "Every journey is personal" },
                        { icon: Star, text: "Every hotel is chosen" },
                        { icon: Users, text: "Every guide is selected" },
                        { icon: Sparkles, text: "Every experience has meaning" }
                      ].map((item, index) => (
                        <div key={index} className="text-center bg-gradient-to-b from-[#8b6a3d]/5 to-transparent rounded-xl p-4 transition-all duration-300">
                          <item.icon className="w-5 h-5 text-[#8b6a3d] mx-auto mb-2" />
                          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14px] font-light">{item.text}</p>
                        </div>
                      ))}
                    </div>

                    <p className="font-[350] text-[#8b6a3d] text-[12px] md:text-[16px] tracking-wide">
                      Because we don't believe there is one perfect way to travel through India. 
                      <span className="block not-italic mt-1">There is only your way.</span>
                    </p>

                    {/* Hero Quote */}
                    <div className="relative bg-[#8b6a3d] rounded-2xl p-4 sm:p-6 md:p-8 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#8b6a3d]/90 to-[#6b4f2a]/90" />
                      <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
                      <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
                      <p className="relative text-white text-[12px] sm:text-[16px] md:text-[18px] text-center leading-relaxed">
                        "We listen first. 
                        <br className="sm:hidden" />
                        Then we curate. 
                        <br />
                        <span className="text-[#d4b68a]">And we stay with you."</span>
                      </p>
                    </div>

                    {/* Promises */}
                    <div className="space-y-2">
                      <p className="font-[400] text-[#8b6a3d] text-[14px] md:text-[16px]">Our promise is simple:</p>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {promises.map((item, index) => (
                          <div key={index} className="flex items-start gap-3 bg-gradient-to-r from-[#8b6a3d]/5 to-transparent rounded-lg p-3">
                            <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <p className="text-gray-700 leading-relaxed text-[11.5px] sm:text-[13px] md:text-[13.5px] font-light">
                      Because for us, travel has never been just about destinations. It's about how you are welcomed.
                    </p>

                    {/* Experiences */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
                      {experiences.map((item, index) => (
                        <div key={index} className="group bg-white border border-[#8b6a3d]/10 rounded-lg p-3 text-center transition-all duration-300">
                          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[13.5px] font-light">{item}</p>
                        </div>
                      ))}
                    </div>

                    <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light">
                      We started India Heritage Travel because we wanted to show people India through our eyes - the 
                      India we know, the India we love, and the India that exists beyond the usual tourist trail.
                    </p>

                    {/* Team Values */}
                    <div className="flex items-center justify-center gap-4 py-2">
                      <span className="w-12 h-px bg-gradient-to-r from-transparent to-[#8b6a3d]/30" />
                      <span className="text-[#8b6a3d] font-serif text-[12px] md:text-[14px]">Still a small team by choice</span>
                      <span className="w-12 h-px bg-gradient-to-l from-transparent to-[#8b6a3d]/30" />
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4 ">
                    {teamValues.map((item, index) => (
                      <div key={index} className="text-center">
                        <p className="text-[#5f5f5f] text-[11px] sm:text-[12px] md:text-[13px] font-light tracking-wide group bg-white border border-[#8b6a3d]/10 rounded-lg p-3">
                          {item}
                        </p>
                        {index < teamValues.length - 1 && (
                          <div className="hidden sm:block w-px h-3 bg-[#8b6a3d]/10 mx-auto mt-1 " />
                        )}
                      </div>
                    ))}
                    </div>

                    <p className=" text-[#8b6a3d] leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light">
                      Over the years, many people who came to India as our travelers have become our friends. 
                      <span className="block not-italic mt-1">Some have become like family.</span>
                      <span className="block text-sm font-light text-gray-500 mt-1">And perhaps that is the greatest reward of what we do.</span>
                    </p>

                    {/* Final Call to Action */}
                    <div className="text-center space-y-4 py-6">
                      <div className="flex items-center justify-center gap-3">
                        <span className="w-12 h-px bg-gradient-to-r from-transparent to-[#8b6a3d]/30" />
                        <Camera className="w-5 h-5 text-[#8b6a3d]/40" />
                        <span className="w-12 h-px bg-gradient-to-l from-transparent to-[#8b6a3d]/30" />
                      </div>
                      <p className="text-[#8b6a3d] font-[350] text-[14px] md:text-[16px]">
                        Come to experience it.
                      </p>
                      <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light">
                        Come with your curiosity. Come with your questions. 
                        <br className="hidden sm:block" />
                        Come as you are.
                      </p>
                      <p className=" text-[#8b6a3d] leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light">
                        And let us help you discover an India that feels personal, meaningful, and truly yours.
                      </p>
                    </div>

                    {/* Final Welcome */}
                    <div className="relative bg-gradient-to-r from-[#8b6a3d]/5 via-[#8b6a3d]/10 to-[#8b6a3d]/5 rounded-2xl p-8 text-center border border-[#8b6a3d]/10">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-[#8b6a3d]/30 to-transparent" />
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-[#8b6a3d]/30 to-transparent" />
                      <div className="space-y-2">
                        <p className="text-[#8b6a3d] font-serif text-[12px] sm:text-[16px] md:text-[18px]">Welcome to India.</p>
                        <p className="text-[#8b6a3d] font-serif text-[14px] sm:text-[18px] md:text-[20px]">Welcome to our way of travelling.</p>
                        <p className="text-[#8b6a3d] font-serif text-[16px] sm:text-[20px] md:text-[22px] font-medium">And most importantly, welcome to our home.</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Toggle Button */}
                <div className="flex justify-center pt-4">
                  <button
                    onClick={() => setExpanded(!expanded)}
                    className="group relative inline-flex items-center gap-4 px-6 py-2 bg-white rounded-full border-2 border-[#8b6a3d]/20 shadow-sm transition-all duration-300 overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-[#8b6a3d]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <span className="relative flex items-center gap-3">
                      <span className="text-[#8b6a3d] tracking-wide text-[12px] md:text-[14px] font-light">
                        {expanded ? "No more about" : "more about"}
                      </span>
                      {expanded ? (
                        <ChevronUp className="w-4 h-4 text-[#8b6a3d] transition-transform duration-300" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-[#8b6a3d] transition-transform duration-300 group-hover:translate-y-0.5" />
                      )}
                    </span>
                    
                    <span className="relative w-px h-6 bg-[#8b6a3d]/20" />
                    
                    <span className="relative flex items-center gap-2 text-[#8b6a3d]/60 text-[12px] md:text-[14px] font-light tracking-wider">
                      Our Journey
                    </span>
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-slower {
          animation: float 8s ease-in-out infinite;
        }

        /* Smooth card hover */
        .group:hover .group-hover\\:scale-105 {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
}