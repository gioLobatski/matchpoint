import Image from "next/image";
import Link from "next/link";
import Section from "@/app/components/layout/Section";
import Row from "@/app/components/layout/Row";
import { FadeIn } from "@/app/components/ui/FadeIn";

export default function OrganizerCTASection() {
  return (
    <Section className="relative overflow-hidden py-30">
      <div className="absolute inset-0">
        <Image
          src="/images/Organizer CTA Section.png"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 to-black/55" />
      </div>
      <FadeIn direction="up">
        <Row className="relative flex flex-col items-center gap-12 text-center">
          <div className="flex max-w-[800px] flex-col gap-6">
            <h2 className="text-4xl font-bold leading-[52px] text-white">
              Be the First to Launch Your Tournament on MatchPoint
            </h2>
            <p className="text-2xl leading-9 text-neutral-200">
              We're launching soon. Join the waitlist and get early access to
              book certified officials, manage your roster, and run your league
              — all in one place.
            </p>
          </div>
          <Link
            href="/organizers#apply"
            className="flex h-[53px] w-[345px] items-center justify-center rounded-xl bg-primary-500 text-lg font-medium text-black transition-colors hover:bg-amber-accent"
          >
            Join the Organizer Waitlist →
          </Link>
        </Row>
      </FadeIn>
    </Section>
  );
}
