import Image from "next/image";

export default function MissionBanner() {
  return (
    <section className="relative flex min-h-[695px] items-center justify-center overflow-hidden bg-black px-6">
      <div className="absolute inset-0">
        <Image src="/images/photo-panel-officials.png" alt="" fill className="object-cover opacity-40" />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative flex flex-col items-center gap-10 text-center">
        <p className="text-base uppercase tracking-[3.2px] text-amber-accent">Built for Officials</p>
        <div className="flex max-w-[1000px] flex-col items-center gap-4">
          <h2 className="text-4xl font-bold text-white md:text-6xl">Every Call Counts</h2>
          <p className="max-w-[720px] text-xl leading-9 text-neutral-200 md:text-2xl">
            We built MatchPoint because every referee deserves to be seen, every call deserves to
            count, and every game deserves a professional standard.
          </p>
        </div>
      </div>
    </section>
  );
}
