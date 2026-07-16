"use client";

import Image from "next/image";
import Section from "@/app/components/layout/Section";
import { FadeIn } from "@/app/components/ui/FadeIn";

interface MissionBannerSectionProps {
  tagline?: string;
  headline?: string;
  description?: string;
  bgImage?: string;
  bgVideo?: string;
}

const DEFAULTS = {
  tagline: "Built for Officials",
  headline: "Every Call Counts",
  description:
    "We built MatchPoint because every referee deserves to be seen, every call deserves to count, and every game deserves a professional standard.",
  bgImage: "/images/photo-panel-officials.png",
};

export default function MissionBannerSection({
  tagline = DEFAULTS.tagline,
  headline = DEFAULTS.headline,
  description = DEFAULTS.description,
  bgImage = DEFAULTS.bgImage,
  bgVideo,
}: MissionBannerSectionProps) {
  return (
    <Section
      className="relative flex min-h-[695px] items-center justify-center overflow-hidden bg-black px-6"
    >
      <div className="absolute inset-0">
        {bgVideo ? (
          <>
            <video
              src={bgVideo}
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover"
            />
            {/* Semi-transparent overlay to keep text readable over video */}
            <div className="absolute inset-0 bg-black/50" />
          </>
        ) : (
          <>
            <Image
              src={bgImage}
              alt=""
              fill
              className="object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-black/30" />
          </>
        )}
      </div>
      <FadeIn direction="up" duration={800} className="relative flex flex-col items-center gap-10 text-center">
        <p className="text-base uppercase tracking-[3.2px] text-amber-accent">
          {tagline}
        </p>
        <div className="flex max-w-[1000px] flex-col items-center gap-4">
          <h2 className="text-4xl font-bold leading-tight text-white md:text-6xl">
            {headline}
          </h2>
          <p className="max-w-[720px] text-xl leading-9 text-white/80 md:text-2xl">
            {description}
          </p>
        </div>
      </FadeIn>
    </Section>
  );
}
