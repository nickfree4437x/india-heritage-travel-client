"use client";

export default function WomensCircleSection() {
  return (
    <section className="w-full bg-[#efe7dc] py-24 md:py-32">

      <div className="max-w-5xl mx-auto px-6 md:px-10 text-center">

        {/* SECTION LABEL */}
        <p className="text-[11px] tracking-[0.35em] uppercase text-[#8b7355] mb-5">
          Let’s connect
        </p>

        {/* HEADING */}
        <h2
          className="
            text-[34px]
            md:text-[56px]

            font-[300]
            leading-[1.08]
            tracking-[-0.03em]

            text-[#1f1f1f]

            max-w-[850px]
            mx-auto

            mb-12
          "
        >
          You don’t have to plan it all alone either
        </h2>

        {/* INTRO TEXT */}
        <div
          className="
            max-w-3xl
            mx-auto

            space-y-7

            text-[14px]
            md:text-[15px]

            leading-[2]
            tracking-[0.01em]

            text-[#4d4d4d]
            font-[300]
          "
        >
          <p>
            I’ve started creating a small space for women who are thinking
            about traveling to India - whether it’s this year, someday later,
            or even just an idea sitting quietly in their mind right now.
          </p>

          <p>
            A space where women can ask questions, share thoughts, connect,
            and feel a little more prepared before taking the leap.
          </p>
        </div>

        {/* WHAT IT IS */}
        <div className="mt-16 max-w-2xl mx-auto">

          <h3 className="text-[18px] tracking-[0.18em] uppercase text-[#1f1f1f] mb-8">
            What It Is
          </h3>

          <div
            className="
              bg-white/70
              border border-[#ddd2c3]

              rounded-[28px]

              px-8 md:px-10
              py-10

              text-left
            "
          >

            <p className="text-[15px] leading-[2] text-[#4d4d4d] font-[300] mb-8">
              A private WhatsApp circle for women travelers interested in India.
            </p>

            <div className="space-y-4 text-[14px] md:text-[15px] text-[#4d4d4d] font-[300]">

              <p>• travel questions</p>

              <p>• ideas</p>

              <p>• updates</p>

              <p>• inspiration</p>

              <p>• future women group journeys later</p>

            </div>

          </div>

        </div>

        {/* CTA */}
        <div className="mt-14">

          <a
            href="YOUR_WHATSAPP_GROUP_LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center justify-center

              px-8 md:px-10
              py-4

              rounded-full

              bg-[#1f1f1f]
              text-white

              text-[12px]
              tracking-[0.15em]
              uppercase

              hover:bg-[#000]
              transition-all duration-300
            "
          >
            👉 Join the Women’s Circle
          </a>

          <p
            className="
              mt-5

              text-[13px]
              md:text-[14px]

              text-[#6b6b6b]
              font-[300]
            "
          >
            No pressure. No overwhelming travel chats.
            <br />
            Just a calm and helpful space.
          </p>

        </div>

        {/* FINAL TEXT */}
        <div
          className="
            mt-24

            max-w-3xl
            mx-auto

            space-y-6

            text-[15px]
            md:text-[16px]

            leading-[2]

            text-[#3d3d3d]
            font-[300]
          "
        >
          <p>
            Whenever you feel ready…
          </p>

          <p>
            I’d genuinely love to help you experience India in a way that
            feels right for you.
          </p>

          <p className="text-[#1f1f1f] text-[18px] md:text-[20px]">
            👉 Come travel with me
          </p>

        </div>

      </div>
    </section>
  );
}