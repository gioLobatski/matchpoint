import Image from "next/image";
import Link from "next/link";
import Section from "@/app/components/layout/Section";
import Row from "@/app/components/layout/Row";
import { FadeIn } from "@/app/components/ui/FadeIn";
import { TESTIMONIAL_STATS } from "@/app/lib/constants";

export default function OfficialsCTASection() {
  return (
    <Section className="relative overflow-hidden py-24">
      <div className="absolute inset-0">
        <Image
          src="/images/Officials CTA Section.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>
      <FadeIn direction="up">
        <Row className="relative flex flex-col items-center gap-12 text-center">
          <div className="flex max-w-[760px] flex-col gap-6">
            <p className="text-base font-semibold uppercase tracking-[2.24px] text-primary-500">
              For Certified Officials
            </p>
            <h2 className="text-4xl font-bold leading-[52px] text-white">
              Be Among the First Officials on MatchPoint
            </h2>
            <p className="text-2xl leading-9 text-neutral-200">
              We're launching soon. Join the waitlist and be first in line to
              get discovered, get booked, and get paid — on the platform built
              exclusively for Philippine basketball referees.
            </p>
          </div>

          <div className="flex items-start gap-12">
            {TESTIMONIAL_STATS.map((stat, i) => (
              <div key={stat.label} className="flex items-start gap-12">
                <div className="flex w-[180px] flex-col items-center gap-2 text-center">
                  <p className="text-4xl font-semibold leading-[56px] text-primary-500">
                    {stat.value}
                  </p>
                  <p className="text-sm leading-6 text-neutral-400">
                    {stat.label}
                  </p>
                </div>
                {i < TESTIMONIAL_STATS.length - 1 && (
                  <div className="h-[60px] w-px self-center bg-primary-500/40" />
                )}
              </div>
            ))}
          </div>

          <Link
            href="/#apply"
            className="flex h-[53px] w-[345px] items-center justify-center rounded-xl bg-primary-500 text-lg font-medium text-black shadow-[0px_8px_16px_rgba(226,160,55,0.3)] transition-colors hover:bg-amber-accent"
          >
            Join the Official Waitlist →
          </Link>
        </Row>
      </FadeIn>
    </Section>
  );
}
