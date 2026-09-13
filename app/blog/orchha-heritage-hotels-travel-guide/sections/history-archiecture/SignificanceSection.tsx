"use client";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-2 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Cultural and Spiritual Significance: The King Who Is a God
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
             There is something unique about Orchha which can be said about no other place in India. Here 
             Rama is revered not just as a god but also as a reigning king. This legend relates back to 
             the times of Queen Ganesh Kunwari who made a pilgrimage to Ayodhya to retrieve the idol of 
             Lord Rama and commission a temple – the Chaturbhuj – in his honor. On her return when the 
             temple was being constructed, she temporarily housed the idol in her palace – the Rani Mahal 
             not knowing that according to ancient custom the idol cannot be removed once it has been placed 
             in a temple.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            However when the construction of Chaturbhuj Temple was completed, the idol did not move from 
            the queen’s palace. Instead of trying to remove it, the Bundela royal family took it as divine 
            will and thus the palace became a temple known as the Ram Raja Temple where Rama is worshipped 
            to this day as a reigning monarch of Orchha – he is greeted daily in the evening with an armed 
            escort. And the Chaturbhuj Temple, built for Rama who didn’t come, ended up being used for 
            housing the four-armed idol of Lord Vishnu.
          </p>
        </div>
      </div>
    </section>
  );
}