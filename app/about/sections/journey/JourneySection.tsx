"use client";

import { useState } from "react";

export default function JourneySection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="journey" className="space-y-2 md:space-y-3">

      {/* TOP PART */}
      <div className="space-y-1 md:space-y-2">

        {/* Heading */}
        <h2 className="text-[18px] sm:text-[20px] md:text-[24px]
              font-semibold
              text-[#8b6a3d]
              tracking-wide">
          We Didn't Set Out to Build a Travel Company.
        </h2>

        <h3 className="text-[14px] sm:text-[16px] md:text-[18px]
              tracking-wide font-light">
          We Set Out to Do Travel Differently.
        </h3>

      </div>

      {/* STORY CONTENT */}
      <div className="text-[#5f5f5f] mb-2 md:mb-3 leading-relaxed text-[12px] sm:text-[13px] md:text-[14px] font-light text-justify">

        {/* ALWAYS VISIBLE */}
        <p className="font-[450] text-gray-700">
          Hello, we are Isha and Piyush.
        </p>
        <p>
          And if you ask us how India Heritage Travel began, the honest answer is - we didn't really plan 
          to start a travel company.
        </p>

        <p className="mt-2 md:mt-3">
          We simply wanted to fix something we felt was missing.
        </p>

        <p className="mt-2 md:mt-3">
          Growing up in India, I had travel and hospitality around me from the very beginning. I watched 
          my uncle build and run his travel company, and I was always fascinated by the people who came 
          through it -where they came from, what brought them to India, and what they hoped to discover 
          here.
        </p>

        <p className="mt-2 md:mt-3">
          I was naturally curious. I loved meeting new people, hearing their stories, and travelling 
          across India myself.
        </p>

        <p className="mt-2 md:mt-3">
          And the more I travelled, the more I started to notice something.
        </p>

        {/* 🔥 EXPANDABLE CONTENT */}
        {expanded && (
          <>
            <p className="mt-2 md:mt-3">
              So many journeys followed the same pattern.
            </p>

            <p className="mt-2 md:mt-3">
              The same cities. The same monuments. The same sightseeing.
            </p>

            <p className="mt-2 md:mt-3">
              Of course, India has incredible places that everyone should see. But I kept wondering -what 
              if we could show people something more?
            </p>

            <p className="mt-2 md:mt-3">
              What if a traveler could go beyond simply seeing India and actually experience it?
            </p>

            <p className="mt-2 md:mt-3">
             Meet the people.
            </p>

            <p className="mt-2 md:mt-3">
              Share a meal.
            </p>

            <p className="mt-2 md:mt-3">
              Walk through a local market.
            </p>

            <p className="mt-2 md:mt-3">
              Discover a quiet village.
            </p>

            <p className="mt-2 md:mt-3">
              Stay somewhere with a story.
            </p>

            <p className="mt-2 md:mt-3">
              Experience the India that exists between the famous places.
            </p>

            <p className="mt-2 md:mt-3">
              That question stayed with me.
            </p>

            <p className="mt-2 md:mt-3">
              And then I met Isha
            </p>
            <p className="mt-2 md:mt-3">
              She brought another perspective to the story -one that was deeply personal.
            </p>
            <p className="mt-2 md:mt-3">
              As a woman, she understood the concerns that many women have when they think about travelling 
              alone, especially to a country that feels unfamiliar. She had experienced situations herself 
              that made her think about something very important:
            </p>
            <p className="mt-2 md:mt-3 font-[450] text-gray-700">
              If we, as people who know India, sometimes have these concerns, how must a woman travelling 
              here alone from another country feel?
            </p>
            <p className="mt-2 md:mt-3">
              That question changed the way we looked at travel.
            </p>
            <p className="mt-2 md:mt-3">
              We didn't want our travelers to simply have a driver, a guide, and an itinerary waiting for them.
            </p>
            <p className="mt-2 md:mt-3">
              We wanted them to have someone here.
            </p>
            <p className="mt-2 md:mt-3"> 
              Someone they could talk to.
            </p>
            <p className="mt-2 md:mt-3">
              Someone who would listen.
            </p>
            <p className="mt-2 md:mt-3">
              Someone who knew their journey personally.
            </p>
            <p className="mt-2 md:mt-3">
              Someone they could call when they had a question, felt unsure, or simply wanted advice.
            </p>
            <p className="mt-2 md:mt-3">
              We wanted them to feel that, even though they were thousands of miles away from home, they 
              had a home in India.
            </p>
            <p className="mt-2 md:mt-3">
              And that's when India Heritage Travel slowly began to take shape.
            </p>
            <p className="mt-2 md:mt-3">
              Not as a big travel company.
            </p>
            <p className="mt-2 md:mt-3">
              Not as a business built around numbers and bookings.
            </p>
            <p className="mt-2 md:mt-3">
              But as a small, boutique travel company built around people.
            </p>
            <p className="mt-2 md:mt-3">
              Today, we personally stay connected with our travelers from the first conversation until the 
              moment they leave India. We take the time to understand who they are, what they love, what 
              makes them curious, and what they hope to feel during their time here.
            </p>
            <p className="mt-2 md:mt-3">
              Every journey is built around the person -not around a standard package.
            </p>
            <p className="mt-2 md:mt-3">
              Every hotel is thoughtfully chosen.
            </p>
            <p className="mt-2 md:mt-3">
              Every guide is personally selected.
            </p>
            <p className="mt-2 md:mt-3">
              Every experience has a reason for being there.
            </p>
            <p className="mt-2 md:mt-3">
              And if something doesn't feel right, we change it.
            </p>
            <p className="mt-2 md:mt-3">
              Because we don't believe there is one perfect way to travel through India..
            </p>
            <p className="mt-2 md:mt-3">
              There is only your way.
            </p>
            <p className="mt-2 md:mt-3">
              Maybe you want to explore grand palaces and ancient cities. Maybe you want to sit with a local 
              family and share a meal. Maybe you want wildlife, spirituality, art, food, wellness, adventure 
              -or simply a few quiet days to breathe.
            </p>
            <p className="mt-2 md:mt-3">
              Whatever brings you here, we listen first.
            </p>
            <p className="mt-2 md:mt-3">
              Then we curate.
            </p>
            <p className="mt-2 md:mt-3">
              And we stay with you.
            </p>


            <p className="mt-2 md:mt-4">
              Our promise is simple:
            </p>
            <p className="mt-2 md:mt-3 font-[450] text-gray-700">
              We listen to you.
            </p>
            <p className="font-[450] text-gray-700">
              We curate without compromise.
            </p>
            <p className="font-[450] text-gray-700">
              We care about your comfort and safety.
            </p>
            <p className="font-[450] text-gray-700">
              We stay connected throughout your journey.
            </p>
            <p className="font-[450] text-gray-700">
              And we design your India around you -not around what a typical India tour is supposed to look 
              like.
            </p>

            <p className="mt-2 md:mt-3">
              Because for us, travel has never been just about destinations.
            </p>
            <p className="mt-2 md:mt-3">
              It's about how you are welcomed.
            </p>
            <p className="mt-2 md:mt-3">
              How you are looked after.
            </p>
            <p className="mt-2 md:mt-3">
              The conversations you have.
            </p>
            <p className="mt-2 md:mt-3">
              The people you meet.
            </p>
            <p className="mt-2 md:mt-3">
              The little moments you never expected.
            </p>
            <p className="mt-2 md:mt-3">
              And the feeling you carry home with you.
            </p>
            <p className="mt-2 md:mt-3">
              We started India Heritage Travel because we wanted to show people India through our eyes -the 
              India we know, the India we love, and the India that exists beyond the usual tourist trail.
            </p>
            <p className="mt-2 md:mt-3">
              Today, we are still a small team by choice.
            </p>
            <p className="mt-2 md:mt-3">
              Because being small allows us to stay close.
            </p>
            <p className="mt-2 md:mt-3">
              To know every traveler.
            </p>
            <p className="mt-2 md:mt-3">
              To answer every message.
            </p>
            <p className="mt-2 md:mt-3">
              To notice the little things.
            </p>
            <p className="mt-2 md:mt-3">
              And to care.
            </p>
            <p className="mt-2 md:mt-3">
              Over the years, many people who came to India as our travelers have become our friends. Some 
              have become like fam ily. And perhaps that is the greatest reward of what we do.
            </p>
            <p className="mt-2 md:mt-3">
              So, if you are thinking about coming to India, we hope you don't just come to see our country.
            </p>
            <p className="mt-2 md:mt-3">
              Come to experience it.
            </p>
            <p className="mt-2 md:mt-3">
              Come with your curiosity.
            </p>
            <p className="mt-2 md:mt-3">
              Come with your questions.
            </p>
            <p className="mt-2 md:mt-3">
              Come as you are.
            </p>
            <p className="mt-2 md:mt-3">
              And let us help you discover an India that feels personal, meaningful, and truly yours.
            </p>


            <p className="mt-2 md:mt-4 font-[450] text-gray-700">
              Welcome to India.
            </p>
            <p className="font-[450] text-gray-700">
              Welcome to our way of travelling.
            </p>
            <p className="font-[450] text-gray-700">
              And most importantly, welcome to our home.
            </p>

          </>
        )}

        {/* 🔥 TOGGLE BUTTON */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-3 px-0 py-2 bg-transparent border-0 group cursor-pointer"
        >
          {/* Line indicator - clean minimal */}
          <span className={`w-8 h-px bg-[#9c6b2f] transition-all duration-200 ${expanded ? 'w-12' : 'w-8 group-hover:w-10'}`} />
          
          {/* Main Text */}
          <span className="text-[#9c6b2f] text-sm hover:underline font-medium tracking-wide uppercase">
            {expanded ? "Show Less" : "Read More"}
          </span>
          
          {/* Journey Text with dot separator */}
          <div className="flex items-center gap-2">
            <span className="text-[#9c6b2f]/40 text-xs">•</span>
            <span className="text-[#9c6b2f]/80 text-sm font-light">
              My Journey
            </span>
          </div>
        </button>

      </div>

    </section>
  );
}