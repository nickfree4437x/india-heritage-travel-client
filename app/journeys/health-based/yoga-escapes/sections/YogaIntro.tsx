export default function YogaIntro() {
  return (
    <section className="space-y-6">

      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-semibold text-[#9b7a50] text-center">
        Discover Peace Through Yoga Practice!
      </h2>

      {/* Paragraphs */}
      <p className="text-gray-700 leading-relaxed">
        Yoga is an ancient and intricate practice deeply rooted in Indian philosophy.
        It originally served as a spiritual discipline but has evolved into a popular
        approach for enhancing physical and mental well-being. It <b>combines physical postures</b>,
        breath control, meditation, and ethical principles to enhance flexibility,
        strength, and mental clarity. It is renowned for its stress-reduction benefits,
        promoting relaxation and mindfulness.
      </p>

      <p className="text-gray-700 leading-relaxed">
        Beyond the physical, yoga serves as a spiritual path, facilitating self-discovery
        and self-realization. Moreover, it acts as a cultural bridge between Eastern and
        Western traditions. The word “yoga” first appears in the Rig Veda, originating
        from the Sanskrit “yuj,” meaning “union” or “to join.” The roots of yoga trace
        back to ancient India, with a history spanning over 5,000 years.
      </p>

      <p className="text-gray-700 leading-relaxed">
        Yoga predominantly focuses on physical postures (asanas), breathing techniques
        (pranayama), and meditation (dhyana), even though classical yoga encompasses
        more components.
      </p>

      <p className="text-gray-700 leading-relaxed">
        Yoga comes in various forms, catering to diverse needs. Some of them are mentioned below:
      </p>

      {/* Yoga Types */}
      <div className="space-y-2 text-gray-800">
        <p><b>Hatha Yoga:</b> Basic postures and breathing exercises.</p>
        <p><b>Vinyasa Yoga:</b> Fluid, dynamic movements with breath.</p>
        <p><b>Bikram Yoga:</b> Intense yoga practiced in a heated room.</p>
        <p><b>Ashtanga Yoga:</b> Fast-paced, set sequence of postures.</p>
        <p><b>Iyengar Yoga:</b> Precise alignment with props for support.</p>
        <p><b>Kundalini Yoga:</b> Focuses on awakening inner energy.</p>
        <p><b>Yin Yoga:</b> Deep stretches held for longer periods.</p>
        <p><b>Restorative Yoga:</b> Gentle poses with props for relaxation.</p>
      </div>

    </section>
  );
}