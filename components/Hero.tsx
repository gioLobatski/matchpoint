import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[800px] flex-col items-center justify-center overflow-hidden px-6 pt-[98px] lg:px-20">
      <div className="absolute inset-0">
        <Image src="/images/hero-bg.png" alt="" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <div className="relative flex flex-col items-center gap-10 text-center">
        <p className="text-base uppercase tracking-[3.2px] text-amber-accent">
          Built for Officials Who Make Every Game Count
        </p>
        <div className="flex max-w-[1000px] flex-col items-center gap-4">
          <h1 className="text-4xl font-bold text-white md:text-6xl">Every Call Counts</h1>
          <p className="max-w-[954px] text-xl leading-9 text-neutral-200 md:text-2xl">
            The platform built for Philippine basketball officials — get discovered, get booked,
            and get paid on time.
          </p>
        </div>
        <Link
          href="#apply"
          className="rounded-xl bg-primary-500 px-6 py-5 text-base text-black transition-colors hover:bg-amber-accent"
        >
          Start My MatchPoint Journey
        </Link>
      </div>
    </section>
  );
}
