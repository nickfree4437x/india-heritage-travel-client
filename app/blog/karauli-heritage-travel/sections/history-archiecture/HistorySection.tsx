"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-4 md:py-2.5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            A Short History: The Hidden Kingdom of the Jadauns
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Royal family of Karauli comes from the Yaduvanshi Jadaun Rajputs whose ancestry goes back to 
            Krishna and the Yadavas. There have been differences on the early dates of the origins of the 
            family. According to one version, the kingdom was founded by Raja Bijai Pal somewhere around 
            the 10th century in the place then called Kalyanpuri. Another source says the walled city and 
            the palace were built by Arjun Pal sometime around the 14th century.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            The area came under the Mughal Empire in the period of Akbar, was then conquered by the Marathas 
            and was brought under the protection of the British Empire in 1817. In its zenith, the area 
            stretched across the current district as well as the adjoining parts of Alwar, Bharatpur, Dholpur 
            and Gwalior areas. The rulers of the area had used the surname "Pal" instead of "Singh". The 
            eighteenth century can be termed the period of Raja Gopal Singh, who constructed the major portions 
            of the present day palace as well as the temple of Madan Mohan and Kaila Devi. The nineteenth century 
            saw a succession of the throne through adoption and the adoption of Raja Madan Pal in 1857 earned him 
            extra gun salute due to his allegiance to the British.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            Following independence, it became part of Rajasthan, while the palace was presented as a gift 
            to the Madan Mohan Temple Trust in the 1950s and was renovated. This ensures that it remains 
            a part of active worship rather than becoming a stagnant museum.
          </p>
        </div>

        {/* Image */}
        <div className="mb-0">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1791872264/images_1_wbslss.jpg"
              alt="Karauli ideal for heritage temple and offbeat travellers"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via encrypted-tbn0
          </p>
        </div>
      </div>
    </section>
  );
}