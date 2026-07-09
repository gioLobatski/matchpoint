import Image from "next/image";

const stats = [
  { value: "500+", label: "Active Referees" },
  { value: "12,000+", label: "Games Officiated" },
  { value: "85", label: "Partner Leagues" },
];

export default function SocialProof() {
  return (
    <section className="relative overflow-hidden px-6 py-20">
      <div className="absolute inset-0">
        <Image src="/images/stadium-bg.png" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/85" />
      </div>
      <div className="relative flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-[52px] text-white md:text-4xl">
            Join 500+ Officials Already on MatchPoint
          </h2>
          <p className="max-w-[710px] text-xl leading-9 text-neutral-200 md:text-2xl">
            Referees across the Philippines are growing their careers, booking more games, and
            getting paid on time — all through MatchPoint.
          </p>
        </div>
        <figure className="relative flex max-w-[695px] flex-col gap-10 rounded-[32px] border border-primary-500 bg-gradient-to-b from-black to-primary-900 p-12">
          <Image
            src="/icons/quote.svg"
            alt=""
            width={51}
            height={42}
            className="absolute left-5 top-5 opacity-60"
          />
          <blockquote className="max-w-[599px] text-base leading-6 text-white">
            MatchPoint changed how I approach officiating. I went from 2 games a month to being
            fully booked every weekend. The payment tracking alone saved me hours of chasing
            organizers.
          </blockquote>
          <figcaption className="flex items-center gap-2">
            <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-white">
              <Image src="/images/avatar-rodel.png" alt="Rodel Santos" fill className="object-cover" />
            </span>
            <span className="text-base leading-6 text-white">
              Rodel Santos
              <br />
              PBA-Certified Referee, Metro Manila
            </span>
          </figcaption>
        </figure>
        <div className="flex flex-wrap items-center justify-center gap-10">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex h-[100px] w-[204px] flex-col items-center justify-center rounded-lg border border-primary-700 bg-panel"
            >
              <p className="text-4xl font-semibold leading-[46px] text-primary-500">{stat.value}</p>
              <p className="text-sm leading-6 text-primary-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
