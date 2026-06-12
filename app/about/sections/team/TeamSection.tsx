"use client";

import Image from "next/image";

const teamMembers = [
  {
    name: "Piyush Singh",
    role: "Founder & Travel Curator",
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779618257/profile_fankpm.jpg",
    alt: "Piyush Singh founder and travel curator at India Heritage Travel",
    description:
      "Designing authentic journeys, boutique stays, heritage experiences, and luxury travel across India.",
  },
  {
    name: "Isha",
    role: "Co-Founder & Experience Mentor",
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779625609/isha_boa8bm.jpg",
    alt: "Isha co-founder and travel experience mentor at India Heritage Travel",
    description:
      "Bringing warmth, creativity, and personalized travel experiences into every journey.",
  },
  {
    name: "Monu Sharma",
    role: "Creative & Design Expert",
    image: "/about/monu.jpg",
    alt: "Monu Sharma creative and design expert at India Heritage Travel",
    description:
      "Shaping the visual identity and boutique aesthetic of India Heritage Travel.",
  },
  {
    name: "Bharat Singh",
    role: "Operations & Property Manager",
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779625901/WhatsApp_Image_2026-05-23_at_6.23.56_PM_kk3vfk.jpg",
    alt: "Bharat Singh operations and property manager at India Heritage Travel",
    description:
      "Managing hospitality operations and ensuring seamless guest experiences.",
  },
  {
    name: "Ajay",
    role: "Photographer & Visual Storyteller",
    image: "/about/ajay.jpg",
    alt: "Ajay photographer and visual storyteller at India Heritage Travel",
    description:
      "Capturing the timeless beauty, culture, and heritage of India through his lens.",
  },
  {
    name: "Vishal",
    role: "Digital & Transport Operations",
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1781241673/profile_gqcznl.jpg",
    alt: "Vishal managing transport operations and digital presence at India Heritage Travel",
    description:
      "Handling transportation, guest coordination, website management, and digital presence.",
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TOP HEADING */}
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="
              text-[22px] sm:text-[26px] md:text-[28px]
              font-semibold
              text-[#8b6a3d]
              tracking-wide
              mb-4
            "
          >
            Meet the People Behind India Heritage Travel
          </h2>

          <p
            className="
              text-[#5f5f5f] mb-6 leading-relaxed text-[12px] sm:text-[13px] md:text-[14px] font-light
            "
          >
            At India Heritage Travel, we are not just a team — we are travelers,
            creators, storytellers, and passionate people who genuinely love
            showing the beauty of India in a meaningful way.
          </p>
        </div>

        {/* INTRO CONTENT - WITH HIGHLIGHTED NAMES */}
        <div className="max-w-5xl mx-auto mt-10 space-y-6">
          <p
            className="
              text-[#5f5f5f] mb-6 leading-relaxed text-[12px] sm:text-[13px] md:text-[14px] font-light text-justify
            "
          >
            Each member of our team brings a different vision, personality, and
            expertise, which helps us carefully create journeys that feel
            personal, authentic, and unforgettable.
          </p>

          <p
            className="
              text-[#5f5f5f] mb-6 leading-relaxed text-[12px] sm:text-[13px] md:text-[14px] font-light text-justify
            "
          >
            <strong className="text-[#8b6a3d] font-semibold">Piyush</strong> is the
            creative mind behind many of the experiences we design. From curating
            boutique stays and luxury experiences to personally working behind
            the scenes on every itinerary, he focuses on creating journeys that
            balance heritage, culture, comfort, and authenticity in every
            destination across India.
          </p>

          <p
            className="
              text-[#5f5f5f] mb-6 leading-relaxed text-[12px] sm:text-[13px] md:text-[14px] font-light text-justify
            "
          >
            <strong className="text-[#8b6a3d] font-semibold">Isha</strong> is the
            soul and strength of India Heritage Travel. Her vision, creativity,
            and understanding of luxury hospitality help shape experiences that
            feel elegant, warm, and deeply personal. She believes travel should
            not only be beautiful, but also emotional and memorable.
          </p>

          <p
            className="
              text-[#5f5f5f] mb-6 leading-relaxed text-[12px] sm:text-[13px] md:text-[14px] font-light text-justify
            "
          >
            <strong className="text-[#8b6a3d] font-semibold">Monu Sharma</strong>{" "}
            brings artistic vision and design aesthetics into the brand. With a
            strong sense of creativity and boutique-style detailing, he helps
            shape the visual identity, concepts, and overall presentation of our
            experiences and brand philosophy.
          </p>

          <p
            className="
              text-[#5f5f5f] mb-6 leading-relaxed text-[12px] sm:text-[13px] md:text-[14px] font-light text-justify
            "
          >
            <strong className="text-[#8b6a3d] font-semibold">Bharat</strong> plays
            an important role in operations and guest management. His calm nature,
            dedication, and attention to detail help ensure every journey runs
            smoothly and every traveler feels comfortable and cared for throughout
            their experience.
          </p>
        </div>

        {/* TEAM MEMBERS - REDESIGNED CARDS */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-8
            mt-16
          "
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="
                group
                bg-white
                border border-[#f0e4d4]
                rounded-xl
                px-6
                py-8
                text-center
                transition-all
                duration-300
                hover:border-[#e2cfb0]
                shadow-sm
              "
            >
              {/* IMAGE - Enhanced with a subtle ring */}
              <div
                className="
                  relative
                  w-36 h-36
                  sm:w-40 sm:h-40
                  mx-auto
                  rounded-full
                  overflow-hidden
                  ring-4 ring-white
                  shadow-md
                  transition-transform
                  duration-300
                "
              >
                <Image
                  src={member.image}
                  alt={member.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>

              {/* NAME */}
              <h3
                className="
                  mt-6
                  text-[14px]
                  sm:text-[16px]
                  font-semibold
                  text-[#8b6a3d]
                  tracking-tight
                "
              >
                {member.name}
              </h3>

              {/* ROLE - More elegant styling */}
              <p
                className="
                  mt-2
                  text-[11px]
                  sm:text-[12px]
                  uppercase
                  tracking-[0.01px]
                  text-[#b48c54]
                "
              >
                {member.role}
              </p>

              {/* DESCRIPTION - Slightly refined text */}
              <p
                className="
                mt-2
                  text-[11px]
                  sm:text-[12px]
                  leading-relaxed
                  text-[#5f5f5f]
                  font-light
                "
              >
                {member.description}
              </p>
            </div>
          ))}
        </div>

        {/* BOTTOM CONTENT */}
        <div className="max-w-5xl mx-auto mt-20 space-y-6">
          <p
            className="
              text-[#5f5f5f] mb-6 leading-relaxed text-[12px] sm:text-[13px] md:text-[14px] font-light text-justify
            "
          >
            Together, we spend time exploring different parts of India to
            discover unique boutique properties, hidden heritage stays,
            meaningful cultural experiences, and carefully selected luxury
            hotels that truly reflect the spirit of each destination.
          </p>

          <p
            className="
              text-[#5f5f5f] mb-6 leading-relaxed text-[12px] sm:text-[13px] md:text-[14px] font-light text-justify
            "
          >
            Our goal has never been simply to plan trips.
          </p>

          <p
            className="
              text-[#5f5f5f] mb-6 leading-relaxed text-[12px] sm:text-[13px] md:text-[14px] font-light text-justify
            "
          >
            We believe in creating journeys that feel thoughtfully designed,
            deeply personal, and connected to the real soul of India — where
            every traveler can experience a perfect balance of heritage,
            culture, boutique luxury, comfort, and human connection.
          </p>
        </div>
      </div>
    </section>
  );
}