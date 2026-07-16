"use client";

import Image from "next/image";
import Link from "next/link";
import Section from "@/app/components/layout/Section";
import { FadeIn } from "@/app/components/ui/FadeIn";
import ParticleCanvas from "@/app/components/sections/homepage/ParticleCanvas";

interface HeroSectionProps {
  tagline?: string;
  headline?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  bgImage?: string;
}

const DEFAULTS = {
  tagline: "Built for Officials Who Make Every Game Count",
  headline: "Every Call Counts",
  description:
    "The platform built for Philippine basketball officials — get discovered, get booked, and get paid on time.",
  ctaText: "Start My MatchPoint Journey",
  ctaHref: "#apply",
  bgImage: "/images/hero-bg.png",
};

export default function HeroSection({
  tagline = DEFAULTS.tagline,
  headline = DEFAULTS.headline,
  description = DEFAULTS.description,
  ctaText = DEFAULTS.ctaText,
  ctaHref = DEFAULTS.ctaHref,
  bgImage = DEFAULTS.bgImage,
}: HeroSectionProps) {
  return (
    <div className="relative" style={{ minHeight: "calc(800px + 250px)" }}>
      <Section
        id="home"
        className="sticky top-0 z-10 flex min-h-[800px] flex-col items-center justify-center overflow-hidden px-6 pt-[98px]"
      >
      <div className="absolute inset-0">
        <Image
          src={bgImage}
          alt=""
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        {/* Bottom gradient — blends hero into black spacer */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black to-transparent" />
        {/* Floating amber bubble lights */}
        <ParticleCanvas />
      </div>
      <FadeIn direction="up" duration={800} className="relative flex flex-col items-center gap-10 text-center">
        <p className="text-base uppercase tracking-[3.2px] text-amber-accent">
          {tagline}
        </p>
        <div className="flex max-w-[1000px] flex-col items-center gap-4">
          <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
            {headline}
          </h1>
          <p className="max-w-[954px] text-xl leading-9 text-white/80 md:text-2xl">
            {description}
          </p>
        </div>
        <Link
          href={ctaHref}
          className="rounded-xl bg-primary-500 px-6 py-5 text-base font-bold text-white transition-colors hover:bg-amber-accent"
        >
          {ctaText}
        </Link>
      </FadeIn>
      </Section>
      <div className="h-[150px] w-full bg-black" />
      <div className="h-[100px] w-full bg-gradient-to-b from-black to-[#100c08]" />
    </div>
  );
}
