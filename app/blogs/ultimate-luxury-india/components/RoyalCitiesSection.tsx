"use client";

import Image from "next/image";

export default function RoyalCitiesSection() {
  return (
    <section className="w-full bg-[#f7f4ef] py-8 sm:py-12 lg:py-14">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* DAY 5-6 */}
        <div>

          <h2 className="text-[34px] sm:text-[44px] leading-tight font-semibold text-[#111]">
            Day 5-6: Jaipur – The Royal City of Palaces
          </h2>

          {/* CONTENT */}
          <div className="mt-12 space-y-7 max-w-5xl">

            <p className="text-[19px] sm:text-[20px] leading-[2] text-[#555] font-light">
              <span className="font-medium text-[#111]">Jaipur</span>,
              known as the “pink city” – Capital city of Rajasthan
              State, Part of Golden triangle (Delhi, Jaipur & Agra
              Taj Mahal).
            </p>

            <p className="text-[19px] sm:text-[20px] leading-[2] text-[#555] font-light">
              Begin with a unique elephant safari at Dera Amer,
              followed by a luxurious picnic in the scenic Aravalli
              Hills.
            </p>

            <p className="text-[19px] sm:text-[20px] leading-[2] text-[#555] font-light">
              But to stop animal cruelty I would love of you exclude
              it.
            </p>

          </div>

          {/* IMAGE */}
          <div className="mt-12">

            <div className="relative w-full h-[350px] sm:h-[450px] lg:h-[550px] rounded-[24px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
              <Image
                src="/blogs/blog-10/jaipur.jpg"
                alt="Jaipur"
                fill
                className="object-cover"
              />
            </div>

            <p className="mt-4 text-[15px] text-[#8a8a8a]">
              via unsplash
            </p>

          </div>

          {/* EXTRA CONTENT */}
          <div className="mt-10 space-y-7 max-w-6xl">

            <p className="text-[19px] sm:text-[20px] leading-[2] text-[#555] font-light">
              Main attraction for tourism is Royal buildings as City
              Palace where a private guide gives you access to the
              exclusive chambers of the Maharaja.
            </p>

            <p className="text-[19px] sm:text-[20px] leading-[2] text-[#555] font-light">
              Amer Fort, riding up in a vintage jeep and taking in its
              grand architecture.
            </p>

            <p className="text-[19px] sm:text-[20px] leading-[2] text-[#555] font-light">
              Hawa Mahal (Wind Palace), Jantar Mantar the 17th century
              astronomical observatory.
            </p>

            <p className="text-[19px] sm:text-[20px] leading-[2] text-[#555] font-light">
              Walking in the old walled city & Bazars is another big
              attraction for any tourist coming to Jaipur first time.
            </p>

            <p className="text-[19px] sm:text-[20px] leading-[2] text-[#555] font-light">
              Spend the evening shopping at Johri Bazaar and Bapu
              Bazaar, famous for handcrafted jewellery, textiles, and
              blue pottery.
            </p>

            <p className="text-[19px] sm:text-[20px] leading-[2] text-[#555] font-light">
              Then, enjoy high tea at Nahargarh Fort, with a beautiful
              view of the city lights. End your night with a royal
              dinner at Bar Palladio, a stylish palace restaurant.
            </p>

          </div>

        </div>

        {/* DAY 7-8 */}
        <div className="mt-28">

          <h2 className="text-[34px] sm:text-[44px] leading-tight font-semibold text-[#111]">
            Day 7-8: Udaipur – The City of Lakes
          </h2>

          {/* CONTENT */}
          <div className="mt-12 space-y-7 max-w-5xl">

            <p className="text-[19px] sm:text-[20px] leading-[2] text-[#555] font-light">
              You have possibility to visit Ranakpur Jain Temples on
              the way and visit Kumbhalgarh Fort is one of the most
              impressive fort ever you seen.
            </p>

            <p className="text-[19px] sm:text-[20px] leading-[2] text-[#555] font-light">
              Once you arrive to Udaipur you can have a walk in the
              old town or can visit some places of your choice
              according the daylight you have.
            </p>

            <p className="text-[19px] sm:text-[20px] leading-[2] text-[#555] font-light">
              <span className="font-medium text-[#111]">Udaipur</span>
              {" "}is one of the most romantic towns in Rajasthan.
            </p>

          </div>

          {/* IMAGE */}
          <div className="mt-12">

            <div className="relative w-full h-[350px] sm:h-[450px] lg:h-[550px] rounded-[24px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
              <Image
                src="/blogs/blog-10/udaipur.jpg"
                alt="Udaipur"
                fill
                className="object-cover"
              />
            </div>

            <p className="mt-4 text-[15px] text-[#8a8a8a]">
              via unsplash
            </p>

          </div>

          {/* EXTRA CONTENT */}
          <div className="mt-10 space-y-7 max-w-6xl">

            <p className="text-[19px] sm:text-[20px] leading-[2] text-[#555] font-light">
              This town is crammed full of palaces, havelis and
              temples.
            </p>

            <p className="text-[19px] sm:text-[20px] leading-[2] text-[#555] font-light">
              During your stay enjoy a cruise on Lake Pichola, plus
              touring of the imposing City Palace and museums and
              perhaps shop for colorful Rajasthani souvenirs and Indian
              spices.
            </p>

            <p className="text-[19px] sm:text-[20px] leading-[2] text-[#555] font-light">
              Some other places to visit in Udaipur is Jagdish Temple,
              Shilp Gram & Princes garden (Saheliyon ki Badi).
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}