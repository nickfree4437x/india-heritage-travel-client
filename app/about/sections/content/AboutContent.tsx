"use client";

import JourneySection from "../journey/JourneySection";
import WorkSection from "../work/WorkSection";
import TeamSection from "../team/TeamSection";

export default function AboutContent() {
  return (
    <div className="space-y-6 md:space-y-8">
      <div className="-mt-10 md:-mt-6">
        <JourneySection />
      </div>
      <WorkSection />
      <TeamSection />
    </div>
  );
}