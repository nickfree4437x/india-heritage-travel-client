"use client";

import Image from "next/image";

export default function TourDetails() {
  const cities = [
    {
      id: "mumbai",
      title: "Mumbai",
      desc: "Mumbai, often referred to as Bombay, is the heartbeat of India’s urban landscape. This bustling metropolis on the western coast is a captivating fusion of diverse cultures and pulsating energy. With its iconic landmarks like the Gateway of India, a rich cosmopolitan lifestyle, and an endless array of experiences, Mumbai is a city that never ceases to amaze, inviting you to explore its vibrant soul.",
      img: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779546553/mumbai_osonyi.jpg",
      alt: "Mumbai sightseeing destination during Ayurveda wellness tour in India featuring cultural landmarks and local experiences"
    },
    {
      id: "cochin",
      title: "Cochin",
      desc: "Cochin, often hailed as the Queen of the Arabian Sea, is a bustling commercial hub steeped in a rich trading legacy spanning over six centuries. Here, the echoes of Arabian, Dutch, Phoenician, Portuguese, Chinese, and British influences are woven into the city’s vibrant tapestry. As the financial, commercial, and industrial heart of Kerala, Cochin invites you to immerse yourself in its captivating blend of history and commerce.",
      img: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779546590/cochin_vnetvq.jpg",
      alt: "Cochin Kerala heritage destination with historic waterfront and cultural attractions during Ayurveda wellness tour"
    },
    {
      id: "alleppey",
      title: "Alleppey",
      desc: `In the coastal town of Alleppey, a world of unforgettable experiences unfolds. From idyllic houseboat stays to basking on pristine beaches, the options for creating lasting memories are abundant, especially for first-time visitors.
             Nestled amid lush greenery, where coconut trees gracefully bow over the serene waters, Alleppey’s backwaters offer a unique journey. These tranquil channels are navigated by a variety of traditional boats, most notably the iconic Kerala River boats, promising an enchanting exploration like no other.`,
      img: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779546783/alleppey_bfbu73.jpg",
      alt: "Alleppey Kerala backwaters with traditional houseboats and scenic waterways during wellness tour in India"
    },
    {
      id: "thekkedy",
      title: "Thekkedy",
      desc: "In Thekkady, prepare for a sensory feast that includes the majestic presence of elephants, fragrant spice plantations, and picturesque hills. The Periyar forest, a true national treasure, cradles within it the most vibrant array of flora and fauna found anywhere on Earth, including captivating migratory species that grace these lands. Your journey here promises an immersive encounter with the awe-inspiring wonders of nature.",
      img: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779546833/thekkady_sasmjp.jpg",
      alt: "Thekkady Kerala wildlife sanctuary and spice plantation experience during Ayurveda wellness tour"
    },
    {
      id: "munnar",
      title: "Munnar",
      desc: `Munnar, the cherished hill-station of Kerala, rests gracefully at an elevation of 1600 meters amidst the Western Ghats. Often referred to as the “Kashmir of South India”, it’s a place of sheer natural splendor.
            Perched along the banks of three pristine rivers – Madupetti, Nallathanni, and Periavaru, Munnar also boasts of natural bird sanctuaries and vast tea plantations. Prepare to be enchanted by the alpine wonders of this picturesque destination.`,
      img: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779546878/munnar_rwbq3q.jpg",
      alt: "Munnar tea plantations and scenic hill station landscapes in Kerala during Ayurveda wellness tour in India"
    },
  ];

  return (
    <div className="space-y-12">

      {/* SEO CONTENT BLOCK */}
      <div>
        <h2
          className="
            text-[16px] sm:text-[20px] md:text-[22px]
            tracking-wide
            text-[#2c2c2c]
            font-semibold
            mb-4
          "
        >
          Why Choose This Ayurveda Wellness Tour in India
        </h2>

        <div className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14px] font-[300] text-justify space-y-2">

          <p>
            Experience a transformative Ayurveda Wellness Tour in India designed
            to restore balance to your body, mind, and spirit. This carefully
            curated journey combines authentic Ayurvedic therapies,
            personalized wellness programs, yoga sessions, meditation
            practices, and rejuvenation experiences in some of Kerala’s most
            peaceful destinations.
          </p>

          <p>
            Under the guidance of experienced Ayurvedic practitioners, guests
            can enjoy traditional treatments, herbal therapies, wellness
            consultations, and holistic healing techniques tailored to
            individual needs.
          </p>

          <p>
            The wellness experience includes traditional Ayurvedic consultations, 
            personalized therapies, Panchakarma-inspired treatments, yoga, meditation, 
            and natural healing practices. Guided by experienced practitioners, guests 
            gain deeper insight into Ayurvedic principles, including balance of the doshas 
            (Vata, Pitta, and Kapha), helping create a holistic approach to long-term well-being 
            and rejuvenation.
          </p>

        </div>
      </div>

      {cities.map((city) => (
        <div
          key={city.id}
          id={city.id}
          className="w-full scroll-mt-24 md:scroll-mt-28"
        >

          {/* TITLE */}
          <h3 className="text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-4">
            {city.title}
          </h3>

          {/* DESCRIPTION */}
          <p className="text-gray-700 mb-6 leading-relaxed text-[12px] sm:text-[13px] font-[300] md:text-[14px] text-justify">
            {city.desc}
          </p>

          {/* IMAGE */}
          <div className="relative w-full rounded-md overflow-hidden shadow-md -mb-6 md:mb-0">
            <Image
              src={city.img}
              alt={city.alt}
              width={1200}
              height={800}
              className="w-full h-auto max-h-[500px] object-cover"
            />
          </div>

        </div>
      ))}
    </div>
  );
}