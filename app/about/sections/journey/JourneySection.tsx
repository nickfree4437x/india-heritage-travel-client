"use client";

import { useState } from "react";
import Image from "next/image";

export default function JourneySection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="journey" className="space-y-10">

      {/* TOP PART */}
      <div className="space-y-6">

        {/* Heading */}
        <h2 className="text-[22px] sm:text-[26px] md:text-[28px]
              font-semibold
              text-[#8b6a3d]
              tracking-wide
              mb-2">
          My personal journey
        </h2>

        {/* Quote */}
        <p className="italic text-[#5f6b7a] text-[15px] md:text-[16px] font-light leading-[1.9] tracking-[0.2px]">
          “I started with nothing but a dream and determination.
          The road was tough, but every difficulty made me stronger
          and more resilient.”
        </p>

        {/* Author */}
        <p className="mt-5 text-right text-[#9c6b2f] text-[15px] md:text-[16px] font-medium tracking-[0.4px]">
          - Piyush Singh
        </p>

        {/* Profile Image */}
        <div className="flex justify-center">
          <div className="relative w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden">
            <Image
              src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779618257/profile_fankpm.jpg" // 👈 apni image daal
              alt="Piyush Singh founder of India Heritage Travel"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>

      {/* STORY CONTENT */}
      <div className="text-[#5f5f5f] mb-6 leading-relaxed text-[12px] sm:text-[13px] md:text-[14px] font-light text-justify">

        {/* ALWAYS VISIBLE */}
        <p>
          I was born in a small town near Jodhpur and my life’s journey took many unexpected turns. 
          As a child, my father sent me to live with his big brother’s house in Jaipur. 
          I was brought up there & my entire childhood spent with them. He was a doctor in a big hospital an 
          incredibly kind man who always helped others. He taught me patience, honesty, and the strength to 
          face challenges with a smile. His wisdom shaped who I am today.
        </p>

        <p className="mt-6">
          But life changed when I had to return to my real home due to some family reasons when I was 
          13 years old. It wasn’t easy to adjust, and I struggled with the transition. 
          After completing my 10th grade, I moved to a hostel and avoided coming home even during holidays. 
          By the time I finished 12th, I had no choice but to live with my parents again. The adjustment was difficult, and I felt a growing mental pressure.
        </p>

        {/* 🔥 EXPANDABLE CONTENT */}
        {expanded && (
          <>
            <p className="mt-6">
              At just 16 years old, due to family issues, I had to stay away from home. 
              While attending college I had no option but to survive. So after a few days of struggle, 
              I decided to find a job. I worked for one day before realizing I wasn’t meant for employment I 
              was meant to build something on my own.
            </p>

            <p className="mt-6">
              So, I started my first business with a friend. Within a year, it was doing well, 
              and I was earning good money. But life tested me again my business partner betrayed me. 
              I had a choice: fight for the business or walk away with my dignity. I chose the latter, 
              leaving with a positive attitude.
            </p>

            <p className="mt-6">
              My college was over & I moved to Jodhpur, where I spent six months learning the wholesale 
              trading business tea, sugar, oil, and essentials from my cousin. Soon, I started my own trading 
              business, and within a year, I was financially stable. But then came the biggest challenge COVID-19
              . The market collapsed, businesses shut down, and I lost everything. 
              The next six months were some of the hardest of my life.
            </p>

            <p className="mt-6">
              After COVID, I returned to Jaipur with nothing in my hands. I was struggling again, trying to start something new. 
              There was no one to support me no good friends, no guidance just me against the world.
            </p>

            <p className="mt-6">
              Alongside my studies, I opened my own office and started doing accounting work. 
              This gave me financial stability, and soon, I was earning a good amount of money again. 
              Life was going smoothly my studies, my work, and my earnings were all aligned.
            </p>

            <p className="mt-6">
              Then, one night, I got a call that changed everything.
            </p>

            <p className="mt-6">
              A very good friend of mine- who is more like a brother called me at midnight. 
              He was in trouble and needed my help. He asked me to come to Mandawa to manage his property, 
              Mandawa Kothi. I was at a crossroads I had a stable career, a growing business, and financial 
              security. But on the other hand, my friend needed me.
            </p>

            <p className="mt-6">
              I didn’t think twice. Something inside me told me to go. Without a second thought, 
              I left everything behind and moved to Mandawa.
            </p>

            <p className="mt-6">
              I arrived in Mandawa with no experience in the hotel industry. 
              I had no idea how things were managed, how bookings were handled, or how to interact with 
              travelers. But I didn’t let that stop me. I observed everything, learning slowly and gradually. Every day was a new experience, a new lesson.
            </p>

            <p className="mt-6">
              Over time, I became confident in managing the hotel.
            </p>

            <p className="mt-6">
              Mandawa Kothi welcomed many foreign travelers. As I managed the property, I met new people from different parts of the world. 
              At first, it was just work but then, I realized something.
            </p>

            <p className="mt-6">
              I loved interacting with these travelers. I enjoyed listening to their experiences, 
              understanding their perspectives, and learning what they loved about India and what they 
              struggled with. I started spending time with them, sitting and talking, understanding their 
              journeys.
            </p>

            <p className="mt-6">
              I found myself drawn to tourism not just as a business, but as a passion. I became deeply interested in the places people visited, the culture they experienced, 
              and how I could make their journey in India even better.
            </p>

            <p className="mt-6">
              That’s when my uncle helped me. He had been in the travel industry since 1995. I started sitting with him, learning from his experience. He shared his knowledge, taught me how tourism works, 
              and helped me understand why he had been so dedicated to it for so many years.
            </p>

            <p className="mt-6">
              And then, everything made sense. I understood why he loved this industry because I was starting to feel the same way. I realized this was more than just a profession. It was a way to connect with people, 
              to share the beauty of India, and to help travelers experience something unique.
            </p>
            <p className="mt-6">
              As time passed, I became sure this was my path. I had found peace in tourism.
            </p>
            <p className="mt-6">
              I wanted to show people India through my own eyes not just the popular destinations, but the hidden gems, the untold stories, and the deep cultural experiences.
            </p>
            <p className="mt-6">
              While managing the hotel during the 8-9 months of the travel season, I continued interacting with travellers. I decided that if I wanted to make a difference in tourism, I needed to see these places myself. So, every year, during the off-season, I started traveling across India exploring unique destinations, discovering offbeat hotels, and building local connections. 
              Through these travels, I gathered deep knowledge of the industry, and my passion only grew stronger.
            </p>
            <p className="mt-6">
              At this point, I knew I wanted to start something of my own something that truly reflected my vision of travel.
            </p>
            <p className="mt-6">
              I needed a name that captured my love for heritage, culture, and authentic experiences. That’s when I decided to create India Heritage Travel a company dedicated to showing travellers India through my eyes, 
              offering them experiences they wouldn’t find anywhere else.
            </p>
            <p className="mt-6">
              Now, I have reached a point where I know this is my destiny.
            </p>
            <p className="mt-6"> 
              This is where I find peace, this is what I love, and this is where I belong.
            </p>
            <p className="mt-6">
              Looking back, this was just a dream a few years ago. But today, I am living that dream.
            </p>
            <p className="mt-6">
              I am deeply grateful to everyone who has been a part of my journey my uncle, who guided me, my friend, and my partner Isha, whose unwavering support helped me build this empire, who motivated me every time & whatever I’m today is because of her equally being with me throughout. 
              Most of all, I am grateful to God for leading me to this path.
            </p>
            <p className="mt-6">
              Now, my purpose is clearto help travellers experience India in the most authentic way, to make their journeys smooth and unforgettable, 
              and to show them the beauty of India through my eyes.
            </p>
            <p className="mt-6">
              This is my journey. Every struggle, every loss, and every challenge has led me here. And now, through India Heritage Travel, 
              I am ready to share my love for India with the world.
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