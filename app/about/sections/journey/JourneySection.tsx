"use client";

import { useState, useEffect, useRef } from "react";
import { 
  ChevronDown, 
  ChevronUp, 
  Quote,  
  Users, 
  Home, 
  MapPin, 
  TreePine,
  Mountain,
  Utensils,
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

  return (
    <section 
      ref={sectionRef}
      id="journey" 
      className="relative py-4 sm:py-6 md:py-4 overflow-hidden"
    >

      <div className="relative mx-auto w-full max-w-6xl lg:px-8">
        
        {/* Header Section */}
        <div className={`text-center mb-4 md:mb-6 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
          <h2 className="text-[18px] sm:text-[20px] md:text-[26px] font-semibold tracking-wide text-[#8b6a3d] mb-2">
            We Didn't Set Out to Build a Travel Company.
          </h2>
          
          <div className="flex items-center justify-center gap-4">
            <p className="text-[10px] md:text-[16px] text-[#8b6a3d]/80 font-[350] tracking-wide">
              We Set Out to Do Travel Differently.
            </p>
          </div>
        </div>

        {/* Main Story Card */}
        <div className={`relative transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="relative w-full max-w-6xl mx-auto">
            
            {/* Card decorative gradient */}
            <div className="absolute top-0 left-0 right-0 h-1" />
            
            <div className="p-0 sm:p-4 md:p-8 lg:p-10">
              
              {/* Story Content */}
              <div className="space-y-2 md:space-y-3 lg:space-y-3 text-[#5f5f5f] text-sm sm:text-base lg:text-lg leading-relaxed">
                
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
                <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light">
                  And the more I travelled, the more I started to notice something.
                </p>
                <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light">
                  So many journeys followed the same pattern.
                </p>
                <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light">
                  The same cities. The same monuments. The same sightseeing.
                </p>
                <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light">
                  Of course, India has incredible places that everyone should see. But I kept wondering -what if we could show people something more?
                </p>
                <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light">
                  What if a traveler could go beyond simply seeing India and actually <span className="italic">experience</span> it?
                </p>
                <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light">
                  Meet the people.
                </p>
                <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light">
                  Share a meal.
                </p>
                <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light">
                  Walk through a local market.
                </p>
                <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light">
                  Discover a quiet village
                </p>
                <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light">
                  Stay somewhere with a story.
                </p>
                <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light">
                  Experience the India that exists between the famous places.
                </p>

                {/* Quote Block */}
                <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light">
                 That question stayed with me.
                </p>

                {/* Isha Section */}
                <div className="space-y-2">
                  <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light">
                    And then I met Isha.
                  </p>
                  <p className=" text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light">
                    She brought another perspective to the story - one that was deeply personal.
                  </p>
                  <p className=" text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light">
                    As a woman, she understood the concerns that many women have when they think about travelling 
                    alone, especially to a country that feels unfamiliar. She had experienced situations herself 
                    that made her think about something very important:
                  </p>
                </div>

                {/* Highlight Box */}
                <div className="relative bg-gradient-to-r from-[#8b6a3d]/5 via-[#8b6a3d]/10 to-[#8b6a3d]/5 rounded-md p-4 sm:p-6">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-px bg-gradient-to-r from-transparent via-[#8b6a3d]/30 to-transparent" />
                  <p className="font-light text-[#8b6a3d] text-[10px] md:text-[15px] text-center">
                    "If we, as people who know India, sometimes have these concerns, 
                    <br className="hidden sm:block" />
                    how must a woman travelling here alone from another country feel?"
                  </p>
                </div>

                {/* EXPANDABLE CONTENT */}
                {expanded && (
                  <div className="space-y-2 md:space-y-3 animate-fadeInUp">

                    <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light">
                      That question changed the way we looked at travel.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light">
                      We didn't want our travelers to simply have a driver, a guide, and an itinerary waiting 
                      for them.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light">
                      We wanted them to have <span className="font-[450]">someone here.</span>
                    </p>
                    <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light">
                      Someone they could talk to.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light">
                      Someone who would listen.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light">
                      Someone who knew their journey personally.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light">
                      Someone they could call when they had a question, felt unsure, or simply wanted advice.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light">
                      We wanted them to feel that, even though they were thousands of miles away from home, 
                      <span className="font-[450]">they had a home in India.</span>
                    </p>
                    <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light">
                      And that's when India Heritage Travel slowly began to take shape.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light">
                      Not as a big travel company.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light">
                      Not as a business built around numbers and bookings.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light">
                      But as a small, boutique travel company built around <span className="font-[450]">people.</span>
                    </p>
                    <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light">
                      Today, we personally stay connected with our travelers from the first conversation 
                      until the moment they leave India. We take the time to understand who they are, what 
                      they love, what makes them curious, and what they hope to feel during their time here.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light">
                      Every journey is built around the person -not around a standard package.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light">
                      Every hotel is thoughtfully chosen.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light">
                      Every guide is personally selected.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light">
                      Every experience has a reason for being there.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light">
                      And if something doesn't feel right, we change it.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light">
                      Because we don't believe there is one perfect way to travel through India.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light">
                      There is only your way.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light">
                      Maybe you want to explore grand palaces and ancient cities. Maybe you want to sit 
                      with a local family and share a meal. Maybe you want wildlife, spirituality, art, 
                      food, wellness, adventure -or simply a few quiet days to breathe.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light">
                      Whatever brings you here, we listen first.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light">
                      Then we curate.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light">
                      And we stay with you.
                    </p>

                    {/* Promises */}
                    <p className="font-[450] text-[#2c2c2c] text-[12px] md:text-[14px]">Our promise is simple:</p>

                    {/* Hero Quote */}
                    <div className="relative bg-gradient-to-r from-[#8b6a3d]/5 via-[#8b6a3d]/10 to-[#8b6a3d]/5 rounded-lg p-4 sm:p-6">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-px bg-gradient-to-r from-transparent via-[#8b6a3d]/30 to-transparent" />
                      <p className="font-light text-[#8b6a3d] text-[10px] md:text-[14px]">
                        We listen to you. 
                        <br/>
                        We curate without compromise.
                        <br/>
                        We care about your comfort and safety.
                        <br/>
                        We stay connected throughout your journey.
                        <br/>
                        And we design your India around you -not around what a typical India tour is supposed 
                        to look like.
                      </p>
                    </div>

                    <p className="text-gray-700 leading-relaxed text-[11.5px] sm:text-[13px] md:text-[13.5px] font-light">
                      Because for us, travel has never been just about destinations. It's about how you are welcomed.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light">
                      It's about how you are welcomed.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light">
                      How you are looked after.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light">
                      The conversations you have.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light">
                      The people you meet.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light">
                      The little moments you never expected.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light">
                      And the feeling you carry home with you.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light">
                      We started India Heritage Travel because we wanted to show people India through our 
                      eyes -the India we know, the India we love, and the India that exists beyond the usual 
                      tourist trail.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-[450]">
                      Today, we are still a small team by choice.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light">
                      Because being small allows us to stay close.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light">
                      To know every traveler.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light">
                      To answer every message.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light">
                      To notice the little things.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light">
                      And to care.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light">
                      Over the years, many people who came to India as our travelers have become our friends. 
                      Some have become like fam ily. And perhaps that is the greatest reward of what we do.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light">
                      So, if you are thinking about coming to India, we hope you don't just come to see our 
                      country.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light">
                      Come to experience it.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light">
                      Come with your curiosity.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light">
                      Come with your questions.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light">
                      Come as you are.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light">
                      And let us help you discover an India that feels personal, meaningful, and truly yours.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light">
                      
                    </p>
                    <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light">
                      
                    </p>

                    {/* Final Welcome */}
                    <div className="relative bg-gradient-to-r from-[#8b6a3d]/5 via-[#8b6a3d]/10 to-[#8b6a3d]/5 rounded-md p-4">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-[#8b6a3d]/30 to-transparent" />
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-[#8b6a3d]/30 to-transparent" />
                      <div>
                        <p className="text-[#8b6a3d] font-light text-[10px] sm:text-[11px] md:text-[12.5px]">Welcome to India.</p>
                        <p className="text-[#8b6a3d] font-light text-[11px] sm:text-[12px] md:text-[14px]">Welcome to our way of travelling.</p>
                        <p className="text-[#8b6a3d] font-light text-[12px] sm:text-[14px] md:text-[16px]">And most importantly, welcome to our home.</p>
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
                        {expanded ? "Show less" : "No more about"}
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