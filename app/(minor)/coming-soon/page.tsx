import Image from "next/image";
import type { Metadata } from "next";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import Section from "@/app/components/layout/Section";
import Row from "@/app/components/layout/Row";

export const metadata: Metadata = {
  title: "Coming Soon — MatchPoint",
  description:
    "MatchPoint is launching soon. Stay tuned for the platform built for Philippine basketball officials.",
};

/**
 * Coming Soon Page
 *
 * Teaser page for upcoming launch.
 * Includes Header and Footer.
 */
export default function ComingSoonPage() {
  return (
    <>
      <Section
        bgColor="bg-black"
        className="relative flex min-h-[700px] flex-col"
      >
        <Header />
        <Row className="flex flex-1 flex-col items-center justify-center gap-6 text-center">
          <Image
            src="/images/matchpoint_logo.png"
            alt="MatchPoint Logo"
            width={120}
            height={120}
            className="mb-2"
            priority
          />
          <h1 className="text-3xl font-bold leading-tight text-primary-500 md:text-4xl">
            Coming Soon
          </h1>
          <p className="max-w-[480px] text-base leading-6 text-white/80">
            We&apos;re building something special for Philippine basketball
            officials. Stay tuned — MatchPoint is almost ready to tip off.
          </p>
          <a
            href="https://www.matchpoint-official.xyz/"
            className="mt-4 rounded-xl bg-primary-500 px-8 py-4 text-base font-semibold text-black transition-colors hover:bg-amber-accent"
          >
            Return to Homepage
          </a>
        </Row>
      </Section>
      <Footer />
    </>
  );
}
