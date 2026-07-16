import Image from "next/image";
import type { Metadata } from "next";
import Row from "@/app/components/layout/Row";

export const metadata: Metadata = {
  title: "Maintenance — MatchPoint",
  description:
    "MatchPoint is currently undergoing scheduled maintenance. We'll be back shortly.",
};

/**
 * Maintenance Page
 *
 * Displayed during scheduled downtime.
 * Full-bleed background image with dark overlay.
 * Centered layout with logo, heading, body text, and copyright.
 */
export default function MaintenancePage() {
  return (
    <section className="relative flex min-h-screen flex-col">
      {/* Background image */}
      <Image
        src="/images/maintenance_bg.png"
        alt=""
        fill
        className="object-cover"
        priority
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content layer */}
      <Row className="relative z-10 flex flex-1 flex-col items-center justify-center gap-[30px] px-6 py-20 text-center">
        {/* Logo */}
        <Image
          src="/images/matchpoint_logo.png"
          alt="MatchPoint"
          width={120}
          height={120}
          priority
        />

        {/* Text block */}
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-[48px] font-bold leading-none text-white md:text-[60px]">
            Under Maintenance
          </h1>
          <p className="max-w-[700px] text-xl leading-9 text-white md:text-2xl">
            Exciting things are on the horizon! Stay tuned for our upcoming
            website.
            <br />
            <span className="font-semibold">Launching soon!</span>
          </p>
        </div>
      </Row>

      {/* Copyright */}
      <div className="relative z-10 pb-8 text-center">
        <p className="text-sm text-white/60">
          Copyright 2026. MatchPoint. All Rights Reserved
        </p>
      </div>
    </section>
  );
}
